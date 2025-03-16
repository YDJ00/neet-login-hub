
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your Supabase URL and anon key
// These should be replaced with your actual Supabase credentials
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

type FormData = {
  name: string;
  mobile: string;
  class: string;
  email: string;
};

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    class: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    if (!formData.class) {
      newErrors.class = 'Please select your class';
    }
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      // Check if user with same mobile number already exists
      const { data: existingUsers, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('mobile', formData.mobile);
      
      if (fetchError) {
        throw new Error(fetchError.message);
      }
      
      // If user exists, update their data
      if (existingUsers && existingUsers.length > 0) {
        const { error: updateError } = await supabase
          .from('users')
          .update({
            name: formData.name,
            class: formData.class,
            email: formData.email,
            updated_at: new Date().toISOString()
          })
          .eq('mobile', formData.mobile);
        
        if (updateError) {
          throw new Error(updateError.message);
        }
        
        toast({
          title: "Login Successful!",
          description: "Your existing account has been updated.",
        });
      } 
      // If user doesn't exist, create new record
      else {
        const { error: insertError } = await supabase
          .from('users')
          .insert([
            { 
              name: formData.name,
              mobile: formData.mobile,
              class: formData.class,
              email: formData.email,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            }
          ]);
        
        if (insertError) {
          throw new Error(insertError.message);
        }
        
        toast({
          title: "Login Successful!",
          description: "Your account has been created.",
        });
      }
      
      // Redirect to Google Drive after successful login
      window.location.href = "https://drive.google.com/drive/folders/1LTElLgckPqzsQlDgvEztGmpsEEM3RDM4?usp=sharing";
      
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Login Failed",
        description: error instanceof Error ? error.message : "There was an error submitting your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-neet-accent bg-white shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-neet-dark">Login to Access</CardTitle>
        <CardDescription className="text-center">
          Enter your details to access NEET PYQs and study materials.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input 
              id="mobile"
              name="mobile"
              placeholder="10-digit mobile number"
              value={formData.mobile}
              onChange={handleChange}
              className={errors.mobile ? "border-red-500" : ""}
              maxLength={10}
            />
            {errors.mobile && <p className="text-sm text-red-500">{errors.mobile}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="class">Class</Label>
            <Select onValueChange={handleClassChange} value={formData.class}>
              <SelectTrigger className={errors.class ? "border-red-500" : ""}>
                <SelectValue placeholder="Select your class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="11th">11th</SelectItem>
                <SelectItem value="12th">12th</SelectItem>
                <SelectItem value="Repeat">Repeater</SelectItem>
              </SelectContent>
            </Select>
            {errors.class && <p className="text-sm text-red-500">{errors.class}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input 
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com (optional)"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>
          
          <Button type="submit" className="w-full bg-neet-primary hover:bg-neet-dark text-white" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-xs text-center text-gray-500">
          By logging in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
