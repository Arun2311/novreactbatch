import React, { Component } from 'react'

export default class Lifecycle extends Component {

state={
    count:0
}
    componentDidMount(){
        console.log("componentDidMount");
    }
    handleclick = ()=>{
        this.setState({count:this.state.count+1})
    }
 
    componentDidUpdate(prevprosp){
        console.log("componentDidUpdate",prevprosp.data);
    }

    // componentDidUpdate(){

    // }
// componentWillUnmount,shouldComponentUpdate









  render() {
    console.log("render");
    return (
        <>
      <div>countlifec{this.state.count}</div>
      <button onClick={this.handleclick}>click</button>

      </>
    )
  }
}



