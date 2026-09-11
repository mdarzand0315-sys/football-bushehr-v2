
import NewsCard from "./NewsCard";

export default function FeaturedNews(){

const news=[
"آغاز مسابقات فوتبال استان بوشهر",
"اعلام برنامه هفته جدید لیگ",
"درخشش تیم های پایه فوتبال بوشهر"
];

return (
<section className="px-6 py-10">

<div className="mb-6">
<h2 className="text-3xl font-black text-[#032B44]">
آخرین اخبار
</h2>
</div>

<div className="grid lg:grid-cols-3 gap-6">

{news.map((item,index)=>(
<NewsCard key={index} title={item}/>
))}

</div>

</section>
)

}
