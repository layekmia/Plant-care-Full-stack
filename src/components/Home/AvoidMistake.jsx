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
    <section className="py-12">
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

// CommunityStoriesSection.jsx

export  function CommunityStoriesSection() {
  const stories = [
    {
      name: "Sana A.",
      quote: "I used to kill every plant. Now with this tracker, they actually thrive!"
    },
    {
      name: "Nabil K.",
      quote: "The tips on this site saved my Monstera from root rot. Thank you!"
    },
    {
      name: "Emily R.",
      quote: "I love how easy it is to manage my plant care routine now!"
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-10">Stories from the Plant Community</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
              <p className="text-green-700 font-semibold">- {story.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
