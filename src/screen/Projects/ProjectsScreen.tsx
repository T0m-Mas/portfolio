"use client";
import { useLanguageContext } from "@/context/LanguageContext/LanguageContext";
import Heading from "./components/Heading";
import ProjectCard from "./components/ProjectCard";
import getLocale from "./locale";
import styles from "./ProjectsScreen.module.css";

const HomeScreen = () => {
  const { language } = useLanguageContext();
  const locale = getLocale(language);

  return (
    <div className="screen">
      <Heading />
      <div className={styles["list"]}>
        <ProjectCard
          coverSrc="/images/ambiente_controlado/cover.png"
          logoSrc="/images/ambiente_controlado/logo.png"
          description={locale.projects[0].description}
          highlight
        />
        <ProjectCard
          coverSrc="/images/worktrack/cover.png"
          logoSrc="/images/worktrack/logo.png"
          description={locale.projects[1].description}
        />
        <ProjectCard
          coverSrc="/images/roomsafe/cover.png"
          logoSrc="/images/roomsafe/logo.png"
          description={locale.projects[2].description}
        />
        <ProjectCard
          coverSrc="/images/soaptrack/cover.png"
          logoSrc="/images/soaptrack/logo.png"
          description={locale.projects[3].description}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
