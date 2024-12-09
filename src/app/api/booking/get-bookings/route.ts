import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export const GET = async (req: NextRequest) => {
    const session = await getServerSession()
    const userEmail = session?.user?.email
    
    try {
        const eventIds = await prisma.bookings.findMany({ where: { userId: userEmail ?? "" } })
        const events = await Promise.all(
            eventIds.map(async (event) => await prisma.event.findMany({ where: { id: event.eventId } }))
        )
        return NextResponse.json(events)
    } catch (err) {
        return NextResponse.json({ message: err })
    }
}