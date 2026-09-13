"use client";

import { useEffect, useState } from "react";

export default function MatchManager(){
 const [matches,setMatches]=useState<any[]>([]);
 const [home,setHome]=useState("");
 const [away,setAway]=useState("");
 const [date,setDate]=useState("");

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
   body:JSON.stringify({home,away,date})
  });
  setHome('');
  setAway('');
  setDate('');
  loadMatches();
 }

 return <main className="p-8">
  <h1 className="text-3xl font-black mb-6">مدیریت مسابقات</h1>
  <div className="grid gap-4 md:grid-cols-4 mb-8">
   <input className="border rounded p-3" placeholder="تیم میزبان" value={home} onChange={e=>setHome(e.target.value)}/>
   <input className="border rounded p-3" placeholder="تیم مهمان" value={away} onChange={e=>setAway(e.target.value)}/>
   <input className="border rounded p-3" placeholder="تاریخ مسابقه" value={date} onChange={e=>setDate(e.target.value)}/>
   <button className="rounded bg-blue-900 text-white" onClick={addMatch}>ثبت مسابقه</button>
  </div>
  <div className="space-y-3">
   {matches.map((m,i)=><div key={i} className="border rounded p-4">{m.home} - {m.away}</div>)}
  </div>
 </main>
}
