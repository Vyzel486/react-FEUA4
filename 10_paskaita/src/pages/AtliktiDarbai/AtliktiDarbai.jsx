import Link from "../../components/Links/RouterLink";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "./Card/Card";
import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpeg';
import four from './images/4.jpg';
import five from './images/5.jpg';
import six from './images/6.jpg';
import seven from './images/7.jpg';
import eight from './images/8.jpeg';
import './AtliktiDarbai.css';

const AtliktiDarbai = () => {
    const photos = [one, two, three, four, five, six, seven, eight];
  return (
    <div>
      <Link to="/Atlikti darbai">
        <div className="tasks">
          <Header />
            <div className="photos">
                {photos.map((card, index) => (<Card key={index} url={card} title="Pramogos" description="Įdomiausios akimirkos"/>))}
            </div>
          <Footer />
        </div>
      </Link>
    </div>
  );
};

export default AtliktiDarbai;
