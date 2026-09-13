export default function HeroSection() {
  return (
    <section className="relative min-h-[620px] flex items-center overflow-hidden bg-gradient-to-br from-[#021B2D] via-[#005B7A] to-[#F5B942] text-white">
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 container mx-auto px-6 text-right">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-white/15 px-5 py-2 text-sm mb-6">
            هیأت فوتبال استان بوشهر
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            مرجع جامع فوتبال بوشهر
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white/90">
            اخبار، مسابقات، جدول لیگ‌ها و معرفی تیم‌های فوتبال استان بوشهر
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <button className="bg-[#F5B942] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              مشاهده مسابقات
            </button>
            <button className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#003b5c] transition">
              آخرین اخبار
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
