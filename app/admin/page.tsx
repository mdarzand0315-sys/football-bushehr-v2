
export default function AdminPage(){
 const items = [
  {title:'مدیریت اخبار', desc:'افزودن، ویرایش و حذف اخبار'},
  {title:'مدیریت مسابقات', desc:'ثبت برنامه و نتایج بازی‌ها'},
  {title:'مدیریت تیم‌ها', desc:'مدیریت باشگاه‌های استان'},
  {title:'مدیریت جدول لیگ', desc:'ویرایش امتیاز و رتبه تیم‌ها'},
  {title:'رسانه', desc:'مدیریت تصاویر و ویدیوها'},
  {title:'تنظیمات سایت', desc:'اطلاعات عمومی سامانه'},
 ];

 return (
  <main className="p-8 bg-slate-50 min-h-screen">
   <h1 className="text-4xl font-black text-[#032B44]">
    پنل مدیریت فوتبال بوشهر
   </h1>
   <p className="mt-3 text-gray-600">مدیریت کامل محتوای سامانه فوتبال استان</p>

   <div className="grid md:grid-cols-3 gap-5 mt-8">
    {items.map((item)=>(
      <div key={item.title} className="rounded-3xl bg-white shadow-lg p-6 hover:shadow-xl transition">
       <h2 className="font-bold text-xl text-[#032B44]">{item.title}</h2>
       <p className="mt-3 text-gray-500">{item.desc}</p>
       <button className="mt-5 rounded-xl bg-[#032B44] text-white px-4 py-2">ورود</button>
      </div>
    ))}
   </div>
  </main>
 )
}
