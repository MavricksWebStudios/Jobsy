import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "Assets/Images/logo.png";
import { logout } from "../../redux/userSlice";
import { Usercard } from "./Usercard";
import { MdOutlineClose } from "react-icons/md";
function Navbar() {
  let navigate = useNavigate();
  // valuesForOptionsMenu = ['hidden', 'flex-col', 'block']
  const [optionsMenu, setOptionsMenu] = useState("hidden");
  const [menuIcon, setMenuIcon] = useState('inline')

  const user = useSelector((state) => state.user.user);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const dispatch = useDispatch();

  const openMenu = () => {
    setOptionsMenu("flex flex-col");
    setMenuIcon('hidden');
  }
  
  const closeMenu = () => {
    setOptionsMenu("hidden");
    setMenuIcon('block');
  }



  function handleLogOut() {
    dispatch(logout());
    setIsOptionsOpen(false);
  }

  function viewProfileHandler() {
    user
      ? navigate(`/hiretalent/${user.id}`)
      : toast.error("You need to login first!");
  }

  return (
    <nav className="flex relative  items-center justify-between mb-2 w-full text-lg font-medium p-1 h-[56px]">
      <NavLink activeClassName="active" to="/">
        <img className="h-12 ml-2 brightness-150" src={`${logo}`} alt="logo" />
      </NavLink>
      <GiHamburgerMenu
        className={`md:hidden icon cursor-pointer ${menuIcon}
        `}
        onClick={openMenu}
      />
      <ul
        className={`md:flex md:flex-row items-center md:px-3 md:my-1 last:pr-0 
        ${optionsMenu} 
        bg-neutral-700 md:bg-transparent
        top-0 right-0
        absolute md:static
        h-screen md:h-fit
        w-64 md:w-fit z-20 md:z-0
        gap-2 md:gap-0
        `}
      >
        <MdOutlineClose
          className={`md:hidden cursor-pointer self-end -mb-10`}
          size={30}
          onClick={closeMenu}
        />

        <li className="navbar-li">
          <NavLink activeClassName="active" to="/explorework">
            {" "}
            Explore Work
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink activeClassName="active" to="/hiretalent">
            {" "}
            Hire Talents
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink activeClassName="active" to="/challanges">
            {" "}
            Challanges
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink activeClassName="active" to="/getstarted">
            {" "}
            Get Started
          </NavLink>
        </li>
        <li
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          className="w-10 h-10 cursor-pointer"
        >
          {user ? (
            <Usercard userImage={user.image} />
          ) : (
            <FaUserCircle size={40} />
          )}
          {isOptionsOpen && (
            <div className="w-28 absolute z-50 text-right right-1 mr-1">
              <div
                onClick={() => viewProfileHandler()}
                className="navbar-li text-right mx-0"
              >
                View Profile
              </div>
              <hr />
              <div
                className="navbar-li text-right mx-0"
                onClick={() => handleLogOut()}
              >
                Logout
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
