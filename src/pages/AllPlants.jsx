import { Link, useLoaderData } from "react-router-dom";
import { getPlantsData } from "../utils/service";
import PlantsItem from "../components/PlantsItem";

const plants = [
  {
    id: 1,
    name: "ZZ Plant",
    category: "Indoor",
    watering: "Once a week",
    image:
      "https://flacio.wpbingosite.com/wp-content/uploads/2020/12/ruby-rubber-tree-3.jpg",
  },
  {
    id: 2,
    name: "Echeveria",
    category: "Succulent",
    watering: "Every 2 weeks",
    image:
      "https://flacio.wpbingosite.com/wp-content/uploads/2020/12/ruby-rubber-tree-3.jpg",
  },
  {
    id: 3,
    name: "Jade Plant",
    category: "Succulent",
    watering: "Once a week",
    image:
      "https://flacio.wpbingosite.com/wp-content/uploads/2020/12/ruby-rubber-tree-3.jpg",
  },
  {
    id: 4,
    name: "Rubber Tree",
    category: "Indoor",
    watering: "Every 5 days",
    image:
      "https://flacio.wpbingosite.com/wp-content/uploads/2020/12/ruby-rubber-tree-3.jpg",
  },
];

export default function AllPlants() {
  const {data} = useLoaderData();

  return (
    <section className="max-w-7xl mx-auto px-2 py-8">
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center uppercase tracking-wider">
        All Plants
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
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
            {data.map((plant) => <PlantsItem key={plant._id} plant={plant}/>)}
          </tbody>
        </table>
      </div>
    </section>
  );
}


async function plantsLoader(){
  const data = await getPlantsData();
  return data;
}
export {plantsLoader}