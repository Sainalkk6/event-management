import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";

export const GET = async (req: NextRequest,{params}:any ) => {
    try {
        const id = params.eventId
        const event = await prisma.event.findUnique({ where: { id: Number(id) } })
        return NextResponse.json(event)
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong while getting the event, try again later " })
    }
}