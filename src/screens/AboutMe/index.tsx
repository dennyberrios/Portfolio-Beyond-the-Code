import Image from "next/image";
import IconGithub from '@/assets/icon/Github-Dark.svg';

const AboutMePage = () => {
    return (
        <>
            <section className="flex justify-center items-center flex-col text-center px-5 py-20 lg:w-10/12 max-lg:w-10/12 max-sm:w-11/12 backgroundMod">
                <h2 className="lg:text-4xl max-lg:text-3xl max-sm:text-2xl font-black text-deep-indigo mb-5">Sobre Mim</h2>
                <p className="text-dark-grey lg:text-xl max-lg:text-lg max-sm:text-base">Olá, meu nome é Danny Berrios e sou um desenvolvedor front-end apaixonado por criar interfaces modernas e eficientes. Ao longo da minha jornada profissional, tenho trabalhado com tecnologias como React, Next.js, JavaScript, HTML, CSS e muitas outras, sempre buscando transformar ideias em experiências digitais imersivas.</p>
                <p className="text-dark-grey lg:text-xl max-lg:text-lg max-sm:text-base">Sou um entusiasta da inovação e da experiência do usuário, sempre atento às últimas tendências da indústria para entregar soluções que sejam não apenas funcionais, mas também agradáveis de usar. Meu objetivo é criar interfaces que encantem os usuários, tornando a navegação mais fluida e intuitiva.</p>
                {IconGithub && (
                    <Image
                        src={IconGithub}
                        alt="Foto de Danny Berrios"
                        className="w-28 mt-10"
                    />
                )}
            </section>
        </>
    );
}

export default AboutMePage;