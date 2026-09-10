import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const news = await prisma.news.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در دریافت اخبار" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const news = await prisma.news.create({
      data: {
        title: body.title,
        slug: body.slug,
        content: body.content,
        image: body.image || null,
        category: body.category || "عمومی",
      },
    });

    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در ثبت خبر" },
      { status: 500 }
    );
  }
}
