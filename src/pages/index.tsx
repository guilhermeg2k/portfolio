import Head from 'next/head';
import Navbar from '../components/Navbar';
import LanguageSelector from '../components/LanguageSelector';
import Texts from "../data/texts";
import styles from "../styles/pages/home.module.css";
import { LanguageContext } from '../contexts/language';
import { useContext } from 'react';
import { LinkedIn, GitHub, Email } from "@material-ui/icons";
import { motion } from "framer-motion";

export default function Home() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>{`Guilherme's Portfolio`}</title>
      </Head>
      <div className={styles.home}>
        <Navbar />
        <LanguageSelector />
        <div className={styles.homeContainer}>
          <div>
            <motion.h3
              initial={{ y: "-1000" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {Texts[language].home.hi}
            </motion.h3>
            <motion.h2
              initial={{ x: "-1000" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {Texts[language].home.name}
            </motion.h2>
            <motion.h3
              initial={{ x: "1000" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.work}>
              {Texts[language].home.work}
            </motion.h3>
            <motion.div
              initial={{ x: "-1000" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.socialLinks}
            >
              <a
                href="https://www.linkedin.com/in/guilherme-nascimento-b236b9176/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
              <a
                href="https://github.com/guilhermeg2k"
                className={styles.gitHub}
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
              <a
                href="mailto:contato@gnascimento.dev"
                className={styles.email}
                target="_blank"
                rel="noreferrer">
                <Email />
              </a>
            </motion.div>
          </div>
          <div>
            <motion.img 
              initial={{ x: "1000" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              src="/images/geometric.gif" />
          </div>
        </div>
      </div>
    </>
  )
}
