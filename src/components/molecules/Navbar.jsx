import { Outlet, Link, useLocation } from "react-router-dom";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { IoLibrary } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import React, { useState } from "react";

const NavBar = () => {
  const [isActive, setIsActive] = useState(window.location.path)

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

  const nav_items = [
    {
      "link": "/",
      "icon": <BiSolidHomeAlt2></BiSolidHomeAlt2>
    },
    {
      "link": "/franchise",
      "icon": <IoLibrary></IoLibrary>
    },
    {
      "link": "/user",
      "icon": <FaUser></FaUser>
    }
  ]


  return (
    <>
      <nav>
        <ul className="flex col justify-around bg-blue-purple h-28 items-center ">
          {nav_items.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.link} 
                  className={isActive === item.link ? "cursor-auto" : "cursor-pointer"} 
                  onClick={() => { change_nav(item.link) }}
                  >
                  <li className={`${con_base_styling} ${isActive === item.link ? con_active_styling : con_non_active_styling}`} >
                    {React.cloneElement(item.icon, {
                        className: `${base_styling} ${isActive === item.link ? active_styling : non_active_styling}`,
                    })}
                  </li>
                </Link>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default NavBar;