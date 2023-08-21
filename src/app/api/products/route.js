// In next13 you dont use API routes you can use server components or API handlers
// https://nextjs.org/docs/pages/building-your-application/routing/api-routes
import { PrismaClient } from "@prisma/client";
import { NextResponse } from 'next/server'
 
export async function GET() {
  const prisma = new PrismaClient()
  const products = await prisma.product.findMany({
    where: {
        categoryId: 1,
    }
  })
  return NextResponse.json({ products })

}