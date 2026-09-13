"use client";

import { useState } from "react";

export default function MatchManager(){
 const [matches,setMatches]=useState([
  {home:"شاهین بوشهر",away:"ایرانجوان بوشهر",date:""}
 ]);
 const [home,setHome]=useState("");
 const [away,setAway]=useState("");

 function addMatch(){
  if(!home || !away) return;
  setMatches([...matches,{home,away,date:""}]);
  setHome("");
  setAway("");
 }

 return <main className="p-8">
  <h1 className="text-3xl font-black mb-6">مدیریت مسابقات</h1>
  <div className="grid gap-4 md:grid-cols-3 mb-8">
   <input className="border rounded p-3" placeholder="تیم میزبان" value={home} onChange={e=>setHome(e.target.value)}/>
   <input className="border rounded p-3" placeholder="تیم مهمان" value={away} onChange={e=>setAway(e.target.value)}/>
   <button className="rounded bg-blue-900 text-white" onClick={addMatch}>ثبت مسابقه</button>
  </div>
  <div className="space-y-3">
   {matches.map((m,i)=><div key={i} className="border rounded p-4">{m.home} - {m.away}</div>)}
  </div>
 </main>
}