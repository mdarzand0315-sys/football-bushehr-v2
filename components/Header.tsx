
import Link from "next/link";

export default function Header(){
return <header className="bg-[#003b56] text-white p-5 shadow">
<div className="max-w-6xl mx-auto flex justify-between items-center">
<div className="font-black text-2xl">
⚽ فوتبال بوشهر
</div>

<nav className="hidden md:flex gap-5">
<Link href="/">خانه</Link>
<Link href="/news">اخبار</Link>
<Link href="/matches">مسابقات</Link>
<Link href="/table">جدول</Link>
<Link href="/gallery">تصاویر</Link>
<Link href="/videos">ویدیو</Link>
</nav>
</div>
</header>
}
