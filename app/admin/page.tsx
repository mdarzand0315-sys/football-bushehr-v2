
import AdminSidebar from "../../components/admin/AdminSidebar";

export default function Admin(){
return (
<div className="min-h-screen flex bg-slate-100">
<AdminSidebar/>

<main className="p-8 flex-1">
<h1 className="text-3xl font-black">
داشبورد مدیریت فوتبال بوشهر
</h1>

<div className="grid md:grid-cols-3 gap-5 mt-8">

<div className="bg-white rounded-3xl p-6 shadow">
📰 اخبار
<p className="text-3xl font-bold">۱۲۴</p>
</div>

<div className="bg-white rounded-3xl p-6 shadow">
⚽ مسابقات
<p className="text-3xl font-bold">۳۶</p>
</div>

<div className="bg-white rounded-3xl p-6 shadow">
📷 رسانه
<p className="text-3xl font-bold">۵۸</p>
</div>

</div>
</main>
</div>
)
}
