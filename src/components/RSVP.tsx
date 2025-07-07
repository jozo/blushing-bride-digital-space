
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: '',
    dietaryRestrictions: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "RSVP Received!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
    });
    setFormData({
      name: '',
      email: '',
      guests: '1',
      attendance: '',
      dietaryRestrictions: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-white" id="rsvp">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-cream-800 mb-4">RSVP</h2>
          <div className="h-px w-24 bg-cream-400 mx-auto mb-6"></div>
          <p className="text-cream-700">Please respond by May 1st, 2024</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-cream-50 to-cream-100 p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-cream-800 font-medium">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-cream-800 font-medium">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-cream-800 font-medium">Will you attend? *</Label>
              <Select value={formData.attendance} onValueChange={(value) => handleChange('attendance', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select response" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Joyfully accept</SelectItem>
                  <SelectItem value="no">Regretfully decline</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="text-cream-800 font-medium">Number of Guests</Label>
              <Select value={formData.guests} onValueChange={(value) => handleChange('guests', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="dietary" className="text-cream-800 font-medium">Dietary Restrictions</Label>
            <Input
              id="dietary"
              value={formData.dietaryRestrictions}
              onChange={(e) => handleChange('dietaryRestrictions', e.target.value)}
              placeholder="Any allergies or dietary needs?"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="message" className="text-cream-800 font-medium">Message for the Couple</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Share your excitement or well wishes!"
              className="mt-1 min-h-20"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-cream-500 hover:bg-cream-600 text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Send RSVP
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
