import { LiveTickerMessage } from "@/app/model/LiveTickerMessage";
import { MessageType } from "@/app/model/MessageType";

export function formatLiveTickerMessage(liveTickerMessage: LiveTickerMessage): string {
  const translatedType = translate(liveTickerMessage.type);
  return `${liveTickerMessage.playTime} ${translatedType} für ${liveTickerMessage.name} ➝ ${liveTickerMessage.score}`
}

function translate(key: MessageType): string {
  switch (key) {
    case MessageType.GOAL:
      return "⚽ Tor";
    case MessageType.PENALTY:
      return "⚽ Elfmeter";
    case MessageType.RED_CARD:
      return "🟥 Rote Karte";
    case MessageType.YELLOW_CARD:
      return "🟨 Gelbe Karte";
    case MessageType.GAME:
      return "🎾 Spiel";
    case MessageType.SET:
      return "✅ Satzgewinn"
    case MessageType.MATCH:
      return "🏆 Matchgewinn"
  }
}
