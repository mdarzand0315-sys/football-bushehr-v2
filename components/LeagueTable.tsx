
export default function LeagueTable(){
return (
<section className="bg-white rounded-3xl p-6 shadow overflow-x-auto">
<h2 className="text-2xl font-bold mb-5">🏆 جدول مسابقات</h2>

<select className="border p-3 rounded-xl w-full mb-5">
<option>انتخاب لیگ</option>
</select>

<table className="w-full text-center border-collapse">
<thead>
<tr className="bg-[#003b56] text-white">
<th>رتبه</th>
<th>تیم</th>
<th>بازی</th>
<th>برد</th>
<th>مساوی</th>
<th>باخت</th>
<th>گل زده</th>
<th>گل خورده</th>
<th>تفاضل</th>
<th>امتیاز</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>شاهین بوشهر</td>
<td>8</td>
<td>6</td>
<td>0</td>
<td>2</td>
<td>15</td>
<td>6</td>
<td>+9</td>
<td>18</td>
</tr>
</tbody>
</table>
</section>
)
}
