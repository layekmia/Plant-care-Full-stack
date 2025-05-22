import { Link } from "react-router-dom";

export default function PlantsItem({ plant }) {
  return (
    <tr
      key={plant.id}
      className="border-t border-gray-200 dark:border-gray-600 hover:bg-green-50 dark:hover:bg-[#1f2937] transition"
    >
      <td className="py-3 px-4">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
        />
      </td>
      <td className="py-3 px-4 font-medium">{plant.name}</td>
      <td className="py-3 px-4">{plant.category}</td>
      <td className="py-3 px-4">{plant.wateringFrequency}</td>
      <td className="py-3 px-4">
        <Link
          to={`/plant-details/${plant._id}`}
          className="text-green-800 dark:text-green-400 font-semibold hover:underline"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
}
