import Link from "next/link";
import React from "react";

type SubtotalProps = {
  cartItems: { length: number }
  subtotal: number;
};

export default function CartHeader({ cartItems, subtotal }: SubtotalProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center bg-white p-4 shadow-md">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <div>
          <p className="text-lg">Subtotal ({cartItems.length} items): ₹{Math.round(subtotal)}</p>
          <Link href={'/BuyProductPage'}>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded">
              Proceed to Buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
