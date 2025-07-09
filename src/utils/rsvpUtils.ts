
import * as Sentry from "@sentry/react";

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

export const submitToNextcloud = async (formData: FormData) => {
  try {
    // Replace with your actual Nextcloud Forms API endpoint
    const NEXTCLOUD_API_URL = 'https://your-nextcloud.com/index.php/apps/forms/api/v3/submission/insert';
    const FORM_ID = 'your-form-id'; // Replace with your actual form ID
    
    // Convert form data to Nextcloud Forms format
    const submissionData = {
      formId: FORM_ID,
      answers: {
        // Map your form fields to Nextcloud form question IDs
        contact_name: formData.contactName,
        contact_email: formData.contactEmail,
        attendance: formData.attendance,
        persons: JSON.stringify(formData.persons),
        accommodation: formData.accommodation,
        accommodation_type: formData.accommodationType,
        accommodation_days: JSON.stringify(formData.accommodationDays),
        wedding_taxi: formData.weddingTaxi ? 'yes' : 'no',
        message: formData.message
      }
    };

    const response = await fetch(NEXTCLOUD_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_TOKEN', // Replace with your actual API token
      },
      body: JSON.stringify(submissionData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Nextcloud submission result:', result);
    return result;
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
};
