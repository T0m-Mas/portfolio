"use client";
import { useLanguageContext } from "@/context/LanguageContext/LanguageContext";
import classNames from "classnames";
import {
  Database,
  MonitorSmartphone,
  MoveUpRight,
  Settings,
} from "lucide-react";
import Link from "next/link";
import SkillView from "./components/SkillView";
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
            Desarrollo de Software.
            <br />
            <span>De punta a punta.</span>
          </h1>
          <p className={styles["main-p"]}>
            Creo interfaces modernas, APIs y sistemas que conectan datos,
            personas y dispositivos para resolver problemas reales.
          </p>
          <div className={styles["buttons-container"]}>
            <Link
              href={"/projects"}
              className={classNames(styles["button"], styles["button-primary"])}
            >
              Ver Proyectos <MoveUpRight />
            </Link>
            <Link
              href={"/projects"}
              className={classNames(
                styles["button"],
                styles["button-secondary"],
              )}
            >
              Contactar
            </Link>
          </div>
        </div>
        <div className={styles["right-column"]}>
          <img src={"/images/ambiente_controlado/monitor_compacto.png"} />
        </div>
      </div>
      <div className={styles["divider"]} />
      <div className={styles["skills-row"]}>
        <SkillView
          icon={<MonitorSmartphone size={38} />}
          title="Interfaces"
          description="modernas y efectivas"
        />
        <div className={styles["divider-vertical"]} />
        <SkillView
          icon={<Settings size={38} />}
          title="APIs y Servicios"
          description="escalables"
        />
        <div className={styles["divider-vertical"]} />
        <SkillView
          icon={<Database size={38} />}
          title="Datos y Despliegue"
          description="en la nube"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
