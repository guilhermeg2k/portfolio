import { useContext } from 'react';
import style from "../styles/components/Navbar.module.css";
import Texts from "../data/texts";
import { Language, LanguageContext } from '../contexts/language';
import Link from "next/link";

export default function Navbar() {
  const { language } = useContext(LanguageContext);

  return (
    <nav>
      <div className={style.desktopNavbar}>
        <ul>
          <li><Link href="/"><a>{Texts[language].navbar.home}</a></Link></li>
          <li><Link href="/skills"><a>{Texts[language].navbar.skills}</a></Link></li>
          <li><Link href="/projects"><a>{Texts[language].navbar.projects}</a></Link></li>
          <li><Link href="/curriculum"><a>{Texts[language].navbar.curriculum}</a></Link></li>
          <li><a href="mailto:guilhermen2k@gmail.com" target="_blank" rel="noreferrer">{Texts[language].navbar.contact}</a></li>
        </ul>
      </div>
    </nav>
  )
}