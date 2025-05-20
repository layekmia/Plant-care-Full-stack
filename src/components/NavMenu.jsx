import { NavLink } from "react-router-dom";

export default function NavMenu() {
  return (
    <ul className=" items-center gap-5 text-base font-poppins text-stone-700 hidden lg:flex">
      <li>
        <NavLink to='/' className={({isActive}) => `${isActive && 'text-green-800'}`}>Home</NavLink>
      </li>
      <li>
        <NavLink to='/all-plants' className={({isActive}) => `${isActive && 'text-green-800'}`}>All Plants</NavLink>
      </li>
      <li>
        <NavLink to='/add-new-plant' className={({isActive}) => `${isActive && 'text-green-800'}`}>Add Plant</NavLink>
      </li>
      <li>
        <NavLink to='/dashboard' className={({isActive}) => `${isActive && 'text-green-800'}`}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to='/about-us' className={({isActive}) => `${isActive && 'text-green-800'}`}>About us</NavLink>
      </li>
    </ul>
  );
}
