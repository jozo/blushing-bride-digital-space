
import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

interface FormData {
  contactName: string;
  contactEmail: string;
  attendance: 'yes' | 'no';
}

interface RSVPContactInfoProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  onAttendanceChange: (value: string) => void;
}

const RSVPContactInfo = ({ register, errors, onAttendanceChange }: RSVPContactInfoProps) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="contactName" className="text-cream-800 font-medium">{t('rsvp.name')} *</Label>
          <Input
            id="contactName"
            {...register('contactName', { required: 'Name is required' })}
            className="mt-1"
          />
          {errors.contactName && <p className="text-red-500 text-sm mt-1">{errors.contactName.message}</p>}
        </div>
        
        <div>
          <Label htmlFor="contactEmail" className="text-cream-800 font-medium">{t('rsvp.email')} *</Label>
          <Input
            id="contactEmail"
            type="email"
            {...register('contactEmail', { required: 'Email is required' })}
            className="mt-1"
          />
          {errors.contactEmail && <p className="text-red-500 text-sm mt-1">{errors.contactEmail.message}</p>}
        </div>
      </div>

      {/* Attendance */}
      <div>
        <Label className="text-cream-800 font-medium">{t('rsvp.attendance')} *</Label>
        <Select onValueChange={onAttendanceChange}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select response" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">{t('rsvp.attendance.yes')}</SelectItem>
            <SelectItem value="no">{t('rsvp.attendance.no')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default RSVPContactInfo;
