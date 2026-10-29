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

  const locale = getLocale(language);

  return (
    <div className="screen">
      <div className={styles["columns-container"]}>
        <div className={styles["left-column"]}>
          <div className={styles["name-container"]}>
            <p className={styles["name"]}>Tomás Masotta</p>
            <p className={styles["job"]}>{locale.title}</p>
          </div>
          <h1>
            {locale.job1}
            <br />
            <span>{locale.job2}</span>
          </h1>
          <p className={styles["main-p"]}>{locale.description}</p>
          <div className={styles["buttons-container"]}>
            <Link
              href={"/projects"}
              className={classNames(styles["button"], styles["button-primary"])}
            >
              {locale.projectsButton} <MoveUpRight />
            </Link>
            <Link
              href={"/contact"}
              className={classNames(
                styles["button"],
                styles["button-secondary"],
              )}
            >
              {locale.contactButton}
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
          title={locale.skills[0].title}
          description={locale.skills[0].description}
        />
        <div className={styles["divider-vertical"]} />
        <SkillView
          icon={<Settings size={38} />}
          title={locale.skills[1].title}
          description={locale.skills[1].description}
        />
        <div className={styles["divider-vertical"]} />
        <SkillView
          icon={<Database size={38} />}
          title={locale.skills[2].title}
          description={locale.skills[2].description}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
