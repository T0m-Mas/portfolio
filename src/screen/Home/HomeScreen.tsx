import React from "react";
import styles from "./HomeScreen.module.css";
import SkillCard from "./components/SkillCard";
import { Earth, Server } from "lucide-react";

const HomeScreen = () => {
  return (
    <div className="screen">
      <div className={styles["title-container"]}>
        <p>Tomás Masotta</p>
        <h1>
          Desarrollador
          <br />
          <span style={{ color: "#ba0a0a" }}>FullStack</span>
        </h1>
      </div>
      <p>
        Durante mi carrera adquirí varias habilidades en distintos ámbitos de la
        programación:
      </p>
      <div className={styles["skills-container"]}>
        <SkillCard
          icon={<Earth />}
          title="Web"
          description="Desarrollo de paginas personalizadas integrando APIs y microservicios."
        />
        <SkillCard
          icon={<Server />}
          title="Server"
          description="Desarrollo de APIs y Microservicios con distintos protocolos de conexion."
        />
      </div>
    </div>
  );
};

export default HomeScreen;
