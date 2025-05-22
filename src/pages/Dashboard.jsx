import { useEffect, useState } from "react";
import { usePlants } from "../context/PlantContext";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useCallback } from "react";
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

  if (isLoading) return <Spinner />;

  if (plants.length === 0) return <NoPlantsAdded />;

  return (
    <div className="dark:bg-dark-background">

      <div>
        <h2 className="dark:text-white text-green-600 text-3xl font-semibold py-10 text-center">Welcome {user.name.split(' ')[0]}! Here's an overview <br /> of your plant care</h2>
      </div>
      <div className="min-h-screen px-4 py-8 max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plants.map((plant) => (
          <AllUserPlants key={plant._id} plant={plant} openModal={openModal} />
        ))}
      </div>

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
    </div>
  );
};

export default Dashboard;
  