from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class CurrentLocation(BaseModel):
    lat: float
    lng: float
    status: str
    lastUpdate: datetime = Field(default_factory=datetime.utcnow)
    address: str

class RoutePoint(BaseModel):
    id: int
    location: str
    title: str
    description: str
    date: str
    lat: float
    lng: float
    image: str
    order: int

class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    inquiry: str
    message: str
    submittedAt: datetime = Field(default_factory=datetime.utcnow)
    status: str = "pending"

class ContactSubmissionCreate(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    inquiry: str
    message: str

class Sponsor(BaseModel):
    id: int
    name: str
    logo: str
    tier: str
    active: bool = True

class LocationUpdate(BaseModel):
    lat: float
    lng: float
    status: str
    address: str