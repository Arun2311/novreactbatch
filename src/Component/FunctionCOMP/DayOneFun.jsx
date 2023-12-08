import React, { useState } from "react";

function DayOneFun(props) {
  const [count, setcount] = useState(10);

  const handleadd = () => {

    setcount(count+1)
  };
  return (
    <div>
      <h1>Movie : {props.movieName}</h1>

      <h2>Ticket Count : {count}</h2>

      <button onClick={handleadd}>Add</button>

      
    </div>
  );
}

export default DayOneFun;

// hooks
