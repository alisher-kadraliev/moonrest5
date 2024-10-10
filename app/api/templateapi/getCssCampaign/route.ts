import connectMongo from "@/lib/db";
import prisma from "@/lib/PrismaConnect";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        await connectMongo();
        const campaignAction = await prisma.campaignAction.findMany()
        return new NextResponse(campaignAction.map(action => action.bgColor).join(', ')) 

    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
    }
}