
import VideoCard from "../../components/VideoCard";

export default function Videos(){
return <main className="max-w-6xl mx-auto p-8">
<h1 className="text-3xl font-bold">🎬 ویدیوها</h1>
<div className="grid md:grid-cols-3 gap-5 mt-6">
<VideoCard title="گزارش تصویری مسابقات"/>
<VideoCard title="مصاحبه بازیکنان"/>
</div>
</main>
}
