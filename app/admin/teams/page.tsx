"use client";

import { useEffect, useState } from "react";

export default function Teams(){
  const [teams,setTeams] = useState<any[]>([]);
  const [form,setForm] = useState({name:"",city:"",league:"",logo:""});

  async function loadTeams(){
    const res = await fetch("/api/teams");
    const data = await res.json();
    setTeams(data);
  }

  useEffect(()=>{ loadTeams(); },[]);

  async function submit(e:React.FormEvent){
    e.preventDefault();
    await fetch("/api/teams",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(form)
    });
    setForm({name:"",city:"",league:"",logo:""});
    loadTeams();
  }

  return <main className="p-8 space-y-6">
    <h1 className="text-3xl font-bold">مدیریت تیم‌ها</h1>

    <form onSubmit={submit} className="grid gap-3 max-w-xl">
      <input className="border p-3 rounded" placeholder="نام تیم" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
      <input className="border p-3 rounded" placeholder="شهر" value={form.city} onChange={e=>setForm({...form,city:e.target.value})}/>
      <input className="border p-3 rounded" placeholder="لیگ" value={form.league} onChange={e=>setForm({...form,league:e.target.value})}/>
      <input className="border p-3 rounded" placeholder="آدرس لوگو" value={form.logo} onChange={e=>setForm({...form,logo:e.target.value})}/>
      <button className="bg-blue-600 text-white p-3 rounded">ثبت تیم</button>
    </form>

    <div className="grid md:grid-cols-3 gap-4">
      {teams.map(team=>(
        <div key={team.id || team.name} className="border rounded p-4">
          <h2 className="font-bold">{team.name}</h2>
          <p>{team.city}</p>
          <p>{team.league}</p>
        </div>
      ))}
    </div>
  </main>
}
