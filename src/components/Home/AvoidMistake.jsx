// AvoidMistakesSection.jsx

export default function AvoidMistakesSection() {
  const mistakes = [
    {
      title: "Overwatering",
      desc: "Too much water drowns roots. Let the soil dry between watering."
    },
    {
      title: "Wrong Lighting",
      desc: "Each plant has different light needs. Know before you grow!"
    },
    {
      title: "Ignoring Drainage",
      desc: "No drainage = soggy roots. Always use pots with drainage holes."
    },
    {
      title: "Using Cold Water",
      desc: "Cold water shocks plant roots. Use room-temperature water instead."
    }
  ];

  return (
    <section className="py-10 lg:py-[100px] dark:bg-[#111827]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-8 font-ReemKufi">Avoid These Common <br /> Plant Care Mistakes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mistakes.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:bg-green-50 transition"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}