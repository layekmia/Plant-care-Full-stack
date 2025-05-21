import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function AllUserPlants({ plant, openModal }) {
  const navigate = useNavigate();
  return (
    <div
      key={plant._id}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src={plant.image}
        alt={plant.name}
        className="h-48 object-cover w-full"
      />
      <div className="p-4 flex-1">
        <h3 className="text-xl font-semibold text-green-800">{plant.name}</h3>
        <p className="text-sm text-gray-600">{plant.category}</p>
        <p className="text-gray-700 mt-2 line-clamp-3">{plant.description}</p>
      </div>
      <div className="flex justify-between items-center gap-2 p-4 border-t">
        <button
          onClick={() => navigate(`/dashboard/update-plant/${plant._id}`)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-md"
        >
          Update
        </button>
        <button
          onClick={() => openModal(plant._id)}
          className=" text-red-500 text-xl px-4 py-1 rounded-md"
        >
          <RxCross1 />
        </button>
      </div>
    </div>
  );
}
