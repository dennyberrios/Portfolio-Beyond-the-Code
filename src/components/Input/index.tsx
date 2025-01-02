<<<<<<< HEAD
import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
=======
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";

interface IInputDemo extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  placeholder?: string
  label?: string
  colorLabel?: string
  required?: boolean
}

export const InputDemo: React.FC<IInputDemo> = ({ type, placeholder, label, colorLabel, required, ...props }) => {
  return (
    <>
      <Label className={`block text-[1.2rem] mb-2 mt-5 ${colorLabel}`}>{label}</Label>
      <Input {...props} required={required} type={type} placeholder={placeholder} />
    </>
  )
>>>>>>> 46ece3f ( Adicionando atualizações no Contato)
}