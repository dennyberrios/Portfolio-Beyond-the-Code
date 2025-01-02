import { Textarea } from "@/components/ui/textarea"
<<<<<<< HEAD

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
=======
import { Label } from "../ui/label"

interface TTextareaDemo extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string
  label?: string
  colorLabel?: string
  required?: boolean
}

export const TextareaDemo: React.FC<TTextareaDemo> = ({ placeholder, label, colorLabel, required, ...props }) => {
  return (
    <>
      <Label  className={`block text-[1.2rem] mb-2 mt-5 ${colorLabel}`}>{label}</Label>
      <Textarea required={required} {...props} placeholder={placeholder} />
    </>
  )
>>>>>>> 46ece3f ( Adicionando atualizações no Contato)
}
