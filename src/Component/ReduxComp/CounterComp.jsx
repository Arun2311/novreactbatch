import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "./redux/slice/Counterslice";
export default function CounterComp() {
    // const [count,setcount]=useState(0)
    let countNumber = useSelector((store)=>store.counter.count)
    let NAME = useSelector((store)=>store.counter.name)
    let dispatch = useDispatch()

    const handleincrement = ()=>{
        dispatch(counterAction.incrememt())
    }

    const handledecrement = ()=>{

    }

 
  return (
    <div className="container mt-5">
      <button onClick={handleincrement}>Increment</button>
      <span>Count  : {countNumber} { NAME}</span>
      <button onClick={handledecrement}> Decrement</button>
    </div>
  );
}
