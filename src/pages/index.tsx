import Head from 'next/head';
import Navbar from '../components/Navbar';
import LanguageSelector from '../components/LanguageSelector';
import Texts from "../services/texts";
import styles from "../styles/pages/home.module.css";
import { LanguageContext } from '../contexts/language';
import { useContext } from 'react';
import {LinkedIn, GitHub, Email} from "@material-ui/icons";

export default function Home() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>Guilherme's Portfolio</title>
      </Head>
      <div>
        <Navbar/>
        <LanguageSelector/>
        <div className={styles.homeContainer}>
          <div>
            <h3>{Texts[language].homePage.hi}</h3>
            <h2>{Texts[language].homePage.name}</h2>
            <h3 className={styles.work}>{Texts[language].homePage.work}</h3>
            <div className={styles.socialLinks}>
              <a href=""><LinkedIn/></a>
              <a href="" className={styles.gitHub}><GitHub/></a>
              <a href="" className={styles.email}><Email/></a>
            </div>
          </div>
          <div>
            HI2
          </div>
        </div>
      </div>
    </>
  )
}
