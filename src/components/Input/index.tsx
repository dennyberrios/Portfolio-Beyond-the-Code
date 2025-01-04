import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";

interface IInputDemo extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  placeholder?: string
  name?: string
  label?: string
  colorLabel?: string
  required?: boolean
}

export const InputDemo: React.FC<IInputDemo> = ({ type, placeholder, name, label, colorLabel, required, ...props }) => {
  return (
    <>
      <Label className={`block text-[1.2rem] mb-2 mt-5 ${colorLabel}`}>{label}</Label>
      <Input 
        {...props} 
        required={required} 
        type={type} 
        placeholder={placeholder} 
        name={name}
      />
    </>
  )
}