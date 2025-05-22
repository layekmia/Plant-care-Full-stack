import { useState } from "react";

export default function SortOptions({ onSortChange }) {
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  const handleSort = (e) => {
    const [field, direction] = e.target.value.split("-");
    setSortBy(field);
    setOrder(direction);
    onSortChange(field, direction);
  };

  return (
    <div className="flex justify-end items-center mb-4">
      <label className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300">Sort by:</label>
      <select
        onChange={handleSort}
        className="border dark:bg-gray-800 dark:text-white border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
      >
        <option value="">Select</option>
        <option value="nextWateringDate-asc">Next Watering Date ↑</option>
        <option value="nextWateringDate-desc">Next Watering Date ↓</option>
        <option value="careLevel-asc">Care Level (Low to High)</option>
        <option value="careLevel-desc">Care Level (High to Low)</option>
      </select>
    </div>
  );
}
