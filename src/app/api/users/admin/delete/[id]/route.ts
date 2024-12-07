import { NextResponse } from "next/server"
import { prisma } from "../../../../../../../lib/prisma";

export const DELETE = async (_: Request, { params }: { params: { id: string } }) => {
    try {
        const id = params.id;
        await prisma.user.delete({ where: { id, isAdmin: true } })
        return NextResponse.json({ message: "Successfullu deleted an admin user" })
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong while deleting an admin user , check whether you have correct permission to do this action" })
    }
}