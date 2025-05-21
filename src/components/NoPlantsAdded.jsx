import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function NoPlantsAdded() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <Leaf size={80} className="text-green-600 mb-6 animate-bounce" />
      <h2 className="text-3xl md:text-4xl font-semibold text-green-700 mb-4">
        Oops! No Plants Added Yet
      </h2>
      <p className="text-gray-600 text-lg md:text-xl mb-6 max-w-xl">
        Looks like you haven’t added any plants yet. Start your plant care
        journey by adding your first plant now!
      </p>
      <Link
        to="/add-new-plant"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
      >
        Add a Plant 🌱
      </Link>
    </div>
  );
}
