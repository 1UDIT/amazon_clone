import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return (
        <header className='h-16 bg-black '>
            <div className='h-9 grid grid-cols-[20%_60%_20%] '>
                <div className='text-white grid grid-cols-[30%_40%] justify-start'>
                    <span>Logo</span>
                    <span>Location</span>
                </div>
                <div className='text-white grid grid-cols-1'>
                    <span className='grid justify-center' >Logo</span> 
                </div>
                <div className='text-white grid grid-cols-[30%_40%]'>
                    <span className='grid justify-center' >userName</span> 
                    <span className='grid justify-end' ><FiShoppingCart /></span> 
                </div>
            </div>
            <div className='grid grid-cols-[20%_60%_20%] bg-black'>
                <div className='text-white grid grid-cols-[30%_40%] justify-start'>
                    <span>Logo</span>
                    <span>Location</span>
                </div>
                <div className='text-white grid grid-cols-1'>
                    <span className='grid justify-center' >Logo</span> 
                </div>
                <div className='text-white grid grid-cols-[30%_40%]'>
                    <span className='grid justify-center' >userName</span> 
                    <span className='grid justify-end' ><FiShoppingCart /></span> 
                </div>
            </div>
        </header>
    )
}

export default Navbar
