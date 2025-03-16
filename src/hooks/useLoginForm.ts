
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { validateLoginForm, FormErrors } from '@/utils/formValidation';

export type LoginFormData = {
  name: string;
  mobile: string;
  class: string;
  email: string;
};

export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    name: '',
    mobile: '',
    class: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleClassChange = (value: string) => {
    setFormData(prev => ({ ...prev, class: value }));
    if (errors.class) {
      setErrors(prev => ({ ...prev, class: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = validateLoginForm(
      formData.name, 
      formData.mobile, 
      formData.class, 
      formData.email
    );
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      console.log("Attempting to check for existing user with mobile:", formData.mobile);
      
      // Check if user with same mobile number already exists
      const { data: existingUsers, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('mobile', formData.mobile);
      
      if (fetchError) {
        console.error("Error fetching existing user:", fetchError);
        throw new Error(fetchError.message);
      }
      
      console.log("Existing users check result:", existingUsers);
      
      // If user exists, just redirect without updating (they already have access)
      if (existingUsers && existingUsers.length > 0) {
        toast({
          title: "Login Successful!",
          description: "Welcome back!",
        });
        
        // Redirect to Google Drive using window.location.href
        window.open("https://drive.google.com/drive/folders/1LTElLgckPqzsQlDgvEztGmpsEEM3RDM4?usp=sharing", "_blank");
        return;
      } 
      
      // If user doesn't exist, create new record
      console.log("Creating new user record");
      const { error: insertError } = await supabase
        .from('users')
        .insert([
          { 
            name: formData.name,
            mobile: formData.mobile,
            class: formData.class,
            email: formData.email || null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ]);
      
      if (insertError) {
        console.error("Error inserting new user:", insertError);
        throw new Error(insertError.message);
      }
      
      toast({
        title: "Login Successful!",
        description: "Your information has been saved.",
      });
      
      // Redirect to Google Drive using window.open instead of changing the current page
      window.open("https://drive.google.com/drive/folders/1LTElLgckPqzsQlDgvEztGmpsEEM3RDM4?usp=sharing", "_blank");
      
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Login Failed",
        description: error instanceof Error 
          ? error.message 
          : "Connection to our database failed. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    errors,
    handleChange,
    handleClassChange,
    handleSubmit
  };
};
