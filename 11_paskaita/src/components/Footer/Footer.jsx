import "./Footer.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <FaFacebookF className="footer-icon" />
      <FaTwitter className="footer-icon" />
      <FaInstagram className="footer-icon" />
      <FaYoutube className="footer-icon" />
    </div>
  );
};

export default Footer;
