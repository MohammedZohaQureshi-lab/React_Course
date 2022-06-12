import React from "react-dom";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onCLick}
    >
      {props.children}
    </button>
  );
};

export default Button;
