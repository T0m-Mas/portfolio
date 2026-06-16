import React, { FC } from "react";
import styles from "./SkillCard.module.css";

const SkillCard: FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className={styles["skill-card"]}>
      <div className={styles["skill-card-header"]}>
        {icon}
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
