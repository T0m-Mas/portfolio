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
      <button
        type="button"
        className={classNames({
          [styles["selected"]]: language === LANGUAGE.ES,
        })}
        aria-label="Español"
        aria-pressed={language === LANGUAGE.ES}
        onClick={() => setLanguage(LANGUAGE.ES)}
      >
        ES
      </button>{" "}
      /{" "}
      <button
        type="button"
        className={classNames({
          [styles["selected"]]: language === LANGUAGE.EN,
        })}
        aria-label="English"
        aria-pressed={language === LANGUAGE.EN}
        onClick={() => setLanguage(LANGUAGE.EN)}
      >
        EN
      </button>
    </p>
  );
};

export default LanguageSelector;
