
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewsSection from "../components/NewsSection";
import MatchSection from "../components/MatchSection";
import LeagueTable from "../components/LeagueTable";
import GallerySection from "../components/GallerySection";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";

export default function Home(){
  return (
    <>
      <Header/>
      <Hero/>
      <main className="container">
        <NewsSection/>
        <MatchSection/>
        <LeagueTable/>
        <GallerySection/>
        <VideoSection/>
      </main>
      <Footer/>
    </>
  );
}
