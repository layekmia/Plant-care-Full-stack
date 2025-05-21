import { NavLink } from "react-router-dom";

export default function NavMenu() {
  return (
    <ul className=" items-center text-base font-poppins text-stone-700 hidden lg:flex">
      <li>
        <NavLink to='/' className={({isActive}) => `py-2 px-5 rounded-md ${isActive && 'bg-green-600 text-white'}`}>Home</NavLink>
      </li>
      <li>
        <NavLink to='/all-plants' className={({isActive}) => `py-2 px-5 rounded-md ${isActive && 'bg-green-600 text-white'}`}>All Plants</NavLink>
      </li>
      <li>
        <NavLink to='/add-new-plant' className={({isActive}) => `py-2 px-5 rounded-md ${isActive && 'bg-green-600 text-white'}`}>Add Plant</NavLink>
      </li>
      <li>
        <NavLink to='/dashboard' className={({isActive}) => `py-2 px-5 rounded-md ${isActive && 'bg-green-600 text-white'}`}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to='/about-us' className={({isActive}) => `py-2 px-5 rounded-md ${isActive && 'bg-green-600 text-white'}`}>About us</NavLink>
      </li>
    </ul>
  );
}
