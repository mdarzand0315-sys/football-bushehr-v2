
import MatchCard from "./MatchCard";

export default function UpcomingMatches(){

return (
<section className="px-6 py-10">

<h2 className="text-3xl font-black text-[#032B44] mb-6">
مسابقات آینده
</h2>

<div className="grid md:grid-cols-2 gap-6">

<MatchCard />

<MatchCard />

</div>

</section>
)

}
