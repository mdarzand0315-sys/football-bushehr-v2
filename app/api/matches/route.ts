import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const matches = await prisma.match.findMany({
      orderBy: {
        date: "asc",
      },
      include: {
        league: true,
      },
    });

    return NextResponse.json(matches);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در دریافت مسابقات" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const match = await prisma.match.create({
      data: {
        week: body.week,
        homeTeam: body.homeTeam,
        awayTeam: body.awayTeam,
        homeScore: body.homeScore ?? null,
        awayScore: body.awayScore ?? null,
        date: new Date(body.date),
        leagueId: body.leagueId,
      },
    });

    return NextResponse.json(match);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در ثبت مسابقه" },
      { status: 500 }
    );
  }
}
