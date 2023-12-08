import React, { useState } from "react";
// import { Data } from "./DynamicData";
export default function DynamicImport() {
  const [isshow, setishow] = useState(false);
  const [Data, setdata] = useState([]);

  const getdataaa = async () => {
    let response = await import("./DynamicData");
    // console.log(response.Data);
    setdata(response.Data);
    setishow(true);
  };
  return (
    <div>
      <h1>Arun</h1>
      <button onClick={getdataaa}>click</button>

      {isshow ? <h1>{Data[0].name}</h1> : ""}
    </div>
  );
}
