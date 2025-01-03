import { describe, expect, test } from "@jest/globals";
import { LiveTickerMessage } from "@/app/model/LiveTickerMessage";
import { MessageType } from "@/app/model/MessageType";
import { SportType } from "@/app/model/SportType";
import { formatLiveTickerMessage } from "@/app/helper/formatLiveTickerMessage";

describe("formatLiveTickerMessage", () => {
  const baseMessage: LiveTickerMessage = {
    name: "Name",
    sport: SportType.SOCCER,
    playTime: "45'",
    score: "2:1",
    type: MessageType.GOAL,
  };

  test.each([
    [MessageType.GOAL, "45' ⚽ Tor für Name ➝ 2:1"],
    [MessageType.PENALTY, "45' ⚽ Elfmeter für Name ➝ 2:1"],
    [MessageType.RED_CARD, "45' 🟥 Rote Karte für Name ➝ 2:1"],
    [MessageType.YELLOW_CARD, "45' 🟨 Gelbe Karte für Name ➝ 2:1"],
    [MessageType.GAME, "45' 🎾 Spiel für Name ➝ 2:1"],
    [MessageType.SET, "45' ✅ Satzgewinn für Name ➝ 2:1"],
    [MessageType.MATCH, "45' 🏆 Matchgewinn für Name ➝ 2:1"],
  ])("should format a live ticker message for %s", (messageType, expected) => {
    const message: LiveTickerMessage = { ...baseMessage, type: messageType };
    const result = formatLiveTickerMessage(message);
    expect(result).toBe(expected);
  });
});