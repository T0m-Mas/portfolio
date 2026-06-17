import Link from "next/link";
import styles from "./SideMenu.module.css";
import classNames from "classnames";
import {
  LANGUAGE,
  useLanguageContext,
} from "@/context/LanguageContext/LanguageContext";

const SideMenu: React.FC<{ open: boolean }> = ({ open }) => {
  const {
    t: {
      sideMenu: {
        home,
        education,
        featuredProjects,
        technologies,
        ...sideMenu
      },
    },
    language,
    setLanguage,
  } = useLanguageContext();

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
