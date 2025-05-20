import AvoidMistakesSection, { CommunityStoriesSection } from "../components/Home/AvoidMistake";
import Banner from "../components/Home/Banner";
import NewPlants from "../components/Home/NewPlants";

export default function Home() {
  return (
   <div>
    <Banner/>
    <NewPlants/>
    <AvoidMistakesSection/>
    <CommunityStoriesSection/>
   </div>
  );
}