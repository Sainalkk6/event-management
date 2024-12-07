import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { prisma } from "../../../../../../lib/prisma";

export const POST = async (req: NextRequest) => {
    const data = await req.json();
    try {
        const user = await prisma.user.findUnique({ where: { email: data.email } })
        if (user && user.isAdmin) {
            return NextResponse.json({ message: "Admin Already Exists", status: 409 })
        } else {
            const hashedPass = await bcrypt.hash(data.password, 10)
            const newUser = await prisma.user.create({ data: { ...data, name: "", isAdmin: true, password: hashedPass } })
            return NextResponse.json({ message: "Admin user has been successfully created", user: newUser })

        }
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong while creating a user with admin role" })
    }
}