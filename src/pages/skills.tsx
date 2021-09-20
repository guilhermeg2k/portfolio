import Head from 'next/head';
import Navbar from '../components/Navbar';
import LanguageSelector from '../components/LanguageSelector';
import Texts from "../services/texts";
import styles from "../styles/pages/skills.module.css";
import { LanguageContext } from '../contexts/language';
import { useContext } from 'react';
import SkillsList from '../services/skills';

export default function Skills() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>Guilherme's Portfolio</title>
      </Head>
      <div className={styles.skills}>
        <Navbar />
        <LanguageSelector />
        <div className={styles.skillsContainer}>
          <div>
            <h1 className={styles.title}>{Texts[language].skills.title}</h1>
            <div className={styles.skillList}>
              {
                SkillsList.map(skill => (
                  <div>
                    <img src={skill.imgURL} />
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <img src="/images/geometric.gif" />
          </div>

        </div>
      </div>
    </>
  )
}