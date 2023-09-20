/* eslint-disable react-hooks/exhaustive-deps */

import styles from "./styles.module.css";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

const Main = () => {
  // ===================================================================== RETURN

  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default Main;
