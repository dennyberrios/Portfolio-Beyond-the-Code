import * as React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

interface CCarouselDemo {
    curriculoSlides?: {
        id: number;
        img: string | StaticImageData; // Pode ser um componente ou uma URL de imagem
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


/* 

export const CarouselDemo: React.FC<CCarouselDemo> = ({arrayImg}) => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

*/

