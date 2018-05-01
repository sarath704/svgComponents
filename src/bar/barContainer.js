import React from "react";
import "./style.scss";
import Bar from "./bar";
import BarJsonData from "./data.json"
import configData from "./config.json"

class SvgBarComponent extends React.Component {
  /**
      * @type {SvgCardSchema}
      */
  props;

  _baseClass = "svg-bar-component";

  constructor(props) {
    super(props);

    this.state = {
      data: props.data
        ? props.data[0]
        : {},
      config: props.config || {},
      max: 0,
      width: null,
      height: null,
      barData: [35, 55, 99, 40]
    }
    this.randomValues = this
      .randomValues
      .bind(this);
  }

  componentWillMount() {
    this.setMax();
    this.setState({data: BarJsonData, config: configData})
  }

  setMax() {
    this.setState({
      max: this.state.data.max || this.state.config.max || 100
    })
  }
  componentDidMount() {
    if (this.refs.mainNode) {
      this.setState({width: this.refs.mainNode.offsetWidth, height: this.refs.mainNode.offsetHeight})
    }
  }

  gardientPoints(color1, color2) {
    return [
      {
        offset: 0,
        stopColor: color1
      }, {
        offset: 1,
        stopColor: color2
      }
    ]
  }

  randomValues(a, pCount = 4, pMin = 20, pMax = 99) {
    let min = pMin < pMax
      ? pMin
      : pMax;
    let max = pMax > pMin
      ? pMax
      : pMin;
    let resultArr = [],
      randNumber;
    let barData = this.state.data;
    while (pCount > 0) {
      randNumber = Math.round(min + Math.random() * (max - min));
      if (resultArr.indexOf(randNumber) === -1) {
        resultArr.push(randNumber);
        barData[pCount - 1].value = randNumber;
        pCount--;
      }
    }
    this.setState({data: barData});
  }
  isIEBrowser(){
   return (!!window.MSInputMethodContext && !!document.documentMode) || navigator
    .appVersion
    .indexOf("MSIE 10") !== -1 || navigator
    .appVersion
    .indexOf("MSIE 9.") !== -1
  }
  renderBar() {

    // Colors
    const shadowColor = this.state.config.shadowColor || this.state.data.shadowColor || null;
    const primaryColor = this.state.config.primaryColor || this.state.data.primaryColor || "#ef5b2c";
    const data_bg_color = this.state.config.data_bg_color || this.state.data.data_bg_color || [
      {
        offset: 0,
        stopColor: "#f27026"
      }, {
        offset: 0.057,
        stopColor: "#ea4924"
      }
    ];
  

    
    //  IE related
    const isIE = this.isIEBrowser;
    const preserveAspectRatio = isIE
      ? "none"
      : "xMinYMin";
    const width = !isIE ? "100%" : 800;
    const height = !isIE ? "100%": 800;
      // For demo
    let randomValues = randomValues;
    return (

      <svg
        id="Layer_1"
        width={width}
        height={height}
        viewBox="0 0 1024 1024"
        preserveAspectRatio={preserveAspectRatio}
        xmlns="http://www.w3.org/2000/svg">
        <defs>

          <radialGradient
            id="bg"
            cx={512.153}
            cy={511.616}
            r={509.751}
            gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor={shadowColor || '#fff'}/>
            <stop offset={1} stopColor="#d1d3d4"/>
          </radialGradient>
          <linearGradient
            id="bar-drop-shadow"
            gradientUnits="userSpaceOnUse"
            x1={140.712}
            y1={611.828}
            x2={310.983}
            y2={620.752}>
            <stop offset={0} stopColor={shadowColor || "#555a61"}/>
            <stop offset={0.977} stopColor={shadowColor || "#555a61"} stopOpacity={0}/>
          </linearGradient>

          <linearGradient
            id="SVGID_6_"
            gradientUnits="userSpaceOnUse"
            x1={198.466}
            y1={497.261}
            x2={278.528}
            y2={497.261}>
            <stop offset={0} stopColor = { shadowColor || '#fff'}/>
            <stop offset={0.064} stopColor={ shadowColor ||"#e9e8eb"}/>
          </linearGradient>
          <linearGradient
            id="SVGID_5_"
            gradientUnits="userSpaceOnUse"
            x1={198.561}
            y1={607.25}
            x2={198.561}
            y2={621.906}
            gradientTransform="matrix(1 0 0 -1 0 1317.344)">
            <stop offset={0} stopOpacity={0.51}/>
            <stop offset={1} stopColor={shadowColor || "#555a61"} stopOpacity={0}/>
          </linearGradient>
          <linearGradient
            id="SVGID_8_"
            gradientUnits="userSpaceOnUse"
            x1={198.466}
            y1={770.094}
            x2={278.528}
            y2={770.094}>
            <stop offset={0} stopColor = { shadowColor || '#fff'}/>
            <stop offset={0.064} stopColor={ shadowColor || "#e9e8eb"}/>
          </linearGradient>
        </defs>
        <path fill="url(#bg)" d="M4.662-.383h1014.982v1024H4.662z"/> 
        
        {
          this.state.data.map((barItem, index) => {
            return (
              <Bar
                data = {barItem}
                key = {index}
                index = {index}
                config = {this.state.config}
                ></Bar>
            )
          })
        }

      </svg>
    )
  }
  render() {
    return (
      <div className="bar-container">
        <section ref="mainNode" className={this._baseClass}>
          {this.renderBar()}
        </section>
        <button onClick={this.randomValues}>Click to generate</button>
      </div>
    );
  }
}

export default SvgBarComponent;
