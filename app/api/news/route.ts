import { NextResponse } from "next/server";

export async function GET() {
  const news = [
    {
      id: 1,
      title: "آخرین اخبار فوتبال استان بوشهر",
      category: "اخبار هیأت",
      image: "/images/news-1.jpg",
      date: "1405/06/20",
      content: "اخبار و رویدادهای فوتبال استان بوشهر"
    },
    {
      id: 2,
      title: "برگزاری مسابقات فوتبال استان",
      category: "مسابقات",
      image: "/images/news-2.jpg",
      date: "1405/06/21",
      content: "برنامه مسابقات فوتبال استان بوشهر اعلام شد"
    }
  ];

  return NextResponse.json(news);
}


export async function POST(request: Request) {

  const body = await request.json();

  const newNews = {
    id: Date.now(),
    title: body.title,
    category: body.category || "عمومی",
    image: body.image || null,
    content: body.content,
    date: new Date().toLocaleDateString("fa-IR")
  };

  return NextResponse.json({
    message: "خبر با موفقیت ثبت شد",
    data: newNews
  });

}
