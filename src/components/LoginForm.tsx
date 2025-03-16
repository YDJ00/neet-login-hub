
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import FormField from './FormField';
import { useLoginForm } from '@/hooks/useLoginForm';

const LoginForm = () => {
  const {
    formData,
    loading,
    errors,
    handleChange,
    handleClassChange,
    handleSubmit
  } = useLoginForm();

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
          <FormField
            id="name"
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          
          <FormField
            id="mobile"
            label="Mobile Number"
            placeholder="10-digit mobile number"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
            maxLength={10}
          />
          
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
          
          <FormField
            id="email"
            label="Email (Optional)"
            type="email"
            placeholder="your@email.com (optional)"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          
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
