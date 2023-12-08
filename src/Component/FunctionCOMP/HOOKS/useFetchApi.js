import React, { useState, useEffect } from 'react'

export default function useFetchApi(url,initialdata) {
  const [responsedata, setresponsedata] = useState(initialdata)
console.log(url,"SAdasdas");

  useEffect(() => {
    handlefetch()
  }, [])

  const handlefetch = async () => {

    try {
      let res = await fetch(url)
      console.log(res);
      let data = await res.json()
      setresponsedata(data)

    } catch (err) {
      console.log(err,"dsfdsfds");
    }


  }
  return{ responsedata }

}
