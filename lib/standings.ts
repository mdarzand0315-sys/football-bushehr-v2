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

function getHeadToHeadScore(teamA: string, teamB: string, matches: MatchResult[]) {
  let scoreA = 0;
  let scoreB = 0;

  matches
    .filter(
      (m) =>
        (m.homeTeam === teamA && m.awayTeam === teamB) ||
        (m.homeTeam === teamB && m.awayTeam === teamA)
    )
    .forEach((m) => {
      if (m.homeTeam === teamA) {
        if (m.homeScore > m.awayScore) scoreA += 3;
        else if (m.homeScore < m.awayScore) scoreB += 3;
        else {
          scoreA += 1;
          scoreB += 1;
        }
      } else {
        if (m.awayScore > m.homeScore) scoreA += 3;
        else if (m.awayScore < m.homeScore) scoreB += 3;
        else {
          scoreA += 1;
          scoreB += 1;
        }
      }
    });

  return scoreB - scoreA;
}

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
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;

      const h2h = getHeadToHeadScore(a.team, b.team, matches);
      if (h2h !== 0) return h2h;

      if (b.goalDifference !== a.goalDifference)
        return b.goalDifference - a.goalDifference;

      return b.goalsFor - a.goalsFor;
    });
}
