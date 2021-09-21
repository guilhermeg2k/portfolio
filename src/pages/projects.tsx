import Head from 'next/head';
import Navbar from '../components/Navbar';
import LanguageSelector from '../components/LanguageSelector';
import Texts from "../data/texts";
import styles from "../styles/pages/projects.module.css";
import { LanguageContext } from '../contexts/language';
import { useContext } from 'react';
import ProjectsList from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>Guilherme's Portfolio</title>
      </Head>
      <div className={styles.projects}>
        <Navbar />
        <LanguageSelector />
        <div className={styles.projectsContainer}>
          <div>
            <h1 className={styles.title}>{Texts[language].projects.title}</h1>
            <div className={styles.projectsList}>
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
            </div>
            <div className={styles.projectsText}>

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
