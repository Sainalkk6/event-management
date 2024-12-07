import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";


export const GET = async (req: NextRequest) => {
    try {
        const events = await prisma.event.findMany()
        return NextResponse.json(events)

    } catch (err) {
        return NextResponse.json({ message: "Something went wrong while fetching the event , please try again later", err })
    }
}