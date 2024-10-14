import connectMongo from "@/lib/db";
import prisma from "@/lib/PrismaConnect";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        await connectMongo();
        const { inputValue } = await request.json(); // Parse the incoming JSON

        // Assuming you want to save the inputValue to the database
        const newAction = await prisma.campaignAction.update({
            where: {
                id: '67063ef5fcac59965c15c49b',
            },
            data: {
                bgColor: inputValue, // Adjust this according to your database schema
                title: 'a', // Add required properties
                description: 'a', // Add required properties
                imageUrl: 'a', // Add required properties
                buttonText: 'a', // Add required properties
                buttonUrl: 'a', // Add required properties
                textColor: 'a', // Add required properties
                type: 'MODAL', // Add required properties
                campaignId: '67063ebbfcac59965c15c496',

            },
        });

        return NextResponse.json(newAction, { status: 201 }); // Return the created action
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
    }
}
