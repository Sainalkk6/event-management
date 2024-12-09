import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export const GET = async (req: NextRequest) => {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');
        const email = url.searchParams.get('email');
        const isExisting = await prisma.bookings.findFirst({ where: { userId: email ?? "", eventId: Number(id) } })
        if (isExisting) {
            return NextResponse.json({ existing: true })
        } else {
            return NextResponse.json({ existing: false })
        }
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong on our side please try again later" })
    }

}   