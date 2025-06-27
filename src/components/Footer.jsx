import { NavLink, Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/all-plants", label: "All Plants" },
    { to: "/add-new-plant", label: "Add Plant" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/about-us", label: "About us" },
  ];

  const baseLinkClasses = "hover:text-green-400";

  return (
    <footer className="bg-green-800 text-white dark:bg-[#1f2937]">
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
          <ul className="hidden md:flex items-start flex-col gap-5 text-sm font-medium font-poppins text-white dark:text-white">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `${baseLinkClasses} ${isActive ? "text-green-400" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl text-white">
            <Link to="#" className="hover:text-green-300">
              <FaFacebookF />
            </Link>
            <Link to="#" className="hover:text-green-300">
              <FaTwitter />
            </Link>
            <Link to="#" className="hover:text-green-300">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-green-700 dark:border-gray-700 mt-6 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Min Plant. All rights reserved.
      </div>
    </footer>
  );
}
