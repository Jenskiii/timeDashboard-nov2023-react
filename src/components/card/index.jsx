import { useEffect, useState } from "react";
import { Ellipsis } from "../../svg"
import styles from "./card.module.css";

export function Cards({ title, cardClass, timeframes, setTimeframe }) {
  const time = timeframes[setTimeframe].previous;

  const [previousFrame, setPreviousFrame] = useState("");

  useEffect(() => {
    if (setTimeframe === "daily") {
      setPreviousFrame("Yesterday");
    } else if (setTimeframe === "monthly") {
      setPreviousFrame("Last Month");
    } else {
      setPreviousFrame("Last Week");
    }
  }, [setTimeframe]);

  return (
    <>
      <div className={`${styles[`${cardClass}`]} | ${styles.card}`}>
        <div className={styles["title-wrapper"]}>
          <p className={styles.title}>{title}</p>
         <div className={styles.ellipsis}><Ellipsis/></div>
        </div>
        <div className={styles["hours-wrapper"]}>
          <h1 className={styles["current-hours"]}>
            {timeframes[setTimeframe].current}hrs
          </h1>
          <p
            className={styles["previous-hours"]}
          >{`${previousFrame} - ${time}hrs`}</p>
        </div>
      </div>
    </>
  );
}
