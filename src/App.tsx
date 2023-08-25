import React, { useEffect, useState } from "react";
import styles from "./css/App.module.css";
import ContributionGraph2 from "./components/ContributionGraph2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { getData, setContributions } from "./store/features/dateSlice";
import ContributionTypes from "./components/ContributionsTypes";

function App() {
  const dispatch = useDispatch();
  const contributions = useSelector((state: RootState) => state.contributions);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      if (data) {
        dispatch(setContributions(data));
      }
    }
    fetchData();
  }, [dispatch]);

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.title}>Тестовое задание</div>
        <ContributionGraph2 values={contributions} />
        <div className={styles.contributions}>
          <div className={styles.lower}>Меньше</div>
          <div
            className={styles.contriution1}
            onClick={() => {
              setState1(!state1);
              setState2(false);
              setState3(false);
              setState4(false);
              setState5(false);
            }}
          >
            {state1 && <ContributionTypes contribution={"none"} />}
          </div>
          <div
            onClick={() => {
              setState2(!state2);
              setState1(false);
              setState3(false);
              setState4(false);
              setState5(false);
            }}
            className={styles.contriution2}
          >
            {state2 && <ContributionTypes contribution={"low"} />}
          </div>
          <div
            onClick={() => {
              setState3(!state3);
              setState1(false);
              setState2(false);
              setState4(false);
              setState5(false);
            }}
            className={styles.contriution3}
          >
            {state3 && <ContributionTypes contribution={"medium"} />}
          </div>
          <div
            onClick={() => {
              setState4(!state4);
              setState1(false);
              setState3(false);
              setState2(false);
              setState5(false);
            }}
            className={styles.contriution4}
          >
            {state4 && <ContributionTypes contribution={"high"} />}
          </div>
          <div
            onClick={() => {
              setState5(!state5);
              setState1(false);
              setState3(false);
              setState4(false);
              setState2(false);
            }}
            className={styles.contriution5}
          >
            {state5 && <ContributionTypes contribution={"very-high"} />}
          </div>
          <div className={styles.bigger}>Больше</div>
        </div>
      </div>
    </div>
  );
}

export default App;
