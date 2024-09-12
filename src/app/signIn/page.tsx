"use client"

import React from 'react'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import axios from 'axios';

const formSchema = z.object({
    Name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    Password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
});


const page = () => {
    
    const route = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Name: "admin",
            Password: "admin",
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        if (values.Name === values.Password) {
            route.push('/');
            localStorage.setItem("login", "true");
        }
    };


    const AddressForm = (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="Name"
                    render={({ field }) => (
                        <FormItem className='  text-black'>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="admin" {...field} value={"admin"} />
                            </FormControl>
                            <FormMessage className='w-full' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Password"
                    render={({ field }) => (
                        <FormItem className='  text-black'>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="admin" {...field} type='password' value={"admin"} />
                            </FormControl>
                            <FormMessage className='w-full' />
                        </FormItem>
                    )}
                />
                <div className='flex justify-center'>
                    <Button type="submit" variant={'outline'} className='border-2 border-white rounded-lg  text-black bg-[#f0b902] hover:bg-[#F7CA00] hover:border-[#F2C200]'>Submit</Button>
                </div>
            </form>
        </Form>
    )

    return (
        <div className="absolute inset-0 z-10 grid grid-rows-[20%_80%] justify-items-center bg-[#d1d1d1]">
            <div className="w-full h-full px-4 py-12 text-slate-50 ">
                <span className='w-full m-2 flex items-center justify-center h-full'>
                    <Image
                        src={'/img/logo.png'}
                        alt="product image"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className='h-[30px] w-[97px] inline-block cursor-pointer'
                        priority={true}
                    />
                    <span className='text-lg text-white '>.in</span>
                </span>
            </div>
            <div className="w-full max-w-md h-80 px-4 py-2 text-slate-50 border-2 border-white rounded-lg bg-white ">
                <span className='text-black text-xl py-3'>Sign in</span>
                {AddressForm}
            </div>
        </div>
    )
}

export default page
