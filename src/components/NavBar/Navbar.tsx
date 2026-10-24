import Logo from "./components/Logo";
import { Menu } from "./components/Menu";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <Logo />
        <Menu />
      </div>
      <div className={styles["divider"]} />
    </div>
  );
};

export default Navbar;
