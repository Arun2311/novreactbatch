import React, { useContext } from 'react'
import CounterContext from '../Context/CounterContext'

export default function Product() {

    const {increment} = useContext(CounterContext)
  return (
    <div>
        <button onClick={increment}>Add cart</button>
    </div>
  )
}
