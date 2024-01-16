import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories, { status: 200 });
  } catch (err) {
    console.log(err.message)
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};
