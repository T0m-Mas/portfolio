import { FC, ReactNode } from "react";
import styles from "./SkillView.module.css";

const SkillView: FC<{
  icon: ReactNode;
  title: string;
  description: string;
}> = ({ icon, description, title }) => {
  return (
    <div className={styles["skill-container"]}>
      {icon}
      <div>
        <p className={styles["title"]}>{title}</p>
        <p className={styles["description"]}>{description}</p>
      </div>
    </div>
  );
};

export default SkillView;
