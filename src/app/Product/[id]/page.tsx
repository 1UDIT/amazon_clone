'use client'

import { useParams } from 'next/navigation';
import React from 'react'
import { useQuery } from 'react-query';

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
  console.log(id, "ID")
  const { data, error, isLoading } = useQuery(['productsId', id], () => fetchProducts(id));
  return (
    <div className="container mx-auto p-4">
      {/* Main container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Image Section */}
        <div className="col-span-1">
          <img
            src="https://example.com/product-image.jpg"
            alt="Product"
            className="w-full h-auto object-cover"
          />
          <div className="flex space-x-2 mt-4">
            {/* Thumbnail Images */}
            <img
              src="https://example.com/thumbnail1.jpg"
              alt="Thumbnail"
              className="w-16 h-16 object-cover border border-gray-300"
            />
            <img
              src="https://example.com/thumbnail2.jpg"
              alt="Thumbnail"
              className="w-16 h-16 object-cover border border-gray-300"
            />
            {/* Add more thumbnails as needed */}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-span-1 lg:col-span-2">
          <h1 className="text-2xl font-bold">
            GIGABYTE G24F 2 23.8 Inch Gaming LED Monitor
          </h1>
          <p className="text-gray-600">
            165Hz, 1920 X 1080, SS IPS Display, 1ms Response Time, HDR Ready
          </p>
          <div className="mt-2 flex items-center space-x-2">
            {/* Ratings */}
            <span className="text-yellow-500">★★★★☆</span>
            <span className="text-gray-500">150 ratings</span>
          </div>

          {/* Pricing */}
          <div className="mt-4">
            <p className="text-xl font-bold text-red-600">₹11,999</p>
            <p className="text-sm text-gray-500 line-through">₹25,000</p>
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
            <p className="text-xl font-bold">₹11,999</p>
            <p className="text-red-600">-52% off</p>

            {/* Buttons */}
            <div className="mt-4">
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded">
                Buy Now
              </button>
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 rounded mt-2">
                Add to Cart
              </button>
            </div>

            {/* Warranty */}
            <div className="mt-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-2">1 Year Extended Warranty for ₹898.90</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;