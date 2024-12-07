import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export const POST = async(req:NextRequest)=>{
    try{
        const data = await req.json()
        await prisma.bookings.create({data:{userId:data.userId,count:data.count,eventId:data.eventId}})
        return NextResponse.json({message:"This event has been added to your booking"})
    } catch(err){
        return NextResponse.json({message:err})
    }
}