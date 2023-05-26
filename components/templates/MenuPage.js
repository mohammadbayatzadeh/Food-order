import FoodItem from "../modules/FoodItem";
import styles from "./MenuPage.module.css";

function MenuPage({ data }) {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.menu}>
        {data &&
          data.map((food, index) => (
            <FoodItem key={food.id} {...food} image={index + 1} />
          ))}
      </div>
    </div>
  );
}

export default MenuPage;
