"use client";

import { useEffect, useState } from "react";

export default function TablePage(){
  const [table,setTable]=useState<any[]>([]);

  useEffect(()=>{
    fetch('/api/table')
      .then(r=>r.json())
      .then(data=>setTable(Array.isArray(data)?data:[]))
      .catch(()=>setTable([]));
  },[]);

  const demo = [
    {team:'شاهین بوشهر',p:10,w:7,d:2,l:1,g:'18:6',gd:12,pts:23},
    {team:'ایرانجوان بوشهر',p:10,w:6,d:2,l:2,g:'15:8',gd:7,pts:20},
    {team:'دریا بوشهر',p:10,w:5,d:3,l:2,g:'13:9',gd:4,pts:18}
  ];

  const rows = table.length ? table : demo;

  return (
    <main className="p-6 bg-slate-50 min-h-screen text-right">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-[#032B44] mb-8">جدول لیگ فوتبال بوشهر</h1>
        <div className="bg-white rounded-3xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#032B44] text-white">
              <tr>
                <th className="p-4">رتبه</th><th>تیم</th><th>بازی</th><th>برد</th><th>مساوی</th><th>باخت</th><th>تفاضل</th><th>امتیاز</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item,index)=>(
                <tr key={index} className="border-b">
                  <td className="p-4 font-bold">{index+1}</td>
                  <td className="font-bold">{item.team || item.name}</td>
                  <td>{item.p || item.played || 0}</td>
                  <td>{item.wins || item.w || 0}</td>
                  <td>{item.draws || item.d || 0}</td>
                  <td>{item.losses || item.l || 0}</td>
                  <td>{item.gd || 0}</td>
                  <td className="font-black text-[#005B7A]">{item.pts || item.points || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
