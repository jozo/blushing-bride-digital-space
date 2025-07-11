
import React from 'react';
import { UseFormRegister, UseFormSetValue, FieldErrors } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { Trash2 } from 'lucide-react';

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

interface RSVPPersonDetailProps {
  index: number;
  person: PersonDetail;
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  removePerson: (index: number) => void;
  canRemove: boolean;
  errors: FieldErrors<FormData>;
}

export const RSVPPersonDetail: React.FC<RSVPPersonDetailProps> = ({
  index,
  person,
  register,
  setValue,
  removePerson,
  canRemove,
  errors
}) => {
  const { t } = useLanguage();

  return (
    <div className="p-4 border border-cream-200 rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-cream-800">{t('rsvp.person')} {index + 1}</h4>
        {canRemove && (
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
          {errors.persons?.[index]?.name && (
            <p className="text-red-600 text-sm mt-1">{errors.persons[index]?.name?.message}</p>
          )}
        </div>

        <div>
          <Label className="text-cream-700">{t('rsvp.attendance')} *</Label>
          <Select onValueChange={(value) => setValue(`persons.${index}.attendance`, value as 'yes' | 'no')}>
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

      {person.attendance === 'yes' && (
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
  );
};
