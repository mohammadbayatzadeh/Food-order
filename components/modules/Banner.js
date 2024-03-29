import Link from "next/link";

//styles
import styles from "./Banner.module.css";
import Image from "next/image";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>FootOrder</h2>
        <h4>Foot Deelivery and Takeout!!</h4>
        <p>
          FootOrder is an online foot delivery and ordering platform launched by
          Uber in 2014. Meals are delivred by couries using cars, scooters,
          bikes or on foot.
        </p>
        <Link href="/menu">See All</Link>
      </div>
      <Image
        width={700}
        height={400}
        src="/images/banner.png"
        className={styles.image}
        alt="Food Order"
      />
    </div>
  );
}

export default Banner;
