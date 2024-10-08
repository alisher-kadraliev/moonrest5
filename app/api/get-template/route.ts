import connectMongo from "@/lib/db";
import prisma from "@/lib/PrismaConnect";
import { NextResponse } from "next/server";

// Function to handle CORS
function setCORSHeaders(response: NextResponse) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

// Handle the GET request
export async function GET(req: Request) {
    const url = new URL(req.url);
    const domain = url.searchParams.get('domain');

    // Handle CORS preflight request
    if (req.method === 'OPTIONS') {
        const response = new NextResponse(null, { status: 204 });
        setCORSHeaders(response);
        return response;
    }

    if (!domain) {
        const response = new NextResponse(JSON.stringify({ error: 'Domain query parameter is required' }), { status: 400 });
        setCORSHeaders(response);
        return response;
    }

    try {
        await connectMongo();

        const template = await prisma.popupTemplate.findMany({
            where: { domain: domain }
        });

        if (!template || template.length === 0) {
            const response = new NextResponse(JSON.stringify({ error: 'Template not found' }), { status: 404 });
            setCORSHeaders(response);
            return response;
        }

        const response = new NextResponse(JSON.stringify(template), { status: 200 });
        setCORSHeaders(response);
        return response;
    } catch (error) {
        const response = new NextResponse(JSON.stringify({ message: 'Internal Server Error', error }), { status: 500 });
        setCORSHeaders(response);
        return response;
    }
}