import { useEffect, useState, useCallback } from "react";
import { usePlants } from "../context/PlantContext";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import NoPlantsAdded from "../components/NoPlantsAdded";
import AllUserPlants from "../components/AllUserPlants";
import { BASE_URL } from "../utils/service";

const Dashboard = () => {
  const { user } = usePlants();
  const [plants, setPlants] = useState([]);
  const [selectedPlantId, setSelectedPlantId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserPlants = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://backend-chi-beige.vercel.app/web/api/plants/user?email=${user.email}`
      );
      setPlants(res.data);
    } catch (err) {
      toast.error("Failed to fetch plants", err.message);
    } finally {
      setIsLoading(false);
    }
  }, [user.email]);

  useEffect(() => {
    fetchUserPlants();
  }, [fetchUserPlants]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASE_URL}/${selectedPlantId}`);
      toast.success("Plant deleted successfully");
      setIsModalOpen(false);
      fetchUserPlants();
    } catch (err) {
      toast.error("Failed to delete plant", err.message);
    }
  };

  const openModal = (id) => {
    setSelectedPlantId(id);
    setIsModalOpen(true);
  };

  console.log(plants)

  if (isLoading) return <Spinner />;
  if (plants.length === 0) return <NoPlantsAdded />;

  return (
    <div className="dark:bg-dark-background min-h-screen pb-10 px-4">
      <h2 className="dark:text-white text-green-600 text-3xl font-semibold pt-10 text-center">
        Welcome {user.name.split(" ")[0]}! <br />
        Here's an overview of your plant care
      </h2>
      <div className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg shadow p-4 max-w-md mx-auto my-8">
        <img
          src={user.image || "https://i.ibb.co/FzVx2mm/avatar.png"}
          alt="User"
          className="w-14 h-14 rounded-full object-cover border"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            {user.name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user.email}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
          <h3 className="text-gray-500 dark:text-gray-300 text-sm font-medium">
            Total Plants
          </h3>
          <p className="text-3xl font-semibold text-green-600 dark:text-green-400">
            {plants.length}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
          <h3 className="text-gray-500 dark:text-gray-300 text-sm font-medium">
            Healthy Plants
          </h3>
          <p className="text-3xl font-semibold text-green-600 dark:text-green-400">
            {plants.filter((p) => p.healthStatus === "Healthy").length}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
          <h3 className="text-gray-500 dark:text-gray-300 text-sm font-medium">
            Your Items
          </h3>
          <p className="text-3xl font-semibold text-green-600 dark:text-green-400">
            {plants.filter(plant => plant.userEmail === user.email).length}
          </p>
        </div>
      </div>

      {/* User Plants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plants.map((plant) => (
          <AllUserPlants key={plant._id} plant={plant} openModal={openModal} />
        ))}
      </div>

      {/* Delete Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Are you sure?
            </h3>
            <p className="text-gray-600 mb-6">
              This action will permanently delete the plant.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
