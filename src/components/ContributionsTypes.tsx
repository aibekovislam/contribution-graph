import React, { useEffect } from "react";
import styles from "../css/ContributionDetail.module.css";
import CornerSVG from "../assets/SVG_images/corner.svg";

function ContributionTypes({ contribution }: any) {
  return (
    <div
      className={styles.contributionDetail2}
      style={
        contribution === "none"
          ? { left: "14%" }
          : contribution === "low"
          ? { left: "15.3%" }
          : contribution === "medium"
          ? { left: "16.8%" }
          : contribution === "high"
          ? { left: "18%" }
          : { left: "19.5%" }
      }
    >
      <div className={styles.corner__block}>
        <img src={CornerSVG} className={styles.corner_svg} />
      </div>
      <div className={styles.contribute__count}>
        {contribution === "low"
          ? "1-9"
          : contribution === "medium"
          ? "10-19"
          : contribution === "high"
          ? "20-29"
          : contribution !== "none" && "30+"}{" "}
        {contribution !== "none" && "contributions"}
        {contribution == "none" && "No contributions"}
      </div>
    </div>
  );
}

export default ContributionTypes;
