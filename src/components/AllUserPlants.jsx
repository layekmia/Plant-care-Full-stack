import { useNavigate } from "react-router-dom";

export default function AllUserPlants({ plant, openModal }) {
  const navigate = useNavigate();
  return (
    <div
      key={plant._id}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src={plant.image}
        alt={plant.name}
        className="h-48 object-cover w-full"
      />
      <div className="p-4 flex-1">
        <h3 className="text-xl font-semibold text-green-800 uppercase dark:text-white">{plant.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{plant.category}</p>
        <p className="text-gray-700 mt-2 line-clamp-3 dark:text-white">{plant.description}</p>
      </div>
      <div className="flex justify-between items-center gap-2 p-4 border-t dark:border-gray-600">
        <button
          onClick={() => navigate(`/dashboard/update-plant/${plant._id}`)}
          className="bg-green-600 hover:bg-green-700 dark:bg-gray-600 text-white px-4 py-1 rounded-md"
        >
          Update
        </button>
        <button
          onClick={() => openModal(plant._id)}
          className="bg-red-500 text-white text-base px-4 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
