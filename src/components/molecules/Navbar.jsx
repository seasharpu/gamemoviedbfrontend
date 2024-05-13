import { Outlet, Link, useLocation } from "react-router-dom";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { IoLibrary } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { useState } from "react";

const NavBar = () => {
  const [isActive, setIsActive] = useState("/")

  //svg containers
  const con_base_styling = "w-16 h-16 flex justify-center items-end rounded-full relative transition-colors z-10 hover:bg-main-purple"
  const con_non_active_styling = "bg-main-purple hover:bg-main-purple-accent"
  const con_active_styling = "bg-main-purple overflow-hidden "

  //svgs
  const base_styling = "w-14 h-14 absolute -bottom-1.5 z-20 transition-colors"
  const non_active_styling = `text-blue-purple`
  const active_styling = 'text-green'


  const change_nav = (location) => {
    setIsActive(location)
  }


  return (
    <>
      <nav>
        <ul className="flex col justify-around bg-blue-purple h-28 items-center ">
          <Link to="/" className={isActive === "/" ? "cursor-auto" : "cursor-pointer"} onClick={() => { change_nav("/") }}>
            <li className={`${con_base_styling} ${isActive === "/" ? con_active_styling : con_non_active_styling}`} >
              <BiSolidHomeAlt2 className={`${base_styling} ${isActive === "/" ? active_styling : non_active_styling}`} />
            </li>
          </Link>

          <Link to="/franchise" className={isActive === "/franchise" ? "cursor-auto" : "cursor-pointer"} onClick={() => { change_nav("/franchise") }} >
            <li className={`${con_base_styling} ${isActive === "/franchise" ? con_active_styling : con_non_active_styling}`}>
              <IoLibrary className={`${base_styling} ${isActive === "/franchise" ? active_styling : non_active_styling}`} />
            </li>
          </Link>

          <Link to="/user" className={isActive === "/user" ? "cursor-auto" : "cursor-pointer"} onClick={() => { change_nav("/user") }}>
            <li className={`${con_base_styling} ${isActive === "/user" ? con_active_styling : con_non_active_styling}`}>
              <FaUser className={`${base_styling} ${isActive === "/user" ? active_styling : non_active_styling}`}  />
            </li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default NavBar;