import React, { FC } from "react";
import styles from "./SkillCard.module.css";

const SkillCard: FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  animationDelay?: number;
}> = ({ title, description, icon, animationDelay }) => {
  return (
    <div
      className={styles["skill-card"]}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className={styles["skill-card-header"]}>
        {icon}
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
