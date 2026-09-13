export default function HomeSections(){
  return (
    <div className="bg-white text-right">
      <section className="py-12 px-6 bg-slate-50">
        <h2 className="text-3xl font-black text-[#032B44] mb-6">آخرین اخبار فوتبال بوشهر</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {['اخبار فوتبال استان','گزارش مسابقات هفته','آخرین اطلاعیه‌ها'].map((x)=>(
            <div key={x} className="rounded-2xl bg-white shadow p-6 border">
              <h3 className="font-bold text-xl">{x}</h3>
              <p className="mt-3 text-gray-500">مشاهده جزئیات و گزارش کامل</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 px-6">
        <h2 className="text-3xl font-black text-[#032B44] mb-6">مسابقات و نتایج</h2>
        <div className="rounded-2xl bg-[#032B44] text-white p-8">
          برنامه بازی‌ها، نتایج و جدول لیگ‌های فوتبال استان بوشهر در این بخش نمایش داده می‌شود.
        </div>
      </section>
    </div>
  )
}
