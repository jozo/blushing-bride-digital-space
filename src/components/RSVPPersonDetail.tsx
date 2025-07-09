
import React from 'react';
import { UseFormRegister, Control, useWatch } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface PersonDetail {
  name: string;
  type: 'adult' | 'child';
  chair: 'adult' | 'high' | 'none';
  dietaryRestrictions: string;
}

interface RSVPPersonDetailProps {
  index: number;
  register: UseFormRegister<any>;
  control: Control<any>;
  onRemove: () => void;
  canRemove: boolean;
  onTypeChange: (value: string) => void;
  onChairChange: (value: string) => void;
}

const RSVPPersonDetail = ({ 
  index, 
  register, 
  control, 
  onRemove, 
  canRemove, 
  onTypeChange, 
  onChairChange 
}: RSVPPersonDetailProps) => {
  const personType = useWatch({
    control,
    name: `persons.${index}.type`,
  });

  return (
    <div className="p-4 border border-cream-200 rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-cream-800">Person {index + 1}</h4>
        {canRemove && (
          <Button
            type="button"
            onClick={onRemove}
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
          <Label className="text-cream-700">Name *</Label>
          <Input
            {...register(`persons.${index}.name`, { required: 'Name is required' })}
            className="mt-1"
          />
        </div>

        <div>
          <Label className="text-cream-700">Type *</Label>
          <Select onValueChange={onTypeChange}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="adult">Adult</SelectItem>
              <SelectItem value="child">Child</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {personType === 'child' && (
        <div>
          <Label className="text-cream-700">Chair Type</Label>
          <Select onValueChange={onChairChange}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select chair" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="adult">Adult Chair</SelectItem>
              <SelectItem value="high">High Chair</SelectItem>
              <SelectItem value="none">No Chair</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div>
        <Label className="text-cream-700">Dietary Restrictions</Label>
        <Input
          {...register(`persons.${index}.dietaryRestrictions`)}
          placeholder="Any allergies or dietary needs?"
          className="mt-1"
        />
      </div>
    </div>
  );
};

export default RSVPPersonDetail;
