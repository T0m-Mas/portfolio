import {
  LANGUAGE,
  useLanguageContext,
} from "@/context/LanguageContext/LanguageContext";
import classNames from "classnames";
import styles from "./LanguageSelector.module.css";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguageContext();

  return (
    <p className={styles["p"]}>
      <span
        className={classNames({
          [styles["selected"]]: language === LANGUAGE.ES,
        })}
        onClick={() => setLanguage(LANGUAGE.ES)}
      >
        ES
      </span>{" "}
      /{" "}
      <span
        className={classNames({
          [styles["selected"]]: language === LANGUAGE.EN,
        })}
        onClick={() => setLanguage(LANGUAGE.EN)}
      >
        EN
      </span>
    </p>
  );
};

export default LanguageSelector;
