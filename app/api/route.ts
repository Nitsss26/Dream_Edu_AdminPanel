import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

import Home from "@/lib/models/Home";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    await connectToDB();

    const {
      title,
      description1,
      description2,
      description3,
      description4,
      description5,
      description6,
      description7,
      description8,
      description9,
      description10,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      field1,
      field2,
      field3,
      field4,
      field5,
      field6,
      field7,
      field8,
      field9,
      field10,
      field11,
      field12,
      field13,
      field14,
      field15,
      field16,
      field17,
      field18,
    } = await req.json();

    const existing = await Home.findOne({ title });

    if (existing) {
      return new NextResponse("Collection already exists", { status: 400 });
    }

    if (!title) {
      return new NextResponse("Title and image are required", { status: 400 });
    }

    const newCollection = await Home.create({
      title,
      description1,
      description2,
      description3,
      description4,
      description5,
      description6,
      description7,
      description8,
      description9,
      description10,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      field1,
      field2,
      field3,
      field4,
      field5,
      field6,
      field7,
      field8,
      field9,
      field10,
      field11,
      field12,
      field13,
      field14,
      field15,
      field16,
      field17,
      field18,
    });

    await newCollection.save();

    return NextResponse.json(newCollection, { status: 200 });
  } catch (err) {
    console.log("[home_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();

    const home = await Home.find()

    return NextResponse.json(home, { status: 200 });
  } catch (err) {
    console.log("[home_GET]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const dynamic = "force-dynamic";
