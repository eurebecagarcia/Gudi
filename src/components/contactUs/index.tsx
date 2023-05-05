import "./contactUs.scss";
import Input from "../input";
import Button from "../button";

export default function ContactUs() {
  return (
    <section className="container-contactUs">
      <h2>Fale conosco</h2>
      <div className="box-to-write">
        <Input type="e-mail" placeholder="Diga o seu melhor email" />
        <Input type="text" placeholder="Assunto" />
        <textarea placeholder="Escreva a sua mensagem" />
        <Button text="Enviar" btnColor="#fff" btnBorder="2px solid #fff" />
      </div>
    </section>
  );
}
