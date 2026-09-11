
export default function StatCard(
{number,title,icon}:{number:string,title:string,icon:string}
){

return (
<div className="rounded-3xl bg-white/90 backdrop-blur shadow-xl p-6 text-center transition hover:-translate-y-2">

<div className="text-4xl">{icon}</div>

<div className="mt-4 text-4xl font-black text-[#032B44]">
{number}
</div>

<p className="mt-2 text-gray-600">
{title}
</p>

</div>
)

}
