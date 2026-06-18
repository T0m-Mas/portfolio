import Link from "next/link";
import styles from "./SideMenu.module.css";
import classNames from "classnames";
import {
  LANGUAGE,
  useLanguageContext,
} from "@/context/LanguageContext/LanguageContext";
import getLocale from "./locale";

const SideMenu: React.FC<{ open: boolean }> = ({ open }) => {
  const { language, setLanguage } = useLanguageContext();

  const { home, education, featuredProjects, technologies, ...sideMenu } =
    getLocale(language);

  return (
    <div className={classNames(styles.container, { [styles.open]: open })}>
      <img
        className={styles["profile-image"]}
        src="/images/foto_perfil.jpg"
        alt="Foto perfil"
      />
      <nav className={styles["menu"]}>
        <Link href="/">{home}</Link>
        <Link href="/projects">{featuredProjects}</Link>
        <Link href="/technologies">{technologies}</Link>
        <Link href="/education">{education}</Link>
      </nav>
      <div className={styles["end-section"]}>
        <label htmlFor="language-select">{sideMenu.language}:</label>
        <select
          id="language-select"
          onChange={(e) => setLanguage(e.target.value as unknown as LANGUAGE)}
          value={language}
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
};

export default SideMenu;
