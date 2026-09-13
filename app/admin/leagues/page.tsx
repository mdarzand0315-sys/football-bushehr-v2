"use client";

import { useEffect, useState } from "react";

export default function Leagues(){
  const [name,setName]=useState("");
  const [season,setSeason]=useState("");
  const [leagues,setLeagues]=useState<any[]>([]);

  async function loadLeagues(){
    const res = await fetch("/api/leagues");
    const data = await res.json();
    setLeagues(data || []);
  }

  useEffect(()=>{
    loadLeagues();
  },[]);

  async function addLeague(){
    if(!name) return;

    await fetch("/api/leagues",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name,season})
    });

    setName("");
    setSeason("");
    loadLeagues();
  }

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">مدیریت لیگ‌ها</h1>

      <div className="bg-white rounded-xl shadow p-5 space-y-4">
        <input className="border p-3 rounded w-full" placeholder="نام لیگ" value={name} onChange={(e)=>setName(e.target.value)} />
        <input className="border p-3 rounded w-full" placeholder="فصل مسابقات" value={season} onChange={(e)=>setSeason(e.target.value)} />
        <button onClick={addLeague} className="bg-blue-700 text-white px-5 py-2 rounded">افزودن لیگ</button>
      </div>

      <div className="space-y-3">
        {leagues.map((league,index)=>(
          <div key={league.id || index} className="border rounded p-4">
            {league.name} - {league.season}
          </div>
        ))}
      </div>
    </main>
  );
}
