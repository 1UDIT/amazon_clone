import { connectToDatabase } from "@/dbConfig/dbConfig"
import Address from "@/models/Address";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        let { db } = await connectToDatabase();

        let post = await db.collection('news').find({})
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
    let formData = await req.formData();
    let body = Object.fromEntries(formData);
    try {
        const newTask = new Address({
            Name: body.Name,
            Mobile: body.Mobile,
            State: body.State,
            Address: body.Address,
        });
        let myPost = await db.collection("schedules").insertOne(newTask);
        // return the posts
        return NextResponse.json(
            {
                message: myPost
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