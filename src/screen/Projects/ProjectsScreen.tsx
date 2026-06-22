"use client";
import { useLanguageContext } from "@/context/LanguageContext/LanguageContext";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import getLocale from "./locale";
import styles from "./ProjectsScreen.module.css";

const HomeScreen = () => {
  const { language } = useLanguageContext();

  const {
    title,
    description,
    projects: {
      ambienteControlado,
      worktrack,
      roomsafe,
      jardinesPatagonicos,
      soaptrack,
    },
  } = getLocale(language);

  return (
    <div className="screen">
      <h1 className={styles.title}>{title}</h1>
      <p>{description}</p>
      <div className={styles.wrapper}>
        <Link href={"/projects/ac"}>
          <ProjectCard
            logoSrc="/images/ambiente_controlado/logo.png"
            description={ambienteControlado}
            animationDelay={0}
          />
        </Link>
        <Link href={"/projects/rf"}>
          <ProjectCard
            logoSrc="/images/roomsafe/logo.png"
            description={roomsafe}
            animationDelay={0.1}
          />
        </Link>
        <Link href={"/projects/wt"}>
          <ProjectCard
            logoSrc="/images/worktrack/logo.png"
            description={worktrack}
            animationDelay={0.2}
          />
        </Link>
        <Link href={"/projects/jp"}>
          <ProjectCard
            logoSrc="/images/jardines_patagonicos/logo.png"
            description={jardinesPatagonicos}
            animationDelay={0.3}
          />
        </Link>
        <Link href={"/projects/st"}>
          <ProjectCard
            logoSrc="/images/soaptrack/logo.png"
            description={soaptrack}
            animationDelay={0.4}
          />
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
