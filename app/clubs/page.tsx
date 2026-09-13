import ClubCard from "@/components/ClubCard";

const clubs=[
 {name:"شاهین بوشهر",city:"بوشهر"},
 {name:"پارس جنوبی جم",city:"جم"},
 {name:"ایرانجوان بوشهر",city:"بوشهر"},
 {name:"خیبر دیلم",city:"دیلم"},
 {name:"توحید بوشهر",city:"بوشهر"},
 {name:"نماینده گناوه",city:"گناوه"}
];

export default function ClubsPage(){
 return (
  <main className="p-6 bg-slate-50 min-h-screen">
   <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl font-black text-[#032B44]">باشگاه‌های فوتبال بوشهر</h1>
    <p className="mt-3 text-gray-500">معرفی تیم‌ها و باشگاه‌های فوتبال استان بوشهر</p>
    <div className="grid md:grid-cols-3 gap-6 mt-10">
     {clubs.map((club)=><ClubCard key={club.name} {...club}/>)}
    </div>
   </div>
  </main>
 )
}
