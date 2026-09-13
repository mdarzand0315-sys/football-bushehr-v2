"use client";

import { useEffect, useState } from "react";

export default function MatchesPage(){
  const [matches,setMatches] = useState<any[]>([]);
  const [filter,setFilter] = useState("all");

  useEffect(()=>{
    fetch("/api/matches")
      .then(r=>r.json())
      .then(data=>setMatches(data || []));
  },[]);

  const now = new Date();

  const filtered = matches.filter((m)=>{
    if(filter === "all") return true;
    const date = m.date ? new Date(m.date) : null;
    if(!date) return false;
    if(filter === "upcoming") return date >= now;
    if(filter === "past") return date < now;
    return true;
  });

 return (
  <main className="p-6 space-y-6">
    <h1 className="text-4xl font-black">مسابقات فوتبال بوشهر</h1>

    <div className="flex gap-3">
      <button onClick={()=>setFilter("all")} className="border rounded px-4 py-2">همه</button>
      <button onClick={()=>setFilter("upcoming")} className="border rounded px-4 py-2">آینده</button>
      <button onClick={()=>setFilter("past")} className="border rounded px-4 py-2">نتایج</button>
    </div>

    <section className="grid gap-4">
      {filtered.map((m,index)=>(
        <div key={index} className="border rounded-xl p-4">
          <div className="font-bold">{m.home} - {m.away}</div>
          <div className="text-sm">{m.date || "زمان نامشخص"}</div>
          {m.home_score !== null && m.away_score !== null && (
            <div className="text-xl font-black mt-2">
              {m.home_score} - {m.away_score}
            </div>
          )}
        </div>
      ))}
    </section>
  </main>
 );
}
