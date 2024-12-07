import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { pinata } from "@/utils/config";

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const user = await prisma.user.findUnique({ where: { email: data.user } });
    const base64Image = data.imageUrl.split(",")[1];
    const buffer = Buffer.from(base64Image, "base64");

    const file = new File([buffer], "event-image.jpg", {
      type: "image/jpeg",
      lastModified: Date.now(),
    });

    const uploadData = await pinata.upload.file(file);
    const url = await pinata.gateways.createSignedURL({
      cid: uploadData.cid,
      expires: 315360000
    });

    await prisma.event.create({ data: { title: data.title, price: Number(data.price), description: data.description, date: data.date, location: data.location, time: data.time, imageUrl: url, createdBy: user!.id } })
    return NextResponse.json({ message: "New Event has been added Successfully" })
  } catch (err) {
    return NextResponse.json({ message: err })
  }
}