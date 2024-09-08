'use client'
import Image from 'next/image';
import React, { use, useEffect } from 'react'
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaFlag, FaLocationDot } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/Slice/store';

const Navbar = () => {
    const cart = useSelector((state: RootState) => state.cart.cart)
    useEffect(() => {
        console.log("cartLeng", cart)
    }, [cart])
    return (
        <header className='h-22 bg-black w-full'>
            <div className='h-14 grid 2xl:grid-cols-[25%_50%_25%] lg:grid-cols-3 grid-cols-[25%_45%_30%] pt-1'>
                <div className='text-white grid 2xl:grid-cols-[45%_55%] grid-cols-[45%_55%] justify-start'>
                    <span className='w-full m-2  h-9'>
                        <Image
                            src={'/img/logo.png'}
                            alt="product image"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className='h-[30px] w-[97px] inline-block'
                            priority={true}
                        /><span className='text-lg text-white '>.in</span>
                    </span>
                    <span className='grid  grid-cols-[15%_85%] text-xs h-3 pt-1'>
                        <span className='flex items-center'><FaLocationDot className='inline-block' size={20} /></span>
                        <div className='grid grid-rows-[50%_50%] '>
                            <span>Delivering to New Delhi</span>
                            <span>Update Location</span>
                        </div>
                    </span>
                </div>
                <div className='grid grid-cols-1 '>
                    <span className='flex items-center'>
                        <select className="h-10  text-black bg-[#febd69] border border-[#f3a847] rounded-l-md">
                            <option>All</option>
                            <option>Electronics</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search Amazon.in"
                            className="h-10  w-full border border-[#f3a847]"
                        />
                        <button className="h-10 px-4 py-2 bg-[#febd69] border border-[#f3a847]">
                            <FiSearch className="h-5 w-5 text-black" />
                        </button>
                    </span>
                </div>
                <div className='text-white grid 2xl:grid-cols-[20%_35%_25%_20%] grid-cols-[15%_35%_25%_20%]'>
                    <div className="flex items-center space-x-1">
                        <FaFlag className="h-5 w-5" />
                        <span>EN</span>
                    </div>
                    <div className="text-sm">
                        Hello, sign in
                        <div className="font-bold">Account & Lists</div>
                    </div>
                    <div className="text-sm">
                        <div>Returns</div>
                        <div className="font-bold">& Orders</div>
                    </div>
                    <div className="text-sm pt-2 relative ">
                        <div className="absolute left-[10px]">
                            <p
                                className={`flex items-center justify-center text-xs 
                                ${cart.length === 0 ? "hidden" : "block h-5 w-5 rounded-full bg-red-600"}`}
                            >
                                {cart.length}
                            </p>
                        </div>
                        <FiShoppingCart size={30} className='inline-block' />
                        <span className="font-bold">Cart</span>
                    </div>
                </div>
            </div>
            <div className='h-8 grid grid-cols-[15%_60%_20%] bg-[#232f3e] items-center'>
                <div className='text-white grid grid-cols-[50%_50%] justify-start px-2'>
                    <span className='grid  grid-cols-[20%_80%] '>
                        <span className='flex items-center text-lg'><GiHamburgerMenu className='inline-block font-bold' size={20} /></span>
                        <span className='flex items-center'>All</span>
                    </span>
                    <span>Fresh</span>
                </div>
                <div className='text-white grid grid-cols-[20%_20%_20%_20%_20%]'>
                    <span className='grid justify-center' >Prime</span>
                    <span className='grid justify-center' >Today's Deals</span>
                    <span className='grid justify-center' >Electronic</span>
                    <span className='grid justify-center' >Buy Again</span>
                </div>
                {/* <div className='text-white grid grid-cols-[30%_40%]'>
                    <span className='grid justify-center' >userName</span>
                    <span className='grid justify-end' ><FiShoppingCart /></span>
                </div> */}
            </div>
        </header >
    )
}

export default Navbar
