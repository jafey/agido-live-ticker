import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/store";
import { removeByIndex } from "@/app/utilities";

interface LiveTickerState {
  value: string[]
}

const initialState: LiveTickerState = {
  value: ["Tor 1", "Gelbe Karte 2", "Match Ball 3"],
}

export const liveTickerSlice = createSlice({
  name: 'liveTicker',
  initialState,
  reducers: {
    addLiveTickerUpdate: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    removeLiveTickerUpdate: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((entry) => entry !== action.payload);
    },
    removeLiveTickerUpdateByIndex: (state, action: PayloadAction<number>) => {
      state.value = removeByIndex(state.value, action.payload);
    },
  }
})

export const { addLiveTickerUpdate, removeLiveTickerUpdate, removeLiveTickerUpdateByIndex } = liveTickerSlice.actions;
export const selectLiveTickerState = (state: RootState) => state.liveTicker.value;
export default liveTickerSlice.reducer;