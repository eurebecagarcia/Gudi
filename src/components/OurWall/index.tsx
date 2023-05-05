import "./ourwall.scss";
import Baby from "../../assets/baby.png";
import Celebration from "../../assets/celebration.png";
import Dog from "../../assets/dog.png";
import Selfie from "../../assets/selfie.png";
import Bike from "../../assets/bike.png";
import Woman from "../../assets/woman.png";
import Map from "../../assets/map.svg";
import Plane from "../../assets/plane.svg";
import Coconut from "../../assets/coconut.svg";
import Restaurant from "../../assets/restaurant.svg";

export default function OurWall() {
  return (
    <section className="container-ourWall">
      <div className="text-ourWall">
        <p>use a hashtag #brasilisverigudi</p>
        <h2>Nosso mural de Experiências</h2>
        <div className="box-grid">
          <img src={Baby} alt="" />
          <img src={Celebration} alt="" />
          <img src={Dog} alt="" />
          <img src={Selfie} alt="" />
          <img src={Bike} alt="" />
          <img src={Woman} alt="" />
        </div>
        <div className="container-info">
          <div className="box-color-gray">
            <img src={Map} alt="" />
            <p>O melhor do Brasil</p>
          </div>
          <div className="box-color-blue">
            <img src={Plane} alt="" />
            <p>Cidades mais frequentadas</p>
          </div>
          <div className="box-color-gray">
            <img src={Coconut} alt="" />
            <p>Pontos turísticos</p>
          </div>
          <div className="box-color-blue">
            <img src={Restaurant} alt="" />
            <p>Restaurantes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
