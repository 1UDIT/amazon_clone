import { connectToDatabase } from "@/dbConfig/dbConfig"
import { NextResponse } from "next/server";
import AddressSave from "@/models/Address";

export async function GET() {
    try {
        let { db } = await connectToDatabase();

        let post = await db.collection('AddressSave').find({})
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

        await db.collection("AddressSave").updateMany({}, { $set: { activeAddress: false } });

        const newTask = new AddressSave({
            Name: body.Name,
            Mobile: body.Mobile,
            State: body.State,
            Address: body.Address,
            activeAddress: true
        });
        let myPost = await db.collection("AddressSave").insertOne(newTask);
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


export async function PUT(req: Request) {
    // connect to the database
    let { db } = await connectToDatabase();
    let { Mobile } = await req.json();
    try {

        await db.collection("AddressSave").updateMany({}, { $set: { activeAddress: false } });

        await db.collection("AddressSave").updateOne({ Mobile: Mobile }, { $set: { activeAddress: true } });

        console.log('PUT METHOD', Mobile)

        // return the posts
        return NextResponse.json(
            {
                message: 'activeAddress status updated successfully'
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