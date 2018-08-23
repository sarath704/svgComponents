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
      width: '',
      height: '',
      barData: [35, 55, 99, 40]
    }
    
  }
  onChangeWidth(event){
    let config= this.state.config;
    config.containerConfig.width=event.target.value;
    this.setState({
      config:config
    })
   
 }
 aspectChange(e){
  let newValue = (this.state.aspectPresrved === "on" || this.state.aspectPresrved === true) ? false : true;


  this.setState({
    aspectPresrved:newValue
  })
 }
 onChangeHeight(event){
  let config= this.state.config;
  config.containerConfig.height=event.target.value;
  this.setState({
    config:config
  })
  
}
onChangeCount(event){
  let config= this.state.config;
  config.containerConfig.maxItems=event.target.value;
  this.setState({
    data : this.state.data.slice(0,event.target.value),
    config:config
  })
}
  componentWillMount() {
    this.setMax();
    this.setState({data: BarJsonData.data, config: configData,aspectPresrved:false});
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
    const barDataCount  = Math.min(this.state.data.length,this.state.config.containerConfig.maxItems||9999);
    const barRenderData  = this.state.data.slice(0,barDataCount);
    this.setState({
      data : this.state.data.slice(0,barDataCount),
      config: Object.assign(this.state.config,{barCount:barRenderData.length})
      
    });
  }
getBarcount(){
  const barDataCount  = Math.min(this.state.data.length,this.state.config.containerConfig.maxItems||9999);
    const barRenderData  = this.state.data.slice(0,barDataCount);
    this.setState({
      data : this.state.data.slice(0,barDataCount),
      config: Object.assign(this.state.config,{barCount:barRenderData.length})
      
    });
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
    const shadowColor   = this.state.config.shadowColor  || this.state.data.shadowColor   || null;
    // const backgroundBg = this.state.config.containerConfig.background;
    const showBackground =  this.state.config.containerConfig.showBackground !== undefined?this.state.config.containerConfig.showBackground: true;
    const height  = this.state.config.containerConfig.height || 800;
    const width   = this.state.config.containerConfig.width || 800;
    const maxItems = this.state.config.containerConfig.maxItems;
    let  aspectPresrved =this.state.aspectPresrved || false;
    let preserveAspectRatio;
    let viewBoxWidth= (maxItems*200)+100;
    if(aspectPresrved){
        if(this.state.config.containerConfig.width>this.state.config.containerConfig.width){
        preserveAspectRatio ='xMaxYMax'
        }
        else if(this.state.config.containerConfig.width<this.state.config.containerConfig.width){
        preserveAspectRatio ='xMaxYMax'
        }
        else{
        preserveAspectRatio= "xMaxYMid";
        }
    }
    else{
      preserveAspectRatio="none"
    }
// if(this.state.config.containerConfig.width>this.state.config.containerConfig.width){
//   preserveAspectRatio ='xMaxYMid'
// }
// else if(this.state.config.containerConfig.width<this.state.config.containerConfig.width){
//   preserveAspectRatio ='xMidYMax'
// }
// else{
//   preserveAspectRatio= "xMaxYMid";
// }

    //  IE related
    // const isIE = this.isIEBrowser;
    // const preserveAspectRatio = isIE
    //   ? "none"
    //   : "xMinYMin";
      // For demo
    // let randomValues = randomValues;
    return (

      <svg
        id="Layer_1"
        width={width}
        height={height}
        // viewBox={`0 0 ${1024} ${1024}`}
        preserveAspectRatio={"none"}
        xmlns="http://www.w3.org/2000/svg" ref="barcontainer">
        <defs>

          <radialGradient
            id="bg"
            cx={512.153}
            cy={511.616}
            r={509.751}
            gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor={shadowColor || '#fff'}/>
            <stop offset={1} stopColor={shadowColor||"#d1d3d4"}/>
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
        
       {showBackground&&<path fill="url(#bg)" d={`M4.662-.383h${width}.0v${height}H4.662z`}/ > }
       <svg width="100%" x="0%" y="0" height="100%"  preserveAspectRatio={"xMidYMin meet"} viewBox={`50 50 ${viewBoxWidth>1024?viewBoxWidth:1024} ${viewBoxWidth>1024?viewBoxWidth:1024}`}>
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

      </svg>
    )
  }
  render() {
    return (
      <div className="bar-container">
        <section ref="mainNode" className={this._baseClass}>
          {this.renderBar()}
         
        </section>
        <div className="submit">
        {this.state.aspectPresrved}     
          Width: <input type="range" onChange={this.onChangeWidth.bind(this)} value={this.state.config.containerConfig.width} min="200" max="1024"/>
          Height: <input type="range" onChange={this.onChangeHeight.bind(this)} value={this.state.config.containerConfig.height} min="200" max="680"/>
          Count: <input type="range" onChange={this.onChangeCount.bind(this)} value={this.state.config.containerConfig.maxItems} min="1" max="8"/>
          </div>
      </div>
    );
  }
}

export default SvgBarComponent;
