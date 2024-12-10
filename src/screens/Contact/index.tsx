'use client'

import { InputDemo } from "@/components/Input";
import { TextareaDemo } from "@/components/Textarea";
import { Button } from "@/components/ui/button";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";

const ContactPage = () => {
    return (
        <>
            <h1 className="text-deep-indigo text-5xl font-bold mt-20 pb-5">Entre em Contato</h1>
            <p className="text-dark-grey text-xl mb-5">Estou sempre aberto a novas oportunidades e parcerias. Conecte-se comigo nas redes sociais ou envie uma mensagem.</p>
            <section className="flex gap-5 py-5">
                <a href="https://www.instagram.com/berrios_danny30/" title="Instagram" target="_blank" className="flex items-center flex-col shadow-md p-3 hover:-translate-y-2 transform duration-200 ease-in-out w-40 bg-indigo-100 rounded-sm">
                    <FaInstagram size={50} fill="#E1306C"/>
                    <span className="text-vivid-pink text-xl">Instagram</span>
                </a>
                <a href="mailto:dennyberrios123@gmail.com" title="Gmail" className="flex items-center flex-col shadow-md p-3 hover:-translate-y-2 transform duration-200 ease-in-out w-40 bg-indigo-100 rounded-sm">
                    <BiLogoGmail size={50} fill="#D14836"/>
                    <span className="text-crimson-red text-xl">Gmail</span>
                </a>
                <a href="mailto:denny_berrios@hotmail.com" title="Email" className="flex items-center flex-col shadow-md p-3 hover:-translate-y-2 transform duration-200 ease-in-out w-40 bg-indigo-100 rounded-sm">
                    <MdOutlineEmail size={50} fill="#1A73E8"/>
                    <span className="text-bright-blue text-xl">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/danny-berrios/" title="LinkedIn" target="_blank" className="flex items-center flex-col shadow-md p-3 hover:-translate-y-2 transform duration-200 ease-in-out w-40 bg-indigo-100 rounded-sm">
                    <RiLinkedinFill size={50} fill="#0A66C2"/>
                    <span className="text-linkedin-blue text-xl">LinkedIn</span>
                </a>
                <a href="https://wa.me/5581999571340" title="WhatsApp" target="_blank" className="flex items-center flex-col shadow-md p-3 hover:-translate-y-2 transform duration-200 ease-in-out w-40 bg-indigo-100 rounded-sm">
                    <FaWhatsapp size={50} fill="#25D366"/>
                    <span className="text-whatsapp-green text-xl">WhatsApp</span>
                </a>
            </section>
            <section>
                <form action="" className="py-24">
                    <div>
                        <InputDemo />
                    </div>
                    <div>
                        <InputDemo />
                    </div>
                    <div>
                        <TextareaDemo />
                    </div>
                    <div>
                        <Button type="submit">
                            Enviar
                        </Button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default ContactPage;