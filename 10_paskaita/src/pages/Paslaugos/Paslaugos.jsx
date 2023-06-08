import Link from "../../components/Links/RouterLink";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "./Card";

const Paslaugos = () => {
  return (
    <div>
      <Link to="/Paslaugos">
        <div className="paslaugos">
          <Header />
          <div className="cardContainer">
            <Card
              title="Vandens pramogos"
              description="Pasiplaukiojimai: baseine, ežere ant vandens pilių, vandens motociklais."
            />
            <Card
              title="Šuolis su parasparniu"
              description="Patirk nepakartojimus įspūdžius, sklendžiant virš kalnų su parasparniu."
            />
            <Card
              title="Kartingai"
              description="Pasivažinėjimas kartingais įspūdingiausia lenktynių trasa."
            />
          </div>
          <Footer />
        </div>
      </Link>
    </div>
  );
};

export default Paslaugos;
