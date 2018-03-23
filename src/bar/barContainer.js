import React from "react";
import "./style.scss";

import Bar from "./bar";

class SvgBarComponent extends React.Component {
  /**
      * @type {SvgCardSchema}
      */
  props;

  _baseClass = "svg-bar-component";

  constructor(props) {
    super(props);

    this.state = {
      data: props.data ? props.data[0] : {},
      config: props.config || {},
      max: 0,
      width: null,
      height: null,
      barData: [25, 50, 70, 55, 35]
    }
    this.randomValues = this.randomValues.bind(this);
  }

  componentWillMount() {
    this.setMax()
  }

  setMax() {
    this.setState({ max: this.state.data.max || this.state.config.max || 100 })
  }
  componentDidMount() {
    if (this.refs.mainNode) {
      this.setState({ width: this.refs.mainNode.offsetWidth, height: this.refs.mainNode.offsetHeight })
    }
  }
  gardientPoints(color1, color2) {
    return [{ offset: 0, stopColor: color1 }, { offset: 1, stopColor: color2 }]
  }
  randomValues(a,pCount=5, pMin=20, pMax=99) {
    let min = pMin < pMax ? pMin : pMax;
    let max = pMax > pMin ? pMax : pMin;
    let  resultArr = [], randNumber;
    while ( pCount > 0) {
        randNumber = Math.round(min + Math.random() * (max - min));
        if (resultArr.indexOf(randNumber) == -1) {
            resultArr.push(randNumber);
            pCount--;
        }
    }
   this.setState({
    barData:resultArr
  });
}
  renderBar() {
    let dynamicColor = null;
    const shadowColor = this.state.config.shadowColor || this.state.data.shadowColor || null;
    const height_info_color = (dynamicColor && this.gardientPoints(...dynamicColor)) ||
      [{ offset: 0, stopColor: "#c45219" },
      { offset: 0.057, stopColor: "#ca551b" },
      { offset: 0.23, stopColor: "#db5c1e" },
      { offset: 0.423, stopColor: "#e66020" },
      { offset: 0.65, stopColor: "#ee6421" },
      { offset: 0.99, stopColor: "#f26522" }];

    const text_width = "40";
    const barTitle = "LOREM IPSUM";
    let randomValues=randomValues;


    // const color = this.state.config.color || this.state.data.color || null
    // const bgColor = this.state.config.bgColor || this.state.data.bgColor || null
    // const imgMax = (this.state.height - 80) || 335.63
    // const imgWidth = (imgMax * 0.265) || 89.97
    // const value = (this.state.data.value || 0) / 100 * imgMax
    // const start = imgMax - value
    // let displayValue = this.state.data.value


    return (
     
      <svg id="Layer_1" viewBox="0 0 592.9 430" width="100%" xmlns="http://www.w3.org/2000/svg" >
        <defs>


          <linearGradient
            id="SVGID_6_"
            gradientUnits="userSpaceOnUse"
            x1={68.095}
            y1={189.852}
            x2={111.073}
            y2={189.852}>
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.064} stopColor="#e9e8ea" />
          </linearGradient>
          <linearGradient
            id="SVGID_7_"
            gradientUnits="userSpaceOnUse"
            x1={68.095}
            y1={337.281}
            x2={111.073}
            y2={337.281}
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.064} stopColor="#e9e8ea" />
          </linearGradient>
        </defs>
        <path fill="#a2a8b0" d="M0 0h592.9v430H0z" />

        {this.state.barData.map((bar, index) => {
          return (
            <Bar bar={bar} key={index} index={index} text_width={text_width} barTitle={barTitle} height_info_color={height_info_color}></Bar>
          )
        })}

      </svg>
    )
  }
  render() {
    return (
      <div>
      <section
        ref="mainNode"
        className={this._baseClass}>
        {this.renderBar()}
        
      </section>
        <button onClick={this.randomValues}>Click to generate</button>
      </div>
    );
  }
}

export default SvgBarComponent;
