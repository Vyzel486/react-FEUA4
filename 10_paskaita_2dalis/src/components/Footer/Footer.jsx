import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Users">Users</Link>
        </li>
      </ul>
      <p>All rights reserved &copy; {getCurrentYear()}</p>
    </div>
  );
};

export default Footer;
