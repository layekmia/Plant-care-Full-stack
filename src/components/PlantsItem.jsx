import { Link } from "react-router-dom";

export default function PlantsItem({plant}) {
  return (
   <tr
                key={plant.id}
                className="border-t border-gray-200 hover:bg-green-50 transition"
              >
                <td className="py-3 px-4">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4 font-medium">{plant.name}</td>
                <td className="py-3 px-4">{plant.category}</td>
                <td className="py-3 px-4">{plant.wateringFrequency}</td>
                <td className="py-3 px-4">
                  <Link
                    to={`/plant-details/${plant._id}`}
                    className="text-green-800 font-semibold hover:underline"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
  );
}