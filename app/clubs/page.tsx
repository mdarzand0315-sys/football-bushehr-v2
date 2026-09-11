
import ClubCard from "@/components/ClubCard";

export default function ClubsPage(){
 return (
  <main className="p-6">
   <h1 className="text-4xl font-black text-[#032B44]">باشگاه‌های فوتبال بوشهر</h1>
   <div className="grid md:grid-cols-3 gap-6 mt-8">
    <ClubCard name="شاهین بوشهر"/>
    <ClubCard name="پارس جنوبی جم"/>
    <ClubCard name="ایرانجوان بوشهر"/>
   </div>
  </main>
 )
}
