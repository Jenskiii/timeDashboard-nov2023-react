import ProfileImg from "../../assets/image-jeremy.png";
import styles from "./profile-card.module.css";
export function ProfileCard({changeTimeframe}) {
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
          <button id="daily" onClick={e => changeTimeframe(e.target.id)} className="button">Daily</button>
          <button id="weekly" onClick={e => changeTimeframe(e.target.id)} className="button">Weekly</button>
          <button id="monthly" onClick={e => changeTimeframe(e.target.id)} className="button">Montly</button>
        </div>
      </div>
    </>
  );
}
