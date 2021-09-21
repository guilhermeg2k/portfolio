import Head from 'next/head';
import Navbar from '../components/Navbar';
import LanguageSelector from '../components/LanguageSelector';
import Texts from "../data/texts";
import styles from "../styles/pages/home.module.css";
import { LanguageContext } from '../contexts/language';
import { useContext } from 'react';
import {LinkedIn, GitHub, Email} from "@material-ui/icons";

export default function Home() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>{`Guilherme's Portfolio`}</title>
      </Head>
      <div className={styles.home}>
        <Navbar/>
        <LanguageSelector/>
        <div className={styles.homeContainer}>
          <div>
            <h3>{Texts[language].home.hi}</h3>
            <h2>{Texts[language].home.name}</h2>
            <h3 className={styles.work}>{Texts[language].home.work}</h3>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/guilherme-nascimento-b236b9176/" target="_blank" rel="noreferrer"><LinkedIn/></a>
              <a href="https://github.com/guilhermeg2k" className={styles.gitHub} target="_blank" rel="noreferrer"><GitHub/></a>
              <a href="mailto:guilhermen2k@gmail.com" className={styles.email} target="_blank" rel="noreferrer"><Email/></a>
            </div>
          </div>
          <div>
            <img src="/images/geometric.gif"/>
          </div>
        </div>
      </div>
    </>
  )
}
