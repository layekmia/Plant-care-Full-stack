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
    <section className=" px-2 py-8 dark:bg-dark-background">

      <div>
        <h2 className="text-green-500 dark:text-white font-semibold text-2xl uppercase text-center pt-5 pb-2">See Our All Plants</h2>
        <p className="text-center text-stone-500 dark:text-gray-300 max-w-2xl text-sm mx-auto pb-10">Discover a wide variety of beautiful and healthy plants carefully selected to brighten your space. Whether you're a beginner or a seasoned plant lover, we have something for everyone to grow and enjoy.</p>
      </div>
      <div className="overflow-x-auto max-w-7xl mx-auto">
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