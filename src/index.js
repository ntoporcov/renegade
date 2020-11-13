import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import {NavBar} from "./components/common/nav";



ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </BrowserRouter>,
  document.getElementById('root')
);
