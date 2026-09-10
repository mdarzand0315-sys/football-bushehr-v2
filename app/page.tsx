
import Header from "../components/Header";
import Hero from "../components/Hero";
import News from "../components/News";
import Announcements from "../components/Announcements";
import MatchCard from "../components/MatchCard";
import MediaCard from "../components/MediaCard";

export default function Home(){
return <>
<Header/>
<Hero/>

<main className="max-w-6xl mx-auto p-6 space-y-6">

<News/>

<Announcements/>

<MatchCard/>

<MediaCard/>

</main>
</>
}
