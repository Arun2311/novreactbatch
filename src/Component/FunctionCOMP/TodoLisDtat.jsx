import React from 'react'
import useFetchApi from './HOOKS/useFetchApi'

export default function TodoLisDtat() {



    const { responsedata } = useFetchApi("https://jsonplaceholder.typicode.com/todos", [])

    console.log(responsedata);
    return (
        <div>
            hjbahjbcahja
            {responsedata.map((da)=>(
            <div>
<h1>{da.title}</h1>

                </div>

        ))}
        </div>
    )
}
