import connectMongo from "@/lib/db";
import prisma from "@/lib/PrismaConnect";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
       url.searchParams.get('domain');

        await connectMongo();

        const template = await prisma.popupTemplate.findMany();

        if (!template) {
            return NextResponse.json({ error: 'Template not found' }, { status: 404 });
        }

        return NextResponse.json(template);
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
    }
}