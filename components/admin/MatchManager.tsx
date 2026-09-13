"use client";

import { useEffect, useState } from "react";

export default function MatchManager(){
 const [matches,setMatches]=useState<any[]>([]);
 const [home,setHome]=useState("");
 const [away,setAway]=useState("");
 const [league,setLeague]=useState("");
 const [week,setWeek]=useState("");
 const [date,setDate]=useState("");
 const [status,setStatus]=useState("scheduled");
 const [homeScore,setHomeScore]=useState("");
 const [awayScore,setAwayScore]=useState("");

 async function loadMatches(){
  const res=await fetch('/api/matches');
  const data=await res.json();
  setMatches(data || []);
 }

 useEffect(()=>{loadMatches()},[]);

 async function addMatch(){
  if(!home || !away) return;
  await fetch('/api/matches',{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify({home,away,league,week,date,status,homeScore:Number(homeScore)||null,awayScore:Number(awayScore)||null})
  });
  setHome(''); setAway(''); setLeague(''); setWeek(''); setDate(''); setHomeScore(''); setAwayScore('');
  loadMatches();
 }

 return <main className="p-8">
  <h1 className="text-3xl font-black mb-6">مدیریت مسابقات</h1>
  <div className="grid gap-4 md:grid-cols-4 mb-8">
   <input className="border rounded p-3" placeholder="لیگ" value={league} onChange={e=>setLeague(e.target.value)}/>
   <input className="border rounded p-3" placeholder="هفته" value={week} onChange={e=>setWeek(e.target.value)}/>
   <input className="border rounded p-3" placeholder="تیم میزبان" value={home} onChange={e=>setHome(e.target.value)}/>
   <input className="border rounded p-3" placeholder="تیم مهمان" value={away} onChange={e=>setAway(e.target.value)}/>
   <input className="border rounded p-3" placeholder="تاریخ مسابقه" value={date} onChange={e=>setDate(e.target.value)}/>
   <input className="border rounded p-3" placeholder="گل میزبان" value={homeScore} onChange={e=>setHomeScore(e.target.value)}/>
   <input className="border rounded p-3" placeholder="گل مهمان" value={awayScore} onChange={e=>setAwayScore(e.target.value)}/>
   <select className="border rounded p-3" value={status} onChange={e=>setStatus(e.target.value)}>
    <option value="scheduled">برنامه‌ریزی شده</option>
    <option value="finished">پایان یافته</option>
   </select>
   <button className="rounded bg-blue-900 text-white" onClick={addMatch}>ثبت مسابقه</button>
  </div>
  <div className="space-y-3">{matches.map((m,i)=><div key={i} className="border rounded p-4">{m.home} - {m.away} {m.homeScore ?? ''} : {m.awayScore ?? ''}</div>)}</div>
 </main>
}
