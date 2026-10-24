"use client";
import { useLanguageContext } from "@/context/LanguageContext/LanguageContext";
import styles from "./HomeScreen.module.css";
import getLocale from "./locale";

const HomeScreen = () => {
  const { language } = useLanguageContext();

  const { description, skills } = getLocale(language);

  return (
    <div className="screen">
      <div className={styles["columns-container"]}>
        <div className={styles["left-column"]}>
          <div className={styles["name-container"]}>
            <p className={styles["name"]}>Tomás Masotta</p>
            <p className={styles["job"]}>Desarrollador Full Stack</p>
          </div>
          <h1>
            Desarrollo.
            <br />
            <span>De punta a punta.</span>
          </h1>
          <p className={styles["main-p"]}>
            Creo interfaces modernas, APIs y sistemas que conectan datos,
            personas y dispositivos para resolver problemas reales.
          </p>
        </div>
        <div className={styles["right-column"]}>
          <img src={"/images/ambiente_controlado/monitor_compacto.png"} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
