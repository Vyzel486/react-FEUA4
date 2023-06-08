import Link from '../Links/RouterLink';
import './Footer.css';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="footer">
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
      <p>All rights reserved &copy; {getCurrentYear()}</p>
    </div>
  );
};

export default Footer;
