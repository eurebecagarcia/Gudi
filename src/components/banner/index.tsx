import Button from "../button";
import Input from "../input";
import "./banner.scss";

export default function Banner() {
  return (
    <div className="imageBanner">
      <div className="elementBanner">
        <h1>Para qual estado você deseja ir?</h1>
        <Input
          type="text"
          placeholder="Pesquisar"
          inputWidth={window.innerWidth <= 500 ? "80%" : ""}
        />
        <Button text="buscar" />
      </div>
    </div>
  );
}
