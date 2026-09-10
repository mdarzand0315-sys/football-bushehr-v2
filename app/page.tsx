
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import News from '@/components/News';
import Announcements from '@/components/Announcements';
import Fixtures from '@/components/Fixtures';
import LeagueTable from '@/components/LeagueTable';
import Gallery from '@/components/Gallery';
import Videos from '@/components/Videos';
import Footer from '@/components/Footer';

export default function Home(){
return <>
<Header/>
<Hero/>
<main className="max-w-6xl mx-auto p-6 space-y-6">
<News/>
<Announcements/>
<Fixtures/>
<LeagueTable/>
<Gallery/>
<Videos/>
</main>
<Footer/>
</>
}
