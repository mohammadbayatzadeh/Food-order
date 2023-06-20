import Link from "next/link";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import styles from "./Detailspage.module.css";

function DetailsPage({
  id,
  name,
  price,
  discount,
  introduction,
  details,
  ingredients,
  recipe,
}) {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.banner}>
        <img src={`/images/${id}.jpeg`} alt={name} className={styles.image} />
        <div className={styles.column}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.location}>
            <Location /> {details[0].Cuisine}
          </span>
          <div className={styles.row}>
            <Dollar />
            {discount > 0 ? (
              <p className={styles.off}>
                {(price - (price * discount) / 100).toFixed(1)} $ ({discount}%
                off)
              </p>
            ) : (
              <p>{price} $</p>
            )}
          </div>
        </div>
      </div>
      <p className={styles.introduction}>{introduction}</p>
      <h4> Details</h4>
      <div className={styles.details}>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>
              <p> {Object.keys(detail)[0]} :</p>
              <span> {Object.values(detail)[0]}</span>
            </li>
          ))}
        </ul>
      </div>
      <h4>ingredients</h4>
      <div className={styles.ingredients}>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <p> {ingredient} </p>
            </li>
          ))}
        </ul>
      </div>
      <h4>Recipe</h4>
      <div className={styles.recipe}>
        <ul>
          {recipe.map((level, index) => (
            <li key={index}>
              <span>{index}</span>
              <p> {level} </p>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/" className={styles.button}>
        Add to Cart
      </Link>
    </div>
  );
}

export default DetailsPage;
