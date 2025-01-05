"use client"

import { api } from "@/service/config";
import { createContext, useEffect, useState } from "react";

interface Project {
    id: number;
    title: string;
    img: string;
    alt?: string;
    description: string;
    link: string;
  }

interface UserContextType {
    projectsData?: Project[];
    getPrtojectsById?: (id: number) => Promise<Project | null>;
}

export const userContext = createContext<UserContextType | null>(null)

export function UserProvider({ children }: { children: React.ReactNode }) {

    const [projectsData, setProjectsData] = useState<Project[]>([])

    async function getPrtojects() {
        try {
            const response = await api.get("/project");
            setProjectsData(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function getPrtojectsById(id: number) {
        try {
            const response = await api.get(`/project/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPrtojects()
    }, [])

    return (
        <userContext.Provider value={{
            projectsData,
            getPrtojectsById
        }}>
            {children}
        </userContext.Provider>
    )
}