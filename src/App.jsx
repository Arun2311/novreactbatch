// import React from "react";

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

import React, { PureComponent, lazy } from "react";
import { Component } from "react";
import Leo from "./Component/Leo.jsx";
import BirthdayList from "./Component/BirthdayList.jsx";
import ProductComp from "./Component/ProductComp.jsx";
import Lifecycle from "./Component/Lifecycle.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapLearning from "./Component/BootstrapLearning.jsx";
import AcoordionParent from "./Component/AcoordionParent.jsx";
import DayOneFun from "./Component/FunctionCOMP/DayOneFun.jsx";
import BirthDayFun from "./Component/FunctionCOMP/BirthDayFun.jsx";
import RenderFun from "./Component/FunctionCOMP/RenderFun.jsx";
import ReactForm from "./Component/FunctionCOMP/ReactForm.jsx";
import ReactHookForm from "./Component/FunctionCOMP/ReactHookForm.jsx";
import YubValidation from "./YubValidation.jsx";
import TodoList from "./Component/FunctionCOMP/TodoList.jsx";
import Header from "./Component/FunctionCOMP/Header.jsx";
import Product from "./Component/FunctionCOMP/Product.jsx";
import CounterProvider from "./Component/CounterProvider/CounterProvider.jsx";
import CounterComp from "./Component/ReduxComp/CounterComp.jsx";
import { Provider } from "react-redux";
import { store } from "./Component/ReduxComp/redux/store.js";
import HomeComp from "./Component/FunctionCOMP/HomeComp.jsx";
import TodoLisDtat from "./Component/FunctionCOMP/TodoLisDtat.jsx";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DynamicImport from "./Component/DynamicImport.jsx";
import { Suspense } from "react";


// import HomeR from "./Component/FunctionCOMP/HomeR.jsx";
// import ProductR from "./Component/FunctionCOMP/ProductR.jsx";
// import AboutR from "./Component/FunctionCOMP/AboutR.jsx";

const HomeR  =  lazy(()=> import("./Component/FunctionCOMP/HomeR.jsx"))
const ProductR  =  lazy(()=> import("./Component/FunctionCOMP/ProductR.jsx"))
const AboutR  =  lazy(()=> import("./Component/FunctionCOMP/AboutR.jsx"))

class App extends PureComponent {
  state = {
    count: true,
    name: "sadas",
  };

  handleclick = () => {
    this.setState({ count: false });
  };
  render() {
    return (
      <div>
        {/* <h1>Today class</h1> */}
        {/* <Leo/> */}

        {/* <BirthdayList/> */}

        {/* <h1>{this.state.count}</h1>
<Lifecycle value={this.state.count} data={this.state.name}/>

<button onClick={this.handleclick}>clickappp</button> */}

        {/* <ProductComp/> */}

        {/* <AcoordionParent/> */}
        {/* <BootstrapLearning/> */}
        {/* 
      <DayOneFun movieName={"jailer"}/>
      <DayOneFun movieName={"jawan"}/>
      <DayOneFun movieName={"leo"}/>
      <DayOneFun movieName={"jjdxx"}/>

     */}

        {/* <RenderFun/> 
        <BirthDayFun/> */}
        {/* <ReactForm/> */}

        {/* <ReactHookForm/> */}

        {/* <YubValidation/> */}

        {/* <TodoList/> */}

        {/* <CounterProvider>
        <Header/>
        <Product/>
        </CounterProvider> */}
        {/* <Provider store={store}>

<CounterComp />
<Performance/>

</Provider> */}

        {/* <h1>Arun</h1>
<HomeComp/>

<TodoLisDtat/> */}

        <h1>Ar</h1>

     {/* <DynamicImport/> */}
<Suspense fallback={<h1>Loading....</h1>}>
        <BrowserRouter>
        <ul>
          <li>  <Link to="/">Home</Link></li>
          <li>  <Link to="/product">Product</Link></li>
          <li>  <Link to="/about/4">about</Link></li>
      
        </ul>
          <Routes>
            <Route path="/" element={<HomeR />} />
            <Route path="/product" element={<ProductR />} />
            <Route path="/about/:id" element={<AboutR />} />
          </Routes>
        </BrowserRouter>

        </Suspense>
      </div>
    );
  }
}

export default App;
