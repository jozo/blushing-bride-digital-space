
import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Plus } from 'lucide-react';
import * as Sentry from "@sentry/react";
import RSVPContactInfo from './RSVPContactInfo';
import RSVPPersonDetail from './RSVPPersonDetail';
import RSVPAccommodation from './RSVPAccommodation';
import { submitToNextcloud } from '@/utils/rsvpUtils';

interface PersonDetail {
  name: string;
  type: 'adult' | 'child';
  chair: 'adult' | 'high' | 'none';
  dietaryRestrictions: string;
}

interface FormData {
  contactName: string;
  contactEmail: string;
  attendance: 'yes' | 'no';
  persons: PersonDetail[];
  accommodation: 'yes' | 'no';
  accommodationType: string;
  accommodationDays: {
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
  };
  weddingTaxi: boolean;
  message: string;
}

const RSVP = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);

  const { register, control, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      contactName: '',
      contactEmail: '',
      attendance: undefined,
      persons: [{ name: '', type: 'adult', chair: 'adult', dietaryRestrictions: '' }],
      accommodation: undefined,
      accommodationType: '',
      accommodationDays: {
        thursday: false,
        friday: false,
        saturday: false,
      },
      weddingTaxi: false,
      message: ''
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'persons'
  });

  const watchAttendance = watch('attendance');
  const watchAccommodation = watch('accommodation');

  const addPerson = () => {
    append({ name: '', type: 'adult', chair: 'adult', dietaryRestrictions: '' });
  };

  const removePerson = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitting(true);
      
      // Log form data to console
      console.log('RSVP Form Data:', JSON.stringify(data, null, 2));
      
      // Submit to Nextcloud
      await submitToNextcloud(data);
      
      toast({
        title: "RSVP Received!",
        description: "Thank you for your response. We can't wait to celebrate with you!",
      });
      
      reset();
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      Sentry.captureException(error);
      toast({
        title: "Error",
        description: "There was a problem submitting your RSVP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white" id="rsvp">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-cream-800 mb-4">{t('rsvp.title')}</h2>
          <div className="h-px w-24 bg-cream-400 mx-auto mb-6"></div>
          <p className="text-cream-700">{t('rsvp.deadline')}</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-gradient-to-br from-cream-50 to-cream-100 p-8 rounded-lg shadow-lg">
          <RSVPContactInfo 
            register={register}
            errors={errors}
            onAttendanceChange={(value) => setValue('attendance', value as 'yes' | 'no')}
          />

          {watchAttendance === 'yes' && (
            <>
              {/* Person Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-cream-800 font-medium text-lg">Guest Details</Label>
                  <Button
                    type="button"
                    onClick={addPerson}
                    className="bg-cream-500 hover:bg-cream-600 text-white"
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Person
                  </Button>
                </div>

                {fields.map((field, index) => (
                  <RSVPPersonDetail
                    key={field.id}
                    index={index}
                    register={register}
                    control={control}
                    onRemove={() => removePerson(index)}
                    canRemove={fields.length > 1}
                    onTypeChange={(value) => setValue(`persons.${index}.type`, value as 'adult' | 'child')}
                    onChairChange={(value) => setValue(`persons.${index}.chair`, value as 'adult' | 'high' | 'none')}
                  />
                ))}
              </div>

              {/* Accommodation */}
              <RSVPAccommodation
                register={register}
                control={control}
                showAccommodationDetails={watchAccommodation === 'yes'}
                onAccommodationChange={(value) => setValue('accommodation', value as 'yes' | 'no')}
                onAccommodationTypeChange={(value) => setValue('accommodationType', value)}
                onDayToggle={(day, checked) => setValue(`accommodationDays.${day as keyof FormData['accommodationDays']}`, checked)}
              />

              {/* Wedding Taxi */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="weddingTaxi"
                  onCheckedChange={(checked) => setValue('weddingTaxi', !!checked)}
                />
                <Label htmlFor="weddingTaxi" className="text-cream-800 font-medium">I want to use the wedding taxi</Label>
              </div>
            </>
          )}

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-cream-800 font-medium">{t('rsvp.message')}</Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder={t('rsvp.message.placeholder')}
              className="mt-1 min-h-20"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={submitting}
            className="w-full bg-cream-500 hover:bg-cream-600 text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50"
          >
            {submitting ? 'Submitting...' : t('rsvp.submit')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
