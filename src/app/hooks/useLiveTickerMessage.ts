import { useEffect } from "react";
import { socket } from "@/app/socket";
import { LiveTickerMessage } from "@/app/model/LiveTickerMessage";

import { addLiveTickerMessage, } from "@/app/store/liveTickerSlice";
import { useAppDispatch } from "@/app/store/hooks";
import fetchLiveTickerMessages from "@/app/store/liveTickerThunk";

export function useLiveTickerMessage() {

  const dispatch = useAppDispatch();

  useEffect(() => {

    dispatch(fetchLiveTickerMessages())

    socket.on("message", (message: LiveTickerMessage) => {
      console.log("Message received: " + JSON.stringify(message));
      dispatch(addLiveTickerMessage(message));
    })
  }, [dispatch])

}