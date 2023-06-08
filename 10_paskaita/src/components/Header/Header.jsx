import Link from '../Links/RouterLink';
import "./Header.css";
import Logo from "./images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={Logo} alt="" />
      </div>
      <ul>
        <li>
          <Link to="/Pagrindinis">Pagrindinis</Link>
        </li>
        <li>
          <Link to="/Apie mus">Apie mus</Link>
        </li>
        <li>
          <Link to="/Naujienos">Naujienos</Link>
        </li>
        <li>
          <Link to="/Paslaugos">Paslaugos</Link>
        </li>
        <li>
          <Link to="/Atlikti darbai">Atlikti darbai</Link>
        </li>
        <li>
          <Link to="/Kontaktai">Kontaktai</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
