
export function calculateStanding(homeScore:number, awayScore:number){
if(homeScore > awayScore){
 return {home:3, away:0}
}

if(homeScore < awayScore){
 return {home:0, away:3}
}

return {home:1, away:1}
}

export function sortTable(teams:any[]){
return teams.sort((a,b)=>{
if(b.points !== a.points) return b.points-a.points;
if(b.goalDifference !== a.goalDifference)
return b.goalDifference-a.goalDifference;
return b.goalsFor-a.goalsFor;
})
}
