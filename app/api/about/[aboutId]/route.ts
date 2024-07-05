// import { NextRequest, NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs";

// import { connectToDB } from "@/lib/mongoDB";
// import About from "@/lib/models/About";
// import Product from "@/lib/models/Product";

// export const GET = async (
//   req: NextRequest,
//   { params }: { params: { aboutId: string } }
// ) => {
//   try {
//     await connectToDB();

//     const about = await About.findById(params.aboutId).populate({
//       path: "products",
//       model: Product,
//     });

//     if (!about) {
//       return new NextResponse(
//         JSON.stringify({ message: "About not found" }),
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(about, { status: 200 });
//   } catch (err) {
//     console.log("[aboutId_GET]", err);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// };

// export const POST = async (
//   req: NextRequest,
//   { params }: { params: { aboutId: string } }
// ) => {
//   try {
//     const { userId } = auth();

//     if (!userId) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     await connectToDB();

//     let about = await About.findById(params.aboutId);

//     if (!about) {
//       return new NextResponse("About not found", { status: 404 });
//     }

//     const {
//       title,
//       description1,
//       description2,
//       description3,
//       description4,
//       description5,
//       description6,
//       description7,
//       description8,
//       description9,
//       description10,
//       image1,
//       image2,
//       image3,
//       image4,
//       image5,
//       image6,
//       image7,
//       image8,
//       image9,
//       image10,
//       field1,
//       field2,
//       field3,
//       field4,
//       field5,
//       field6,
//       field7,
//       field8,
//       field9,
//       field10,
//       field11,
//       field12,
//       field13,
//       field14,
//       field15,
//       field16,
//       field17,
//       field18,
//     } = await req.json();

//     if (!title) {
//       return new NextResponse("Title and image are required", { status: 400 });
//     }

//     about = await About.findByIdAndUpdate(
//       params.aboutId,
//       {
//         title,
//         description1,
//         description2,
//         description3,
//         description4,
//         description5,
//         description6,
//         description7,

//         description8,
//         description9,
//         description10,
//         image1,
//         image2,
//         image3,
//         image4,
//         image5,
//         image6,
//         image7,
//         image8,
//         image9,
//         image10,
//         field1,
//         field2,
//         field3,
//         field4,
//         field5,
//         field6,
//         field7,
//         field8,
//         field9,
//         field10,
//         field11,
//         field12,
//         field13,
//         field14,
//         field15,
//         field16,
//         field17,
//         field18,
//       },
//       { new: true }
//     );

//     await about.save();

//     return NextResponse.json(about, { status: 200 });
//   } catch (err) {
//     console.log("[aboutId_POST]", err);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// };

// export const DELETE = async (
//   req: NextRequest,
//   { params }: { params: { aboutId: string } }
// ) => {
//   try {
//     const { userId } = auth();

//     if (!userId) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     await connectToDB();

//     await About.findByIdAndDelete(params.aboutId);

//     await Product.updateMany(
//       { about: params.aboutId },
//       { $pull: { about: params.aboutId } }
//     );

//     return new NextResponse("About is deleted", { status: 200 });
//   } catch (err) {
//     console.log("[aboutId_DELETE]", err);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// };

// export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import { connectToDB } from "@/lib/mongoDB";
import About from "@/lib/models/About";
import Product from "@/lib/models/Product";

const applyCORS = (response: NextResponse) => {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
};

export const GET = async (
  req: NextRequest,
  { params }: { params: { aboutId: string } }
) => {
  try {
    await connectToDB();

    const about = await About.findById(params.aboutId).populate({
      path: "products",
      model: Product,
    });

    if (!about) {
      const response = new NextResponse(
        JSON.stringify({ message: "About not found" }),
        { status: 404 }
      );
      return applyCORS(response);
    }

    const response = NextResponse.json(about, { status: 200 });
    return applyCORS(response);
  } catch (err) {
    console.log("[aboutId_GET]", err);
    const response = new NextResponse("Internal error", { status: 500 });
    return applyCORS(response);
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { aboutId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      const response = new NextResponse("Unauthorized", { status: 401 });
      return applyCORS(response);
    }

    await connectToDB();

    let about = await About.findById(params.aboutId);

    if (!about) {
      const response = new NextResponse("About not found", { status: 404 });
      return applyCORS(response);
    }

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

    if (!title) {
      const response = new NextResponse("Title and image are required", { status: 400 });
      return applyCORS(response);
    }

    about = await About.findByIdAndUpdate(
      params.aboutId,
      {
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
      },
      { new: true }
    );

    await about.save();

    const response = NextResponse.json(about, { status: 200 });
    return applyCORS(response);
  } catch (err) {
    console.log("[aboutId_POST]", err);
    const response = new NextResponse("Internal error", { status: 500 });
    return applyCORS(response);
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { aboutId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      const response = new NextResponse("Unauthorized", { status: 401 });
      return applyCORS(response);
    }

    await connectToDB();

    await About.findByIdAndDelete(params.aboutId);

    await Product.updateMany(
      { about: params.aboutId },
      { $pull: { about: params.aboutId } }
    );


    const response = new NextResponse("About is deleted", { status: 200 });
    return applyCORS(response);
  } catch (err) {
    console.log("[aboutId_DELETE]", err);
    const response = new NextResponse("Internal error", { status: 500 });
    return applyCORS(response);
  }
};


export const dynamic = "force-dynamic";
