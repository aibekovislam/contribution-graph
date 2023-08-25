import React, { useState } from "react";
import "../css/ContributionGraph.css";
import ContributionDetail from "./ContributionDetail";

type Contribution = {
  date: string;
  count: number;
};

type Props = {
  values: Contribution[];
};

const ContributionGraph2: React.FC<Props> = ({ values }) => {
  const today = new Date();
  const startDate = new Date(today);

  startDate.setDate(startDate.getDate() - 357);

  const startDayOfWeek = startDate.getDay();

  const daysToSubtract = startDayOfWeek === 1 ? 0 : startDayOfWeek || 7;
  startDate.setDate(startDate.getDate() - daysToSubtract + 1);

  const contributionsMap: Record<string, number> = {};
  values.forEach((contribution) => {
    contributionsMap[contribution.date] = contribution.count;
  });

  const getColor = (count: number) => {
    if (count === 0) return "var(--color-0)";
    if (count <= 9) return "var(--color-1)";
    if (count <= 19) return "var(--color-2)";
    if (count <= 29) return "var(--color-3)";
    return "var(--color-4)";
  };

  let displayedMonths: number[] = [];

  const getMonthLabel = (date: Date) => {
    const months = [
      "Янв",
      "Февр",
      "Март",
      "Апр",
      "Май",
      "Июнь",
      "Июль",
      "Авг",
      "Сент",
      "Окт",
      "Нояб",
      "Дек",
    ];
    return months[date.getMonth()];
  };

  const daysOfWeek = ["Пн", "", "Ср", "", "Пт", "", ""];

  const gridItemRef = React.useRef<HTMLDivElement>(null);
  const [selectedContribution, setSelectedContribution] =
    React.useState<Contribution | null>(null);
  const [tooltipPosition, setTooltipPosition] = React.useState<{
    top: number;
    left: number;
  } | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="contribution-container">
      <div className="labels">
        {daysOfWeek.map((day, index) => (
          <div key={day + index} className="label-day">
            {day}
          </div>
        ))}
      </div>
      {Array.from({ length: 51 }).map((_, weekIndex) => (
        <div key={weekIndex} className="week-column">
          {Array.from({ length: 7 }).map((__, dayIndex) => {
            const dateOffset = weekIndex * 7 + dayIndex;
            const currentDate = new Date(startDate);
            currentDate.setDate(currentDate.getDate() + dateOffset);

            const contributionCount =
              contributionsMap[currentDate.toISOString().split("T")[0]] || 0;

            const isStartOfMonth = currentDate.getDate() === 1;
            const isNewMonth = !displayedMonths.includes(
              currentDate.getMonth()
            );

            if (isStartOfMonth && isNewMonth) {
              displayedMonths.push(currentDate.getMonth());
            }

            return (
              <React.Fragment key={dateOffset}>
                {isStartOfMonth && isNewMonth && (
                  <div className="month-label">
                    {getMonthLabel(currentDate)}
                  </div>
                )}
                <div
                  ref={gridItemRef}
                  className="grid-item"
                  style={{ backgroundColor: getColor(contributionCount) }}
                  title={`${
                    currentDate.toISOString().split("T")[0]
                  }: ${contributionCount} contributions`}
                  onMouseEnter={() => {
                    if (gridItemRef.current) {
                      setSelectedContribution({
                        date: currentDate.toISOString().split("T")[0],
                        count: contributionCount,
                      });
                    }
                  }}
                >
                  <div className="contributionDetailOverlay">
                    <ContributionDetail contribution={selectedContribution} />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ContributionGraph2;
