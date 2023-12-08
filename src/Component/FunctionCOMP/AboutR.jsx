import React from 'react'
import { useParams } from 'react-router-dom'

export default function AboutR() {
  const {id} = useParams()
  return (
    <div>AboutR {id}</div>
  )
}
