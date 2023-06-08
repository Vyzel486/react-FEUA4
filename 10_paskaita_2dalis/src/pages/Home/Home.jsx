import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import './Home.css';
import ski from '../../components/images/ski.webp';

const Home = () => {
  return (
    <Link to='/'>
      <div className="home">
        <Header />
        <div className="title">
          <h1>Welcome to a wonderful SKI resort</h1>
          <img className="image" src={ski} alt="ski_image" />
        </div>
        <Footer />
      </div>
    </Link>
  );
};

export default Home;
