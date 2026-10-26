import LanguageSelector from "./components/LanguageSelector";
import Logo from "./components/Logo";
import { Menu } from "./components/Menu/Menu";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <Logo />
        <div className={styles["language-menu-row"]}>
          <LanguageSelector />
          <Menu />
        </div>
      </div>
      <div className={styles["divider"]} />
    </div>
  );
};

export default Navbar;
