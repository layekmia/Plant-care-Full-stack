import { NavLink } from "react-router-dom";

export default function NavMenu() {
  return (
    <ul className=" items-center text-sm font-medium font-poppins text-gray-700 dark:text-white hidden md:flex gap-5">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-green-600 ${isActive && "text-green-600"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-plants"
          className={({ isActive }) =>
            `hover:text-green-600 ${isActive && "text-green-600"}`
          }
        >
          All Plants
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-new-plant"
          className={({ isActive }) =>
            `hover:text-green-600 ${isActive && "text-green-600"}`
          }
        >
          Add Plant
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `hover:text-green-600 ${isActive && "text-green-600"}`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `hover:text-green-600 ${isActive && "text-green-600"}`
          }
        >
          About us
        </NavLink>
      </li>
    </ul>
  );
}
