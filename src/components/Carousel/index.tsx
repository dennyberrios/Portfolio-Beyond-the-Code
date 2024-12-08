import * as React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import 
    Image, 
    { StaticImageData } 
from "next/image";

interface CCarouselDemo {
    curriculoSlides?: {
        id: number;
        img: string | StaticImageData;
        alt: string;
    }[];

}

export const CarouselDemo: React.FC<CCarouselDemo> = ({ curriculoSlides }) => {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {curriculoSlides?.map(item => (
                    <CarouselItem key={item.id}>
                        <Image src={item.img} alt={item.alt} className="rounded-lg" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}