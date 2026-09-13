"use client";

import { useState } from "react";

export default function NewsManager(){
 const [title,setTitle]=useState("");

 return (
  <main className="p-8 space-y-8">
   <h1 className="text-3xl font-black text-[#032B44]">مدیریت اخبار</h1>

   <section className="bg-white rounded-3xl shadow-lg p-6 space-y-4">
    <h2 className="text-xl font-bold">افزودن خبر جدید</h2>
    <input className="w-full border rounded-xl p-3" placeholder="عنوان خبر" value={title} onChange={(e)=>setTitle(e.target.value)} />
    <button className="bg-[#032B44] text-white rounded-xl px-6 py-3">ذخیره خبر</button>
   </section>

   <section className="grid md:grid-cols-3 gap-5">
    <div className="bg-white rounded-2xl p-5 shadow">لیست خبرها</div>
    <div className="bg-white rounded-2xl p-5 shadow">ویرایش خبر</div>
    <div className="bg-white rounded-2xl p-5 shadow">حذف خبر</div>
   </section>
  </main>
 )
}
