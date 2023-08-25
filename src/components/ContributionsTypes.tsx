import React, { useEffect } from "react";
import styles from './ContributionDetail.module.css';

function ContributionTypes({contribution}: any) {

  return (
      <div className={styles.contributionDetail2}>
        <div className={styles.corner__block}>
        </div>
        <div className={styles.contribute__count}>{contribution === "none" ? "0" : contribution === "low" ? "1-9" : contribution === "medium" ? "10-19" : contribution === "high" ? "20-29" : "30+"} contributions</div>
      </div>
    )
}

export default ContributionTypes;
