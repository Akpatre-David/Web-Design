import style from "./style.module.css";
import harmburger from "../../images/menu-burger.svg";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <a href="/home">
            <h2>David</h2>
          </a>
        </div>

        <nav className={style.nav}>
          <ul className={`${style.navList} ${isOpen ? style.active : ""}`}>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <div className={style.icon} onClick={toggleMenu}>
            <img src={harmburger} alt="Menu" className={style.hamburgerIcon} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
