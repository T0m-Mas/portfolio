import {
  Bot,
  Cloud,
  Database,
  Earth,
  MonitorCheck,
  Server,
  Smartphone,
} from "lucide-react";
import Heading from "./components/Heading";
import TechCard from "./components/TechCard";
import styles from "./TechnologiesScreen.module.css";

const TechnologiesScreen = () => {
  return (
    <div className="screen">
      <Heading />
      <div className={styles["wrapper"]}>
        <TechCard
          icon={<Earth size={32} />}
          title="Web"
          description="Interfaces modernas, rápidas y escalables"
          items={["React", "Next", "TypeScript", "JavaScript"]}
        />
        <TechCard
          icon={<Server size={32} />}
          title="Backend"
          description="APIs y servicios que integran distintos sistemas"
          items={["Node", "TypeScript", "JavaScript", "Python"]}
        />
        <TechCard
          icon={<MonitorCheck size={32} />}
          title="Desktop"
          description="Diseño de aplicaciones eficaces e intuitivas"
          items={["Flet", "Electron", "C#"]}
        />
        <TechCard
          icon={<Smartphone size={32} />}
          title="Mobile"
          description="Aplicaciones nativas para android"
          items={["Kotlin", "Jetpack Compose", "React-Native"]}
        />
        <TechCard
          icon={<Database size={32} />}
          title="Datos"
          description="Experiencia con bases de datos relacionales y no relacionales"
          items={["MySQL", "MongoDB", "SQLite"]}
        />
        <TechCard
          icon={<Bot size={32} />}
          title="Machine Learning"
          description="Detección de objetos, entrenamiento de modelos"
          items={["Yolo", "Python"]}
        />
        <TechCard
          icon={<Cloud size={32} />}
          title="Despliegue"
          description="Implementación de aplicaciones en servidores en la nube"
          items={["Servicios en la nube"]}
        />
      </div>
    </div>
  );
};

export default TechnologiesScreen;
