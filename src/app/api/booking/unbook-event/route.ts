import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export const DELETE = async (req: NextRequest) => {

    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    const email = url.searchParams.get('email');

    try {
        console.log(Number(id))
        await prisma.bookings.deleteMany({ where: { eventId:Number(id),userId:email ?? "" } })
        return NextResponse.json({ message: "The booking for the event has been deleted successfully" })
    } catch (err) {
        return NextResponse.json({ message: err })
    }
}