
export default function VideoCard({title}:{title:string}){
return <div className="bg-white rounded-3xl shadow p-6">
<div className="h-40 bg-slate-800 text-white rounded-xl flex items-center justify-center">
▶ ویدیو
</div>
<h3 className="font-bold mt-4">{title}</h3>
<p className="text-sm mt-2">گزارش تصویری فوتبال بوشهر</p>
</div>
}
