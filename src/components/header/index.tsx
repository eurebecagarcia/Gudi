import Button from "../button";
import Logo from "../../assets/logo.png";
import "./header.scss";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header>
      <img src={Logo} alt="logo Gudi" />
      {!openMenu && window.innerWidth <= 500 ? (
        <AiOutlineMenu
          onClick={() => setOpenMenu(true)}
          color="var(--main-blue)"
          size={30}
        />
      ) : (
        <nav className="menu">
          {window.innerWidth <= 500 && (
            <AiOutlineCloseCircle
              color="var(--main-blue)"
              size={40}
              onClick={() => setOpenMenu(false)}
              style={{
                position: "absolute",
                top: "25px",
                right: "25px",
              }}
            />
          )}
          <ul>
            <li onClick={() => setOpenMenu(false)}>Sobre</li>
            <li onClick={() => setOpenMenu(false)}>Benefícios</li>
            <li onClick={() => setOpenMenu(false)}>Contato</li>
            <li onClick={() => setOpenMenu(false)}>
              <Button text="agendar" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
