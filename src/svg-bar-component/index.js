import React        from 'react';
import ReactSVG     from 'react-svg';

// import Isvg            from "react-inlinesvg";
import "./style.scss";

class SvgCard extends React.Component {

    /**
     * @type {SvgCardSchema}
     */
    props;

    _baseClass = "svg-bar-component";

    constructor(props) {
        super(props);

        this.state = {
            data            : props.data ? props.data[0] : {},
            config          : props.config || {},
            max             : 0,
            width           : null,
            height          : null
        }
    }

    componentWillMount(){
        this.setMax()
    }

    setMax(){
        this.setState({max: this.state.data.max || this.state.config.max || 100})
    }

    componentDidMount(){
        if(this.refs.mainNode){
            this.setState({width: this.refs.mainNode.offsetWidth, height: this.refs.mainNode.offsetHeight})
        }
    }

    $resize(){
        if(this.refs.mainNode){
            this.setState({width: this.refs.mainNode.offsetWidth, height: this.refs.mainNode.offsetHeight})
        }
    }

    renderBar(){
        const color     = this.state.config.color || this.state.data.color || null
        const bgColor   = this.state.config.bgColor || this.state.data.bgColor || null
        const imgMax    = (this.state.height - 80)  || 335.63
        const imgWidth  = (imgMax * 0.265)  || 89.97
        const value     = (this.state.data.value || 0)/100 * imgMax
        const start     = imgMax - value
        let displayValue= this.state.data.value
        
        
        return(
                <svg id="Layer_1"
                // dataName="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox={`-${this.state.width/2} -40 ${this.state.width} ${this.state.height}`}
                >
                    <defs>
                        
                        <linearGradient
                            id="linear-gradient"
                            y1={imgMax/2}
                            x2={imgWidth}
                            y2={imgMax/2}
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0"    stopColor={bgColor ||"#58595b"} />
                            <stop offset="0.06" stopColor={bgColor ||"#636567"} />
                            <stop offset="0.18" stopColor={bgColor ||"#828386"} />
                            <stop offset="0.23" stopColor={bgColor ||"#939598"} />
                            <stop offset="0.35" stopColor={bgColor ||"#919396"} />
                            <stop offset="1"    stopColor={bgColor ||"#8a8c8e"} />
                        </linearGradient>
                        <linearGradient 
                            id="linear-gradient-2"
                            y1={imgMax*0.74}
                            x2={imgWidth}
                            y2={imgMax*0.74}
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0"    stopColor={color ||"#9b3f7f"} />
                            <stop offset="0.05" stopColor={color ||"#a75493"} />
                            <stop offset="0.11" stopColor={color ||"#b267a4"} />
                            <stop offset="0.17" stopColor={color ||"#b972af"} />
                            <stop offset="0.23" stopColor={color ||"#bb76b2"} />
                            <stop offset="0.42" stopColor={color ||"#9d5894"} />
                            <stop offset="0.66" stopColor={color ||"#793571"} />
                            <stop offset="0.87" stopColor={color ||"#64205c"} />
                            <stop offset="1"    stopColor={color ||"#5c1854"} />
                        </linearGradient>
                    </defs>
                    <rect className="cls-2" width={imgWidth} height={imgMax} rx="4" ry="4" />
                    <rect className="cls-3" y={start}   width={imgWidth} height={value} rx="4" ry="4" />
                    <g className="cls-8">
                    <text className="cls-4"
                     transform={"translate(" + (imgWidth * 0.204)  + " " + (imgMax * 0.907) +")"}>
                        {displayValue}
                    </text>
                    </g>
                    <g className="cls-8">
                    <text className="cls-9" transform={"translate(" + (imgWidth * 0.145) + " " + (imgMax * 0.063) +")"}>
                        {this.state.data.name}
                    </text>
                    </g>
                </svg> 
        )
    }

    render() {
        return (
            <section
                ref         = "mainNode"
                className   = { this._baseClass }>
                {this.state.width&&this.renderBar()}
            </section>
        );
    }
}

export default SvgCard;
