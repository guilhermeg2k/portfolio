import Head from 'next/head';
import Navbar from '../components/Navbar';
import LanguageSelector from '../components/LanguageSelector';
import Texts from "../data/texts";
import styles from "../styles/pages/projects.module.css";
import { LanguageContext } from '../contexts/language';
import { useContext } from 'react';
import ProjectsList from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { motion } from "framer-motion";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>{`Guilherme's Portfolio`}</title>
      </Head>
      <div className={styles.projects}>
        <Navbar />
        <LanguageSelector />
        <div className={styles.projectsContainer}>
          <div>
            <motion.h1
              initial={{ y: "-1000" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.title}>{Texts[language].projects.title}</motion.h1>
            <motion.div 
              initial={{ x: "-1000" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.projectsList}
            >
              {
                ProjectsList.map((project, index) => (
                  <ProjectCard
                    key={index}
                    name={project.name}
                    tags={project.tags}
                    description={project.description}
                    imageURL={project.imgURL}
                    previewURL={project.previewURL}
                    githubURL={project.githubURL} />
                ))
              }
            </motion.div>
            <div className={styles.projectsText}>

            </div>
          </div>
          <div>
            <motion.video
              initial={{ x: "1000" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              src="/images/geometric2.webm"
              autoPlay
              loop
            />
          </div>
        </div>
      </div>
    </>
  )
}
