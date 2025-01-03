import { MessageType } from "@/app/model/MessageType";
import { SportType } from "@/app/model/SportType";

export interface LiveTickerMessage {
  name: string;
  sport: SportType;
  type: MessageType;
  playTime: string;
  score: string;
}