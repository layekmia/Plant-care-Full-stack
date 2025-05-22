import { Button } from "flowbite-react";

const newPlants = [
  {
    id: 1,
    title: "ZZ Plant",
    image:
      "https://flacio.wpbingosite.com/wp-content/uploads/2020/12/zz-plant.jpg",
  },
  {
    id: 2,
    title: "Aurora",
    image:
      "https://flacio.wpbingosite.com/wp-content/uploads/2020/12/aurora-4.jpg",
  },
  {
    id: 3,
    title: "Echeveria Succulent",
    image:
      "https://flacio.wpbingosite.com/wp-content/uploads/2020/04/echeveria-succulent-4.jpg",
  },
  {
    id: 4,
    title: "Devils lvy",
    image:
      "https://flacio.wpbingosite.com/wp-content/uploads/2018/05/devil-ivy-3.jpg",
  },
  {
    id: 5,
    title: "Jade Succulent",
    image:
      "https://flacio.wpbingosite.com/wp-content/uploads/2020/12/jade-succulent-3.jpg",
  },
  {
    id: 6,
    title: "The Begginner set",
    image:
      "https://flacio.wpbingosite.com/wp-content/uploads/2020/12/the-beginner-set-3.jpg",
  },
  {
    id: 7,
    title: "Pine tree",
    image:
      "https://flacio.wpbingosite.com/wp-content/uploads/2018/10/pine-tree-17.jpg",
  },
  {
    id: 8,
    title: "Rubby Rubber Tree",
    image:
      "https://flacio.wpbingosite.com/wp-content/uploads/2020/12/ruby-rubber-tree-3.jpg",
  },
];

export default function NewPlants() {
  return (
    <div className="py-12 md:py-16 lg:py-24 dark:bg-[#111827]">
      <h2 className="max-w-fit mx-auto pb-1 mb-10 text-center  text-2xl lg:text-3xl text-green-800 font-poppins font-semibold uppercase border-b-2 dark:text-white">
        New Plants
      </h2>
      <div className="max-w-7xl mx-auto px-5 md:px-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newPlants.map((plant) => (
          <div key={plant.id} className="relative">
            <img className="hover:scale-105 transition-all duration-300 " src={plant.image} alt="" />
            <span className="absolute top-0 left-0 text-sm uppercase text-stone-700 font-medium font-ReemKufi bg-white px-2 py-1 rounded-sm block">
              {plant.title}
            </span>
            <button className=" text-stone-600 dark:text-white text-base mt-2 transition-all hover:text-stone-900 font-medium">Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
}
