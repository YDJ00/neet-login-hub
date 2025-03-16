
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  maxLength?: number;
}

const FormField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  maxLength,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input 
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? "border-red-500" : ""}
        maxLength={maxLength}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormField;
