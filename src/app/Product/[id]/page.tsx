'use client'

import { addToCart } from '@/Redux/Slice/cartSlice';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

interface props {
  id: any
}

const fetchProducts = async (id: any) => {
  console.log(id, "ID inside")
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}



const page = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(['productsId', id], () => fetchProducts(id));
  const discount = ((200 - data?.price) / 200) * 100;
  const dispatch = useDispatch();
  console.log(data, "data")
  return (
    <div className="container mx-auto p-4">
      {/* Main container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Image Section */}
        <div className="col-span-1">
          {data?.image ? <Image
            className="cursor-pointer"
            src={data?.image}
            alt="product image"
            width={100} // Set the width
            height='100' // Maintain aspect rationext js image
            style={{ height: '100%', width: '100%' }} // Ensure height scales proportionally
            priority={true} /> : null
          }
        </div>

        {/* Product Details Section */}
        <div className="col-span-1 lg:col-span-2">
          <h1 className="text-2xl font-bold">
            {data?.title}
          </h1>
          <p className="text-gray-600">
            {data?.description}
          </p>
          <div className="mt-2 flex items-center space-x-2">
            {/* Ratings */}
            <span className="text-yellow-500">★★★★☆</span>
            <span className="text-gray-500">150 ratings</span>
          </div>

          {/* Pricing */}
          <div className="mt-4">
            <p className="text-xl font-bold text-red-600">₹{data?.price}</p>
            <p className="text-sm text-gray-500 line-through">₹{isLoading === true ? null : 200}</p>
            <p className="text-green-600">Inclusive of all taxes</p>
          </div>

          {/* Offers */}
          <div className="mt-4 space-y-2">
            <div className="bg-gray-100 p-2 rounded">
              <p>Bank Offer: Upto ₹1,750 discount</p>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <p>No Cost EMI: EMI starts at ₹582</p>
            </div>
          </div>
        </div>

        {/* Right Side Section */}
        <div className="col-span-1">
          <div className="bg-white border p-4 rounded shadow-sm">
            <p className="text-xl font-bold">₹{data?.price}</p>
            {/* <p className="text-red-600">-52% off</p> */}
            {/* Buttons */}
            <p className="text-red-600">{isLoading === false ? (Math.round(discount)) : null}% off</p>
            <div className="mt-4">
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded">
                Buy Now
              </button>
              <button onClick={() => dispatch(addToCart(data))}  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 rounded mt-2">
                Add to Cart
              </button>
            </div>

            {/* Warranty */}
            {data?.category === "Electronic" ?
              <div className="mt-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                  <span className="ml-2"> 1 Year Extended Warranty for ₹898.90</span>
                </label>
              </div>
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;