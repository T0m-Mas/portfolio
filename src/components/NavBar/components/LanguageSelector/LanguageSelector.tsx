import { useLanguageContext } from "@/context/LanguageContext/LanguageContext";
import styles from "./LanguageSelector.module.css";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguageContext();

  return (
    <p className={styles["p"]}>
      <span>ES</span> / <span>EN</span>
    </p>
  );
};

export default LanguageSelector;
