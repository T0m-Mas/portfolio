import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <div className={styles["heading-container"]}>
      <p className={styles["label"]}>Tecnologías</p>
      <h1>
        Herramientas para
        <br /> convertir ideas en <span>Soluciones</span>
      </h1>
      <p className={styles["description"]}>
        Trabajo con un stack moderno para desarrollar interfaces, APIs,
        gestionar datos <br /> y desplegar aplicaciones en distintos entornos
      </p>
    </div>
  );
};

export default Heading;
