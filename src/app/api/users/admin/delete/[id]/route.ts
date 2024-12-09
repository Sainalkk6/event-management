import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../../../../lib/prisma";



export const DELETE = async (req:NextRequest,{params}:any) => {
    try {
        const id = params.id
        await prisma.user.delete({ where: { id:Number(id), isAdmin: true } })
        return NextResponse.json({ message: "Successfullu deleted an admin user" })
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong while deleting an admin user , check whether you have correct permission to do this action" })
    }
}