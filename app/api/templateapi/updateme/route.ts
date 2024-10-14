import connectMongo from '@/lib/db';
import prisma from '@/lib/PrismaConnect';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
    try {
        await connectMongo()
        const { title } = await req.json()

        const campaignAction = await prisma.campaignAction.update({
            where: { id: "67063ef5fcac59965c15c49b" },
            data: {
                title,
                description: "test",
                imageUrl: "test",
                buttonText: "test",
                buttonUrl: "test",
                bgColor: "test",
                textColor: "test",
                type: "MODAL",
                campaignId: "67063ebbfcac59965c15c496",
            }
        })

        return NextResponse.json({ message: 'Campaign Action Updated', campaignAction })
    } catch (error) {
        console.error("Error updating campaign action:", error)
        return NextResponse.json({ message: 'Internal Server Error', error: error }, { status: 500 })
    }
}