// import { NextRequest, NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs";

// import { connectToDB } from "@/lib/mongoDB";
// import S5 from "@/lib/models/S5";
// import Product from "@/lib/models/Product";

// export const GET = async (
//   req: NextRequest,
//   { params }: { params: { tutoringId: string } }
// ) => {
//   try {
//     await connectToDB();

//     const tutoring = await S5.findById(params.tutoringId).populate({
//       path: "products",
//       model: Product,
//     });

//     if (!tutoring) {
//       return new NextResponse(
//         JSON.stringify({ message: "Tutoring not found" }),
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(tutoring, { status: 200 });
//   } catch (err) {
//     console.log("[tutoringId_GET]", err);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// };

// export const POST = async (
//   req: NextRequest,
//   { params }: { params: { tutoringId: string } }
// ) => {
//   try {
//     const { userId } = auth();

//     if (!userId) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     await connectToDB();

//     let tutoring = await S5.findById(params.tutoringId);

//     if (!tutoring) {
//       return new NextResponse("Live-Tutoring-Doubt not found", { status: 404 });
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

//     tutoring = await S5.findByIdAndUpdate(
//       params.tutoringId,
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

//     await tutoring.save();

//     return NextResponse.json(tutoring, { status: 200 });
//   } catch (err) {
//     console.log("[tutoringId_POST]", err);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// };

// export const DELETE = async (
//   req: NextRequest,
//   { params }: { params: { tutoringId: string } }
// ) => {
//   try {
//     const { userId } = auth();

//     if (!userId) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     await connectToDB();

//     await S5.findByIdAndDelete(params.tutoringId);

//     await Product.updateMany(
//       { tutoring: params.tutoringId },
//       { $pull: { tutoring: params.tutoringId } }
//     );

//     return new NextResponse("Live-Tutoring-Doubt is deleted", { status: 200 });
//   } catch (err) {
//     console.log("[tutoringId_DELETE]", err);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// };

// export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import { connectToDB } from "@/lib/mongoDB";
import S5 from "@/lib/models/S5";
import Product from "@/lib/models/Product";

const applyCORS = (response: NextResponse) => {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
};

export const GET = async (
  req: NextRequest,
  { params }: { params: { tutoringId: string } }
) => {
  try {
    await connectToDB();

    const tutoring = await S5.findById(params.tutoringId).populate({
      path: "products",
      model: Product,
    });

    if (!tutoring) {
      const response = new NextResponse(
        JSON.stringify({ message: "Tutoring not found" }),
        { status: 404 }
      );
      return applyCORS(response);
    }

    const response = NextResponse.json(tutoring, { status: 200 });
    return applyCORS(response);
  } catch (err) {
    console.log("[tutoringId_GET]", err);
    const response = new NextResponse("Internal error", { status: 500 });
    return applyCORS(response);
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { tutoringId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      const response = new NextResponse("Unauthorized", { status: 401 });
      return applyCORS(response);
    }

    await connectToDB();

    let tutoring = await S5.findById(params.tutoringId);

    if (!tutoring) {
      const response = new NextResponse("Live-Tutoring-Doubt not found", { status: 404 });
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

    tutoring = await S5.findByIdAndUpdate(
      params.tutoringId,
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

    await tutoring.save();

    const response = NextResponse.json(tutoring, { status: 200 });
    return applyCORS(response);
  } catch (err) {
    console.log("[tutoringId_POST]", err);
    const response = new NextResponse("Internal error", { status: 500 });
    return applyCORS(response);
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { tutoringId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      const response = new NextResponse("Unauthorized", { status: 401 });
      return applyCORS(response);
    }

    await connectToDB();

    await S5.findByIdAndDelete(params.tutoringId);

    await Product.updateMany(
      { tutoring: params.tutoringId },
      { $pull: { tutoring: params.tutoringId } }
    );

    const response = new NextResponse("Live-Tutoring-Doubt is deleted", { status: 200 });
    return applyCORS(response);
  } catch (err) {
    console.log("[tutoringId_DELETE]", err);
    const response = new NextResponse("Internal error", { status: 500 });
    return applyCORS(response);
  }
};

export const dynamic = "force-dynamic";
