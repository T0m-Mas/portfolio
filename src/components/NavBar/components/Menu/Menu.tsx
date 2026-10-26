"use client";

import { useLanguageContext } from "@/context/LanguageContext/LanguageContext";
import classNames from "classnames";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import getLocale from "./locale";
import styles from "./Menu.module.css";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { language } = useLanguageContext();

  const locale = getLocale(language);

  const path = usePathname();

  return (
    <div className={styles["menu-wrapper"]}>
      <button
        type="button"
        className={styles["menu-toggle"]}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        aria-label={
          isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
        }
      >
        {isOpen ? <X aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
      </button>
      <nav
        id="main-navigation"
        className={classNames(styles["nav-container"], {
          [styles["nav-container-open"]]: isOpen,
        })}
      >
        <MenuItem
          href="/"
          label={locale.start}
          selected={path === "/"}
          onClick={() => setIsOpen(false)}
        />
        <MenuItem
          href="/projects"
          selected={path === "/projects"}
          label={locale.projects}
          onClick={() => setIsOpen(false)}
        />
        <MenuItem
          href="/technologies"
          selected={path === "/technologies"}
          label={locale.technologies}
          onClick={() => setIsOpen(false)}
        />
        <MenuItem
          href="/contact"
          selected={path === "/contact"}
          label={locale.contact}
          onClick={() => setIsOpen(false)}
        />
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
