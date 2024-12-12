import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { getServerSession } from "next-auth";


export const GET = async (req: NextRequest) => {
    const session = await getServerSession()
    const userEmail = session?.user?.email
    
    try {
        if(userEmail){
            const eventIds = await prisma.bookings.findMany({ where: { userId: userEmail ?? "" } })
        const events = await Promise.all(
            eventIds.map(async (event) => await prisma.event.findMany({ where: { id: event.eventId } }))
        )
        return NextResponse.json(events)
        } else{
            return NextResponse.json({message:"Something went wrong while fetching the events for the current user"})
        }
    } catch (err) {
        return NextResponse.json({ message: err })
    }
}