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
          description="Sistema encargado de recibir, almacenar, administrar y visualizar datos de distintos tipos de sensores."
          highlight
        />
        <ProjectCard
          coverSrc="/images/worktrack/cover.png"
          logoSrc="/images/worktrack/logo.png"
          description="Sistema de seguimiento de flota/vendedores y administración de itinerarios."
        />
        <ProjectCard
          coverSrc="/images/roomsafe/cover.png"
          logoSrc="/images/roomsafe/logo.png"
          description="Sistema de trazabilidad de limpieza de habitaciones y/o ambientes."
        />
        <ProjectCard
          coverSrc="/images/soaptrack/cover.png"
          logoSrc="/images/soaptrack/logo.png"
          description="Sistema de tickets y alertas sobre el estado de dispensadores de mano."
        />
      </div>
    </div>
  );
};

export default HomeScreen;
