import { NextResponse } from "next/server";

let standings: any[] = [];

export async function GET() {
  const sorted = [...standings].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
    return b.goalsFor - a.goalsFor;
  });

  return NextResponse.json(sorted);
}

export async function POST(request: Request) {
  const body = await request.json();

  const item = {
    id: Date.now(),
    team: body.team,
    played: body.played || 0,
    wins: body.wins || 0,
    draws: body.draws || 0,
    losses: body.losses || 0,
    goalsFor: body.goalsFor || 0,
    goalsAgainst: body.goalsAgainst || 0,
    goalDiff: (body.goalsFor || 0) - (body.goalsAgainst || 0),
    points: body.points || 0,
  };

  standings.push(item);

  return NextResponse.json(item);
}
