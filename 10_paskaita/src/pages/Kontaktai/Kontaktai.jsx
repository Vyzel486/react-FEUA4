import Link from "../../components/Links/RouterLink";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { UserProvider } from "../../contexts/userContext";
import Login from "../../components/Login/Login";
import Logout from "../../components/Login/Logout";
import "./Kontaktai.css";

const Kontaktai = () => {
  return (
    <div>
      <Link to="/Kontaktai">
        <div className="contacts">
          <Header />
          <div className="contactsForm">
            <UserProvider>
              <Login />
              <Logout />
            </UserProvider>
          </div>
          <Footer />
        </div>
      </Link>
    </div>
  );
};

export default Kontaktai;
