export type MatchResult = {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
};

export type Standing = {
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
};

export function calculateStandings(matches: MatchResult[]): Standing[] {
  const table = new Map<string, Standing>();

  const getTeam = (name: string) => {
    if (!table.has(name)) {
      table.set(name, {
        team: name,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0,
      });
    }
    return table.get(name)!;
  };

  matches.forEach((match) => {
    const home = getTeam(match.homeTeam);
    const away = getTeam(match.awayTeam);

    home.played++;
    away.played++;
    home.goalsFor += match.homeScore;
    home.goalsAgainst += match.awayScore;
    away.goalsFor += match.awayScore;
    away.goalsAgainst += match.homeScore;

    if (match.homeScore > match.awayScore) {
      home.won++;
      away.lost++;
      home.points += 3;
    } else if (match.homeScore < match.awayScore) {
      away.won++;
      home.lost++;
      away.points += 3;
    } else {
      home.drawn++;
      away.drawn++;
      home.points++;
      away.points++;
    }
  });

  return [...table.values()]
    .map((t) => ({ ...t, goalDifference: t.goalsFor - t.goalsAgainst }))
    .sort((a, b) =>
      b.points - a.points ||
      b.goalDifference - a.goalDifference ||
      b.goalsFor - a.goalsFor
    );
}
