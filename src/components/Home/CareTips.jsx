export default function CareTips() {
  return (
   <section className="py-16 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
      Essential Plant Care Tips
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mb-10">
      Simple habits that help your plants thrive!
    </p>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Tip 1 */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="text-4xl mb-3">💧</div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Watering Schedule</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Avoid overwatering. Let soil dry slightly before watering again.
        </p>
      </div>

      {/* Tip 2 */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="text-4xl mb-3">☀️</div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Light Needs</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Most plants need bright, indirect sunlight for healthy growth.
        </p>
      </div>

      {/* Tip 3 */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="text-4xl mb-3">🌱</div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Soil & Fertilizer</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Use well-draining soil and feed monthly with organic fertilizer.
        </p>
      </div>

      {/* Tip 4 */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="text-4xl mb-3">🧪</div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Check for Diseases</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Inspect leaves regularly for pests, spots, or yellowing.
        </p>
      </div>
    </div>
  </div>
</section>

  );
}