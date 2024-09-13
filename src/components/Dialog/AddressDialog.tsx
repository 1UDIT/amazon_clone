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
import { useQuery } from 'react-query';


const formSchema = z.object({
    Name: z.string().min(3).max(50),
    Mobile: z.string().max(10),
    Address: z.string(),
    State: z.string(),
});

// Define the function to fetch data
const fetchData = async () => {
    const response = await axios.get('/api/saveAddress');
    return response.data;
};

const AddressDialog = () => {
    const { data, error, isLoading, isError } = useQuery(['addressFetch'], fetchData);
    const deliverAddress = !isLoading && data?.message 
    ? data.message
        .filter((value: any) => value.activeAddress) // Filter active items
        .map((value: any) => value.Name)   // Map to their content
    : [];
  
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Name: "",
            Mobile: "",
            Address: "",
            State: "Delhi",
        },
    }); 

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        var bodyFormData = new FormData();
        bodyFormData.append('Name', values.Name);
        bodyFormData.append('Mobile', values.Mobile);
        bodyFormData.append('State', values.State);
        bodyFormData.append('Address', values.Address);
        await axios({
            method: 'post',
            url: `/api/saveAddress`,
            data: bodyFormData,
        }).then(response => {
            console.log("getItems response:-", response.data, "done");
            // setData(response.data.Items); 
        }).catch(error => {
            console.log("Error In Post Data getItems", error);
        });
    };

    const AddressForm = (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="Name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Mobile"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mobile No.</FormLabel>
                            <FormControl>
                                <Input placeholder="Mobile" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input placeholder="Address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="State"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="State" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Delhi">Delhi</SelectItem>
                                        <SelectItem value="Mumbai">Mumbai</SelectItem>
                                    </SelectContent>
                                </Select>
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
                    <span className='grid justify-start'>Delivering to {isLoading === false ? deliverAddress[0] : null}</span>
                    <span className='grid justify-start'>Update Location</span>
                </>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Update Address</DialogTitle>
                <DialogDescription>
                </DialogDescription>
                {AddressForm}
            </DialogContent>
        </Dialog>
    )
}

export default AddressDialog
