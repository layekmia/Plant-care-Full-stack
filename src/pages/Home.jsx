import AvoidMistakesSection from "../components/Home/AvoidMistake";
import Banner from "../components/Home/Banner";
import BringLifeIn from "../components/Home/BringLifein";
import NewPlants from "../components/Home/NewPlants";

export default function Home() {
  return (
   <div>
    <Banner/>
    <NewPlants/>
    <BringLifeIn/>
    <AvoidMistakesSection/>
   </div>
  );
}