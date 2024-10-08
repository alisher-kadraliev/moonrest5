import connectMongo from "@/lib/db";
import prisma from "@/lib/PrismaConnect";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongo();
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
}

export async function POST(req: Request) {
    try {
        await connectMongo();
        const { title } = await req.json();
        await prisma.post.create({ data: { title } });
        return NextResponse.json({ message: 'Post created successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to create post ',error }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        await connectMongo();
        const { id } = await req.json();
        await prisma.post.delete({ where: { id } });
        return NextResponse.json({ message: 'Post deleted successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to delete post ',error }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        await connectMongo();
        const { id, title } = await req.json();
        await prisma.post.update({ where: { id }, data: { title } });
        return NextResponse.json({ message: 'Post updated successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to update post ',error }, { status: 500 });
    }
}
