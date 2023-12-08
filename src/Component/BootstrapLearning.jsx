import React, { Component } from "react";
import Navbarcomp from "./common/Navbar";
import CardComp from "./common/Card";

export default class BootstrapLearning extends Component {

   
  render() {
    return (
      <div>
        <Navbarcomp />

<div className="mt-5 row">

        <CardComp  />

        {/* <CardComp />

        <CardComp /> */}

        </div>
        <span>Arun</span>

        <span className="ms-2">25</span>

        <button className="mt-4 ms-3 p-3">ADD</button>
      </div>
    );
  }
}
