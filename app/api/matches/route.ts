import { NextResponse } from "next/server";

export async function GET() {
  const matches = [
    {
      id: 1,
      league: "لیگ برتر استان بوشهر",
      week: 1,
      homeTeam: "شاهین بوشهر",
      awayTeam: "پارس جنوبی جم",
      score: "0 - 0",
      date: "1405/06/20"
    }
  ];

  return NextResponse.json(matches);
}


export async function POST(request: Request) {

  const body = await request.json();

  return NextResponse.json({
    message: "مسابقه ثبت شد",
    data: body
  });

}
