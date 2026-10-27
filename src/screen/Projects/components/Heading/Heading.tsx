import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <div className={styles["heading-container"]}>
      <p className={styles["label"]}>Proyectos Destacados</p>
      <h1>
        Proyectos <span>seleccionados</span>
      </h1>
      <p className={styles["description"]}>
        Sistemas reales para distintos contextos y necesidades
      </p>
    </div>
  );
};

export default Heading;
