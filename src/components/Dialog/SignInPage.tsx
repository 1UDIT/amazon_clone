import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from '../ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '../ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import axios from 'axios';


const formSchema = z.object({
    Name: z.string().min(3).max(6),
    Password: z.string().min(3).max(6),
});


const SignInPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Name: "",
            Password: "",
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    };


    const AddressForm = (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="Name"
                    render={({ field }) => (
                        <FormItem className='grid grid-cols-[20%_80%] items-center'>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Admin" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Password"
                    render={({ field }) => (
                        <FormItem className='grid grid-cols-[20%_80%] items-center'>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Admin" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant={'outline'} className='bg-green-300'>Submit</Button>
            </form>
        </Form>
    )

    return (
        <Dialog>
            <DialogTrigger className='grid justify-start'>
                <>
                    <span className='grid justify-start'>Hello, sign in</span>
                    <span className='grid justify-start'>Account & Lists</span>
                </>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update Address</DialogTitle>
                    {AddressForm}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SignInPage
