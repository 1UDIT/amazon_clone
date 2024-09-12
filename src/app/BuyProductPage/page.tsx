"use client"

import CartItem from '@/components/CartItem';
import { RootState } from '@/Redux/Slice/store';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

// Define the function to fetch data
const fetchData = async () => {
  const response = await axios.get('/api/saveAddress');
  return response.data;
};

const page = () => {
  const { data, error, isLoading, isError } = useQuery(['addressFetch'], fetchData);
  const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    <div className="absolute inset-0 z-10 grid grid-rows-[20%_80%]">
      <div className="w-full h-full px-4 py-12 text-slate-50 bg-[#d1d1d1]">
        <span className='w-full m-2 flex items-center justify-center h-full'>
          <Link href={'/'}>
            <Image
              src={'/img/logo.png'}
              alt="product image"
              width="0"
              height="0"
              sizes="100vw"
              className='h-[30px] w-[97px] inline-block cursor-pointer'
              priority={true}
            />
          </Link>
          <span className='text-lg text-white '>.in</span>
        </span>
      </div>
      <div className='grid grid-rows-[20%_80%]'>
        <div>CheckOut</div>
        <div className='grid grid-cols-[50%_50%] justify-items-center '>
          <div className=' border-2 border-black rounded-lg'>
            <div>Select the address</div>
            {
              data?.message.map((value: any) => {
                return (
                  <div key={value._id}>{value.Name}</div>
                )
              })
            }
          </div>
          <div>
            {cart.map((item: any) => (
              <CartItem key={item.id} item={item} cartItems={cart} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
