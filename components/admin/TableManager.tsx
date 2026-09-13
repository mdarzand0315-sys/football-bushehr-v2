"use client";

import { useState } from "react";

export default function TableManager(){
  const [team,setTeam]=useState("");
  const [points,setPoints]=useState(0);
  const [rows,setRows]=useState<any[]>([]);

  async function add(){
    const res=await fetch('/api/standings',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({team,points})
    });
    const data=await res.json();
    setRows([...rows,data]);
    setTeam("");
  }

  return <main className="p-8 space-y-5">
    <h1 className="text-3xl font-bold">مدیریت جدول لیگ</h1>
    <input className="border p-3 rounded w-full" placeholder="نام تیم" value={team} onChange={e=>setTeam(e.target.value)} />
    <input className="border p-3 rounded w-full" type="number" placeholder="امتیاز" value={points} onChange={e=>setPoints(Number(e.target.value))} />
    <button className="bg-blue-700 text-white px-5 py-2 rounded" onClick={add}>ثبت جدول</button>
    {rows.map(r=><div className="border p-3 rounded" key={r.id}>{r.team} - {r.points} امتیاز</div>)}
  </main>
}
