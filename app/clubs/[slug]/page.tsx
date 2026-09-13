import Link from "next/link";

const clubs:any = {
  "shahin-bushehr": {name:"شاهین بوشهر", city:"بوشهر", league:"لیگ فوتبال استان بوشهر"},
  "pars-jonoobi": {name:"پارس جنوبی جم", city:"جم", league:"لیگ برتر"},
  "iranjavan": {name:"ایرانجوان بوشهر", city:"بوشهر", league:"لیگ فوتبال استان بوشهر"}
};

export default function ClubProfilePage({params}:{params:{slug:string}}){
 const club = clubs[params.slug] || {name:"باشگاه فوتبال", city:"بوشهر", league:""};
 return (
  <main className="min-h-screen bg-slate-50 p-6 text-right">
   <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
    <div className="w-28 h-28 rounded-full bg-[#032B44] mx-auto" />
    <h1 className="text-4xl font-black text-[#032B44] text-center mt-6">{club.name}</h1>
    <div className="grid md:grid-cols-3 gap-5 mt-8">
      <div className="rounded-2xl bg-slate-100 p-5"><b>شهر</b><p>{club.city}</p></div>
      <div className="rounded-2xl bg-slate-100 p-5"><b>لیگ</b><p>{club.league}</p></div>
      <div className="rounded-2xl bg-slate-100 p-5"><b>وضعیت</b><p>فعال</p></div>
    </div>
    <section className="mt-10">
      <h2 className="text-2xl font-black">اخبار، نتایج و مسابقات</h2>
      <p className="mt-3 text-gray-500">اطلاعات کامل باشگاه، اخبار و عملکرد تیم در این بخش نمایش داده می‌شود.</p>
    </section>
    <Link href="/clubs" className="inline-block mt-8 text-[#005B7A] font-bold">بازگشت به باشگاه‌ها</Link>
   </div>
  </main>
 )
}
