"use client";
import { useLanguageContext } from "@/context/LanguageContext/LanguageContext";
import getLocale from "./locale";
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
  const { language } = useLanguageContext();
  const locale = getLocale(language);
  return (
    <div className="screen">
      <Heading />
      <div className={styles["wrapper"]}>
        <TechCard
          icon={<Earth size={32} />}
          title={locale.cards[0].title}
          description={locale.cards[0].description}
          items={["React", "Next", "TypeScript", "JavaScript"]}
        />
        <TechCard
          icon={<Server size={32} />}
          title={locale.cards[1].title}
          description={locale.cards[1].description}
          items={["Node", "TypeScript", "JavaScript", "Python"]}
        />
        <TechCard
          icon={<MonitorCheck size={32} />}
          title={locale.cards[2].title}
          description={locale.cards[2].description}
          items={["Flet", "Electron", "C#"]}
        />
        <TechCard
          icon={<Smartphone size={32} />}
          title={locale.cards[3].title}
          description={locale.cards[3].description}
          items={["Kotlin", "Jetpack Compose", "React-Native"]}
        />
        <TechCard
          icon={<Database size={32} />}
          title={locale.cards[4].title}
          description={locale.cards[4].description}
          items={["MySQL", "MongoDB", "SQLite"]}
        />
        <TechCard
          icon={<Bot size={32} />}
          title={locale.cards[5].title}
          description={locale.cards[5].description}
          items={["Yolo", "Python"]}
        />
        <TechCard
          icon={<Cloud size={32} />}
          title={locale.cards[6].title}
          description={locale.cards[6].description}
          items={[locale.cloudServices]}
        />
      </div>
    </div>
  );
};

export default TechnologiesScreen;
