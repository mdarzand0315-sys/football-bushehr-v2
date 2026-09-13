"use client";

import { useState } from "react";

export default function Media(){
 const [title,setTitle]=useState("");
 const [url,setUrl]=useState("");
 const [type,setType]=useState("image");
 const [category,setCategory]=useState("مسابقات");

 async function saveMedia(){
  await fetch('/api/media',{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify({title,url,type,category})
  });
  setTitle("");
  setUrl("");
 }

 return (
  <main className="p-8 space-y-8">
   <h1 className="text-3xl font-bold">مدیریت رسانه</h1>

   <section className="bg-white rounded-3xl p-6 shadow space-y-4">
    <input className="w-full border rounded-xl p-3" placeholder="عنوان رسانه" value={title} onChange={e=>setTitle(e.target.value)} />
    <input className="w-full border rounded-xl p-3" placeholder="لینک فایل" value={url} onChange={e=>setUrl(e.target.value)} />

    <select className="w-full border rounded-xl p-3" value={type} onChange={e=>setType(e.target.value)}>
     <option value="image">تصویر</option>
     <option value="video">ویدیو</option>
    </select>

    <select className="w-full border rounded-xl p-3" value={category} onChange={e=>setCategory(e.target.value)}>
     <option>مسابقات</option>
     <option>اخبار</option>
     <option>تیم‌ها</option>
     <option>رویدادها</option>
    </select>

    <button onClick={saveMedia} className="bg-[#032B44] text-white rounded-xl px-6 py-3">ذخیره رسانه</button>
   </section>

   <section className="grid md:grid-cols-2 gap-5">
    <div className="bg-white rounded-2xl p-5 shadow">گالری تصاویر</div>
    <div className="bg-white rounded-2xl p-5 shadow">ویدیوها</div>
   </section>
  </main>
 )
}
