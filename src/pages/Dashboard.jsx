// import { useEffect, useState } from "react";
// import { usePlants } from "../context/PlantContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Spinner from "../components/Spinner";
// import { useCallback } from "react";
// import NoPlantsAdded from "../components/NoPlantsAdded";
// import AllUserPlants from "../components/AllUserPlants";
// import { BASE_URL } from "../utils/service";

// const Dashboard = () => {
//   const { user } = usePlants();
//   const [plants, setPlants] = useState([]);
//   const [selectedPlantId, setSelectedPlantId] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchUserPlants = useCallback(async () => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get(
//         `https://backend-chi-beige.vercel.app/web/api/plants/user?email=${user.email}`
//       );
//       setPlants(res.data);
//     } catch (err) {
//       toast.error("Failed to fetch plants", err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [user.email]);

//   useEffect(() => {
//     fetchUserPlants();
//   }, [fetchUserPlants]);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`${BASE_URL}/${selectedPlantId}`);
//       toast.success("Plant deleted successfully");
//       setIsModalOpen(false);
//       fetchUserPlants();
//     } catch (err) {
//       toast.error("Failed to delete plant", err.message);
//     }
//   };

//   const openModal = (id) => {
//     setSelectedPlantId(id);
//     setIsModalOpen(true);
//   };

//   if (isLoading) return <Spinner />;

//   if (plants.length === 0) return <NoPlantsAdded />;

//   return (
//     <div className="min-h-screen px-4 py-8 max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {plants.map((plant) => (
//           <AllUserPlants key={plant._id} plant={plant} openModal={openModal} />
//         ))}
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center">
//             <h3 className="text-xl font-semibold text-red-600 mb-4">
//               Are you sure?
//             </h3>
//             <p className="text-gray-600 mb-6">
//               This action will permanently delete the plant.
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
//               >
//                 Confirm Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
import { Link } from "react-router-dom";
import { usePlants } from "../context/PlantContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlantIcon, WaterIcon, PlusIcon, AlertTriangle } from "lucide-react";

export default function Dashboard() {
  const { userPlants } = usePlants();
  const totalPlants = userPlants.length;
  const plantsNeedingWater = userPlants.filter(
    (plant) => plant.needsWaterToday
  );

  return (
    <section className="p-5 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-5 text-green-700">
        🌿 Welcome to Your Plant Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <PlantIcon className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-sm">Total Plants</p>
              <h2 className="text-2xl font-semibold">{totalPlants}</h2>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <WaterIcon className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-sm">Need Water Today</p>
              <h2 className="text-2xl font-semibold">{plantsNeedingWater.length}</h2>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-sm">Alerts</p>
              <h2 className="text-2xl font-semibold">
                {plantsNeedingWater.length > 0
                  ? `${plantsNeedingWater.length} need care`
                  : "All Good"}
              </h2>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex flex-col gap-2">
            <p className="text-sm font-medium">Quick Actions</p>
            <Link to="/add-new-plant">
              <button className="w-full" variant="outline">
                <PlusIcon className="w-4 h-4 mr-2" /> Add New Plant
              </button>
            </Link>
            <Link to="/all-plants">
              <button className="w-full" variant="secondary">
                🌱 View All Plants
              </button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Your Plants Overview</h2>
        {totalPlants === 0 ? (
          <p className="text-gray-500">You haven't added any plants yet.</p>
        ) : (
          <ul className="space-y-2">
            {userPlants.map((plant) => (
              <li key={plant._id} className="border p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <p className="font-medium">{plant.name}</p>
                  <Link
                    to={`/plant-details/${plant._id}`}
                    className="text-sm text-green-600 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}


