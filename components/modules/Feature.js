//styles
import styles from "./Feature.module.css";

function Feature({ icon, title }) {
  return (
    <div className={styles.container}>
      {icon}
      <p>{title}</p>
    </div>
  );
}

export default Feature;
