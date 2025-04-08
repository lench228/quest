import ThemeChange from "../../../assets/icons/theme-change.tsx";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ThemeChange></ThemeChange>
    </nav>
  );
};

export default Navigation;
