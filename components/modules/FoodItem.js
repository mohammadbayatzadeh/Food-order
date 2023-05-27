import Link from "next/link";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import styles from "./FoodItem.module.css";

function FoodItem({ id, name, details, price, discount }) {
  return (
    <div className={styles.container}>
      {discount > 0 && <span className={styles.discount}>{discount} %</span>}
      <img src={`/images/${id}.jpeg`} alt={name} />
      <div className={styles.row}>
        <h3>{name}</h3>
        <Location />
        <p>{details[0].Cuisine}</p>
      </div>
      <div className={styles.row}>
        <Dollar />
        {discount > 0 ? (
          <p className={styles.off}>
            {(price - (price * discount) / 100).toFixed(1)} $
          </p>
        ) : (
          <p>{price} $</p>
        )}
      </div>
      <Link href={`/menu/${id}`}>See Details</Link>
    </div>
  );
}

export default FoodItem;
