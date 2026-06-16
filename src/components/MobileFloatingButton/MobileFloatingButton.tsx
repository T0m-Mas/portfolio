import React from "react";
import styles from "./MobileFloatingButton.module.css";
import { Menu, X } from "lucide-react";

const MobileFloatingButton: React.FC<{
  onClick: () => void;
  open: boolean;
}> = ({ onClick, open }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {open ? <X /> : <Menu />}
    </button>
  );
};

export default MobileFloatingButton;
