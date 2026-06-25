import BeautyGrowthHero from "./components/home/BeautyGrowthHero";
import ContactSection from "./components/home/ContactSection";
import ExpertiseHorizontal from "./components/home/ExpertizeHorizontal";
import GrowthStories from "./components/home/GrowthStories";
import BeautyMenu from "./components/home/OrchestratedMenu";
import PartnersMarquee from "./components/home/PartnersMarquee";
import StrategicFramework from "./components/home/StrategicFramework";

export default function Home() {
  return (
    <div>
      <header className="relative z-50">
        
        <BeautyGrowthHero />
        <ExpertiseHorizontal />
        <PartnersMarquee/>
        <StrategicFramework/>
        <GrowthStories/>

        <ContactSection/>
       
      </header>
    </div>
  );
}
