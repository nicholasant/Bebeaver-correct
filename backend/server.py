from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List
from datetime import datetime
from models import (
    CurrentLocation, RoutePoint, ContactSubmission, 
    ContactSubmissionCreate, Sponsor, LocationUpdate
)
import seed_data


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "West to East Expedition API"}

# ========== Location Endpoints ==========
@api_router.get("/location/current")
async def get_current_location():
    """Get current expedition location"""
    location = await db.current_location.find_one()
    if not location:
        # Return default if not found
        return seed_data.current_location
    location.pop('_id', None)
    return location

@api_router.put("/location/current")
async def update_current_location(location: LocationUpdate):
    """Update current expedition location"""
    location_dict = location.dict()
    location_dict['lastUpdate'] = datetime.utcnow()
    
    # Upsert the location
    await db.current_location.delete_many({})
    await db.current_location.insert_one(location_dict)
    
    return {"message": "Location updated successfully", "location": location_dict}

# ========== Route Points Endpoints ==========
@api_router.get("/route/points", response_model=List[RoutePoint])
async def get_route_points():
    """Get all route points"""
    points = await db.route_points.find().sort("order", 1).to_list(1000)
    if not points:
        # Return seed data if empty
        return seed_data.route_points
    for point in points:
        point.pop('_id', None)
    return points

# ========== Contact Form Endpoint ==========
@api_router.post("/contact")
async def submit_contact_form(submission: ContactSubmissionCreate):
    """Submit contact/sponsorship inquiry"""
    contact_dict = submission.dict()
    contact_obj = ContactSubmission(**contact_dict)
    
    await db.contact_submissions.insert_one(contact_obj.dict())
    
    return {
        "success": True,
        "message": "Thank you for your inquiry! We'll get back to you soon.",
        "submissionId": contact_obj.id
    }

# ========== Sponsors Endpoint ==========
@api_router.get("/sponsors", response_model=List[Sponsor])
async def get_sponsors():
    """Get all active sponsors"""
    sponsors = await db.sponsors.find({"active": True}).to_list(1000)
    if not sponsors:
        # Return seed data if empty
        return seed_data.sponsors
    for sponsor in sponsors:
        sponsor.pop('_id', None)
    return sponsors

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()