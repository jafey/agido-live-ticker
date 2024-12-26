import React, { useEffect, useState } from 'react';
import { useAppSelector } from "@/app/store/hooks";
import { selectLiveTickerState } from "@/app/store/liveTickerSlice";
import styles from '@/app/styles/live-ticker.module.scss';

const LiveTicker = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true);

  const liveTickerState = useAppSelector(selectLiveTickerState)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % liveTickerState.length);
        setFade(true);
      }, 500); // Time for fade out
    }, 5000); // Time for each event
    return () => clearInterval(intervalId);
  }, [liveTickerState.length]);


  return (
    <div>
      <div className={styles.ticker}>
        <div
          className={styles.tickerItem + " " + (fade ? styles.fadeIn : styles.fadeOut)}> {liveTickerState[currentIndex]} </div>
      </div>
    </div>
  )
}

export default LiveTicker;