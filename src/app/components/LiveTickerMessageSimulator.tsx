import React, { useState } from 'react';
import { socket } from "@/app/socket";
import { SportType } from "@/app/model/SportType";
import { MessageType } from "@/app/model/MessageType";
import { LiveTickerMessage } from "@/app/model/LiveTickerMessage";

const LiveTickerMessageSimulator = () => {

  const [name, setName] = useState<string>('');
  const [sport, setSport] = useState<SportType>(SportType.SOCCER);
  const [type, setType] = useState<MessageType>(MessageType.GOAL);
  const [playTime, setPlayTime] = useState<string>('');
  const [score, setScore] = useState<string>('');

  function handleSend() {
    const message: LiveTickerMessage = { name, sport, type, playTime, score };
    socket.timeout(5000).emit('message', message);
  }

  return (
    <div className="flex flex-wrap gap-3 my-2 items-center">
      <input
        value={playTime}
        onChange={(e) => setPlayTime(e.target.value)}
        className="rounded px-2"
        placeholder="Spielzeit"
      />
      <select
        className="rounded px-2"
        value={sport}
        onChange={(e) => setSport(e.target.value as SportType)}>
        {Object.keys(SportType).map((sportType: string) => (
          <option value={sportType} key={sportType}>{sportType}</option>)
        )}
      </select>
      <select
        className="rounded px-2"
        value={type}
        onChange={(e) => setType(e.target.value as MessageType)}>
        {Object.keys(MessageType).map((messageType) => (
          <option value={messageType} key={messageType}>{messageType}</option>)
        )}
      </select>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded px-2"
        placeholder="Teilnehmer"
      />
      <input value={score}
             onChange={(e) => setScore(e.target.value)}
             className="rounded px-2"
             placeholder="Spielstand"
      />
      <button
        className="rounded bg-cyan-900 py-1 px-3"
        onClick={handleSend}>
        Absenden
      </button>
    </div>
  )
}

export default LiveTickerMessageSimulator;