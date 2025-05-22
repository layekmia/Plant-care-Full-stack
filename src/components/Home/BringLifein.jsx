const images = [
  "https://flacio.wpbingosite.com/wp-content/uploads/2021/12/ig-1.jpg",
  "https://flacio.wpbingosite.com/wp-content/uploads/2021/12/ig-2.jpg",
  "https://flacio.wpbingosite.com/wp-content/uploads/2021/12/ig-3.jpg",
  "https://flacio.wpbingosite.com/wp-content/uploads/2021/12/ig-4.jpg",
];

export default function BringLifeIn() {
  return (
    <section className="py-10 lg:py-16 bg-background dark:bg-[#111827]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-light text-gray-900">
          #bring<span className="italic font-medium">life</span>in
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Our community has a thing for plant styling. Get inspired.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded shadow-sm">
            <img
              src={src}
              alt={`plant-${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
