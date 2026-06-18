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
    projects: { ambienteControlado },
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
      </div>
    </div>
  );
};

export default HomeScreen;
