import { Outlet, Link } from "react-router-dom";
import { ReactComponent as HomeSVG } from './../../assets/Home.svg';
import { ReactComponent as FranchiseSVG } from './../../assets/Franchise.svg';
import { ReactComponent as UserSVG } from './../../assets/User.svg';

const NavBar = () => {
  return (
    <>
      <nav>
        <ul  className="flex col justify-around bg-blue-purple">
          <li>
            <Link to="/"><HomeSVG /></Link>
          </li>
          <li>
          <Link to="/franchise"><FranchiseSVG /></Link>
            
          </li>
          <li>
          <Link to="/user"> <UserSVG /></Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default NavBar;