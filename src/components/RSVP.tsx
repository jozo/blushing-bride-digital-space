
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const RSVP = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
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
          <h2 className="text-4xl md:text-5xl font-serif text-cream-800 mb-4">{t('rsvp.title')}</h2>
          <div className="h-px w-24 bg-cream-400 mx-auto mb-6"></div>
          <p className="text-cream-700">{t('rsvp.deadline')}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-cream-50 to-cream-100 p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-cream-800 font-medium">{t('rsvp.name')} *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-cream-800 font-medium">{t('rsvp.email')} *</Label>
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
              <Label className="text-cream-800 font-medium">{t('rsvp.attendance')} *</Label>
              <Select value={formData.attendance} onValueChange={(value) => handleChange('attendance', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select response" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">{t('rsvp.attendance.yes')}</SelectItem>
                  <SelectItem value="no">{t('rsvp.attendance.no')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="text-cream-800 font-medium">{t('rsvp.guests')}</Label>
              <Select value={formData.guests} onValueChange={(value) => handleChange('guests', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">{t('rsvp.guests.1')}</SelectItem>
                  <SelectItem value="2">{t('rsvp.guests.2')}</SelectItem>
                  <SelectItem value="3">{t('rsvp.guests.3')}</SelectItem>
                  <SelectItem value="4">{t('rsvp.guests.4')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="dietary" className="text-cream-800 font-medium">{t('rsvp.dietary')}</Label>
            <Input
              id="dietary"
              value={formData.dietaryRestrictions}
              onChange={(e) => handleChange('dietaryRestrictions', e.target.value)}
              placeholder={t('rsvp.dietary.placeholder')}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="message" className="text-cream-800 font-medium">{t('rsvp.message')}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder={t('rsvp.message.placeholder')}
              className="mt-1 min-h-20"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-cream-500 hover:bg-cream-600 text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            {t('rsvp.submit')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
