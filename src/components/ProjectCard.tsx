import { useContext } from "react";
import styles from "../styles/components/ProjectCard.module.css";
import { LanguageContext } from '../contexts/language';

interface Tag {
  name: string;
  color: string;
}

interface ProjectCardProps {
  name: string;
  tags: Array<Tag>;
  imageURL: string;
  description: Array<string>;
  previewURL: string;
  githubURL: string;
}

export default function ProjectCard({ name, imageURL, tags, description, previewURL, githubURL }: ProjectCardProps) {
  const { language } = useContext(LanguageContext);
  return (
    <div className={styles.projectCardContainer}>
      <div>
        <div>
          <img src={imageURL} alt={name} title={name} />
        </div>

        <div className={styles.buttonsContainer}>
          <button onClick={() => window.open(previewURL, '_blank')}>Preview</button>
          <button onClick={() => window.open(githubURL, '_blank')}>View code</button>
        </div>

      </div>
      <div>
        <h3>{name}</h3>
        <ul>
          {tags.map((tag, index) =>
            <li key = {index} style={{ backgroundColor: tag.color }}>{tag.name}</li>
          )}
        </ul>
        <p>{description[language]}</p>
      </div>
    </div>
  )
}