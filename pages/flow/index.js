import ReactFlow from "react-flow-renderer";
import React, { useState, useEffect } from "react";
import Zaps from "../../public/lib/zapier/dataZap.json";
import styles from "../../styles/Home.module.css";
import { GoZap } from "react-icons/go";
import { HiArrowRight } from "react-icons/hi";

const distinctAPIs = [];

Zaps.forEach((zap) => {
  zap.nodes.forEach(({ node: selected_api }) => {
    distinctAPIs[selected_api] = distinctAPIs[selected_api] || 0;
    distinctAPIs[selected_api] += 1;
  });
});

function App() {
  // const [zapData, setZapData] = useState({});

  // useEffect(() => {
  //   getZapDataWithFetch();
  // }, []);

  // const getZapDataWithFetch = async () => {
  //   const response = await fetch(apiUrl);
  //   const jsonData = await response.json();
  //   setZapData(jsonData);
  // };

  const numberZaps = Zaps.length;

  return (
    <div>
      <header>
        <h2>Zapflows</h2>
        <h3>You have {numberZaps} zaps</h3>
      </header>
      <div className={styles.background}>
        {Zaps.map((dataZap) => (
          <div className={styles.zap}>
            <div className={styles.zaptitle}>
              <GoZap />
              {dataZap.title}
            </div>
            <div className={styles.flow}>
              {dataZap.nodes.map((node, index) => (
                <div className={styles.arrow}>
                  <div className={styles.container}>
                    <div className={styles.api}>{node.selected_api}</div>
                    <div className={styles.action}>{node.action}</div>
                  </div>
                  {index !== dataZap.nodes.length - 1 && <HiArrowRight />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
