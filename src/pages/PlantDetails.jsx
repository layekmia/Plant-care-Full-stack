import { useLoaderData } from "react-router-dom";
import { getPlantById } from "../utils/service";

export default function PlantDetails() {
  const plant = useLoaderData();

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl max-w-4xl w-full p-5 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-2">
              {plant.name}
            </h2>
            <p className="text-sm text-gray-500 mb-4 italic">
              {plant.category}
            </p>

            <p className="text-gray-700 mb-4">{plant.description}</p>

            <ul className="space-y-2 text-gray-800 text-sm">
              <li>
                <span className="font-semibold">Care Level:</span>
                {plant.careLevel}
              </li>
              <li>
                <span className="font-semibold">Watering Frequency:</span>
                {plant.wateringFrequency}
              </li>
              <li>
                <span className="font-semibold">Last Watered:</span>
                {plant.lastWateredDate}
              </li>
              <li>
                <span className="font-semibold">Next Watering:</span>
                {plant.nextWateringDate}
              </li>
              <li>
                <span className="font-semibold">Health Status:</span>
                {plant.healthStatus}
              </li>
            </ul>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Added by: <span className="font-semibold">{plant.userName}</span> (
            {plant.userEmail})
          </div>
        </div>
      </div>
    </div>
  );
}

async function plantLoader({ params }) {
  const id = params.id;
  const { data } = await getPlantById(id);
  return data;
}

export { plantLoader };
