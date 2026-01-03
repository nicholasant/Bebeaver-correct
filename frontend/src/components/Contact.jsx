import React, { useState } from 'react';
import { Mail, Phone, Globe, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = ({ contactInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    inquiry: 'sponsorship'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast.success("Message Sent!", {
          description: response.data.message,
        });
        setFormData({ name: '', email: '', company: '', message: '', inquiry: 'sponsorship' });
      }
    } catch (error) {
      toast.error("Error", {
        description: "Failed to send message. Please try again.",
      });
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400">
            Follow our journey or inquire about sponsorship opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Reach out to us for partnership opportunities, press inquiries, or to simply follow along on our incredible journey across continents.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-stone-800 border-stone-700 hover:border-amber-600 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-700/30 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-white font-semibold">{contactInfo.phone}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-stone-800 border-stone-700 hover:border-amber-600 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-700/30 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-white font-semibold">{contactInfo.email}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-stone-800 border-stone-700 hover:border-amber-600 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-700/30 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Website</p>
                    <p className="text-white font-semibold">{contactInfo.website}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Expedition Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2962080/pexels-photo-2962080.jpeg"
                alt="Expedition team"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-stone-800 border-stone-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-stone-900 border-stone-700 text-white focus:border-amber-600"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-stone-900 border-stone-700 text-white focus:border-amber-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company / Organization
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-stone-900 border-stone-700 text-white focus:border-amber-600"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Inquiry Type *
                </label>
                <select
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-stone-900 border border-stone-700 text-white focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  required
                >
                  <option value="sponsorship">Sponsorship Opportunity</option>
                  <option value="press">Press Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-stone-900 border-stone-700 text-white focus:border-amber-600"
                  placeholder="Tell us about your interest..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;