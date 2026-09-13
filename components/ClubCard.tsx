export default function ClubCard({name,city,league}:{name:string;city?:string;league?:string}){
 return (
  <div className="rounded-3xl bg-white shadow-xl p-6 text-center border hover:-translate-y-1 transition">
   <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-[#032B44] to-[#005B7A] flex items-center justify-center text-white font-black text-2xl">
    ⚽
   </div>
   <h3 className="mt-5 font-black text-xl text-[#032B44]">{name}</h3>
   <p className="mt-2 text-gray-500">{city || "بوشهر"}</p>
   <span className="inline-block mt-3 rounded-full bg-yellow-100 px-4 py-1 text-sm font-bold text-yellow-700">
    {league || "لیگ فوتبال استان بوشهر"}
   </span>
  </div>
 )
}
