import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs"
import { prisma } from "../../lib/prisma";

declare module 'next-auth' {
    interface User {
      id: number;
    }
}

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { type: "email", label: "Email" },
                password: { type: "password", label: "Password" }
            },
            async authorize(credentials) {
                try {
                    const user = await prisma.user.findUnique({ where: { email: credentials?.email } })
                    if (!user) return null

                    const passmatch = await bcrypt.compare(credentials?.password || "", user.password)

                    if (!passmatch) return null

                    return user

                } catch (error) {
                    console.error(error)
                    return null
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    cookies: {
        sessionToken: {
            name: `next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: "strict",
                path: "/",
            }
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
}