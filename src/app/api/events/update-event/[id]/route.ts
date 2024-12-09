import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";

export const PUT = async (req: NextRequest) => {
    const {searchParams} = new URL(req.url)
    const id  = searchParams.get("id")
    const data = await req.json()
    try {
        const event = await prisma.event.update({ where: { id: Number(id) }, data: { ...data } })
        return NextResponse.json({ message: "Successfully updated the event details", data: event })
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong while updating the even try again" })
    }
}