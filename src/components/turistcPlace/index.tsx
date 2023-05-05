import "./turistcPlace.scss";
import Rj from "../../assets/rJ.svg";
import Ro from "../../assets/rO.svg";
import Cn from "../../assets/Cn.svg";
import Am from "../../assets/aM.svg";
import Button from "../button";

export default function TuristcPlaces() {
  return (
    <section className="container-places">
      <div className="rio-de-janeiro">
        {/* <img src={Rj} alt="" /> */}
        <button>Rio de Janeiro</button>
      </div>
      <div className="rio-das-ostras">
        <button>Rio das Ostras</button>
      </div>
      <div className="caldas-novas">
        <button>Caldas Novas</button>
      </div>
      <div className="amazonia">
        <button>Amazonia</button>
      </div>
    </section>
  );
}
