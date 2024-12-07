import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { prisma } from "../../../../../../lib/prisma";

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    try {

        const user = await prisma.user.findUnique({ where: { email: data.email } })
        if (user && !user.isAdmin) {
            return NextResponse.json({ message: "User already Exists" ,status:409})
        } else {
            const hashedPass = await bcrypt.hash(data.password, 10)
            await prisma.user.create({
                data: {
                    name:data.name,
                    email: data.email,
                    password: hashedPass,
                    isAdmin: false,
                },
            })
            return NextResponse.json({ message: "User Created Successfully" })
        }


    } catch (err) {
        return NextResponse.json({ message: "Something went wrong while creating a user" })
    }
}

