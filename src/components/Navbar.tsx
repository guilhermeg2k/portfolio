import { useContext } from 'react';
import style from "../styles/components/Navbar.module.css";
import Texts from "../services/texts";
import { Language, LanguageContext } from '../contexts/language';

export default function Navbar() {
  const { language } = useContext(LanguageContext);

  return (
    <nav>
      <div className={style.desktopNavbar}>
        <ul>
          <li>{Texts[language].navbar.home}</li>
          <li>{Texts[language].navbar.abilities}</li>
          <li>{Texts[language].navbar.projects}</li>
          <li>{Texts[language].navbar.curriculum}</li>
          <li>{Texts[language].navbar.contact}</li>
        </ul>
      </div>
    </nav>
  )
}