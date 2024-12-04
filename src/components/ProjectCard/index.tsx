import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

interface PProjectCard {
    img?: string;
    title?: string;
    description?: string;
}

const ProjectCard: React.FC<PProjectCard> = ({ img, title, description }) => {
    return (
        <div className="w-[310px] flex flex-col justify-center items-center rounded-xl bg-deep-indigo hover:shadow-lg mt-5 hover:-translate-y-4 transition duration-300 ease-in-out">
            {img && (<Image src={img} alt="Giff do Projeto em Exibição" className="w-4/5 rounded-md -mt-5 shadow-md"/>)}
            <h3 className="text-white mt-7 mb-3 text-2xl font-semibold">{title}</h3>
            <p className="text-golden-yellow">{description}</p>
            <Button asChild className="hover:bg-golden-yellow bg-tomato-red mt-6 mb-5 w-8/12 transition duration-200 ease-in-out">
                <Link href="#" className="hover:text-deep-indigo text-lg font-semibold transition duration-200 ease-in-out">Ver Mais</Link>
            </Button>
        </div>
    );
}

export default ProjectCard;