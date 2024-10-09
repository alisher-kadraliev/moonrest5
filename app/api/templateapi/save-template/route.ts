import connectMongo from '@/lib/db';
import prisma from '@/lib/PrismaConnect';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        await connectMongo();
        const { domain, title } = await req.json();
        const result = await prisma.domain.create({ data: { domain, title } });
        return NextResponse.json({ message: 'Domain Saved', id: result.id });
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
    }
}