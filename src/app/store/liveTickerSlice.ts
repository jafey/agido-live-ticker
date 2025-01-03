import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/store";
import { LiveTickerMessage } from "@/app/model/LiveTickerMessage";

interface LiveTickerState {
  value: LiveTickerMessage[]
}

const initialState: LiveTickerState = {
  value: [],
}

export const liveTickerSlice = createSlice({
  name: 'liveTicker',
  initialState,
  reducers: {
    addLiveTickerMessage: (state, action: PayloadAction<LiveTickerMessage>) => {
      state.value = [...state.value, action.payload];
    },
    setLiveTickerMessages: (state, action: PayloadAction<LiveTickerMessage[]>) => {
      state.value = action.payload;
    }
  }
})

export const { addLiveTickerMessage, setLiveTickerMessages } = liveTickerSlice.actions;
export const selectLiveTickerState = (state: RootState) => state.liveTicker.value;
export default liveTickerSlice.reducer;