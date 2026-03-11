import ConstructionSection from './components/ConstructionSection';
import CTASection from './components/CtaSection';
import FeaturesSection from './components/FeaturesSection';
import FooterSection from './components/FooterSection';
import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';
import LocationSection from './components/LocationSection';
import OutdoorSection from './components/OutdoorSection';
import PlansSection from './components/PlanSection/PlansSection';
import ProjectSection from './components/ProjectSection';
import TourSection from './components/TourSection';

function App() {
  return (
    <div className="app">
      <HeaderSection />
      <main>
        <HeroSection />
        <LocationSection />
        <ProjectSection />
        <PlansSection />
        <TourSection />
        <OutdoorSection />
        <FeaturesSection />
        <ConstructionSection />
        <CTASection />
        <FooterSection />
      </main>
    </div>
  )
}

export default App
