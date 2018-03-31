import React, { Component } from 'react';
import './App.scss';
import SvgCard from "./svg-bar-component/index";
import SvgBarComponent from "./bar/barContainer";
import HourGlassComponent from "./hourglass/HourGlassContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SvgBarComponent></SvgBarComponent> */}
        <HourGlassComponent></HourGlassComponent> 
      </div>
    );
  }
}

export default App;
