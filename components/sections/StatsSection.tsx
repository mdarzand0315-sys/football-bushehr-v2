
import StatCard from "./StatCard";

export default function StatsSection(){

const stats=[
 {number:"48",title:"باشگاه فعال",icon:"⚽"},
 {number:"12500",title:"بازیکن ثبت شده",icon:"👥"},
 {number:"8",title:"لیگ فعال",icon:"🏆"},
 {number:"320",title:"مربی رسمی",icon:"🎯"}
];

return (
<section className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-6 py-10">
{stats.map((item,index)=>(
<StatCard key={index} {...item}/>
))}
</section>
)

}
