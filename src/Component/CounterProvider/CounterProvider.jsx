import {  useState, } from "react"
import React from 'react'
import CounterContext from "../Context/CounterContext"

export default function CounterProvider({children}) {

    const[count,setcount] =useState(2)

    const increment = ()=>{
        setcount(count+1)
    }
  return (
    <div>
{/* 
        <CounterContext.Provider  value={{count,increment}}>
{children}
        </CounterContext.Provider> */}


        <CounterContext.Provider value={{count,increment}}>
{children}
        </CounterContext.Provider>

    </div>
  )
}
