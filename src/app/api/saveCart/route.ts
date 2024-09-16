import { connectToDatabase } from "@/dbConfig/dbConfig"
import saveCart from "@/models/saveCart";
import { NextResponse } from "next/server"; 

export async function GET() {
    try {
        let { db } = await connectToDatabase();

        let post = await db.collection('Order').find({})
            .sort({ published: -1 })
            .toArray();
        // return the posts


        return Response.json({
            message: post,
        }, {
            status: 200,
        });
    } catch (error: any) {
        // return the error
        return NextResponse.json({
            message: new Error(error).message,
            success: false,
        }, {
            status: 400,
        });
    }
}


export async function POST(req: Request) {
    // connect to the database
    let { db } = await connectToDatabase(); 
    let { address, order } = await req.json();
    try {
 

        const newTask = new saveCart({
            address: address,
            order: order,
        });
         await db.collection("Order").insertOne(newTask);
        // return the posts
        return NextResponse.json(
            {
                message: "Submitted"
            },
            {
                status: 201,
                headers: {
                    'content-type': 'application/json',
                    'cache-control': 'public, max-age=315360, immutable',
                },
            });
    } catch (error: any) {
        // return the error
        return NextResponse.json({
            message: new Error(error).message,
            success: false,
        },
            {
                status: 400,
            });
    }

}
