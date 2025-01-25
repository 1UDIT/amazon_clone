'use client'

import Image from "next/image";
import React from "react";
import Ratings from "../Ratings"; // Assuming you want to add ratings in the future
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "react-query";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
 
const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/category/electronics');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
 
const ProductSkeleton = () => (
    <div className="relative mx-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md">
        <div className="relative mx-3 my-3 flex rounded-xl h-32">
            <Skeleton className="h-32 w-full" />
        </div>
    </div>
);

const ProductItem = ({ item }: any) => (
    <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/6">
        <div className="p-1">
            <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 h-32 w-full">
                    <Link className="relative mx-3 flex rounded-xl" href={`/Product/${item.id}`}>
                        <Image
                            className="cursor-pointer"
                            src={item.image}
                            alt="product image" 
                            width={100}
                            height={50}
                            style={{padding:12}}
                            priority={true}
                        />
                    </Link>
                </CardContent>
            </Card>
        </div>
    </CarouselItem>
);

const BestSeller = () => {
    const { data, error, isLoading } = useQuery(['productsElectronics'], fetchProducts);

    return (
        <Carousel opts={{ align: "start" }} className="w-full px-6 py-2">
            <CarouselContent>
                {isLoading ? (
                    Array(19).fill(null).map((_, index) => <ProductSkeleton key={index} />)
                ) : error ? (
                    <div className="text-center text-red-500">Something went wrong. Please try again later.</div>
                ) : (
                    data?.map((item: any) => <ProductItem key={item.id} item={item} />)
                )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default BestSeller;
