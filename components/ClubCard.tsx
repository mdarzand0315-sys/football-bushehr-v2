
export default function ClubCard({name}:{name:string}){
 return (
  <div className="rounded-3xl bg-white shadow-xl p-6 text-center">
   <div className="mx-auto w-20 h-20 rounded-full bg-[#032B44]"></div>
   <h3 className="mt-4 font-bold text-xl">{name}</h3>
   <p>لیگ فوتبال استان بوشهر</p>
  </div>
 )
}
