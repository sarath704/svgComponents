import React, { Component } from 'react';
import './App.scss';
import SvgCard from "./svg-bar-component/index";
import SvgBarComponent from "./bar/barContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SvgBarComponent></SvgBarComponent>
      </div>
    );
  }
}

export default App;
