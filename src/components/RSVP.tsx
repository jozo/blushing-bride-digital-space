import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Plus, Trash2 } from 'lucide-react';
import {undefined} from "zod";

interface PersonDetail {
  name: string;
  attendance: 'yes' | 'no';
  chair: 'adult' | 'high' | 'none';
  dietaryRestrictions: string;
}

interface FormData {
  persons: PersonDetail[];
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
      persons: [{ name: '', attendance: undefined, chair: 'adult', dietaryRestrictions: '' }],
      accommodationType: 'no',
      accommodationDays: {
        thursday: false,
        friday: false,
        saturday: false,
      },
      weddingTaxi: false,
      message: ''
    }
  });

  const watchPersons = watch('persons');
  const watchAccommodationType = watch('accommodationType');

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'persons'
  });

  const addPerson = () => {
    append({ name: '', attendance: undefined, chair: 'adult', dietaryRestrictions: '' });
  };

  const removePerson = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const submitToNextcloud = async (formData: FormData) => {
    try {
      // Replace with your actual Nextcloud Forms API endpoint
      const NEXTCLOUD_API_URL = 'https://cloud.jozo.io/ocs/v2.php/apps/forms/api/v3/forms/2/submissions';
      const SHARE_HASH = 'dPzsKykYzQrMTJJrFLWWwTmT';

      for (const person of formData.persons) {
        // Convert form data to Nextcloud Forms format
        const submissionData = {
          answers: {
            // Map your form fields to Nextcloud form question IDs
            "5": [person.name],
            "17": [person.attendance],
            "18": [person.chair],
            "9": [person.dietaryRestrictions],
            "11": [formData.accommodationType],
            "12": convertAccommodationDays(formData.accommodationDays),
            "15": [formData.weddingTaxi ? 'yes' : 'no'],
            "16": [formData.message]
          },
          shareHash: SHARE_HASH
        };

        const response = await fetch(NEXTCLOUD_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(submissionData)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Nextcloud submission result:', result);

      }
    } catch (error) {
      // Sentry.captureException(error);
      throw error;
    }
  };

  const convertAccommodationDays = (days: { thursday: boolean; friday: boolean; saturday: boolean }) => {
    const selectedDays = [];
    if (days.thursday) selectedDays.push('8');
    if (days.friday) selectedDays.push('9');
    if (days.saturday) selectedDays.push('10');
    return selectedDays
  }

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitting(true);

      // Log form data to console
      console.log('RSVP Form Data:', JSON.stringify(data, null, 2));

      // Submit to Nextcloud
      await submitToNextcloud(data);

      toast({
        title: t('rsvp.success.title'),
        description: t('rsvp.success.message'),
      });

      reset();
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      // Sentry.captureException(error);
      toast({
        title: t('rsvp.error.title'),
        description: t('rsvp.error.message'),
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
          {/* Person Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-cream-800 font-medium text-lg">{t('rsvp.guest.details')}</Label>
              <Button
                type="button"
                onClick={addPerson}
                className="bg-cream-500 hover:bg-cream-600 text-white"
                size="sm"
              >
                <Plus className="w-4 h-4 mr-1" />
                {t('rsvp.add.person')}
              </Button>
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="p-4 border border-cream-200 rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-cream-800">{t('rsvp.person')} {index + 1}</h4>
                  {fields.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removePerson(index)}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-cream-700">{t('rsvp.person.name')} *</Label>
                    <Input
                      {...register(`persons.${index}.name`, { required: t('rsvp.name.required') })}
                      className="mt-1"
                      placeholder={t('rsvp.person.name.placeholder')}
                    />
                  </div>

                  <div>
                    <Label className="text-cream-700">{t('rsvp.attendance')} *</Label>
                    <Select onValueChange={(value) => setValue(`persons.${index}.attendance`, value as 'yes' | 'no')}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder={t('rsvp.select.response')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">{t('rsvp.attendance.yes')}</SelectItem>
                        <SelectItem value="no">{t('rsvp.attendance.no')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                { watchPersons[index].attendance === 'yes' && (
                  <>
                    <div>
                      <Label className="text-cream-700">{t('rsvp.person.chair')}</Label>
                      <Select onValueChange={(value) => setValue(`persons.${index}.chair`, value as 'adult' | 'high' | 'none')}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder={t('rsvp.select.chair')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adult">{t('rsvp.person.chair.adult')}</SelectItem>
                          <SelectItem value="high">{t('rsvp.person.chair.high')}</SelectItem>
                          <SelectItem value="none">{t('rsvp.person.chair.none')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-cream-700">{t('rsvp.person.dietary')}</Label>
                      <Input
                        {...register(`persons.${index}.dietaryRestrictions`)}
                        placeholder={t('rsvp.person.dietary.placeholder')}
                        className="mt-1"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Accommodation */}
          <div className="space-y-4">
            <div className="space-y-4 p-4 border border-cream-200 rounded-lg">
              <div>
                <Label className="text-cream-700">{t('rsvp.accommodation.title')}</Label>
                <div className="text-cream-700">
                  {t('rsvp.accommodation.description')} <a className="text-cream-500 underline" href="#">
                   {t('rsvp.accommodation.dormitory')}
                  </a>  {t('rsvp.accommodation.and')} <a className="text-cream-500 underline" href="#">{t('rsvp.accommodation.hotel')}</a>.
                </div>
                <Select onValueChange={(value) => setValue('accommodationType', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder={t('rsvp.accommodation.select')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">{t('rsvp.accommodation.no')}</SelectItem>
                    <SelectItem value="cheap">{t('rsvp.accommodation.cheap')}</SelectItem>
                    <SelectItem value="expensive">{t('rsvp.accommodation.expensive')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              { ( watchAccommodationType !== 'no' ) && (
                <div>
                  <Label className="text-cream-700">{t('rsvp.accommodation.days')}</Label>
                  <div className="mt-2 space-x-3 flex">
                    <div className="flex items-center space-x-1">
                      <Checkbox
                        id="thursday"
                        onCheckedChange={(checked) => setValue('accommodationDays.thursday', !!checked)}
                      />
                      <Label htmlFor="thursday" className="text-cream-700">{t('rsvp.accommodation.thursday')}</Label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Checkbox
                        id="friday"
                        onCheckedChange={(checked) => setValue('accommodationDays.friday', !!checked)}
                      />
                      <Label htmlFor="friday" className="text-cream-700">{t('rsvp.accommodation.friday')}</Label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Checkbox
                        id="saturday"
                        onCheckedChange={(checked) => setValue('accommodationDays.saturday', !!checked)}
                      />
                      <Label htmlFor="saturday" className="text-cream-700">{t('rsvp.accommodation.saturday')}</Label>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Wedding Taxi */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="weddingTaxi"
              onCheckedChange={(checked) => setValue('weddingTaxi', !!checked)}
            />
            <Label htmlFor="weddingTaxi" className="text-cream-800 font-medium">{t('rsvp.wedding.taxi')}</Label>
          </div>

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
            {submitting ? t('rsvp.submitting') : t('rsvp.submit')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
