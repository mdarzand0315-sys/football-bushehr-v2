
export default function GalleryCard({title}:{title:string}){
return <div className="bg-white rounded-3xl shadow p-6">
<div className="h-40 bg-slate-200 rounded-xl flex items-center justify-center">
📷 تصویر
</div>
<h3 className="font-bold mt-4">{title}</h3>
<p className="text-sm mt-2">تاریخ انتشار</p>
</div>
}
