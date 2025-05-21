import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePlants } from "../context/PlantContext";
import axios from "axios";

const AddPlant = () => {
  const { user } = usePlants();

  const [formData, setFormData] = useState({
    image: "",
    name: "",
    category: "",
    description: "",
    careLevel: "",
    wateringFrequency: "",
    lastWateredDate: "",
    nextWateringDate: "",
    healthStatus: "",
    userEmail: user.email,
    userName: user.name,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/web/api/plants", formData);
      setFormData({
        image: "",
        name: "",
        category: "",
        description: "",
        careLevel: "",
        wateringFrequency: "",
        lastWateredDate: "",
        nextWateringDate: "",
        healthStatus: "",
        userEmail: user.email,
        userName: user.name,
      });
      toast.success("Plant added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add plant", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white p-8 rounded-xl"
      >
        <h2 className="max-w-fit mx-auto pb-1 mb-10 text-center text-2xl lg:text-3xl text-green-800 font-poppins font-semibold uppercase border-b-2">
          Add New Plant
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium text-stone-600">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              placeholder="Image URL"
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-stone-600">
              Plant Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Plant Name"
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-stone-600">
              Category
            </label>
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
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-stone-600">
              Care Level
            </label>
            <select
              name="careLevel"
              value={formData.careLevel}
              onChange={handleChange}
              className="input-style"
              required
            >
              <option value="">Select Care Level</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-stone-600">
              Watering Frequency
            </label>
            <input
              type="text"
              name="wateringFrequency"
              value={formData.wateringFrequency}
              placeholder="e.g., every 3 days"
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-stone-600">
              Last Watered Date
            </label>
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
            <label className="block mb-1 font-medium text-stone-600">
              Next Watering Date
            </label>
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
            <label className="block mb-1 font-medium text-stone-600">
              Health Status
            </label>
            <input
              type="text"
              name="healthStatus"
              value={formData.healthStatus}
              placeholder="e.g., Healthy, Dry, Wilting"
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-stone-600">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              disabled
              className="input-style bg-gray-100"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-stone-600">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              disabled
              className="input-style bg-gray-100"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-stone-600">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              rows={4}
              placeholder="Write a short description about the plant..."
              onChange={handleChange}
              className="input-style resize-none"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPlant;
