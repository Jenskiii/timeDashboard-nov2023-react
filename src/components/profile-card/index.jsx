import { useState } from "react";
import ProfileImg from "../../assets/image-jeremy.png";
import styles from "./profile-card.module.css";


export function ProfileCard({ changeTimeframe }) {
  const [selectValue, setSelectValue] = useState("weekly");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles["profile-wrapper"]}>
            <img src={ProfileImg} alt="close up off jeremy robson" />
            <div className={styles["profile-text__wrapper"]}>
              <p>Report for</p>
              <h2 className={styles["profile__title"]}>Jeremy Robson</h2>
            </div>
          </div>
        </div>
        <div className={styles["profile-footer"]}>
          <button
            id="daily"
            onClick={(e) => {
              changeTimeframe(e.target.id);
              setSelectValue(e.target.id)
            }}
            className={`button ${selectValue === "daily" ? "active" : ""}`}
          >
            Daily
          </button>
          <button
            id="weekly"
            onClick={(e) => {
              changeTimeframe(e.target.id);
              setSelectValue(e.target.id)
            }}
            className={`button ${selectValue === "weekly" ? "active" : ""}`}
          >
            Weekly
          </button>
          <button
            id="monthly"
            onClick={(e) => {
              changeTimeframe(e.target.id);
              setSelectValue(e.target.id)
            }}
            className={`button ${selectValue === "monthly" ? "active" : ""}`}
          >
            monthly
          </button>
        </div>
      </div>
    </>
  );
}
