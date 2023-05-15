import { useEffect, useState } from "react";

import styles from "../styles/ranking.module.scss";

const Ranking = (props) => {
  return (
    <>
        <div className={styles.header}>
            <div>
                <h1>RANKING</h1>
            </div>  
        </div>

        <div className={styles.bodyRanking}>
            <div className={styles.rankingComponent}>
                <h1><img src="https://avatars.githubusercontent.com/u/68920578?v=4"></img>Luiz Kama</h1>
                <p>100</p>
            </div>

            <div className={styles.rankingComponent}>
                <h1><img src="https://avatars.githubusercontent.com/PedroHaggeBaptista"></img>Pedro Baptista</h1>
                <p>100</p>
            </div>

        </div>
    </>
  );
};

export default Ranking;
