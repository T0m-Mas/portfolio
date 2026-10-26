"use client";

import classNames from "classnames";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";
import styles from "./Menu.module.css";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["menu-wrapper"]}>
      <button
        type="button"
        className={styles["menu-toggle"]}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
      >
        {isOpen ? <X aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
      </button>
      <nav
        id="main-navigation"
        className={classNames(styles["nav-container"], {
          [styles["nav-container-open"]]: isOpen,
        })}
      >
        <MenuItem href="/" label="Inicio" selected onClick={() => setIsOpen(false)} />
        <MenuItem href="/" label="Proyectos" onClick={() => setIsOpen(false)} />
        <MenuItem href="/" label="Tecnologías" onClick={() => setIsOpen(false)} />
        <MenuItem href="/" label="Contacto" onClick={() => setIsOpen(false)} />
      </nav>
    </div>
  );
};

const MenuItem: FC<{
  href: string;
  label: string;
  selected?: boolean;
  onClick?: () => void;
}> = ({ href, selected = false, label, onClick }) => {
  return (
    <Link
      href={href}
      className={classNames(styles["menu-item"], {
        [styles["menu-item-selected"]]: selected,
      })}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};
