import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { counterSlice } from "@/app/store/counterSlice";
import { liveTickerSlice } from "@/app/store/liveTickerSlice";

const rootReducer = combineSlices(counterSlice, liveTickerSlice);

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch

export default store;