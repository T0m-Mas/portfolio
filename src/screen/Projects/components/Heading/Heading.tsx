import { useLanguageContext } from "@/context/LanguageContext/LanguageContext";
import getLocale from "../../locale";
import styles from "./Heading.module.css";

const Heading = () => {
  const { language } = useLanguageContext();

  const locale = getLocale(language);

  return (
    <div className={styles["heading-container"]}>
      <p className={styles["label"]}>Proyectos Destacados</p>
      <h1>
        Proyectos <span>seleccionados</span>
      </h1>
      <p className={styles["description"]}>
        Sistemas reales para distintos contextos y necesidades
      </p>
    </div>
  );
};

export default Heading;
