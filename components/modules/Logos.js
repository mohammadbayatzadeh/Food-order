//styles
import styles from "./Logos.module.css";

//icons
import Apple from "../icons/Apple";
import Binance from "../icons/Binance";
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";

function Logos() {
  return (
    <div className={styles.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}

export default Logos;
