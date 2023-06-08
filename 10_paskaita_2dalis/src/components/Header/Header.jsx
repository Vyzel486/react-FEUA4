import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.png";
import Search from "../Search/Search";

const Header = ({ handleSearch }) => {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img className="headerLogo" src={logo} alt="Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Users">Users</Link>
        </li>
      </ul>
      <Search handleSearch={handleSearch}/>
    </div>
  );
};

export default Header;
