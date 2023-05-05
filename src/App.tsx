// Components
import Header from "./components/header";
import Banner from "./components/banner";
import OurWall from "./components/OurWall";
import NationalTrips from "./components/nationalTrips";
import Footer from "./components/footer";

// Images
import ClimaPerfeito from "./assets/clipaPerfeito.png";
import Inexplicavel from "./assets/inexplicaveis.png";
import Vibe from "./assets/vibe.png";
import TuristcPlaces from "./components/turistcPlace";
import ContactUs from "./components/contactUs";

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <NationalTrips
        image={ClimaPerfeito}
        title="O clima perfeito, no lugar perfeito"
        btnBackground="transparent"
        btnBorder="1px solid #fff"
        textColor="#fff"
      >
        <p>
          Planeje sua viagem com a sua paquera, compartilhar momentos preciosos
          juntos não tem preço.
        </p>
      </NationalTrips>
      <NationalTrips
        image={Vibe}
        title="Curta uma nova vibe entre amigos"
        btnBackground="transparent"
        btnBorder="1px solid var(--main-blue)"
        btnColor="var(--main-blue)"
        Fdirection="row-reverse"
        background="#fff"
        color="var(--main-blue)"
        textColor="var(--main-blue)"
      >
        <p style={{ color: "var(--main-blue)" }}>
          Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre
          amigos. Conheça nossos <b>Planos Multi</b>.
        </p>
      </NationalTrips>

      <NationalTrips
        image={Inexplicavel}
        title="Algumas experiências são inexplicáveis"
        btnBackground="transparent"
        btnBorder="1px solid #fff"
        textColor="#fff"
        width="100%"
      >
        <p>
          Conheça as fontes termais de <b>Caldas Novas, Goiás</b>. Águas
          quentes, num clima sereno, relaxante e natural.
        </p>
      </NationalTrips>
      <TuristcPlaces />
      <OurWall />
      <ContactUs />
      <Footer />
    </div>
  );
}
