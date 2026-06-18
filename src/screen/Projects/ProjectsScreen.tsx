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
import Link from "next/link";
import getLocale from "./locale";

const HomeScreen = () => {
  const { language } = useLanguageContext();

  const {
    title,
    description,
    projects: { ambienteControlado, worktrack, roomsafe, jardinesPatagonicos },
  } = getLocale(language);

  return (
    <div className="screen">
      <h1 className={styles.title}>{title}</h1>
      <p>{description}</p>
      <div className={styles.wrapper}>
        <Link href={"/projects/ac"}>
          <ProjectCard
            logoSrc="/images/ambiente_controlado/logo.png"
            description={ambienteControlado.cardDescription}
          />
        </Link>
        <Link href={"/projects/rf"}>
          <ProjectCard
            logoSrc="/images/roomsafe/logo.png"
            description={roomsafe.cardDescription}
          />
        </Link>
        <Link href={"/projects/wt"}>
          <ProjectCard
            logoSrc="/images/worktrack/logo.png"
            description={worktrack.cardDescription}
          />
        </Link>
        <Link href={"/projects/jp"}>
          <ProjectCard
            logoSrc="/images/jardines_patagonicos/logo.png"
            description={jardinesPatagonicos.cardDescription}
          />
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
