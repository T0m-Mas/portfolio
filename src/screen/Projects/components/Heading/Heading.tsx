import { useLanguageContext } from "@/context/LanguageContext/LanguageContext";
import getLocale from "../../locale";
import styles from "./Heading.module.css";

const Heading = () => {
  const { language } = useLanguageContext();

  const locale = getLocale(language);

  return (
    <div className={styles["heading-container"]}>
      <p className={styles["label"]}>{locale.headingLabel}</p>
      <h1>
        {locale.headingTitle1} <span>{locale.headingTitle2} </span>
      </h1>
      <p className={styles["description"]}>{locale.headingDescription}</p>
    </div>
  );
};

export default Heading;
