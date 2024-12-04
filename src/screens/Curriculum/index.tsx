'use client'

import IconCSS from "@/assets/icon/CSS.svg";
import IconHTML from "@/assets/icon/HTML.svg";
import IconJs from "@/assets/icon/JavaScript.svg";
import IconTs from "@/assets/icon/TypeScript.svg";
import IconJava from "@/assets/icon/Java-Dark.svg";
import IconMysql from "@/assets/icon/MySQL-Dark.svg";
import IconNode from "@/assets/icon/NodeJS-Dark.svg";
import IconReact from "@/assets/icon/React-Dark.svg";
import IconNext from "@/assets/icon/NextJS-Dark.svg";
import IconStyledComponents from "@/assets/icon/StyledComponents.svg";
import IconGlueStackUI from "@/assets/icon/gluestack-ui.svg";
import IconMUI from "@/assets/icon/MUI.svg";
import IconShadcnUI from "@/assets/icon/shadcn.svg";
import IconBootstrap from "@/assets/icon/Bootstrap.svg";
import IconTailwind from "@/assets/icon/TailwindCSS-Dark.svg";
import IconGit from "@/assets/icon/Git.svg";
import IconAxios from "@/assets/icon/axios.svg";
import IconJwt from "@/assets/icon/jwt.svg";
import TechnicalMastery from "@/components/TechnicalMastery";
import Image from "next/image";
import CurriculoPgOne from '@/assets//img/curriculo/1.png';
import { Button } from "@/components/ui/button";
/* import CurriculoPgTwo from '@/assets//img/curriculo/2.png';
import CurriculoPgThree from '@/assets//img/curriculo/3.png'; */

const CurriculumPage = () => {
    return (
        <>
            <section className="bg-dodger-blue w-full px-5 py-20">
                <h2 className="lg:text-4xl max-lg:text-3xl max-sm:text-2xl font-black text-white text-center mb-10">Dominnio tecnico</h2>
                <div className="flex items-start gap-12 justify-center flex-wrap">
                    <div className="w-3/6 flex flex-col items-center">
                        <Image src={CurriculoPgOne} alt="Imagem do currículo" className="rounded-lg" />
                        <Button className="mt-5 font-semibold text-xl bg-tomato-red hover:bg-golden-yellow hover:text-dodger-blue transform duration-200 ease-in-out">Baixar PDF</Button>
                    </div>
                    <div className="flex flex-wrap gap-5 justify-center w-2/5">
                        <TechnicalMastery image={IconHTML} description="HTML" key={1} progressBar={96} />
                        <TechnicalMastery image={IconCSS} description="CSS" key={2} progressBar={96} />
                        <TechnicalMastery image={IconJs} description="JavaScript" key={3} progressBar={90} />
                        <TechnicalMastery image={IconTs} description="TypeScript" key={4} progressBar={60} />
                        <TechnicalMastery image={IconNode} description="Node.js" key={5} progressBar={48} />
                        <TechnicalMastery image={IconJava} description="Java" key={6} progressBar={30} />
                        <TechnicalMastery image={IconMysql} description="Mysql" key={7} progressBar={64} />
                        <TechnicalMastery image={IconReact} description="React" key={8} progressBar={90} />
                        <TechnicalMastery image={IconNext} description="Next" key={9} progressBar={80} />
                        <TechnicalMastery image={IconStyledComponents} description="" key={10} progressBar={90} />
                        <TechnicalMastery image={IconBootstrap} description="Bootstrap" key={11} progressBar={90} />
                        <TechnicalMastery image={IconTailwind} description="Tailwind" key={12} progressBar={90} />
                        <TechnicalMastery image={IconGlueStackUI} description="GlueStack-UI" key={13} progressBar={90} />
                        <TechnicalMastery image={IconMUI} description="Material UI" key={14} progressBar={80} />
                        <TechnicalMastery image={IconShadcnUI} description="Shadcn/UI" key={15} progressBar={80} />
                        <TechnicalMastery image={IconGit} description="Git" key={16} progressBar={70} />
                        <TechnicalMastery image={IconJwt} description="JWT" key={17} progressBar={60} />
                        <TechnicalMastery image={IconAxios} description="Axios" key={18} progressBar={90} />
                        <p className="text-white text-md w-full text-justify">As porcentagens apresentadas são meramente ilustrativas e refletem minha opinião pessoal. Não foram baseadas em cálculos científicos ou dados concretos, mas servem como uma estimativa para facilitar a transmissão da minha experiência com cada ferramenta tecnológica.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CurriculumPage;