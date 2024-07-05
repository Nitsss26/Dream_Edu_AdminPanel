// import { NextRequest, NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs";

// import { connectToDB } from "@/lib/mongoDB";
// import S7 from "@/lib/models/S7";
// import Product from "@/lib/models/Product";

// export const GET = async (
//   req: NextRequest,
//   { params }: { params: { seoId: string } }
// ) => {
//   try {
//     await connectToDB();

//     const seo = await S7.findById(params.seoId).populate({
//       path: "products",
//       model: Product,
//     });

//     if (!seo) {
//       return new NextResponse(
//         JSON.stringify({ message: "Seo-Service not found" }),
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(seo, { status: 200 });
//   } catch (err) {
//     console.log("[seoId_GET]", err);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// };

// export const POST = async (
//   req: NextRequest,
//   { params }: { params: { seoId: string } }
// ) => {
//   try {
//     const { userId } = auth();

//     if (!userId) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     await connectToDB();

//     let seo = await S7.findById(params.seoId);

//     if (!seo) {
//       return new NextResponse("Seo-Service not found", { status: 404 });
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

//     seo = await S7.findByIdAndUpdate(
//       params.seoId,
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

//     await seo.save();

//     return NextResponse.json(seo, { status: 200 });
//   } catch (err) {
//     console.log("[seoId_POST]", err);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// };

// export const DELETE = async (
//   req: NextRequest,
//   { params }: { params: { seoId: string } }
// ) => {
//   try {
//     const { userId } = auth();

//     if (!userId) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     await connectToDB();

//     await S7.findByIdAndDelete(params.seoId);

//     await Product.updateMany(
//       { seo: params.seoId },
//       { $pull: { seo: params.seoId } }
//     );

//     return new NextResponse("Seo-Service is deleted", { status: 200 });
//   } catch (err) {
//     console.log("[seoId_DELETE]", err);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// };

// export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import { connectToDB } from "@/lib/mongoDB";
import S7 from "@/lib/models/S7";
import Product from "@/lib/models/Product";

const applyCORS = (response: NextResponse) => {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
};

export const GET = async (
  req: NextRequest,
  { params }: { params: { seoId: string } }
) => {
  try {
    await connectToDB();

    const seo = await S7.findById(params.seoId).populate({
      path: "products",
      model: Product,
    });

    if (!seo) {
      const response = new NextResponse(
        JSON.stringify({ message: "Seo-Service not found" }),
        { status: 404 }
      );
      return applyCORS(response);
    }

    const response = NextResponse.json(seo, { status: 200 });
    return applyCORS(response);
  } catch (err) {
    console.log("[seoId_GET]", err);
    const response = new NextResponse("Internal error", { status: 500 });
    return applyCORS(response);
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { seoId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      const response = new NextResponse("Unauthorized", { status: 401 });
      return applyCORS(response);
    }

    await connectToDB();

    let seo = await S7.findById(params.seoId);

    if (!seo) {
      const response = new NextResponse("Seo-Service not found", { status: 404 });
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

    seo = await S7.findByIdAndUpdate(
      params.seoId,
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

    await seo.save();

    const response = NextResponse.json(seo, { status: 200 });
    return applyCORS(response);
  } catch (err) {
    console.log("[seoId_POST]", err);
    const response = new NextResponse("Internal error", { status: 500 });
    return applyCORS(response);
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { seoId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      const response = new NextResponse("Unauthorized", { status: 401 });
      return applyCORS(response);
    }

    await connectToDB();

    await S7.findByIdAndDelete(params.seoId);

    await Product.updateMany(
      { seo: params.seoId },
      { $pull: { seo: params.seoId } }
    );

    const response = new NextResponse("Seo-Service is deleted", { status: 200 });
    return applyCORS(response);
  } catch (err) {
    console.log("[seoId_DELETE]", err);
    const response = new NextResponse("Internal error", { status: 500 });
    return applyCORS(response);
  }
};

export const OPTIONS = async () => {
  const response = new NextResponse(null, { status: 204 });
  return applyCORS(response);
};

export const dynamic = "force-dynamic";
