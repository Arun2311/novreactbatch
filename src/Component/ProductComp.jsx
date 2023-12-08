import React, { Component } from "react";
import "./Product.css";
export default class ProductComp extends Component {
  state = {
    productlist: [],
  };

  handlefetch = () => {
    let res = fetch("https://fakestoreapi.com/products")
      .then((resolve) => {
        return resolve.json();
      })
      .then((data) => {
        this.setState({ productlist: data });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  render() {
    return (
      <div>
        <h1>Product Page</h1>
        {this.state.productlist.map((da, i) => (
          <div>
            <img src={da.image} />
            <h1 className="header">{da.title}</h1>
          </div>
        ))}

        <button onClick={this.handlefetch}>Add</button>
      </div>
    );
  }
}
