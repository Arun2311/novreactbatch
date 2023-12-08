import React, { useEffect, useState } from "react";
import { render } from "react-dom";

export default function RenderFun() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    handlefetch();
  }, []);
  console.log(data,"hdfgdfdchsdhc");

  const handlefetch = async () => {
    let res = await fetch("https://course-api.com/react-tours-project");
    let datas = await res.json();
    setdata(datas);
    console.log(datas);
  };

  return (
    <div>
      {data.map((d) => (
        <div>
          <h1>{d.name}</h1>
          <img src={d.image}/>
        </div>
      ))}
    </div>
  );
}
