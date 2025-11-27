import HeroBanner from "@/components/HeroBanner";
import TopAttractions from "../components/sections/TopAttractions";
import PlanYourTrip from "../components/sections/PlanYourTrip";
import BengaluruExperiences from "../components/sections/BengaluruExperiences";
import BestOfBangalore from "../components/sections/BestOfBangalore";

export default function Home() {
  return (
    <main className="bg-linear-to-r from-amber-100 to-violet-200">
      <HeroBanner />
      <TopAttractions />
      <BengaluruExperiences />
      <BestOfBangalore />
      <PlanYourTrip />
    </main>
  );
}
