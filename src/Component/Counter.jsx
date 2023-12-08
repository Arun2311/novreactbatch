import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    Moviename: "Leo",
  };

  handleadd = () => {
    this.setState({ count: this.state.count + 1 });

    console.log("Arun");
  };
  render() {
    return (
      <>
        <h1>Movie Nmae : {this.props.moviename}</h1>
        <h1>Count : {this.state.count}</h1>

        <button onClick={this.handleadd}>Add</button>
      </>
    );
  }
}

export default Counter;
