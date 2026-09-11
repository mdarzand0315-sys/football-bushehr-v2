
export default function StandingsPreview(){

const teams=[
["1","شاهین بوشهر","18"],
["2","پارس جنوبی جم","16"],
["3","ایرانجوان بوشهر","14"]
];

return (

<section className="px-6 py-10">

<h2 className="text-3xl font-black text-[#032B44] mb-6">
جدول لیگ
</h2>

<div className="overflow-x-auto bg-white rounded-3xl shadow-xl">

<table className="w-full text-center">

<thead>
<tr>
<th>رتبه</th>
<th>تیم</th>
<th>امتیاز</th>
</tr>
</thead>

<tbody>

{teams.map((t,i)=>(
<tr key={i}>
<td>{t[0]}</td>
<td>{t[1]}</td>
<td className="font-bold">{t[2]}</td>
</tr>
))}

</tbody>

</table>

</div>

</section>

)

}
