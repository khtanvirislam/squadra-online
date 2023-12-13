import React from "react";
import styles from "../../../style";

export const Navbar = () => {
  return (
    <div>
      <div className={`${styles.paddingX} {${styles.flexCenter}}`}>
        <div className={`${styles.boxWidth}`}>This is navbar</div>
      </div>
    </div>
  );
};
