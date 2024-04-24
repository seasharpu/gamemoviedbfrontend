import { Outlet, Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { IoLibrary } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const styling = `w-20 h-20`
  return (
    <>
      <nav>
        <ul  className="flex col justify-around bg-blue-purple">
          <li>
            <Link to="/"><TiHome className={styling} /></Link>
          </li>
          <li>
          <Link to="/franchise"><IoLibrary className={styling} /></Link>
            
          </li>
          <li>
          <Link to="/user"> <FaUser className={styling} /></Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default NavBar;