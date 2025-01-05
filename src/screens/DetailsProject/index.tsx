"use client"

import { userContext } from "@/context";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

interface ProjectDetails {
    id: number;
    title: string;
    img: string;
    alt?: string;
    description: string;
    link: string;
}

const DetailsProjectPage = () => {
    const [projects, setProjects] = useState<ProjectDetails | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const contextData = useContext(userContext);
    const { id } = useParams()

    useEffect(() => {
        async function getProjectById() {
            try {
                if (contextData?.getPrtojectsById) {
                    const response = await contextData?.getPrtojectsById(Number(id))
                    setProjects(response)
                }
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false)
            }
        }
        getProjectById()
    }, [contextData, id])

    return (
        <>
            <h1>Details Project</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {projects?.img && (<Image
                        src={projects?.img}
                        alt={projects?.alt || "Imagem do projeto em destaque"}
                        width={400}
                        height={300}
                        priority
                        className="w-auto h-auto"
                    />)}
                    <h2>{projects?.title}</h2>
                    <p>{projects?.description}</p>
                </>
            )}
        </>
    );
}

export default DetailsProjectPage;