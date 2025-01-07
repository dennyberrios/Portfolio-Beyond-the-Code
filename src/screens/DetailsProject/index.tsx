"use client"

import { userContext } from "@/context";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Preload from "@/components/Preload";

interface ProjectDetails {
    id: number;
    title?: string;
    img: string;
    alt?: string;
    description?: string;
    technicalDetails?: string[];
    challenges?: string;
    githubLink?: string;
    projectLink?: string;
    link?: string;
}

const DetailsProjectPage = () => {
    const [projects, setProjects] = useState<ProjectDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const contextData = useContext(userContext);
    const { id } = useParams();

    useEffect(() => {
        async function getProjectById() {
            try {
                if (contextData?.getPrtojectsById) {
                    const response = await contextData?.getPrtojectsById(Number(id));
                    setProjects(response);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        getProjectById();
    }, [contextData, id]);

    return (
        <section className="flex flex-col items-center justify-center py-14">
            <div className="container mx-auto px-4">
                <Preload loading={loading}>
                    <div className="text-center mb-8">
                        <h2 className="lg:text-3xl max-lg:text-2xl max-sm:text-xl font-black text-deep-indigo mb-5">{projects?.title || "Carregando..."}</h2>
                        <p className="text-dark-grey lg:text-xl max-lg:text-lg max-sm:text-base mt-4">{projects?.description}</p>
                    </div>

                    {projects && (
                        <div className="flex gap-8 max-lg:flex-col max-lg:items-center">
                            <div className="">
                                <Image
                                    src={projects.img}
                                    alt={projects.alt || "Imagem do projeto"}
                                    width={500}
                                    height={500}
                                    priority
                                    unoptimized
                                    className="rounded-lg shadow-lg lg:w-[800px] max-lg:w-full"
                                />
                            </div>
                            <div className="w-full">
                                <h3 className="text-2xl font-semibold text-dodger-blue">Detalhes Técnicos</h3>
                                <ul className="list-disc list-inside text-deep-indigo mt-4">
                                    {projects.technicalDetails?.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                                <h3 className="text-2xl font-semibold text-dodger-blue mt-6">Desafios e Soluções</h3>
                                <p className="text-dark-grey mt-4">{projects.challenges}</p>
                                <div className="flex max-query-470px:flex-col mt-6 gap-4">
                                    <a
                                        href={projects.githubLink}
                                        className="bg-dodger-blue text-white text-center px-4 py-2 rounded-lg font-bold hover:bg-deep-indigo transform duration-200 ease-in-out"
                                    >
                                        Repositório no GitHub
                                    </a>
                                    <a
                                        href={projects.projectLink}
                                        className="bg-tomato-red text-white text-center px-4 py-2 rounded-lg font-bold hover:bg-golden-yellow hover:text-deep-indigo transform duration-200 ease-in-out"
                                    >
                                        Visualizar Projeto
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </Preload>
            </div>
        </section>
    );
};

export default DetailsProjectPage;