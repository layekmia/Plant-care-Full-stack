import { Button } from "flowbite-react";
import NavMenu from "./NavMenu";
import { Link, useNavigate } from "react-router-dom";
import { usePlants } from "../context/PlantContext";
import { Dropdown, DropdownHeader, DropdownItem } from "flowbite-react";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase";
import { FaLeaf } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const { user } = usePlants();
  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <header>
      <nav className="px-5 md:px-8 lg:px-10 flex items-center justify-between h-[60px]">
        <Link to="/">
          <div className="flex items-center text-2xl font-bold gap-2 mb-2">
            <FaLeaf className="text-green-300" />
            <span>Min Plant</span>
          </div>
        </Link>
        <NavMenu />
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
          <div className="flex items-center  gap-3">
            <Button
              className="border border-accent text-accent  focus:ring-0 hover:bg-gray-50 transition-all"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              className="bg-green-500 focus:ring-0 hover:bg-green-600 transition-all border"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
