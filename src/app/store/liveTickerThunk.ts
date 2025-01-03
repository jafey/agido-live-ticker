import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLiveTickerMessages } from "@/app/store/liveTickerSlice";

const fetchLiveTickerMessages = createAsyncThunk('fetchLiveTickerMessages', async (_, thunkAPI) => {
  const response = await fetch('http://localhost:4000/messages');
  if (!response.ok) {
    throw new Error('Failed to fetch live ticker messages from server');
  }
  const data = await response.json();
  thunkAPI.dispatch(setLiveTickerMessages(data));
})

export default fetchLiveTickerMessages;