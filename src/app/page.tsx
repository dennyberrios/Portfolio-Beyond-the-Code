import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="w-screen bg-header-gradient flex flex-col justify-center items-center gap-5 py-5">
      <p className="text-3xl text-white font-black">Shadcn/ui</p>
      <div className="w-80 h-10">
        <Input />
      </div>
    </div>
  );
}
