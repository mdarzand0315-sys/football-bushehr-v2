"use client";

import { useState } from "react";

export default function TableManager(){
  const [team,setTeam]=useState("");
  const [points,setPoints]=useState(0);
  const [goalDiff,setGoalDiff]=useState(0);
  const [goalsFor,setGoalsFor]=useState(0);
  const [headToHead,setHeadToHead]=useState(0);
  const [rows,setRows]=useState<any[]>([]);

  function sortTable(data:any[]){
    return [...data].sort((a,b)=>{
      // 1) امتیاز
      if(b.points !== a.points) return b.points - a.points;
      // 2) بازی رو در رو
      if(b.headToHead !== a.headToHead) return b.headToHead - a.headToHead;
      // 3) تفاضل گل
      if(b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
      // 4) گل زده
      return b.goalsFor - a.goalsFor;
    });
  }

  async function add(){
    const item={team,points,headToHead,goalDiff,goalsFor};
    const res=await fetch('/api/standings',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(item)
    });
    const data=await res.json();
    setRows(sortTable([...rows,data]));
    setTeam("");
  }

  return <main className="p-8 space-y-5">
    <h1 className="text-3xl font-bold">مدیریت جدول لیگ</h1>
    <input className="border p-3 rounded w-full" placeholder="نام تیم" value={team} onChange={e=>setTeam(e.target.value)} />
    <input className="border p-3 rounded w-full" type="number" placeholder="امتیاز" value={points} onChange={e=>setPoints(Number(e.target.value))} />
    <input className="border p-3 rounded w-full" type="number" placeholder="بازی رو در رو" value={headToHead} onChange={e=>setHeadToHead(Number(e.target.value))} />
    <input className="border p-3 rounded w-full" type="number" placeholder="تفاضل گل" value={goalDiff} onChange={e=>setGoalDiff(Number(e.target.value))} />
    <input className="border p-3 rounded w-full" type="number" placeholder="گل زده" value={goalsFor} onChange={e=>setGoalsFor(Number(e.target.value))} />
    <button className="bg-blue-700 text-white px-5 py-2 rounded" onClick={add}>ثبت جدول</button>
    {rows.map((r,i)=><div className="border p-3 rounded" key={i}>{i+1}. {r.team} - {r.points} امتیاز</div>)}
  </main>
}
