"use client";

import { useEffect, useState } from "react";

export default function HomeSections(){
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(Array.isArray(data) ? data.slice(0,3) : []))
      .catch(() => setNews([]));
  }, []);

  return (
    <div className="bg-white text-right">
      <section className="py-14 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black text-[#032B44]">آخرین اخبار</h2>
            <span className="text-[#005B7A] font-bold">مشاهده همه</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(news.length ? news : [{title:"اخبار فوتبال استان بوشهر"},{title:"گزارش مسابقات هفته"},{title:"اطلاعیه‌های هیأت فوتبال"}]).map((item,index)=>(
              <article key={index} className="rounded-3xl bg-white shadow-md overflow-hidden border hover:-translate-y-1 transition">
                <div className="h-40 bg-gradient-to-br from-[#032B44] to-[#005B7A] flex items-center justify-center text-white text-4xl font-black">
                  {index + 1}
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#005B7A]">فوتبال بوشهر</span>
                  <h3 className="mt-3 font-black text-xl text-gray-800">{item.title || item.name}</h3>
                  <p className="mt-3 text-gray-500">آخرین خبرها و گزارش‌های فوتبال استان را دنبال کنید.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-[#032B44] mb-8">مسابقات و نتایج</h2>
          <div className="rounded-3xl bg-gradient-to-l from-[#032B44] to-[#005B7A] text-white p-10 grid md:grid-cols-3 gap-6">
            <div><strong className="block text-2xl">برنامه بازی‌ها</strong><p className="mt-2 text-white/80">مسابقات پیش رو</p></div>
            <div><strong className="block text-2xl">نتایج</strong><p className="mt-2 text-white/80">آخرین نتایج ثبت شده</p></div>
            <div><strong className="block text-2xl">جدول لیگ</strong><p className="mt-2 text-white/80">رتبه‌بندی تیم‌ها</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
