import Link from "../../components/Links/RouterLink";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Pagrindinis.css";

const Pagrindinis = () => {
  return (
    <Link to="/Pagrindinis">
      <div className="mainContainer">
        <Header />
        <Footer />
      </div>
    </Link>
  );
};

export default Pagrindinis;
