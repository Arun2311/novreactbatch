import React, { Component } from "react";

export default class AccordionChild extends Component {
  state = {
    isshow: false,
  };

  handlechange = ()=>{
    this.setState({isshow : !this.state.isshow })
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.handlechange}>
            
            
            {this.state.isshow ? "-":"+"}
            
            
            </button>

        {this.state.isshow && <p>{this.props.info}</p>}
      </div>
    );
  }
}

// console.log(true && false);

// true

// && - false = false
// || true = true

// ! not true = false : false = true
