import Topbar from "../components/Topbar/Topbar";
import Footer from "../components/Footer/Footer";

const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="authenticatedLayout-container">
      <Topbar />
      <div className="authenticated-container">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthenticatedLayout;
