import Head from 'next/head';
import Navbar from '../components/Navbar';
import LanguageSelector from '../components/LanguageSelector';
import Texts from "../data/texts";
import styles from "../styles/pages/skills.module.css";
import { LanguageContext } from '../contexts/language';
import { useContext } from 'react';
import SkillsList from '../data/skills';
import { motion } from "framer-motion";

export default function Skills() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>{`Guilherme's Portfolio`}</title>
      </Head>
      <div className={styles.skills}>
        <Navbar />
        <LanguageSelector />
        <div className={styles.skillsContainer}>
          <div>
            <motion.h1
              initial={{ y: "-1000" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.title}
            >
              {Texts[language].skills.title}
            </motion.h1>
            <motion.div
              initial={{ x: "-1000" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.skillList}
            >
              {
                SkillsList.map((skill, index) => (
                  <div key={index}>
                    <img src={skill.imgURL} alt={skill.title} title={skill.title} />
                  </div>
                ))
              }
            </motion.div>
            <motion.div
              initial={{ y: "1000" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.skillsText}
            >
              <p>{Texts[language].skills.description}</p>
            </motion.div>
          </div>
          <div>
            <motion.img
              initial={{ x: "1000" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              src="/images/geometric.gif"
            />
          </div>

        </div>
      </div>
    </>
  )
}
