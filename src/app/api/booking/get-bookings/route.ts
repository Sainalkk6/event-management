import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { getServerSession } from "next-auth";


export const GET = async (req: NextRequest) => {
    const session = await getServerSession()
    const userEmail = session?.user?.email
    console.log(userEmail)

    try {
        if (userEmail) {
            const events = await prisma.bookings.findMany({ where: { userId: userEmail ?? "" },include:{event:true} })
            return NextResponse.json(events)
        } else {
            return NextResponse.json({ message: "Something went wrong while fetching the events for the current user" })
        }
    } catch (err) {
        return NextResponse.json({ message: err })
    }
}