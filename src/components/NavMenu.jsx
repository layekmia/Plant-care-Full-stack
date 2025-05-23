import { NavLink } from "react-router-dom";

export default function NavMenu() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/all-plants", label: "All Plants" },
    { to: "/add-new-plant", label: "Add Plant" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/about-us", label: "About us" },
  ];

  const baseLinkClasses = "hover:text-green-400";

  return (
    <ul className="hidden md:flex items-center gap-5 text-sm font-medium font-poppins text-gray-700 dark:text-white">
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
  );
}
