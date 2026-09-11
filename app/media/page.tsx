
import GalleryGrid from "@/components/GalleryGrid";
import VideoCard from "@/components/VideoCard";

export default function MediaPage(){
 return (
  <main className="p-6">
   <h1 className="text-4xl font-black">رسانه فوتبال بوشهر</h1>
   <GalleryGrid/>
   <VideoCard/>
  </main>
 )
}
