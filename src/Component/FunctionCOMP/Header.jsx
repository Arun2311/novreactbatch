import React, { useContext } from 'react'
import CounterContext from '../Context/CounterContext'

export default function Header() {

    const {count} = useContext(CounterContext)
  return (
    <div>
        <h1>Cart:{count} </h1>
    </div>
  )
}
