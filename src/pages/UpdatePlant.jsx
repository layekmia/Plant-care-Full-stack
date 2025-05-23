import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePlants } from "../context/PlantContext";
import axios from "axios";
import { BASE_URL, getPlantById } from "../utils/service";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

function formatDateForInput(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
}

export default function UpdatePlant() {
  const { user } = usePlants();
  const navigate = useNavigate();
  const { id } = useParams();
   const [loading, setIsLoading] = useState(false);

  const plant = useLoaderData();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (plant && user) {
      setFormData({
        image: plant.image || "",
        name: plant.name || "",
        category: plant.category || "",
        description: plant.description || "",
        careLevel: plant.careLevel || "",
        wateringFrequency: plant.wateringFrequency || "",
        lastWateredDate: formatDateForInput(plant.lastWateredDate),
        nextWateringDate: formatDateForInput(plant.nextWateringDate),
        healthStatus: plant.healthStatus || "",
        userEmail: user.email,
        userName: user.name,
      });
    }
  }, [plant, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      await axios.put(`${BASE_URL}/${id}`, formData);
      toast.success("Plant updated successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update plant");
    }finally{
      setIsLoading(false)
    }
  };

  if (!formData) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 dark:bg-dark-background">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white dark:bg-dark-background p-8 rounded-xl"
      >
        <h2 className="max-w-fit mx-auto pb-1 mb-10 text-center text-2xl lg:text-3xl text-green-800 font-poppins font-semibold uppercase border-b-2 dark:border-gray-600 dark:text-white">
          update your plant
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block dark:text-white mb-1 font-medium text-stone-600">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>
          <div>
            <label className="block dark:text-white mb-1 font-medium text-stone-600">Plant Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>
          <div>
            <label className="block dark:text-white mb-1 font-medium text-stone-600">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input-style"
              required
            >
              <option value="">Select Category</option>
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Flowering">Flowering</option>
              <option value="Indoor">Indoor</option>
            </select>
          </div>
          <div>
            <label className="block dark:text-white mb-1 font-medium text-stone-600">Care Level</label>
            <select
              name="careLevel"
              value={formData.careLevel}
              onChange={handleChange}
              className="input-style"
              required
            >
              <option value="">Select Care Level</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div>
            <label className="block dark:text-white mb-1 font-medium text-stone-600">Watering Frequency</label>
            <input
              type="text"
              name="wateringFrequency"
              value={formData.wateringFrequency}
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>
          <div>
            <label className="block dark:text-white mb-1 font-medium text-stone-600">Last Watered Date</label>
            <input
              type="date"
              name="lastWateredDate"
              value={formData.lastWateredDate}
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>
          <div>
            <label className="block dark:text-white mb-1 font-medium text-stone-600">Next Watering Date</label>
            <input
              type="date"
              name="nextWateringDate"
              value={formData.nextWateringDate}
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>
          <div>
            <label className="block dark:text-white mb-1 font-medium text-stone-600">Health Status</label>
            <input
              type="text"
              name="healthStatus"
              value={formData.healthStatus}
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>
          <div>
            <label className="block dark:text-white mb-1 font-medium text-stone-600">User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              disabled
              className="input-style bg-gray-100"
            />
          </div>
          <div>
            <label className="block dark:text-white mb-1 font-medium text-stone-600">User Email</label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              disabled
              className="input-style bg-gray-100"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block dark:text-white mb-1 font-medium text-stone-600">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="input-style resize-none"
              required
            />
          </div>
        </div>
        <button disabled={loading}
          className={`mt-6 w-full bg-green-700 dark:bg-gray-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg transition ${loading ? 'opacity-60': ''}`}
        >
          {loading ? 'Updating....' : 'Update'}
        </button>
      </form>
    </div>
  );
}

// loader
async function updatePlantLoader({ params }) {
  const id = params.id;
  const { data } = await getPlantById(id);
  return data;
}

export { updatePlantLoader };
