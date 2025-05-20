import { NavLink } from "react-router-dom";

export default function NavMenu() {
  return (
    <ul className="flex items-center gap-5 text-[17px] font-poppins text-stone-700">
      <li>
        <NavLink to='/' className={({isActive}) => `${isActive && 'text-accent'}`}>Home</NavLink>
      </li>
      <li>
        <NavLink to='/all-plants' className={({isActive}) => `${isActive && 'text-accent'}`}>All Plants</NavLink>
      </li>
      <li>
        <NavLink to='/add-new-plant' className={({isActive}) => `${isActive && 'text-accent'}`}>Add Plant</NavLink>
      </li>
      <li>
        <NavLink to='/dashboard' className={({isActive}) => `${isActive && 'text-accent'}`}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to='/about-us' className={({isActive}) => `${isActive && 'text-accent'}`}>About us</NavLink>
      </li>
    </ul>
  );
}
