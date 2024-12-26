"use client";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { decrement, increment, selectCount } from "@/app/store/counterSlice";

export const Counter = () => {

  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch();

  function onClickPlus() {
    dispatch(increment());
  }

  function onClickMinus() {
    dispatch(decrement());
  }

  return (
    <div className="flex gap-2 items-center my-3">
      <button className="rounded bg-cyan-900 py-1 px-3" onClick={onClickMinus}>-</button>
      <div>{count}</div>
      <button className="rounded bg-cyan-900 py-1 px-3" onClick={onClickPlus}>+</button>
    </div>
  )

}