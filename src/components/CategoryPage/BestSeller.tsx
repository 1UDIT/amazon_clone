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
import { useQuery } from "react-query";
import { Skeleton } from "../ui/skeleton";


const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/category/electronics')
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
}


const BestSeller = () => {
    // const [data] = CategorySelect();
    const { data, error, isLoading } = useQuery(['productsElectroinc'], fetchProducts);

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full px-6 py-2"
        >
            <CarouselContent>
                {
                    isLoading === true ? Array(19).fill(null).map((_, index) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                            <div
                                className="relative mx-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md"
                                key={index}
                            >
                                <div className="relative mx-3 my-3 flex rounded-xl h-32">
                                    <Skeleton className="h-32 w-full" />
                                </div>
                            </div>
                        </CarouselItem>
                    )) :
                        data?.map((Item: any) => (
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
                        ))
                }

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    );
}

export default BestSeller
