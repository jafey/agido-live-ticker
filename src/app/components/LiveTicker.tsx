import React, { useEffect, useState } from "react";
import { formatLiveTickerMessage } from "@/app/helper/formatLiveTickerMessage";
import styles from '@/app/styles/live-ticker.module.scss';
import { useAppSelector } from "@/app/store/hooks";
import { selectLiveTickerState } from "@/app/store/liveTickerSlice";
import { useLiveTickerMessage } from "@/app/hooks/useLiveTickerMessage";

const LiveTicker = () => {

  const interval = 5000;
  const liveTickerState = useAppSelector(selectLiveTickerState)
  const [currentIndex, setCurrentIndex] = useState(0);

  useLiveTickerMessage();

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % liveTickerState.length);
    }, interval);

    return () => {
      clearInterval(tickerInterval)
    };
  }, [liveTickerState.length]);

  return (
    <div className={styles.ticker}>
      {liveTickerState.map((item, index) => (
        <div
          key={index}
          className={styles.tickerItem + " " + (index === currentIndex ? styles.active : index === (currentIndex - 1 + liveTickerState.length) % liveTickerState.length ? styles.exiting : "")}
        >
          {formatLiveTickerMessage(item)}
        </div>

      ))}
    </div>
  );
};

export default LiveTicker;
