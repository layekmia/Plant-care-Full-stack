import { useLoaderData } from "react-router-dom";
import { getPlantById } from "../utils/service";
import { format } from "date-fns";

export default function PlantDetails() {
  const plant = useLoaderData();

  const formattedLastWatered = format(new Date(plant.lastWateredDate), "dd MMM yyyy");
  const formattedNextWatering = format(new Date(plant.nextWateringDate), "dd MMM yyyy");

  return (
    <div className="min-h-screen bg-green-50 dark:bg-dark-background py-12 px-4 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl max-w-4xl w-full p-5 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-green-800 dark:text-white mb-2">
              {plant.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-4 italic">
              {plant.category}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">{plant.description}</p>

            <ul className="space-y-2 text-gray-800 dark:text-gray-400 text-base">
              <li>
                <span className="font-semibold mr-5">Care Level:</span>
                {plant.careLevel}
              </li>
              <li>
                <span className="font-semibold mr-5">Watering Frequency:</span>
                {plant.wateringFrequency}
              </li>
              <li>
                <span className="font-semibold mr-5">Last Watered:</span>
                {formattedLastWatered}
              </li>
              <li>
                <span className="font-semibold mr-5">Next Watering:</span>
                {formattedNextWatering}
              </li>
              <li>
                <span className="font-semibold mr-5">Health Status:</span>
                {plant.healthStatus}
              </li>
            </ul>
          </div>

          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Added by: <span className="font-semibold">{plant.userName}</span> ({plant.userEmail})
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
