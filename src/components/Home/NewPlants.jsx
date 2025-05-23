import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/service";
import { useNavigate } from "react-router-dom";

export default function NewPlants() {
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  async function getPlants() {
    try {
      const {data} = await axios(BASE_URL);
      setPlants(data)
    } catch (error) {
     console.error(error)
    }
  }

  useEffect(() => {
    getPlants();
  }, [])

  return (
    <div className="py-12 md:py-16 lg:py-24 dark:bg-[#111827]">
      <h2 className="max-w-fit mx-auto pb-1 mb-10 text-center  text-2xl lg:text-3xl text-green-800 font-poppins font-semibold uppercase border-b-2 dark:text-white">
        New Plants
      </h2>
      <div className="max-w-7xl mx-auto px-5 md:px-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plants.slice(0, 8).map((plant) => (
          <div key={plant._id} className="relative">
            <img className="hover:scale-105 transition-all duration-300 h-[330px] w-full object-cover" src={plant.image} alt="" />
            <span className="absolute top-0 left-0 text-sm uppercase text-stone-700 font-medium font-ReemKufi bg-white px-2 py-1 rounded-sm block">
              {plant.name}
            </span>
            <button onClick={() => navigate(`/plant-details/${plant._id}`)} className=" text-stone-600 dark:text-white text-base mt-2 transition-all hover:text-stone-900 font-medium">Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
}
