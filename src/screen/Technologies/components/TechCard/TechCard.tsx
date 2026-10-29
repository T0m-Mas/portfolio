import { FC, ReactNode } from "react";
import styles from "./TechCard.module.css";

const TechCard: FC<{
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
}> = ({ description, icon, items, title }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["title-container"]}>
        {icon}
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
      <div className={styles["wrapper"]}>
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
