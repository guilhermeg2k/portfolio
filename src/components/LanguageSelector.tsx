import {useContext } from 'react';
import style from "../styles/components/LanguageSelector.module.css";
import { LanguageContext, Language } from "../contexts/language";

export default function LanguageSelector(){
  const {setLanguage} = useContext(LanguageContext);

  return (
    <div className={style.languageSelector}>
      <img src="images/en-flag.webp" onClick={() => {setLanguage(Language.en)}}></img>
      <img src="images/pt-flag.png" onClick={() => {setLanguage(Language.pt)}}></img>
    </div>
  )
}