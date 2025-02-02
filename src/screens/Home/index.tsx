'use client'

import ProjectCard from "@/components/ProjectCard";
import TechnologyCard from "@/components/TechnologyCard";
import BlogCard from "@/components/BlogCard";
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
import IconGithub from "@/assets/icon/Github-Dark.svg";
import IconVscode from "@/assets/icon/VSCode-Dark.svg";
import IconSublime from "@/assets/icon/Sublime-Dark.svg";
import IconEclipse from "@/assets/icon/Eclipse-Dark.svg";
import IconLinux from "@/assets/icon/Linux-Dark.svg";
import IconUbuntu from "@/assets/icon/Ubuntu-Dark.svg";
import IconWindows from "@/assets/icon/Windows-Dark.svg";
import IconNpm from "@/assets/icon/Npm-Dark.svg";
import IconYarn from "@/assets/icon/Yarn-Dark.svg";
import IconVite from "@/assets/icon/Vite-Dark.svg";
import IconNotion from "@/assets/icon/Notion-Dark.svg";
import IconFigma from "@/assets/icon/Figma-Dark.svg";
import IconAxios from "@/assets/icon/axios.svg";
import IconJwt from "@/assets/icon/jwt.svg";
import IconIntellij from "@/assets/icon/intellij.svg";
import { useContext, useEffect, useState } from "react";
import { userContext } from "@/context";
import Preload from "@/components/Preload";

interface DataProject {
  id?: number
  title?: string
  img?: string
  alt?: string
  description?: string
  link?: string
}

const HomePage = () => {
  const contextData = useContext(userContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (contextData?.projectsData) {
      setLoading(false);
    }
  }, [contextData?.projectsData]);

  return (
    <>
      <section className="flex justify-center items-center flex-col text-center px-5 py-20 lg:w-10/12 max-lg:w-10/12 max-sm:w-11/12 backgroundMod">
        <h2 className="lg:text-4xl max-lg:text-3xl max-sm:text-2xl font-black text-deep-indigo mb-5">Bem-vindo ao meu portfólio!</h2>
        <p className="text-dark-grey lg:text-xl max-lg:text-lg max-sm:text-base">
          Olá! Sou um desenvolvedor front-end apaixonado por criar experiências digitais imersivas e de fácil navegação. Ao longo da minha jornada, venho transformando ideias em interfaces modernas, acessíveis e funcionais, sempre com o objetivo de entregar soluções que encantam e engajam os usuários.
        </p>
        <p className="text-dark-grey lg:text-xl max-lg:text-lg max-sm:text-base">
          Explore meus projetos, descubra como utilizo tecnologias inovadoras para resolver desafios e conheça minha trajetória no desenvolvimento de aplicações que unem design, performance e usabilidade.
        </p>
      </section>
      <section className="bg-dodger-blue w-full text-center px-5 py-20 flex flex-col justify-center items-center">
        <h2 className="lg:text-4xl max-lg:text-4xl max-sm:text-2xl font-black text-white mb-20">Meus Projetos</h2>

        <div className="flex flex-wrap gap-5 justify-center">
          <Preload loading={loading}>
            {contextData?.projectsData && (
              contextData?.projectsData?.map((project: DataProject) => (
                <ProjectCard
                  key={project?.id}
                  img={project?.img}
                  alt={project?.alt}
                  title={project?.title}
                  link={project?.link}
                />
              ))
            )}</Preload>
        </div>
      </section>
      <section className="bg-light-grey w-full px-5 py-20">
        <h2 className="lg:text-4xl max-lg:text-3xl max-sm:text-2xl font-black text-light-blue mb-5">Tecnologias que Utilizo</h2>
        <h3 className="lg:text-2xl max-lg:text-xl max-sm:text-xl font-black text-dark-grey mb-5 mt-9">Linguagens de Programação e Marcação</h3>
        <div className="flex flex-wrap gap-5">
          <TechnologyCard
            key={1}
            image={IconHTML}
            title="HTML"
          />
          <TechnologyCard
            key={2}
            image={IconCSS}
            title="CSS"
          />
          <TechnologyCard
            key={3}
            image={IconJs}
            title="JavaScriot"
          />
          <TechnologyCard
            key={4}
            image={IconTs}
            title="TypeScript"
          />
          <TechnologyCard
            key={5}
            image={IconJava}
            title="Java"
          />
          <TechnologyCard
            key={6}
            image={IconMysql}
            title="MYSQL"
          />
        </div>
        <h3 className="lg:text-2xl max-lg:text-xl max-sm:text-xl font-black text-dark-grey mb-5 mt-9">Bibliotecas e Frameworks Front-End</h3>
        <div className="flex flex-wrap gap-5">
          <TechnologyCard
            key={7}
            image={IconReact}
            title="React"
          />
          <TechnologyCard
            key={8}
            image={IconNext}
            title="Next"
          />
          <TechnologyCard
            key={9}
            image={IconStyledComponents}
            title="Styled Components"
          />
          <TechnologyCard
            key={10}
            image={IconGlueStackUI}
            title="GlueStack-UI"
          />
          <TechnologyCard
            key={11}
            image={IconMUI}
            title="Material-UI (MUI)"
          />
          <TechnologyCard
            key={12}
            image={IconShadcnUI}
            title="ShadCN/UI"
          />
          <TechnologyCard
            key={13}
            image={IconBootstrap}
            title="Bootstrap"
          />
          <TechnologyCard
            key={14}
            image={IconTailwind}
            title="Tailwind CSS"
          />
        </div>
        <h3 className="lg:text-2xl max-lg:text-xl max-sm:text-xl font-black text-dark-grey mb-5 mt-9">Bibliotecas e Ferramentas para APIs</h3>
        <div className="flex flex-wrap gap-5">
          <TechnologyCard
            key={15}
            image={IconAxios}
            title="Axios"
          />
          <TechnologyCard
            key={16}
            title="RESTful"
            description="Padrão de arquitetura para APIs com métodos HTTP."
          />
        </div>
        <h3 className="lg:text-2xl max-lg:text-xl max-sm:text-xl font-black text-dark-grey mb-5 mt-9">Bibliotecas e Ferramentas para Autenticação e Segurança</h3>
        <div className="flex flex-wrap gap-5">
          <TechnologyCard
            key={17}
            image={IconJwt}
            title="JWT"
          />
        </div>
        <h3 className="lg:text-2xl max-lg:text-xl max-sm:text-xl font-black text-dark-grey mb-5 mt-9">Ambiente de Execução Back-End</h3>
        <div className="flex flex-wrap gap-5">
          <TechnologyCard
            key={18}
            image={IconNode}
            title="Node.js"
          />
        </div>
        <h3 className="lg:text-2xl max-lg:text-xl max-sm:text-xl font-black text-dark-grey mb-5 mt-9">Ferramentas de Versionamento e Controle</h3>
        <div className="flex flex-wrap gap-5">
          <TechnologyCard
            key={19}
            image={IconGit}
            title="Git"
          />
          <TechnologyCard
            key={20}
            image={IconGithub}
            title="Github"
          />
        </div>
        <h3 className="lg:text-2xl max-lg:text-xl max-sm:text-xl font-black text-dark-grey mb-5 mt-9">Ambientes de Desenvolvimento (IDEs e Editores)</h3>
        <div className="flex flex-wrap gap-5">
          <TechnologyCard
            key={21}
            image={IconVscode}
            title="VSCode"
          />
          <TechnologyCard
            key={22}
            image={IconSublime}
            title="Sublime Text"
          />
          <TechnologyCard
            key={23}
            image={IconEclipse}
            title="Eclipse"
          />
          <TechnologyCard
            key={24}
            image={IconIntellij}
            title="Intellij"
          />
        </div>
        <h3 className="lg:text-2xl max-lg:text-xl max-sm:text-xl font-black text-dark-grey mb-5 mt-9">Sistemas Operacionais</h3>
        <div className="flex flex-wrap gap-5">
          <TechnologyCard
            key={25}
            image={IconLinux}
            title="Linux"
          />
          <TechnologyCard
            key={26}
            image={IconUbuntu}
            title="Ubuntu"
          />
          <TechnologyCard
            key={27}
            image={IconWindows}
            title="Windows"
          />
        </div>
        <h3 className="lg:text-2xl max-lg:text-xl max-sm:text-xl font-black text-dark-grey mb-5 mt-9">Ferramentas de Gerenciamento e Construção</h3>
        <div className="flex flex-wrap gap-5">
          <TechnologyCard
            key={28}
            image={IconNpm}
            title="NPM"
          />
          <TechnologyCard
            key={29}
            image={IconYarn}
            title="Yarn"
          />
          <TechnologyCard
            key={30}
            image={IconVite}
            title="Vite"
          />
          <TechnologyCard
            key={31}
            image={IconNotion}
            title="Notion"
          />
          <TechnologyCard
            key={32}
            image={IconFigma}
            title="Figma"
          />
        </div>
        <h3 className="lg:text-2xl max-lg:text-xl max-sm:text-xl font-black text-dark-grey mb-5 mt-9">Metodologias e Boas Práticas</h3>
        <div className="flex flex-wrap gap-5">
          <TechnologyCard
            key={33}
            title="Kanban"
          />
          <TechnologyCard
            key={34}
            title="Métodos Ágeis"
          />
        </div>
      </section>
      <section className="bg-light-grey w-full px-5 py-20">
        <h2 className="lg:text-4xl max-lg:text-3xl max-sm:text-2xl font-black text-light-blue mb-5">Skills em Estudos</h2>
        <div className="flex flex-wrap gap-5">
          <TechnologyCard
            key={35}
            image={IconNode}
            title="Node.js"
          />
          <TechnologyCard
            key={36}
            image={IconJava}
            title="Java"
          />
          <TechnologyCard
            key={37}
            image={IconMysql}
            title="MYSQL"
          />
          <TechnologyCard
            key={38}
            image={IconTs}
            title="TypeScript"
          />
        </div>
      </section>
      <section className="bg-white w-full px-5 py-20">
        <h2 className="lg:text-4xl max-lg:text-3xl max-sm:text-2xl font-black text-deep-indigo text-center mb-5">Blog</h2>
        <div className="flex flex-wrap gap-5 justify-center">
          <BlogCard
            key={39}
            title="Título do Post 1"
            description="Resumo do conteúdo do primeiro post, falando sobre tecnologias ou tendências do momento."
          />
          <BlogCard
            key={40}
            title="Título do Post 2"
            description="Resumo do conteúdo do segundo post, abordando um tema relevante na área de desenvolvimento."
          />
          <BlogCard
            key={41}
            title="Título do Post 2"
            description="Resumo do conteúdo do segundo post, abordando um tema relevante na área de desenvolvimento."
          />
          <BlogCard
            key={42}
            title="Título do Post 2"
            description="Resumo do conteúdo do segundo post, abordando um tema relevante na área de desenvolvimento."
          />
          <BlogCard
            key={43}
            title="Título do Post 2"
            description="Resumo do conteúdo do segundo post, abordando um tema relevante na área de desenvolvimento."
          />
          <BlogCard
            key={44}
            title="Título do Post 2"
            description="Resumo do conteúdo do segundo post, abordando um tema relevante na área de desenvolvimento."
          />
          <BlogCard
            key={45}
            title="Título do Post 2"
            description="Resumo do conteúdo do segundo post, abordando um tema relevante na área de desenvolvimento."
          />
          <BlogCard
            key={46}
            title="Título do Post 2"
            description="Resumo do conteúdo do segundo post, abordando um tema relevante na área de desenvolvimento."
          />
        </div>
      </section>
    </>
  );
}

export default HomePage;