import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { liveTickerSlice } from "@/app/store/liveTickerSlice";

const rootReducer = combineSlices(liveTickerSlice);

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch

export default store;