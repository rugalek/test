import logo from "./refresh_btn.png";
import { useState, useEffect } from "react";
import styles from "./Counter.module.css";

export function Counter() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState("НАЖИМАЙ");
  const [bgColor, setBgColor] = useState("yellow");

  const isEvenMessage = () => {
    if (count % 2 === 0 && count !== 0) {
      return setIsEven("Чётное число"), setBgColor("blue");
    } else if (count === 0) {
      return setIsEven("Нолик"), setBgColor("yellow");
    } else {
      return setIsEven("Нечётное число"), setBgColor("green");
    }
  };

  useEffect(() => {
    isEvenMessage();
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className={styles.mainContainer}
        style={{
          backgroundColor: bgColor,
        }}
      >
        <p className={styles.countValue} onChange={() => isEvenMessage(count)}>
          {count}
        </p>
        <p className={styles.evenValue}>{isEven}</p>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.minus}
            onClick={() => (count > 0 ? setCount(count - 1) : setCount(count))}
          >
            -
          </button>
          <button className={styles.reset} onClick={() => setCount(0)}>
            <img src={logo} className={styles.reset_bg}></img>
          </button>
          <button className={styles.plus} onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
