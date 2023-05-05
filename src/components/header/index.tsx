import Button from "../button";
import Logo from "../../assets/logo.png";
import "./header.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [openMenu, setopenMenu] = useState<boolean>(false);

  return (
    <header>
      <img src={Logo} alt="logo Gudi" />
      {!openMenu && window.innerWidth <= 500 ? (
        <AiOutlineMenu onClick={() => setopenMenu(true)} />
      ) : (
        <nav className="menu">
          <ul>
            <li>Sobre</li>
            <li>Benefícios</li>
            <li>Contato</li>
            <li>
              <Button text="agendar" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
