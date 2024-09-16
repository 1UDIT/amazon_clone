"use client"

import axios from 'axios';
import Image from 'next/image';
import React, { Fragment } from 'react'
import { useQuery } from 'react-query';

// Define the function to fetch data
const fetchData = async () => {
    const response = await axios.get('/api/saveCart');
    return response.data.message;
};

const Page = () => {
    const { data, error, isLoading, isError } = useQuery(['OrderFetch'], fetchData);
    console.log(data?.order, "data", isLoading);
    return (
        <div className='w-full grid justify-center'>
            <div className='max-w-full p-2 m-2 '>
                {
                    !isLoading && data.map((value: any, indx: any) => {
                        return (
                            <Fragment key={indx}>
                                {value?.order.map((data: any) => {
                                    return (
                                        <div className='border-2 boder-black rounded-xl border-solid grid grid-cols-[20%_80%] h-[10rem] items-center m-2 ' key={data.id}>
                                            <div className='h-[8rem]'>
                                                <Image
                                                    className="cursor-pointer"
                                                    src={data?.image}
                                                    alt="product image"
                                                    width={100} // Set the width
                                                    height='100' // Maintain aspect rationext js image
                                                    style={{ height: '100%', width: '100%' }} // Ensure height scales proportionally
                                                    priority={true} />
                                            </div>
                                            <div>{data.title}</div>
                                        </div>
                                    )
                                })
                                }
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Page;
