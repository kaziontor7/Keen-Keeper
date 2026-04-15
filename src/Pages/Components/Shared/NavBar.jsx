import React from 'react';
import { BiStats } from 'react-icons/bi';
import { FaHome, FaRegClock } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
    const links = (
        <>
        <NavLink to={'/'} className={({isActive})=>`btn font-medium flex items-center gap-1.5 ${isActive ? "btn bg-dark-green text-white font-semibold " : 'gray'} `}>{<FaHome></FaHome>}Home</NavLink>
        <NavLink to={'/timeline'} className={({isActive})=>`btn  font-medium flex items-center gap-1.5 ${isActive ? "btn bg-dark-green text-white font-semibold " : 'gray'} `}>{<FaRegClock></FaRegClock>}Timeline</NavLink>
        <NavLink to={'/stats'} className={({isActive})=>`btn font-medium flex items-center gap-1.5 ${isActive ? "btn bg-dark-green text-white font-semibold " : 'gray'} `}>{<BiStats></BiStats>}Stats</NavLink>
        </>
    )
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2.5">
       {links}
      </ul>
    </div>
    <Link to={'/'} className="black font-extrabold text-2xl">Keen<span className='dark-green font-semibold'>Keeper</span></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-1.5 items-center">
     {links}
    </ul>
  </div>

</div>
        </div>
    );
};

export default NavBar;