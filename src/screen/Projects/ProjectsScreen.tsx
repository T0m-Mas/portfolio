"use client";
import styles from "./ProjectsScreen.module.css";
import {
  Bot,
  Brush,
  Cloud,
  Database,
  Earth,
  MonitorCheck,
  Server,
} from "lucide-react";
import { useLanguageContext } from "@/context/LanguageContext/LanguageContext";
import ProjectCard from "./components/ProjectCard";

const HomeScreen = () => {
  const {
    t: {
      projectsScreen: {
        title,
        description,
        projects: { ambienteControlado },
      },
    },
  } = useLanguageContext();

  return (
    <div className="screen">
      <h1 className={styles.title}>{title}</h1>
      <p>{description}</p>
      <div className={styles.wrapper}>
        <ProjectCard
          logoSrc="/images/ambiente_controlado/logo.png"
          description={ambienteControlado.cardDescription}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
