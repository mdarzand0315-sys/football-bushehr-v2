
import GalleryCard from "../../components/GalleryCard";

export default function Gallery(){
return <main className="max-w-6xl mx-auto p-8">
<h1 className="text-3xl font-bold">📷 گالری تصاویر</h1>
<div className="grid md:grid-cols-3 gap-5 mt-6">
<GalleryCard title="مسابقات فوتبال استان"/>
<GalleryCard title="مراسم‌های هیأت"/>
<GalleryCard title="تمرین تیم‌ها"/>
</div>
</main>
}
