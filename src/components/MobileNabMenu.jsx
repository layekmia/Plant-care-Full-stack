import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { usePlants } from "../context/PlantContext";
import { useEffect, useRef } from "react";

export default function MobileNabMenu() {
  const { isOpen, setIsOpen } = usePlants();
  const menuRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
     {isOpen && (
        <div
          className="fixed inset-0  z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    <div
      ref={menuRef}
      className={`fixed top-0 bg-white dark:bg-gray-800 h-screen w-[250px] z-50 md:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-[110%]"
      } transition-transform duration-500`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="text-right w-full px-5 py-3 bg-green-600 dark:bg-dark-background flex items-center gap-2 justify-end text-white font-semibold text-sm  font-poppins uppercase"
      >
        close <RxCross1 />
      </button>
      <ul className="flex flex-col">
        {[
          { to: "/", label: "Home" },
          { to: "/all-plants", label: "All Plants" },
          { to: "/add-new-plant", label: "Add Plant" },
          { to: "/dashboard", label: "Dashboard" },
          { to: "/about-us", label: "About Us" },
        ].map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `py-[10px] border-b dark:border-gray-600 block pl-10 hover:text-green-600 dark:text-white ${
                  isActive ? "text-green-600" : ""
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
