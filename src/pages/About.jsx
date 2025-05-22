export default function About() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 px-6 py-12 flex flex-col items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Plant Care Tracker
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Welcome to
          <span className="font-semibold text-green-700">
            Plant Care Tracker
          </span>
          — your personal assistant for keeping your green friends healthy and
          happy!
        </p>
        <p className="text-md text-gray-600 mb-6">
          This web app helps plant lovers track watering schedules, monitor
          plant health, and manage a personalized plant collection with ease.
          Whether you're a beginner or a seasoned plant parent, our goal is to
          simplify plant care and help your plants thrive 🌱.
        </p>
      </div>
    </div>
  );
}
