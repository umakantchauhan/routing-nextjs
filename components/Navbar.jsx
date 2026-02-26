import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <p>Next.js</p>
        <ul className={styles.links}>
          <li>
            <Link href="/">Home 🏠</Link>
          </li>
          <li>
            <Link href="/about">about 💻</Link>
          </li>
          <li>
            <Link href="/contact">contact ☎️</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
