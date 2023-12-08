import React, { Component } from "react";
import AccordionChild from "./AccordionChild";

export default class AcoordionParent extends Component {

  render() {
    return (
      <div>
        <h1>Today class</h1>
        <but>dsjbcbjdh</but>

        {this.state.datas.map((data, i) => (
          <div key={i}>
            {/* <h1>{data.title}</h1>
            <p>{data.info}</p> */}
            <AccordionChild title={data.title} info={data.info}/>
          </div>
        ))}
      </div>
    );
  }
}
