import Link from "next/link";
import styles from "./SideMenu.module.css";
import classNames from "classnames";

const SideMenu: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <div className={classNames(styles.container, { [styles.open]: open })}>
      <img
        className={styles["profile-image"]}
        src="/images/foto_perfil.jpg"
        alt="Foto perfil"
      />
      <nav className={styles["menu"]}>
        <Link href="/">Inicio</Link>
        <Link href="/about">Proyectos Destacados</Link>
        <Link href="/projects">Tecnologías</Link>
        <Link href="/contact">Formación</Link>
      </nav>
      <div className={styles["contact-section"]}>
        <p className={styles["contact-info"]}>Contacto:</p>
      </div>
    </div>
  );
};

export default SideMenu;
