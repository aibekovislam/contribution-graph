import React, { useEffect } from "react";
import styles from "../css/ContributionDetail.module.css";
import CornerSVG from "../assets/SVG_images/corner.svg";
import { format, parseISO } from "date-fns";
import ruLocale from "date-fns/locale/ru";

function ContributionDetail({ contribution }: any) {
  const formatDate = (dateStr: string) => {
    const parsedDate = parseISO(dateStr);
    return format(parsedDate, "eeee, MMMM dd, yyyy", { locale: ruLocale });
  };

  return contribution ? (
    <div className={styles.contributionDetail}>
      <div className={styles.corner__block}>
        <img src={CornerSVG} className={styles.corner_svg} />
      </div>
      <div className={styles.contribute__count}>
        {contribution.count} contributions
      </div>
      <div className={styles.date__contribute}>
        {formatDate(contribution.date)}
      </div>
    </div>
  ) : (
    <div className={styles.contributionDetail}>
      <div className={styles.contribute__count}>0 contributions</div>
      <div className={styles.corner__block}>
        <img src={CornerSVG} className={styles.corner_svg} />
      </div>
    </div>
  );
}

export default ContributionDetail;
