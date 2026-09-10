
export default function Home(){
 return <main className="min-h-screen">
 <header className="bg-[#003b56] text-white p-6">
 ⚽ هیأت فوتبال استان بوشهر
 </header>

 <section className="p-10 bg-gradient-to-l from-[#003b56] to-blue-400 text-white">
 <h1 className="text-5xl font-bold">فوتبال بوشهر</h1>
 <p className="mt-4">مرجع اخبار و مسابقات فوتبال استان</p>
 </section>

 <div className="max-w-6xl mx-auto p-6 grid gap-5">
 {[
 'اخبار',
 'اطلاعیه‌ها',
 'برنامه مسابقات',
 'جدول مسابقات',
 'تصاویر',
 'ویدیو'
 ].map(x=>
 <div key={x} className="bg-white rounded-3xl p-8 shadow">
 {x}
 </div>
 )}
 </div>
 </main>
}
