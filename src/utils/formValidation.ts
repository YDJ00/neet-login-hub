
export type FormErrors = Record<string, string>;

export const validateLoginForm = (
  name: string,
  mobile: string,
  selectedClass: string,
  email: string
): FormErrors => {
  const errors: FormErrors = {};
  
  if (!name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!mobile.trim()) {
    errors.mobile = 'Mobile number is required';
  } else if (!/^[0-9]{10}$/.test(mobile)) {
    errors.mobile = 'Please enter a valid 10-digit mobile number';
  }
  
  if (!selectedClass) {
    errors.class = 'Please select your class';
  }
  
  if (email && !/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  return errors;
};
