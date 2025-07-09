
import React from 'react';
import { UseFormRegister, Control } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface RSVPAccommodationProps {
  register: UseFormRegister<any>;
  control: Control<any>;
  showAccommodationDetails: boolean;
  onAccommodationChange: (value: string) => void;
  onAccommodationTypeChange: (value: string) => void;
  onDayToggle: (day: string, checked: boolean) => void;
}

const RSVPAccommodation = ({ 
  onAccommodationChange, 
  onAccommodationTypeChange, 
  onDayToggle, 
  showAccommodationDetails 
}: RSVPAccommodationProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-cream-800 font-medium">Accommodation</Label>
        <Select onValueChange={onAccommodationChange}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Do you need accommodation?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes, I need accommodation</SelectItem>
            <SelectItem value="no">No, I don't need accommodation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {showAccommodationDetails && (
        <div className="space-y-4 p-4 border border-cream-200 rounded-lg">
          <div>
            <Label className="text-cream-700">Accommodation Type</Label>
            <Select onValueChange={onAccommodationTypeChange}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select accommodation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hotel-room">Hotel Room</SelectItem>
                <SelectItem value="guest-house">Guest House</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-cream-700">Days</Label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="thursday"
                  onCheckedChange={(checked) => onDayToggle('thursday', !!checked)}
                />
                <Label htmlFor="thursday" className="text-cream-700">Thursday</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="friday"
                  onCheckedChange={(checked) => onDayToggle('friday', !!checked)}
                />
                <Label htmlFor="friday" className="text-cream-700">Friday</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="saturday"
                  onCheckedChange={(checked) => onDayToggle('saturday', !!checked)}
                />
                <Label htmlFor="saturday" className="text-cream-700">Saturday</Label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVPAccommodation;
