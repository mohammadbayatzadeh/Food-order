import { useEffect, useState } from "react";
import styles from "./CategoriesPage.module.css";
import { useRouter } from "next/router";
import FoodItem from "../modules/FoodItem";
import Image from "next/image";

function CategoriesPage({ data }) {
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  useEffect(() => {
    setQuery(router.query);
  }, []);
  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    (query.difficulty || query.time) &&
      router.push({ pathname: "/categories", query: query });
  };
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.buttons}>
        <select
          value={query.difficulty}
          name="difficulty"
          onChange={changeHandler}
        >
          <option value="">Difficulty :</option>
          <option value="Easy">easy</option>
          <option value="Medium">medium</option>
          <option value="Hard">hard</option>
        </select>
        <select value={query.time} name="time" onChange={changeHandler}>
          <option value="">Cooking Time :</option>
          <option value="more30">more than 30 minutes</option>
          <option value="less30">less than 30 minutes</option>
        </select>
        <button onClick={submitHandler}>Search</button>
      </div>
      <div className={styles.menu}>
        {data.length ? (
          data.map((item) => <FoodItem key={item.id} {...item} />)
        ) : (
          <div className={styles.image}>
            <Image src="/images/search.png" width={1000} height={700} alt="seatchIcon" />
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoriesPage;
