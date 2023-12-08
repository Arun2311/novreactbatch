import React, { useEffect, useState } from 'react'
import useFetchApi from './HOOKS/useFetchApi'

export default function HomeComp() {


  // const [responsedata ,setresponsedata] =  useState([])

  const { responsedata } = useFetchApi("https://fakestoreapi.com/products",[])

  return (
    <div>
      {
        responsedata.map((data, i) => (
          <div key={i}>
            <h1>{data.title}</h1>


          </div>
        ))
      }


    </div>
  )
}
