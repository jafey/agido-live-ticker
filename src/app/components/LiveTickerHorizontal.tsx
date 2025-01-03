import React, { useEffect, useState } from "react";
import "../styles/horizontal-ticker.scss";
import { useAppSelector } from "@/app/store/hooks";
import { selectLiveTickerState } from "@/app/store/liveTickerSlice";
import { formatLiveTickerMessage } from "@/app/helper/formatLiveTickerMessage";
import { useLiveTickerMessage } from "@/app/hooks/useLiveTickerMessage";

const LiveTickerHorizontal = () => {

  const interval = 5000;
  const animationDuration = 2500;

  useLiveTickerMessage();

  const liveTickerState = useAppSelector(selectLiveTickerState)
  const [currentTranslateX, setCurrentTranslateX] = useState(0);

  useEffect(() => {
    const tickerTrack = document.getElementById('ticker-track') as HTMLElement;
    tickerTrack.style.transition = `transform ${animationDuration}ms linear`;

    setInterval(() => {

      const messageToRemove = document.getElementsByClassName('ticker-item').item(0) as HTMLElement;
      const widthToTransform = messageToRemove.getBoundingClientRect().width;
      setCurrentTranslateX(widthToTransform);
      setTimeout(() => {
        tickerTrack.style.transition = 'none'
        messageToRemove?.remove();
        tickerTrack.appendChild(messageToRemove)
        setCurrentTranslateX(0);
        setTimeout(() => {
          tickerTrack.style.transition = `transform ${animationDuration}ms linear`;
        }, 500)
      }, animationDuration)
    }, interval)
  }, []);

  return (
    <div className="horizontal-ticker">
      <div id="ticker-track" className="ticker-track" style={{
        transform: `translateX(-${currentTranslateX}px)`,
      }}>
        {liveTickerState.map((message, index) => (
          <div
            className="ticker-item"
            key={index}>{formatLiveTickerMessage(message)}</div>
        ))}
      </div>
    </div>
  );
};

export default LiveTickerHorizontal;
