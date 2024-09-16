'use client'
import CartHeader from '@/components/CartHeader';
import CartItem from '@/components/CartItem';
import { RootState } from '@/Redux/Slice/store';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const page = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const [subtotal, setSubtotal] = useState(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));

    useEffect(() => {
        setSubtotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    }, [cart])


    const updatAddress=()=>{
        console.log("click");
    }



    return (
        <div className="container mx-auto p-4">
            <CartHeader cartItems={cart} subtotal={subtotal} btnText={" Proceed to Buy"} link={"/BuyProductPage"} updatAddress={updatAddress}/>

            <div className="grid grid-cols-12 gap-4 mt-4">
                {/* Cart Items Section */}
                <div className="col-span-8 bg-white p-4 shadow-md">
                    {cart.map((item: any) => (
                        <CartItem key={item.id} item={item} cartItems={cart} />
                    ))}

                    {/* Saved for later */}
                    {/* <div className="mt-6">
                        <h3 className="text-xl font-bold mb-4">Your Items (Saved for Later)</h3>
                        {savedItems.map((item) => (
                            <SavedItem key={item.id} item={item} />
                        ))}
                    </div> */}
                </div>

                {/* Right Sidebar (Recommended Items) */}
                {/* <div className="col-span-4 bg-white p-4 shadow-md">
                    <h3 className="text-xl font-bold mb-4">Pair with your cart</h3>
                    {recommendedItems.map((item) => (
                        <RecommendedItem key={item.id} item={item} />
                    ))}
                </div> */}
            </div>
        </div>
    );
}

export default page
