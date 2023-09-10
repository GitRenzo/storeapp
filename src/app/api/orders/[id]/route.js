import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json()
    const { id } = body
    const prisma = new PrismaClient()
    const updatedOrder = await prisma.order.update({
        where: {
            id: parseInt(id)
        },
        data:{
            state: true,
        }
    })

    return new NextResponse(JSON.stringify(body), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
}
