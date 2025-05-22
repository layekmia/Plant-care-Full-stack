import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center text-2xl font-bold gap-2 mb-2">
           P🌿lantPal
          </div>
          <p className="text-sm text-gray-200">
            Helping you grow, water, and care for your plants with confidence.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/all-plants" className="hover:underline">
                All Plants
              </a>
            </li>
            <li>
              <a href="/add-new-plant" className="hover:underline">
                Add Plant
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:underline">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl text-white">
            <a href="#" className="hover:text-green-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-green-700 mt-6 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Min Plant. All rights reserved.
      </div>
    </footer>
  );
}
