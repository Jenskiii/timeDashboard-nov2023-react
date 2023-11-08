import { Cards } from "../card";
import { useState } from "react";

import DashboardCards from "../../data.json";

import styles from "./dashboard.module.css";
import { ProfileCard } from "../profile-card";

export function Dashboard() {
  const [timeframe, setTimeframe] = useState("weekly");

  function changeTimeframe(value) {
    setTimeframe(value.toLowerCase());
  }
  return (
    <>
      <div className={`${styles.grid} | container`}>
        <div className={styles.profile}>
          <ProfileCard changeTimeframe={changeTimeframe} />
        </div>
        {DashboardCards.map((card) => {
          return (
            <Cards
              key={card.title}
              {...card}
              setTimeframe={timeframe}
              history={history}
            />
          );
        })}
      </div>
    </>
  );
}
