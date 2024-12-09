import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";

export const GET = async (req: NextRequest) => {
    try {
        const data = await prisma.user.findMany({ where: { isAdmin: true } })
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong while fetching the Admin users" })
    }
}