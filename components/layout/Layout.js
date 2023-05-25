import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <Link href="/">FOOTORDER</Link>
        </h1>
        <input type="checkbox" id="menu-toggle" className={styles.checkbox} />
        <label className={styles.hamburger} for="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className={styles.menu}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <p>Next.js Course</p>
      </footer>
    </>
  );
}

export default Layout;
