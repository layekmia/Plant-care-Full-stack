// import { Button } from "flowbite-react";
// import NavMenu from "./NavMenu";
// import { Link, useNavigate } from "react-router-dom";
// import { usePlants } from "../context/PlantContext";
import { Dropdown, DropdownHeader, DropdownItem } from "flowbite-react";
// import { signOut } from "firebase/auth";
// import auth from "../firebase/firebase";
// import { FaLeaf } from "react-icons/fa";

// export default function Header() {
//   const navigate = useNavigate();
//   const { user } = usePlants();

//   return (
//     <header>
//       <nav className="px-5 md:px-8 lg:px-10 flex bg-blue-500 text-white items-center justify-between h-[60px] lg:h-[70px]">
//         <Link to="/">
//           <div className="flex items-center text-2xl font-bold gap-2 mb-2">
//             <FaLeaf className="text-green-300" />
//             <span>Min Plant</span>
//           </div>
//         </Link>
//         <NavMenu />
//         {user ? (
//           <Dropdown
//             label=""
//             dismissOnClick={false}
//             renderTrigger={() => (
//               <img
//                 src={user.image}
//                 alt="User profile"
//                 className="w-10 h-10 rounded-full object-cover border-2 border-stone-300 cursor-pointer"
//               />
//             )}
//           >
//             <div>
//               <DropdownHeader>
//                 <span className="block text-sm">{user.name}</span>
//                 <span className="block truncate text-sm font-medium">
//                   {user.email}
//                 </span>
//               </DropdownHeader>
//               <DropdownItem onClick={handleLogout}>Sign out</DropdownItem>
//             </div>
//           </Dropdown>
//         ) : (
//           <div className="flex items-center  gap-3">
//             <Button
//               className="border border-accent text-accent  focus:ring-0 hover:bg-gray-50 transition-all"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </Button>
//             <Button
//               className="bg-green-500 focus:ring-0 hover:bg-green-600 transition-all border"
//               onClick={() => navigate("/register")}
//             >
//               Register
//             </Button>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

import { User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { usePlants } from "../context/PlantContext";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase";

export default function Header() {
  const { user } = usePlants();
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();
  const {setIsOpen} = usePlants();

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 h-[60px] md:h-auto">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
       <button onClick={() => setIsOpen(true)} className="text-2xl text-gray-600 md:hidden"><HiMiniBars3BottomLeft /></button>

        <Link to="/" className="text-2xl font-bold text-gray-800">
          P🌿lantPal
        </Link>
        <NavMenu />

        <div className="flex items-center gap-2">
          <button
            onClick={() => setEnabled(!enabled)}
            className={`w-10 h-10 flex items-center justify-center rounded-md  text-gray-500 ${
              enabled ? "hover:bg-[#374151]" : "hover:bg-[#f2f2f2]"
            } transition-all duration-300`}
          >
            {enabled ? (
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
              <button onClick={() => navigate("/login")}>
                <User className="w-5 h-5 text-gray-600 hover:text-green-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
