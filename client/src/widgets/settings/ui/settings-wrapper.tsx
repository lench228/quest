import styles from "./settings.module.css";
import { ReactNode } from "react";

export const SettingsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <svg
        width="200"
        height="4"
        viewBox="0 0 200 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="200" height="4" rx="2" fill="#464670" />
      </svg>

      {children}
    </div>
  );
};
