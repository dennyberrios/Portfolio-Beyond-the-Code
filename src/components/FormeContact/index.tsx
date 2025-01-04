'use client'

import { useState } from "react";
import { InputDemo } from "../Input";
import { TextareaDemo } from "../Textarea";
import { Button } from "../ui/button";

const FormContact = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form)

        try {
            const response = await fetch("https://formspree.io/f/xlddogag", {
                method: "POST",
                body: formData,
                headers: {Accept: "application/json"},
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
            console.log(error);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="lg:w-[600px] max-lg:w-[500px] max-sm:w-11/12 py-10">
               <div>
                <InputDemo
                    placeholder="Seu nome"
                    type="text"
                    name="name"
                    label="Nome"
                    colorLabel="text-light-bg"
                    className="bg-deep-slate border-none w-full py-6 px-3 text-light-grey text-lg focus:outline-none"
                    style={{fontSize: "1rem"}}
                    required={true}
                />
                
            </div>
            <div>
                <InputDemo
                    placeholder="Seu E-email"
                    type="email"
                    name="email"
                    label="E-mail"
                    colorLabel="text-light-bg"
                    className="bg-deep-slate border-none w-full py-6 px-3 text-light-grey"
                    style={{fontSize: "1rem"}}
                    required={true}
                />
            </div>
            <div>
                <TextareaDemo
                    placeholder="Sua mensagem aqui..."
                    name="message"
                    label="Mensagem"
                    colorLabel="text-light-bg"
                    className="bg-deep-slate resize-none border-none w-full h-32 text-light-grey"
                    style={{fontSize: "1rem"}}
                    required={true}
                />
            </div>
            <div>
                <Button className="w-full my-7 bg-dodger-blue hover:bg-lime-green font-bold text-md transform duration-300 ease-in-out" type="submit">
                    Enviar
                </Button>
            </div>
        </form>
    );
}

export default FormContact;