'use client'

import Image from "next/image";
import React, { useEffect, useMemo } from "react";
import Ratings from "../Ratings";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import { CategoryApi } from "@/Hooks/apiCaller";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Skeleton } from "../ui/skeleton";

const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=4')
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
}



const Category = () => {
    const router = useRouter();
    // const [data] = CategoryApi();
    const [text, setText] = React.useState('')
    const { data, error, isLoading } = useQuery(['products'], fetchProducts);


    return (
        <div className="mb-5 flex w-full flex-col gap-2 ">
            <div className="grid grid-cols-1  gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
                <div className="col-span-1 bg-white p-5">
                    <div className="pl-5 text-lg font-bold">
                        Pick up where you left off
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-5 mix-blend-multiply">
                        {
                            isLoading === true ? Array(4).fill(null).map((_, index) => (
                                <div
                                    className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md"
                                    key={index}
                                >
                                    <div className="relative mx-3 mt-3 flex rounded-xl h-32">
                                        <Skeleton className="h-32 w-full" />
                                    </div>
                                </div>
                            )) :
                                data?.map((Item: any) => {
                                    return (
                                        <div className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md" key={Item.id}>
                                            <a className="relative mx-3 mt-3 flex rounded-xl h-32" href="#">
                                                <Image
                                                    className="cursor-pointer"
                                                    src={Item.image}
                                                    alt="product image"
                                                    width={100}
                                                    height={100}
                                                    priority={true} />
                                            </a>
                                            <div className="mt-4 px-5 pb-5">
                                                <a href="#">
                                                    <span className="text-xs tracking-tight text-slate-900">{Item.category}</span>
                                                </a>
                                            </div>
                                        </div>)
                                })
                        }
                        {/* {data?.map((Item: any) => {
                            return (
                                <div className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md" key={Item.id}>
                                    <a className="relative mx-3 mt-3 flex rounded-xl h-32" href="#">
                                        <Image
                                            className="cursor-pointer"
                                            src={Item.image}
                                            alt="product image"
                                            width={100}
                                            height={100}
                                            priority={true} />
                                    </a>
                                    <div className="mt-4 px-5 pb-5">
                                        <a href="#">
                                            <span className="text-xs tracking-tight text-slate-900">{Item.category}</span>
                                        </a>
                                    </div>
                                </div>
                            )
                        })} */}
                    </div>
                </div>
                <div className="col-span-1 bg-white p-5">
                    <div className="pl-5 text-lg font-bold">
                        Deal For you
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-5 mix-blend-multiply">
                        {
                            isLoading === true ? Array(4).fill(null).map((_, index) => (
                                <div
                                    className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md"
                                    key={index}
                                >
                                    <div className="relative mx-3 mt-3 flex rounded-xl h-32">
                                        <Skeleton className="h-32 w-full" />
                                    </div>
                                </div>
                            )) :
                                data?.map((Item: any) => {
                                    return (
                                        <div className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md" key={Item.id}>
                                            <a className="relative mx-3 mt-3 flex rounded-xl h-32" href="#">
                                                <Image
                                                    className="cursor-pointer"
                                                    src={Item.image}
                                                    alt="product image"
                                                    width={100}
                                                    height={100}
                                                    priority={true} />
                                            </a>
                                            <div className="mt-4 px-5 pb-5">
                                                <a href="#">
                                                    <span className="text-xs tracking-tight text-slate-900">{Item.category}</span>
                                                </a>
                                            </div>
                                        </div>)
                                })
                        }
                    </div>
                </div>
                <div className="col-span-1 bg-white p-5">
                    <div className="pl-5 text-lg font-bold">
                        Upto 60% Off
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-5 mix-blend-multiply">
                        {
                            isLoading === true ? Array(4).fill(null).map((_, index) => (
                                <div
                                    className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md"
                                    key={index}
                                >
                                    <div className="relative mx-3 mt-3 flex rounded-xl h-32">
                                        <Skeleton className="h-32 w-full" />
                                    </div>
                                </div>
                            )) :
                                data?.map((Item: any) => {
                                    return (
                                        <div className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md" key={Item.id}>
                                            <a className="relative mx-3 mt-3 flex rounded-xl h-32" href="#">
                                                <Image
                                                    className="cursor-pointer"
                                                    src={Item.image}
                                                    alt="product image"
                                                    width={100}
                                                    height={100}
                                                    priority={true} />
                                            </a>
                                            <div className="mt-4 px-5 pb-5">
                                                <a href="#">
                                                    <span className="text-xs tracking-tight text-slate-900">{Item.category}</span>
                                                </a>
                                            </div>
                                        </div>)
                                })
                        }
                    </div>
                </div>
                <div className="col-span-1 bg-white p-5">
                    <div className="pl-5 text-lg font-bold">
                        Your Shopping Trends
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-5 mix-blend-multiply">
                        {
                            isLoading === true ? Array(4).fill(null).map((_, index) => (
                                <div
                                    className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md"
                                    key={index}
                                >
                                    <div className="relative mx-3 mt-3 flex rounded-xl h-32">
                                        <Skeleton className="h-32 w-full" />
                                    </div>
                                </div>
                            )) :
                                data?.map((Item: any) => {
                                    return (
                                        <div className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md" key={Item.id}>
                                            <a className="relative mx-3 mt-3 flex rounded-xl h-32" href="#">
                                                <Image
                                                    className="cursor-pointer"
                                                    src={Item.image}
                                                    alt="product image"
                                                    width={100}
                                                    height={100}
                                                    priority={true} />
                                            </a>
                                            <div className="mt-4 px-5 pb-5">
                                                <a href="#">
                                                    <span className="text-xs tracking-tight text-slate-900">{Item.category}</span>
                                                </a>
                                            </div>
                                        </div>)
                                })
                        }
                    </div>
                </div>
                <div className="col-span-1 bg-white p-5">
                    <div className="pl-5 text-lg font-bold">
                        Buy Again
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-5 mix-blend-multiply">
                        {
                            isLoading === true ? Array(4).fill(null).map((_, index) => (
                                <div
                                    className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md"
                                    key={index}
                                >
                                    <div className="relative mx-3 mt-3 flex rounded-xl h-32">
                                        <Skeleton className="h-32 w-full" />
                                    </div>
                                </div>
                            )) :
                                data?.map((Item: any) => {
                                    return (
                                        <div className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white shadow-md" key={Item.id}>
                                            <a className="relative mx-3 mt-3 flex rounded-xl h-32" href="#">
                                                <Image
                                                    className="cursor-pointer"
                                                    src={Item.image}
                                                    alt="product image"
                                                    width={100}
                                                    height={100}
                                                    priority={true} />
                                            </a>
                                            <div className="mt-4 px-5 pb-5">
                                                <a href="#">
                                                    <span className="text-xs tracking-tight text-slate-900">{Item.category}</span>
                                                </a>
                                            </div>
                                        </div>)
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;