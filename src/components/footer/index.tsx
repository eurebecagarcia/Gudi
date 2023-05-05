import "./footer.scss";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <section className="container-footer">
      <div>
        <img src={Logo} alt="" />
        <p className="p-footer">Sobre nós </p>
        <p className="p-footer">Mural de memórias</p>
        <p className="p-footer">Eventos Gudi</p>
        <p className="p-footer">Nosso blog</p>
      </div>
      <div>
        <h3>Contato</h3>
        <p className="p-footer">Chat Virtual </p>
        <p className="p-footer">SAC Online</p>
        <p className="p-footer">Ouvidoria</p>
        <p className="p-footer"> FAQ</p>
      </div>
      <div>
        <h3>Benefícios</h3>
        <p className="p-footer">Conta digital Gudi </p>
        <p className="p-footer">Viaje com Milhas</p>
        <p className="p-footer">C6 Átomos</p>
        <p className="p-footer">iD Jovem</p>
      </div>
      <div>
        <h3>Lugares</h3>
        <p className="p-footer">O melhor do Brasil</p>
        <p className="p-footer">Cidades frequentes</p>
        <p className="p-footer">Pontos turísticos</p>
        <p className="p-footer">Restaurantes</p>
      </div>
      <div>
        <h3>Curiosidades</h3>
        <p className="p-footer">Cultura e tradições </p>
        <p className="p-footer">Pratos típicos</p>
        <p className="p-footer">Mitos brasileiros</p>
        <p className="p-footer">Carnaval</p>
      </div>
    </section>
  );
}
