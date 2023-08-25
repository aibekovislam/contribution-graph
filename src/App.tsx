import React, { useEffect } from "react";
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

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.title}>Тестовое задание</div>
        <ContributionGraph2 values={contributions} />
      </div>
    </div>
  );
}

export default App;
