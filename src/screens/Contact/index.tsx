'use client'

import FormContact from "@/components/FormeContact";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";

const ContactPage = () => {
    return (
        <>
            <h1 className="lg:text-4xl max-lg:text-3xl max-sm:text-2xl font-black text-deep-indigo mt-20 pb-5">Entre em Contato</h1>
            <p className="text-dark-grey lg:text-xl max-lg:text-lg max-sm:text-base mb-5">Estou sempre aberto a novas oportunidades e parcerias. Conecte-se comigo nas redes sociais ou envie uma mensagem.</p>
            <section className="flex gap-5 py-10 mb-10 flex-wrap items-center justify-center">
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
            <section className="bg-dark-blue-gray w-full flex justify-center items-center flex-col">
                <h2 className="text-light-bg lg:text-4xl max-lg:text-3xl max-sm:text-2xl font-black mt-20 pb-5">Fale Comigo</h2>
                <p className="text-light-bg lg:text-xl max-lg:text-lg max-sm:text-base">Tem um projeto em mente ou quer apenas trocar uma ideia?</p>
                <p className="text-light-bg lg:text-xl max-lg:text-lg max-sm:text-base">Preencha o formulário abaixo!</p>
                <FormContact />
            </section>
        </>
    );
}

export default ContactPage;