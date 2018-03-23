import React from "react";
import Text from "../shared/text";
import LinearGradient from "../shared/linearGradient";
class Bar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stops: []
        }
    }
    getDynamicHeight(dataValue) {
        const value = dataValue * 1.28;
        return value > 20 ? { value, diff: value - 32 } : { value: 20, diff: 20 - 25.6 };
    }
    render() {

        const index = this.props.index;
        const bar = this.props.bar;
        const targetHeight = this.getDynamicHeight(bar);
        const text_width = this.props.text_width;
        const barTitle = this.props.barTitle;
        const height_info_color = this.props.height_info_color;
        const shadowColor=null;
       return (<g className="bar" transform={`translate(${100 * index}, 0)`} key={index}>

          <linearGradient id={`bar-drop-shadow-${index}`} gradientUnits="userSpaceOnUse"
            x1={284.101}
            y1={301.698-targetHeight.diff}
            x2={57.975}
            y2={241.107}
            gradientTransform="matrix(.6131 -.1145 -.1145 .9748 57.243 13.838)">
        <stop offset={0} stopOpacity={0} stopColor="#000000"></stop>
        <stop offset={0.859} stopOpacity={0.859} stopColor="#000000"></stop>
        <stop offset={1}></stop>
          </linearGradient>
          
            <path opacity={0.54}
                fill={`url(#bar-drop-shadow-${index})`}
                d={`M232.6 ${146.5-targetHeight.diff}l-126.9-36.8-76.7 263 127.8 35.4z`} />

            <g className="bar-top" transform={`translate(0, ${-targetHeight.diff})`}>
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
                    width={text_width}>
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

                <rect x="25.5" y={269.2 - targetHeight.diff} fill={`url(#bar-height-info-${index})`} width="85.2" height={targetHeight.value} />
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
    }
}
export default Bar;