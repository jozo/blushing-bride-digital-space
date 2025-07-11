
import React from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/contexts/LanguageContext';

interface PersonDetail {
  name: string;
  attendance: 'yes' | 'no' | undefined;
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

interface RSVPAccommodationProps {
  accommodationType: string;
  setValue: UseFormSetValue<FormData>;
}

export const RSVPAccommodation: React.FC<RSVPAccommodationProps> = ({
  accommodationType,
  setValue
}) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="space-y-4 p-4 border border-cream-200 rounded-lg">
        <div>
          <Label className="text-cream-700">{t('rsvp.accommodation.title')}</Label>
          <div className="text-cream-700">
            {t('rsvp.accommodation.description')} <a className="text-cream-500 underline" href="#">
              {t('rsvp.accommodation.dormitory')}
            </a> {t('rsvp.accommodation.and')} <a className="text-cream-500 underline" href="#">{t('rsvp.accommodation.hotel')}</a>.
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

        {accommodationType !== 'no' && (
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
  );
};
