import React from "react";
import Text from "../shared/text"
import "./style.scss";
import LinearGradient from "../shared/linearGradient";

class SvgBarComponent1 extends React.Component {
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

  getDynamicHeight(dataValue) {
    const value = dataValue * 1.28;
    return value > 20 ? { value, diff: value - 32 } : { value: 20, diff: 20 - 25.6 };
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

    const bar_width = "40";
    const barTitle = "LOREM IPSUM";

    const color = this.state.config.color || this.state.data.color || null
    const bgColor = this.state.config.bgColor || this.state.data.bgColor || null
    const imgMax = (this.state.height - 80) || 335.63
    const imgWidth = (imgMax * 0.265) || 89.97
    const value = (this.state.data.value || 0) / 100 * imgMax
    const start = imgMax - value
    let displayValue = this.state.data.value


    return (
      <svg id="Layer_1" viewBox="0 0 592.9 430" width="100%">
        <defs>

          <linearGradient id="bar-drop-shadow" gradientUnits="userSpaceOnUse"
            x1={284.101}
            y1={301.698}
            x2={57.975}
            y2={241.107}
            gradientTransform="matrix(.6131 -.1145 -.1145 .9748 57.243 13.838)">
            <stop offset={0} stopOpacity={0} stopColor={shadowColor || "#000000"} />
            <stop offset={0.859} stopOpacity={0.859} stopColor={shadowColor || "#000000"} />
            <stop offset={1} />
          </linearGradient>


          {/* <linearGradient
          id="bar-height-info"
          gradientUnits="userSpaceOnUse"
          x1={68.086}
          y1={269.194}
          x2={68.086}
          y2={301.44}>
          {height_info_color.map((point,i)=><stop key={i} offset={point.offset}stopColor={point.stopColor}/>)}
        </linearGradient> */}

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
          <g className="bar" transform={`translate(${100 * index}, 0)`} key={index}>
            <path opacity={0.54}
              fill="url(#bar-drop-shadow)"
              d="M232.6 146.5l-126.9-36.8-76.7 263 127.8 35.4z" />

            <g className="bar-top" transform={`translate(0, ${-this.getDynamicHeight(bar).diff})`}>
              <path
                className="st7 bar-top--right" d="M111.1 269.2h-43V110.5h38c2.8 0 5 2.2 5 5v153.7z" />
              <path
                className="st6" d="M111.1 269.2h-86V114.7c0-2.8 2.2-5 5-5h76c2.8 0 5 2.2 5 5v154.5z" />
              <path
                className="st7"
                d="M111.1 269.2h-43V110.5h38c2.8 0 5 2.2 5 5v153.7z" />

              <Text
                transform="translate(75.644 160.03)"
                x={0}
                y={0}
                className="st12 st10"
                style={{ fontSize: '5.316px' }}
                width={bar_width}>
                {barTitle}
              </Text>

              <Text transform="translate(75.644 164.6)" x={0}
                y={0} style={{ fontSize: '3px' }} width={30} >
                Lorem Ipsum is simply dummy
                text of the printing and typese
                tting industry. Lorem Ipsumhas
                been the industry's standard
                dummy text ever since
          </Text>

              <g className="bar-icon-action">
                <circle className="st20" cx={90.3} cy={189.1} r={2.5} />
                <path
                  className="st20"
                  d="M91.2 192.8c-.6-.1-1.3-.1-1.9 0-4.1.5-5.5 5.3-5.1 8.9.2 1.6 2.7 1.6 2.5 0-.1-1.3-.1-3.3.6-4.8v5.5c0 4.1 0 8.2-.2 12.4-.1 1.8 2.8 1.8 2.8 0 .1-3.2.2-6.5.2-9.7h.4c0 3.2 0 6.5.2 9.7.1 1.8 2.9 1.8 2.8 0-.2-4.1-.2-8.2-.2-12.4v-.4c0-1.8-.1-3.6-.1-5.4.8 1.4.9 3.6.8 5-.2 1.6 2.3 1.6 2.5 0 .4-3.6-1-8.5-5.3-8.8z"
                />
              </g>
              <text
                transform="matrix(.8386 0 0 1 34.502 144.63)"
                className="st12 st10 bar-top--left"
                fontSize={29.72}
              >
                0{index + 1}
              </text>
            </g>
            <g className="bar-bottom">
              <path
                className="st6"
                d="M106.1 373.1h-76c-2.8 0-5-2.2-5-5v-66.7h86v66.7c0 2.8-2.3 5-5 5z"
              />
              <path
                d="M106.1 373.1h-38v-71.7h43v66.7c0 2.8-2.3 5-5 5z"
                fill="url(#SVGID_7_)"
              />
              <circle cx={100.2} cy={362.6} r={5.8} fill="#f05c2c" />
              <text
                transform="rotate(-90 200.955 161.675)"
                className="st12 st10"
                fontSize={6.344}
              >
                LOREM IPSUM AMET
        </text>
            </g>
            <g className="bar-dynamic">

              <LinearGradient data={height_info_color} id={`bar-height-info-${index}`}
                gradientUnits="userSpaceOnUse"
                x1={68.086}
                y1={269.194 - this.getDynamicHeight(bar).diff}
                x2={68.086}
                y2={301.44} ></LinearGradient>

              <rect x="25.5" y={269.2 - this.getDynamicHeight.call(this, bar).diff} fill={`url(#bar-height-info-${index})`} width="85.2" height={this.getDynamicHeight.call(this, bar).value} />
              <text
                transform="translate(33.392 294.754)"
                className="st6 st10"
                fontSize={21.984}>
                {bar}
              </text>
              <text
                transform="translate(54.527 294.64)"
                className="st6 st10"
                fontSize={13.087}
              >%
        </text>

              <g className="up">
                <circle cx={91} cy={285.3} r={7.2} opacity={0.15} fill="#fff" />
                <path className="st6" d="M94.3 286.8h-6.4l3.2-4.3z" />
              </g>

            </g>
          </g>)
        })}
      </svg>
    )
  }
  render() {
    return (
      <section
        ref="mainNode"
        className={this._baseClass}>
        {this.renderBar()}
      </section>
    );
  }
}

export default SvgBarComponent1;
