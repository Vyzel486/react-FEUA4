import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import {
  MAIN_ROUTE,
  PROFILE_ROUTE,
  topbarNavigationItems,
} from "../../routes/const";
import { showUserFullName } from "../../utils/user";
import { FaUserCircle } from "react-icons/fa";
import "./Topbar.scss";
import logo from "./images/logo.webp";

const Topbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navigation">
      <div>
        <Link to={MAIN_ROUTE}>
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="navigation-items">
        {topbarNavigationItems.map((navItem) => (
          <Link to={navItem.route} key={navItem.title}>
            {navItem.title}
          </Link>
        ))}
      </div>
      <Link to={PROFILE_ROUTE} className="user-container">
        <FaUserCircle />
        {showUserFullName(user)}
      </Link>
    </nav>
  );
};

export default Topbar;
