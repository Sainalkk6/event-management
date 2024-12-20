import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Bookago",
  description: "Generated by Next.js",
};

import AuthProvider from "@/providers/SessionProvider";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Loading from "./loading";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <AuthProvider>
          <QueryProvider>
            <Suspense fallback={<Loading/>} />
            <main className={` ${poppins.variable}`}>{children}</main>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
