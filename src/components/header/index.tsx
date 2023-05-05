import Button from "../button";
import Logo from "../../assets/logo.png";
import "./header.scss";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <header>
      <img src={Logo} alt="logo Gudi" />
      {!isMobile ? (
        <nav className="menu">
          <ul>
            <li onClick={() => setOpenMenu(false)}>Sobre</li>
            <li onClick={() => setOpenMenu(false)}>Benefícios</li>
            <li onClick={() => setOpenMenu(false)}>Contato</li>
            <li onClick={() => setOpenMenu(false)}>
              <Button text="agendar" />
            </li>
          </ul>
        </nav>
      ) : openMenu ? (
        <nav className="menu-mobile">
          <AiOutlineCloseCircle
            color="var(--main-blue)"
            size={40}
            onClick={() => setOpenMenu(false)}
            style={{
              position: "absolute",
              top: "25px",
              right: "25px",
              zIndex: 2,
            }}
          />
          <ul className="menu-mobile">
            <li></li>
            <li onClick={() => setOpenMenu(false)}>Sobre</li>
            <li onClick={() => setOpenMenu(false)}>Benefícios</li>
            <li onClick={() => setOpenMenu(false)}>Contato</li>
            <li onClick={() => setOpenMenu(false)}>
              <Button text="agendar" />
            </li>
          </ul>
        </nav>
      ) : (
        <AiOutlineMenu
          onClick={() => setOpenMenu(true)}
          color="var(--main-blue)"
          size={30}
        />
      )}
    </header>
  );
}
