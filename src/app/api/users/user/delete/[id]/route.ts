import { NextResponse } from "next/server"
import { prisma } from "../../../../../../../lib/prisma";

export const DELETE = async (_: Request, { params }: { params: { id: string } }) => {
    try {
        const id = params.id;
        await prisma.user.delete({ where: { id, isAdmin: false } })
        return NextResponse.json({ message: "User has been successfully removed" })

    } catch (err) {
        return NextResponse.json({ message: "Something went wrong while deleting the user " })
    }
}