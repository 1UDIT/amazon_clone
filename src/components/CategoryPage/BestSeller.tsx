'use client'

import Image from "next/image";
import React, { useEffect } from "react";
import Ratings from "../Ratings";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useRouter } from "next/navigation";
import { CategorySelect } from "@/Hooks/apiCaller";

const BestSeller = () => {
    const [data] = CategorySelect();
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full px-6 py-2"
        >
            <CarouselContent>
                {data?.map((Item: any) => (
                    <CarouselItem key={Item.id} className="md:basis-1/2 lg:basis-1/6">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6 h-32 w-full">
                                    <a className="relative mx-3 mt-3 flex rounded-xl " href="#">
                                        <Image
                                            className="cursor-pointer"
                                            src={Item.image}
                                            alt="product image"
                                            width={100}
                                            height={100}
                                            priority={true} />
                                    </a>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    );
}

export default BestSeller
