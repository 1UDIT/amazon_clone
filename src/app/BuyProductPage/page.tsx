"use client"

import CartItem from '@/components/CartItem';
import { RootState } from '@/Redux/Slice/store';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';
import CartHeader from '@/components/CartHeader';


// Define the function to fetch data
const fetchData = async () => {
  const response = await axios.get('/api/saveAddress');
  return response.data;
};

// Example function to post data to the server
const postData = async (newData: any) => {
  await axios({
    method: 'put',
    url: `/api/saveAddress`,
    data: { Mobile: newData },
  }).catch(error => {
    console.log("Error In Post Data getItems", error);
  });
};



const page = () => {
  const { data, error, isLoading, isError } = useQuery(['addressFetch'], fetchData);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [select, setSelect] = useState({ name: data?.message[0].Name, Mobile: '' });
  const [subtotal, setSubtotal] = useState(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  useEffect(() => {
    setSubtotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [cart])
  const deliverAddress = !isLoading && data?.message
    ? data.message
      .filter((value: any) => value.activeAddress) // Filter active items
      .map((value: any) => value.Name)   // Map to their content
    : [];
  const queryClient = useQueryClient();

  // Using useMutation to handle the mutation
  const mutation = useMutation(postData, {
    onSuccess: () => {
      // Invalidate and refetch any queries after a successful mutation
      queryClient.invalidateQueries(['data']);
    },
    onError: (error) => {
      // Handle errors here
      console.error('Error posting data:', error);
    },
  });
  const updatAddress = () => {
    mutation.mutate(select.Mobile);
  }

  return (
    <div className="grid grid-rows-[5%_95%] h-screen">
      <div className="w-full h-full  text-slate-50 bg-[#d1d1d1]">
        <span className='w-full flex items-center justify-center h-full'>
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
      <div className='grid grid-rows-[25%_74%] 2xl:black'> 
        <div className='h-full'>
          <CartHeader cartItems={cart} subtotal={subtotal} />
        </div>
        <div className='grid container mx-auto grid-cols-1  justify-items-center'>
          <div className='border-2 border-black rounded-lg w-full h-full lg:px-3 xl:px-4 2xl:px-9'>
            <div className='h-[10%] flex items-center justify-center text-xl my-1'>Select the address</div>
            <div className='border-2 border-black rounded-lg h-[80%] text-lg '>
              {!isLoading && data?.message.map((value: any) => {
                console.log(deliverAddress[0], "deliverAddress[0] === select.name", select)
                return (
                  <RadioGroup className={`${deliverAddress[0] === value.Name ? 'bg-red-100' : 'bg-white'} px-5`} defaultValue={deliverAddress[0]} key={value._id} value={select.name}
                    onValueChange={() => setSelect({ name: value.Name, Mobile: value.Mobile })}>
                    <div className="flex items-center space-x text-lg">
                      <RadioGroupItem value={value.Name} id="option-one" />
                      <Label htmlFor={value.Name} className='text-lg m-2'><div>{value.Name}</div><div>{value.Address}</div></Label>
                    </div>
                  </RadioGroup>
                )
              })
              }
            </div>
            <div className='p-1 flex items-center justify-center text-xl'>
              <Button variant={'destructive'} onClick={() => updatAddress()}>Save</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page
