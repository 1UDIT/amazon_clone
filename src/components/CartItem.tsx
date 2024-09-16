import { decrementQuantity, incrementQuantity, removeFromCart } from "@/Redux/Slice/cartSlice"; 
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const options = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
];

type props = {
    item: {
        image: any;
        title: string;
        price: number;
        quantity: number;
        id: number;
    };
    cartItems: any
};

export default function CartItem({ item, cartItems }: props) {
    const [selectedValue, setSelectvalue] = useState<string>(`${item.quantity}`);
    const dispatch = useDispatch();

    const handleChangeQuantity = (newQuantity: any, productId: any) => {
        const product = cartItems.find((item: any) => item.id === productId);

        if (product.quantity < newQuantity) {
            dispatch(incrementQuantity({ id: product.id, amount: newQuantity }));
        } else {
            dispatch(decrementQuantity({ id: product.id, amount: newQuantity }));
        }

        setSelectvalue(newQuantity);
    };




    return (
        <div className="flex items-center justify-between border-b py-4">
            <img src={item.image} alt={item.title} className="w-24 h-24 object-cover" />
            <div className="flex-1 px-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">Price: ₹{item.price}</p>
                {/* Quantity Selector */}
                <div className="flex items-center">
                    <p className="mr-2 text-sm">Quantity:</p>
                    <Select
                        value={selectedValue}
                        onValueChange={(ev) =>
                            handleChangeQuantity(ev, item.id)
                        }
                    >
                        <SelectTrigger className="w-24">
                            <SelectValue placeholder="Qty:1" />
                        </SelectTrigger>
                        <SelectContent>
                            {options.map((value) => (
                                <SelectItem key={value.value} value={value.value}>
                                    {value.value}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Button className="text-blue-500 text-sm" onClick={() => {
                    dispatch(removeFromCart(item.id));
                    toast("Delete item");
                }}>Delete</Button>
            </div>
        </div>
    );
}
