import React from "react";
import "./style.scss";
import Hourbar from "./hourbar";
import BarJsonData from "./data.json";

class HourGlassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 30,
            data: props.data
                ? props.data[0]
                : {},
            config: props.config || {},
            max: 0,
            width: null,
            height: null,
            primaryColor:null,
            barData: [35, 55, 99, 40]
        }
        this.randomValues = this
        .randomValues
        .bind(this);
    }

    componentWillMount() {
        this.setMax();
        this.setState({
            barData:BarJsonData
          })

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
    randomValues(a, pCount = 4, pMin = 25, pMax = 99) {
        let min = pMin < pMax
          ? pMin
          : pMax;
        let max = pMax > pMin
          ? pMax
          : pMin;
        let resultArr = [],
          randNumber;
          debugger;
          let barData=this.state.barData;
        while (pCount > 0) {
          randNumber = Math.round(min + Math.random() * (max - min));
          if (resultArr.indexOf(randNumber) === -1) {
            resultArr.push(randNumber);
            barData[pCount-1].value=randNumber;
            pCount--;
          }
        }
        this.setState({barData: barData});
      }
    updateSlider(e) {
        let dataVal;
        if (e.target.value < 20) {
            dataVal = 20
        } else if (e.target.value > 90) {
            dataVal = 90
        } else {
            dataVal = e.target.value
        }
        this.setState({
            value: dataVal || e.target.value
        })
    }
    renderBar() {
        const barValue = this.state.value || 25;
        const text_width = this.state.text_width || 200;
        const barTitleDefault =  "LOREM IPSUM";
        const default_data_bg_color = this.state.data_bg_color || this.props.data_bg_color || [
            "#ED5E29",
            "#F9CD29"
        ];
        const primaryColor = this.state.primaryColor|| this.props.primaryColor||"#ED5E29";
        // For demo
           //  Ie 11 check 
    const isIE = (!!window.MSInputMethodContext && !!document.documentMode) || navigator.appVersion.indexOf("MSIE 10") !== -1 || navigator.appVersion.indexOf("MSIE 9.") !== -1;

    //  Svg related
    const preserveAspectRatio = isIE?"none" : "xMinYMin";
    const width  =  500;
    const height =  528;
    let randomValues = randomValues;
        return (
            <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={width}
                height={height}
                preserveAspectRatio = {preserveAspectRatio}
                viewBox="0 0 360 380">
             {this
          .state
          .barData
          .map((bar, index) => {
            return (
              <Hourbar
                barValue={bar.value}
                key={index}
                index={index}
                text_width={text_width}
                barTitle={bar.title||barTitleDefault}
                data_bg_color={bar.data_bg_color|| default_data_bg_color}
                primaryColor={bar.primaryColor||primaryColor}
                ></Hourbar>
            )
          })}   
            </svg>

        );
    }

    render() {
        return (
            <div className="App">
                <section ref="mainNode" className={this._baseClass}>
                    {this.renderBar()}
                    
                </section>
                <br />
                <button onClick={this.randomValues}>Click to generate</button>
            </div>
        );
    }
}

export default HourGlassComponent;