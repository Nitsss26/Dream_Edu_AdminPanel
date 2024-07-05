// import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import { connectToDB } from "@/lib/mongoDB";
import Contact from "@/lib/models/Contact";
import Product from "@/lib/models/Product";
import { NextRequest, NextResponse } from "next/server";

const applyCORS = (response: NextResponse) => {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
};

export const GET = async (
  req: NextRequest,
  { params }: { params: { contactId: string } }
) => {
  try {
    await connectToDB();

    const contact = await Contact.findById(params.contactId).populate({
      path: "products",
      model: Product,
    });

    if (!contact) {
      const response = new NextResponse(
        JSON.stringify({ message: "Contact not found" }),
        { status: 404 }
      );
      return applyCORS(response);
    }

    const response = NextResponse.json(contact, { status: 200 });
    return applyCORS(response);
  } catch (err) {
    console.log("[contactId_GET]", err);
    const response = new NextResponse("Internal error", { status: 500 });
    return applyCORS(response);
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { contactId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      const response = new NextResponse("Unauthorized", { status: 401 });
      return applyCORS(response);
    }

    await connectToDB();

    let contact = await Contact.findById(params.contactId);

    if (!contact) {
      const response = new NextResponse("Contact not found", { status: 404 });
      return applyCORS(response);
    }

    const {
      title,
      description,
      image,
      field1,
      field2,
      field3,
      field4,
      field5,
      field6,
      field7,
      field8,
      field9,
    } = await req.json();

    if (!title || !image) {
      const response = new NextResponse("Title and image are required", { status: 400 });
      return applyCORS(response);
    }

    contact = await Contact.findByIdAndUpdate(
      params.contactId,
      {
        title,
        description,
        image,
        field1,
        field2,
        field3,
        field4,
        field5,
        field6,
        field7,
        field8,
        field9,
      },
      { new: true }
    );

    await contact.save();

    const response = NextResponse.json(contact, { status: 200 });
    return applyCORS(response);
  } catch (err) {
    console.log("[contactId_POST]", err);
    const response = new NextResponse("Internal error", { status: 500 });
    return applyCORS(response);
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { contactId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      const response = new NextResponse("Unauthorized", { status: 401 });
      return applyCORS(response);
    }

    await connectToDB();

    await Contact.findByIdAndDelete(params.contactId);

    await Product.updateMany(
      { contact: params.contactId },
      { $pull: { contact: params.contactId } }
    );

    const response = new NextResponse("Contact is deleted", { status: 200 });
    return applyCORS(response);
  } catch (err) {
    console.log("[contactId_DELETE]", err);
    const response = new NextResponse("Internal error", { status: 500 });
    return applyCORS(response);
  }
};

export const OPTIONS = async () => {
  const response = new NextResponse(null, { status: 204 });
  return applyCORS(response);
};

export const dynamic = "force-dynamic";
