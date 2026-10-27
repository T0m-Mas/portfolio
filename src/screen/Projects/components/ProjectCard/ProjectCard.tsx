import classNames from "classnames";
import { FC } from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard: FC<{
  coverSrc: string;
  logoSrc: string;
  description: string;
  highlight?: boolean;
}> = ({ coverSrc, logoSrc, description, highlight = false }) => {
  return (
    <div
      className={classNames(styles["card-container"], {
        [styles["highlight"]]: highlight,
      })}
    >
      <img src={coverSrc} className={styles["cover"]} />
      <div className={styles["content"]}>
        <img src={logoSrc} className={styles["logo"]} />
        <p className={styles["description"]}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
