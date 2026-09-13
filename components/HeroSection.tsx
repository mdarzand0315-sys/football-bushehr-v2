export default function HeroSection() {
  return (
    <section className="relative min-h-[680px] flex items-center overflow-hidden bg-gradient-to-br from-[#021B2D] via-[#004B6B] to-[#0B7894] text-white">
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#F5B942]/20 blur-3xl" />
      <div className="relative z-10 container mx-auto px-6 text-right">
        <div className="max-w-4xl">
          <span className="inline-block rounded-full bg-[#F5B942] text-black px-5 py-2 text-sm font-bold mb-6">
            هیأت فوتبال استان بوشهر
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            مرجع جامع فوتبال بوشهر
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white/90 leading-10">
            آخرین اخبار، برنامه مسابقات، نتایج، جدول لیگ‌ها و معرفی باشگاه‌های فوتبال استان بوشهر
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <button className="bg-[#F5B942] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              مشاهده مسابقات
            </button>
            <button className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#003b5c] transition">
              آخرین اخبار
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {[
              ['تیم‌ها', '۲۵+'],
              ['لیگ‌ها', '۱۰+'],
              ['مسابقات', '۱۰۰+'],
              ['شهرستان‌ها', '۱۰']
            ].map((item) => (
              <div key={item[0]} className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-black text-[#F5B942]">{item[1]}</div>
                <div className="mt-2 text-sm">{item[0]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
