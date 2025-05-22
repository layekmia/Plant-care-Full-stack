import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlantsData } from "../utils/service";
import PlantsItem from "../components/PlantsItem";

export default function AllPlants() {
  const { data } = useLoaderData();
  const [plants, setPlants] = useState(data);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  const careOrder = { Easy: 1, Medium: 2, High: 3 };

  useEffect(() => {
    let sorted = [...data];

    if (sortBy === "careLevel") {
      sorted.sort((a, b) => {
        const aVal = careOrder[a.careLevel];
        const bVal = careOrder[b.careLevel];
        return order === "asc" ? aVal - bVal : bVal - aVal;
      });
    } else if (sortBy === "nextWateringDate") {
      sorted.sort((a, b) => {
        const dateA = new Date(a.nextWateringDate);
        const dateB = new Date(b.nextWateringDate);
        return order === "asc" ? dateA - dateB : dateB - dateA;
      });
    }

    setPlants(sorted);
  }, [sortBy, order, data]);

  return (
    <section className="px-2 py-8 dark:bg-dark-background">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-green-500 dark:text-white font-semibold text-2xl uppercase text-center pt-5 pb-2">
            See Our All Plants
          </h2>
          <p className="text-center text-stone-500 dark:text-gray-300 max-w-2xl text-sm mx-auto pb-6">
            Discover a wide variety of beautiful and healthy plants carefully selected to brighten your space. Whether you're a beginner or a seasoned plant lover, we have something for everyone to grow and enjoy.
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-6">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded p-2 dark:bg-dark-background dark:text-white"
          >
            <option value="">Sort By</option>
            <option value="careLevel">Care Level</option>
            <option value="nextWateringDate">Next Watering Date</option>
          </select>

          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="border rounded p-2 dark:bg-dark-background dark:text-white"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-dark-background border dark:border-none border-gray-200 dark:border-gray-700 rounded-lg shadow-sm dark:shadow-0 dark:text-white">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Image</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Watering</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant) => (
                <PlantsItem key={plant._id} plant={plant} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

async function plantsLoader() {
  const data = await getPlantsData();
  return  data ;
}
export { plantsLoader };
