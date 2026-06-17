"use client";
import styles from "./HomeScreen.module.css";
import SkillCard from "./components/SkillCard";
import {
  Bot,
  Brush,
  Cloud,
  Database,
  Earth,
  MonitorCheck,
  Server,
} from "lucide-react";
import {
  LANGUAGE,
  useLanguageContext,
} from "@/context/LanguageContext/LanguageContext";

const HomeScreen = () => {
  const {
    language,
    t: {
      homeScreen: { description, skills },
    },
  } = useLanguageContext();

  return (
    <div className="screen">
      <div className={styles["title-container"]}>
        <p>Tomás Masotta</p>
        {language === LANGUAGE.ES && (
          <h1>
            Desarrollador
            <br />
            <span style={{ color: "#ba0a0a" }}>FullStack</span>
          </h1>
        )}
        {language === LANGUAGE.EN && (
          <h1>
            <span style={{ color: "#ba0a0a" }}>FullStack</span>
            <br />
            Developer
          </h1>
        )}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles["skills-container"]}>
        <SkillCard
          icon={<Earth />}
          title={skills.web.title}
          description={skills.web.description}
          animationDelay={0}
        />
        <SkillCard
          icon={<Server />}
          title={skills.server.title}
          description={skills.server.description}
          animationDelay={0.1}
        />
        <SkillCard
          icon={<img src="/svgs/android.svg" alt="Android icon" />}
          title={skills.android.title}
          description={skills.android.description}
          animationDelay={0.2}
        />
        <SkillCard
          icon={<MonitorCheck />}
          title={skills.desktop.title}
          description={skills.desktop.description}
          animationDelay={0.3}
        />
        <SkillCard
          icon={<Database />}
          title={skills.database.title}
          description={skills.database.description}
          animationDelay={0.4}
        />
        <SkillCard
          icon={<Cloud />}
          title={skills.deployment.title}
          description={skills.deployment.description}
          animationDelay={0.5}
        />
        <SkillCard
          icon={<Bot />}
          title={skills.machineLearning.title}
          description={skills.machineLearning.description}
          animationDelay={0.6}
        />
        <SkillCard
          icon={<Brush />}
          title={skills.design.title}
          description={skills.design.description}
          animationDelay={0.7}
        />
      </div>
      <img src="/images/bmo.png" alt="bmo" className={styles["bmo-image"]} />
    </div>
  );
};

export default HomeScreen;
