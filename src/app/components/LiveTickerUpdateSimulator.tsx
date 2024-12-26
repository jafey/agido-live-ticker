import React from 'react';
import { useAppDispatch, } from "@/app/store/hooks";
import { addLiveTickerUpdate, removeLiveTickerUpdateByIndex, } from "@/app/store/liveTickerSlice";
import { getRandomNumber } from "@/app/utilities";

const LiveTickerUpdateSimulator = () => {

  const dispatch = useAppDispatch();

  const someUpdates = [
    "Tor", "Match", "Sieg", "Niederlage", "Rote Karte", "Gelbe Karte",
  ]

  function handleAddLiveTickerUpdate() {
    dispatch(addLiveTickerUpdate(someUpdates.at(getRandomNumber(someUpdates.length))!));
  }

  function handleRemoveLiveTickerUpdate() {
    dispatch(removeLiveTickerUpdateByIndex(0));
  }

  return (
    <div className="flex gap-3 my-2">
      <button className="rounded bg-cyan-900 py-1 px-3" onClick={handleAddLiveTickerUpdate}>Noch ein Tor!</button>
      <button className="rounded bg-cyan-900 py-1 px-3" onClick={handleRemoveLiveTickerUpdate}>Löschen</button>
    </div>
  )
}

export default LiveTickerUpdateSimulator;