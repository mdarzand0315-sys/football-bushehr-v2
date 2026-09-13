export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-[#032B44]/95 text-white shadow-lg backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-black text-2xl text-[#F5B942]">⚽ فوتبال بوشهر</div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/">خانه</a>
          <a href="/news">اخبار</a>
          <a href="/matches">مسابقات</a>
          <a href="/table">جدول لیگ</a>
          <a href="/clubs">تیم‌ها</a>
          <a href="/media">رسانه</a>
        </nav>
        <a href="/admin/login" className="bg-[#F5B942] text-black px-4 py-2 rounded-full text-sm font-bold">مدیریت</a>
      </div>
    </header>
  )
}
