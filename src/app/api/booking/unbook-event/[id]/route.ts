import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";

export const DELETE = async (_: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const { id } = params
        await prisma.bookings.delete({ where: { id: Number(id) } })
        return NextResponse.json({ message: "The booking for the event has been deleted successfully" })
    } catch (err) {
        return NextResponse.json({ message: err })
    }
}