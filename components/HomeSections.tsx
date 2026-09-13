"use client";

import { useEffect, useState } from "react";

export default function HomeSections(){
  const [news,setNews]=useState<any[]>([]);
  const [matches,setMatches]=useState<any[]>([]);
  const [standings,setStandings]=useState<any[]>([]);
  const [media,setMedia]=useState<any[]>([]);

  useEffect(()=>{
    fetch("/api/news").then(r=>r.json()).then(d=>setNews(Array.isArray(d)?d.slice(0,3):[])).catch(()=>setNews([]));
    fetch("/api/matches").then(r=>r.json()).then(d=>setMatches(Array.isArray(d)?d.slice(0,3):[])).catch(()=>setMatches([]));
    fetch("/api/standings").then(r=>r.json()).then(d=>setStandings(Array.isArray(d)?d.slice(0,5):[])).catch(()=>setStandings([]));
    fetch("/api/media").then(r=>r.json()).then(d=>setMedia(Array.isArray(d)?d.slice(0,4):[])).catch(()=>setMedia([]));
  },[]);

  return <div className="bg-white text-right">
    <section className="py-14 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-[#032B44] mb-8">آخرین اخبار</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {(news.length?news:[{title:"اخبار فوتبال استان بوشهر"},{title:"گزارش مسابقات هفته"},{title:"اطلاعیه‌های هیأت فوتبال"}]).map((item,i)=><article key={i} className="rounded-3xl bg-white shadow-md p-6 border"><span className="text-[#005B7A]">فوتبال بوشهر</span><h3 className="font-black text-xl mt-3">{item.title}</h3></article>)}
        </div>
      </div>
    </section>

    <section className="py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-[#032B44] mb-8">مسابقات و نتایج</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {(matches.length?matches:[{home_team:"تیم میزبان",away_team:"تیم مهمان"}]).map((m,i)=><div key={i} className="rounded-3xl bg-[#032B44] text-white p-6"><div className="font-bold text-lg">{m.home_team || m.home || "میزبان"}</div><div className="my-3 text-center">VS</div><div className="font-bold">{m.away_team || m.away || "مهمان"}</div></div>)}
        </div>
      </div>
    </section>

    <section className="py-14 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-[#032B44] mb-8">جدول لیگ</h2>
        <div className="grid gap-3">
          {standings.map((s,i)=><div key={i} className="rounded-xl border p-4">{i+1}. {s.team || s.name} - {s.points || 0} امتیاز</div>)}
        </div>
      </div>
    </section>

    <section className="py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-[#032B44] mb-8">رسانه‌ها</h2>
        <div className="grid md:grid-cols-4 gap-5">
          {media.map((m,i)=><div key={i} className="rounded-2xl border p-4">{m.title || "رسانه فوتبال بوشهر"}</div>)}
        </div>
      </div>
    </section>
  </div>
}
