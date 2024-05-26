import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);

  const singOut =  () => {
    logOut()
    .then()
    .catch()
  }

  const navOptions = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>CONTACT US</NavLink></li>
        <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
        <li><NavLink to='/menu'>OUR MENU</NavLink></li>
        <li><NavLink to='/shop'>OUR SHOP</NavLink></li>
       
  </>

  return (
    <div className="navbar fixed z-10 bg-[#0F0F0F80] text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><p className="flex flex-col"><span className="font-bold">BISTRO BOSS </span><span>RESTAURANT</span></p></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    {user ? <button onClick={singOut} className="py-[20px] px-[30px] text-white bg-inherit border-b-[3px]  border-b-white rounded-xl font-bold transition-all duration-700 hover:bg-[#BB8506]">Sign Out</button> :<Link to='/login'><button className="py-[20px] px-[30px] text-white bg-inherit border-b-[3px]  border-b-white rounded-xl font-bold transition-all duration-700 hover:bg-[#BB8506]">Login</button></Link>}
  </div>
</div>
  );
};

export default NavBar;