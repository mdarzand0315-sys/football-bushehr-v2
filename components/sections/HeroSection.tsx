
export default function HeroSection(){

return (
<section className="relative min-h-[650px] overflow-hidden rounded-b-[40px] bg-gradient-to-l from-[#032B44] via-[#007C91] to-[#F5B942] text-white flex items-center">

<div className="absolute inset-0 bg-black/30"></div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center md:text-right">

<div className="max-w-3xl">

<span className="inline-block rounded-full bg-white/20 backdrop-blur px-5 py-2 mb-6">
⚽ فوتبال استان بوشهر
</span>

<h1 className="text-5xl md:text-7xl font-black leading-tight">
فوتبال بوشهر
</h1>

<p className="mt-6 text-xl md:text-2xl text-white/90">
از خلیج فارس تا قلب فوتبال جنوب
</p>

<p className="mt-4 text-base md:text-lg text-white/80">
اخبار، مسابقات، جدول لیگ‌ها و رسانه رسمی فوتبال استان بوشهر
</p>

<div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">

<button className="rounded-full bg-[#F5B942] text-black px-8 py-4 font-bold">
مشاهده مسابقات
</button>

<button className="rounded-full border border-white/50 bg-white/10 backdrop-blur px-8 py-4 font-bold">
آخرین اخبار
</button>

</div>

</div>

</div>

</section>
)

}
