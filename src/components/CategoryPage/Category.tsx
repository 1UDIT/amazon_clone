'use client'

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=4');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const ProductGridItem = ({ item }: any) => {
  return (
    <div className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white" key={item.id}>
      <Link href={`/Product/${item.id}`}>
        <div className="relative mt-3 flex h-32">
          <Image
            className="cursor-pointer"
            src={item.image}
            alt="product image"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
      </Link>
      <div className="mt-4 px-2 pb-5">
        <span className="text-lg font-bold tracking-tight text-slate-900">{item.category}</span>
      </div>
    </div>
  );
};

const ProductSkeleton = () => {
  return (
    <div className="relative mt-5 flex w-full max-w-xs flex-col overflow-hidden bg-white">
      <div className="relative mt-3 flex h-32">
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  );
};

const Category = () => {
  const router = useRouter();
  const { data, error, isLoading } = useQuery('products', fetchProducts);

  const renderProductGrid = (title: string, data: any) => (
    <div className="col-span-1 bg-white p-5">
      <div className="pl-5 text-xl font-bold">{title}</div>
      <div className="grid grid-cols-2 gap-7 p-5 mix-blend-multiply">
        {isLoading
          ? Array(4).fill(null).map((_, index) => <ProductSkeleton key={index} />)
          : data?.map((item: any) => <ProductGridItem key={item.id} item={item} />)}
      </div>
    </div>
  );

  return (
    <div className="h-full grid grid-cols-1 gap-7 h-[420px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {renderProductGrid('Pick up where you left off', data)}
      {renderProductGrid('Deal For you', data)}
      {renderProductGrid('Upto 60% Off', data)}
      {renderProductGrid('Buy Again', data)}
    </div>
  );
};

export default Category;
