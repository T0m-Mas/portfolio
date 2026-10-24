import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";
import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <nav className={styles["nav-container"]}>
      <MenuItem href="/" label="Inicio" selected />
      <MenuItem href="/" label="Proyectos" />
      <MenuItem href="/" label="Tecnologías" />
      <MenuItem href="/" label="Contacto" />
    </nav>
  );
};

const MenuItem: FC<{
  href: string;
  label: string;
  selected?: boolean;
}> = ({ href, selected = false, label }) => {
  return (
    <Link
      href={href}
      className={classNames(styles["menu-item"], {
        [styles["menu-item-selected"]]: selected,
      })}
    >
      {label}
    </Link>
  );
};
