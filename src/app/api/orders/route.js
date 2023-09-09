// Next 13 API routes and handlers 
// https://nextjs.org/docs/pages/building-your-application/routing/api-routes
import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client';
 

export async function GET() {
    const prisma = new PrismaClient()
    const orders = await prisma.order.findMany({
        where:{
            state: false
        }
    })
   
    return NextResponse.json({ orders })
  }

export async function POST(request){
    const prisma = new PrismaClient()
    
    const body = await request.json()
    // console.log(body);
    const orderPrisma = await prisma.order.create({
        data: {
            name: body.name,
            total: body.total,
            clientOrder: body.order,
            date: body.date
        }
    })
    return new NextResponse(JSON.stringify(body), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
    }