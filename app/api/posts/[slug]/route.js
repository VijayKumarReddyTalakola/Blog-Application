import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//Get Single Blog
export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
