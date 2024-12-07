import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";

export const DELETE = async (_: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const { id } = params
        await prisma.event.delete({ where: { id: Number(id) } })
        return NextResponse.json({message:"Successfully deleted an event"})
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong while deleting the event", err })
    }
}