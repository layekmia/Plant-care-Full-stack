import { Dropdown, DropdownHeader, DropdownItem } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { usePlants } from "../context/PlantContext";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const {darkMode, setDarkMode} = useTheme();
  const { user } = usePlants();
  const navigate = useNavigate();
  const {setIsOpen} = usePlants();

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <nav className="bg-white dark:bg-[#1f2937] shadow-sm sticky top-0 z-50 h-[60px] md:h-auto">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
       <button onClick={() => setIsOpen(true)} className="text-2xl text-gray-600 dark:text-white md:hidden"><HiMiniBars3BottomLeft /></button>

        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          P🌿lantPal
        </Link>
        <NavMenu />

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-10 h-10 flex items-center justify-center rounded-md  text-gray-500 ${
              darkMode ? "hover:bg-[#374151]" : "hover:bg-[#f2f2f2]"
            } transition-all duration-300`}
          >
            {darkMode ? (
              <IoSunnySharp className="text-base" />
            ) : (
              <FaMoon className="text-base" />
            )}
          </button>
          {user ? (
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <img
                  src={user.image}
                  alt="User profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-stone-300 cursor-pointer"
                />
              )}
            >
              <div>
                <DropdownHeader>
                  <span className="block text-sm">{user.name}</span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </DropdownHeader>
                <DropdownItem onClick={handleLogout}>Sign out</DropdownItem>
              </div>
            </Dropdown>
          ) : (
            <div className="flex space-x-4">
              <button onClick={() => navigate("/login")} className="dark:text-white hover:text-gray-400">
                Login
              </button>
              <button onClick={() => navigate("/register")} className="dark:text-white hover:text-gray-400">
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
