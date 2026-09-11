
export default function NewsCard({title}:{title:string}){

return (
<article className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2">

<div className="h-48 bg-gradient-to-l from-[#032B44] to-[#007C91]"></div>

<div className="p-5">

<span className="text-sm text-[#007C91]">
فوتبال
</span>

<h3 className="mt-3 font-bold text-xl">
{title}
</h3>

<p className="mt-3 text-gray-500 text-sm">
مشاهده جزئیات خبر
</p>

</div>

</article>
)

}
