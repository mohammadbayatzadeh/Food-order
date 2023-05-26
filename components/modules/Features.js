//styles
import styles from "./Features.module.css";

//modules
import Feature from "./Feature";

//icons
import Clock from "../icons/Clock";
import Choice from "../icons/Choice";
import Fast from "../icons/Fast";
import Food from "../icons/Food";

function Features() {
  return (
    <div className={styles.container}>
      <h2>Why us?</h2>
      <div className={styles.features}>
        <Feature icon={<Fast />} title={"Fast"} />
        <Feature icon={<Food />} title={"Best Reasaurants"} />
        <Feature icon={<Choice />} title={"Your choice"} />
        <Feature icon={<Clock />} title={"24-7"} />
      </div>
    </div>
  );
}

export default Features;
