import { FC } from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard: FC<{
  logoSrc: string;
  description: string;
  animationDelay?: number;
}> = ({ description, logoSrc, animationDelay }) => {
  return (
    <div
      className={styles["card"]}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <img className={styles["logo"]} src={logoSrc} />
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
