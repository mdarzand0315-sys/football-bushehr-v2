
export default function Results(){
return (
<main className="p-8 max-w-5xl mx-auto">
<h1 className="text-3xl font-bold">ثبت نتایج مسابقات</h1>

<div className="bg-white rounded-3xl shadow p-6 mt-6">
<select className="border p-3 rounded w-full">
<option>انتخاب لیگ</option>
</select>

<input className="border p-3 rounded w-full mt-3" placeholder="هفته"/>

<div className="grid md:grid-cols-2 gap-4 mt-5">
<input className="border p-3 rounded" placeholder="تیم میزبان"/>
<input className="border p-3 rounded" placeholder="تیم مهمان"/>
</div>

<div className="grid md:grid-cols-2 gap-4 mt-5">
<input className="border p-3 rounded" placeholder="گل میزبان"/>
<input className="border p-3 rounded" placeholder="گل مهمان"/>
</div>

<button className="bg-[#003b56] text-white p-3 rounded mt-5">
ثبت نتیجه
</button>
</div>
</main>
)
}
