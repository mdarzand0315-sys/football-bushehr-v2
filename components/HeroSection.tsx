
export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-l from-[#032B44] via-[#007C91] to-[#F5B942] text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black">فوتبال بوشهر</h1>
        <p className="mt-6 text-xl">از خلیج فارس تا قلب فوتبال جنوب</p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <button className="bg-[#F5B942] text-black px-8 py-4 rounded-full">
            مشاهده مسابقات
          </button>
          <button className="border border-white px-8 py-4 rounded-full">
            آخرین اخبار
          </button>
        </div>
      </div>
    </section>
  );
}
