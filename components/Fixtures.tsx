
export default function Fixtures(){
return (
<section className="bg-white rounded-3xl p-6 shadow">
<h2 className="text-2xl font-bold mb-5">📅 برنامه مسابقات</h2>

<select className="border p-3 rounded-xl w-full mb-3">
<option>انتخاب لیگ</option>
</select>

<select className="border p-3 rounded-xl w-full mb-5">
<option>انتخاب هفته</option>
</select>

<div className="bg-slate-100 rounded-2xl p-5 text-center">
<div>شاهین بوشهر</div>
<div className="text-3xl font-bold my-3">VS</div>
<div>پارس جنوبی جم</div>
<div className="mt-3">جمعه | ساعت 17:00</div>
</div>
</section>
)
}
