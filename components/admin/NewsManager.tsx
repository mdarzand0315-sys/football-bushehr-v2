"use client";

import { useState } from "react";

export default function NewsManager(){
 const [title,setTitle]=useState("");
 const [text,setText]=useState("");
 const [image,setImage]=useState("");
 const [category,setCategory]=useState("اخبار فوتبال");
 const [status,setStatus]=useState("published");

 async function saveNews(){
  await fetch('/api/news',{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify({title,text,image,category,status})
  });
  setTitle('');
  setText('');
  setImage('');
 }

 return (
  <main className="p-8 space-y-8">
   <h1 className="text-3xl font-black text-[#032B44]">مدیریت اخبار</h1>

   <section className="bg-white rounded-3xl shadow-lg p-6 space-y-4">
    <h2 className="text-xl font-bold">افزودن خبر جدید</h2>
    <input className="w-full border rounded-xl p-3" placeholder="عنوان خبر" value={title} onChange={e=>setTitle(e.target.value)} />
    <textarea className="w-full border rounded-xl p-3" placeholder="متن خبر" value={text} onChange={e=>setText(e.target.value)} />
    <input className="w-full border rounded-xl p-3" placeholder="آدرس تصویر" value={image} onChange={e=>setImage(e.target.value)} />
    <select className="w-full border rounded-xl p-3" value={category} onChange={e=>setCategory(e.target.value)}>
      <option>اخبار فوتبال</option>
      <option>اطلاعیه</option>
      <option>نتایج</option>
    </select>
    <select className="w-full border rounded-xl p-3" value={status} onChange={e=>setStatus(e.target.value)}>
      <option value="published">منتشر شده</option>
      <option value="draft">پیش نویس</option>
    </select>
    <button onClick={saveNews} className="bg-[#032B44] text-white rounded-xl px-6 py-3">ذخیره خبر</button>
   </section>
  </main>
 )
}
