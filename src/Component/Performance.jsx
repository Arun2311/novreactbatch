import React from 'react'
import { useCallback } from 'react';
import { useMemo } from 'react';
 function Performance() {

    // const handeadd = 
// usememo
//   let hanndleadd=  useMemo((a,b)=>{
//         console.log(a+b);
//             },[a])

//     handeadd(4,6)



const handleadd = useCallback((a,b)=>{
return a+b
},[])

  return (
    <div>Performance</div>
  )
}

export default React.memo(Performance)