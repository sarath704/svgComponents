import React from "react";
import Text from "../shared/text";
class Bar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stops: [],
            config: {},
            arrowHeight:30
        }
    }
    getDynamicHeight(dataValue) {
        const value = dataValue * 2.319; // Initial height 58px for 25% ; 58/25 = 2.319 

        // Value is generated value based on bar count  , diff is difference between initial and gen
        return dataValue > 20
            ? {
                value,
                diff: value - 58
            }
            : {
                value: 40,
                diff:40-58
            };
    }

    arrowsCount(value) {
        const gutters= 10;
        const availableHeight= this.getDynamicHeight(value);
        const spaceBetweenArrows = 3;
        const arrowHeight = this.state.arrowHeight;
        
        return Math.floor(availableHeight.value-gutters)/(arrowHeight+spaceBetweenArrows);
    }

    render() {

        const index = this.props.index;
        const bar = this.props.bar;
        const targetHeight = this.getDynamicHeight(bar);
        const text_width = this.props.text_width;
        const barTitle = this.props.barTitle;
        const data_bg_color = this.props.data_bg_color;
        const shadowColor = this.props.shadowColor;
        const upArrowsCount = this.arrowsCount(bar);
        const spaceBetweenArrows= 3;
        const arrowHeight = 30+spaceBetweenArrows;
        const primaryColor = this.props.primaryColor || "#ef5b2c";
        return (
            <g className="bar" transform={`translate(${ 200 * index}, 0)`} key={index}>

                <linearGradient
                    id={`bar-drop-shadow-${index}`}
                    gradientUnits="userSpaceOnUse"
                    x1={140.712}
                    y1={611.828 - targetHeight.diff}
                    x2={310.983}
                    y2={620.752 - targetHeight.diff}>
                    <stop offset={0} stopColor={shadowColor || "#555a61"}/>
                    <stop offset={0.977} stopColor={shadowColor || "#555a61"} stopOpacity={0}/>
                </linearGradient>

                <linearGradient
                    id={`bar-drop-shadow-bottom-${index}`}
                    gradientUnits="userSpaceOnUse"
                    x1={255.6}
                    y1={846.844-targetHeight.diff}
                    x2={399.6}
                    y2={846.844}
                    gradientTransform="matrix(-1 0 0 1 526 0)">
                    <stop offset={0} stopColor={shadowColor || "#555a61"}/>
                    <stop offset={1} stopColor={shadowColor || "#555a61"} stopOpacity={0}/>
                </linearGradient>

                <linearGradient
                    id={`data-bg-${index}`}
                    gradientUnits="userSpaceOnUse"
                    x1={134.958}
                    y1={647.939}
                    x2={287.317}
                    y2={710.624}>
                    <stop offset={0} stopColor={data_bg_color[0].stopColor || "#f27026"}/>
                    <stop offset={0.689} stopColor={data_bg_color[1].stopColor || "#ea4924"}/>
                </linearGradient>

                <g className="bar-shadows">
                    {/* <path
                        fill={`url(#bar-drop-shadow-${index})`}
                        d={`M127.584 ${837.094-targetHeight.diff}l167.944 ${53.332} 23-507.333-49.057-35z`}/> */}
                    <path
                        fill={`url(#bar-drop-shadow-${index})`}
                        d={`m127.584,837.119l167.944,53.332l23,-${507.333+targetHeight.diff}l-49.057,-35l-141.887,${489.001+targetHeight.diff}z`}/>
                        
                    <path
                        fill={`url(#bar-drop-shadow-bottom-${index})`}
                        d={`M199.9 ${834.094}l-73.5 2.5 74 23 70-22.5z`}/>
                </g>

                <g
                    className="bar-fixed-top"
                    transform={`translate(0, ${ - targetHeight.diff})`}>
                    <path
                        className="cls-color-white"
                        d="M127.584 348.093c-5.002 0-9.057 4.048-9.057 9.04v289.294h79.938V348.093h-70.881z"/>
                    <text   transform="matrix(.8386 0 0 1 130.502 410.6304)" className="bar-index" fill={primaryColor}>0{index+1}</text>
                    <path
                        d="M278.528 357.133c0-4.992-4.055-9.04-9.057-9.04h-71.005v298.334h80.062V357.133z"
                        fill="url(#SVGID_6_)"/>
                    <path
                        fill={primaryColor||"#7651A1"}
                        d="M251.807 567.359c-.601-2.139-.12-2.438-1.156-3.219a2.252 2.252 0 0 0-1.094-.443v-5.407a.45.45 0 0 0-.45-.45h-3.619a.44.44 0 0 0-.348.176c-.842-1.42-2.375-2.383-4.146-2.383a4.833 4.833 0 0 0 0 9.666c1.694 0 3.18-.875 4.043-2.193v1.744a.45.45 0 0 0 .45.449h2.726s.313 2.029.656 2.946c.354.943-1.145-.774-2-1.292a3.332 3.332 0 0 0-.584-.283 1.97 1.97 0 0 0-1.416-.6h-7.75c-.693 0-1.304.353-1.662.889a2.426 2.426 0 0 0-.338.464c-1.113 1.962-6.458 16.46-6.874 18.293s1.916 2.083 2.416 1.667c.5-.417 2.167-3.167 2.667-4.667.204-.612.964-2.155 1.791-3.765v4.244c0 .551.224 1.051.585 1.412-.008.07-.021.14-.021.213v19.625a2 2 0 0 0 4 0v-19.25h2.484c0 .021-.006.041-.006.063l.239 19.133a2 2 0 0 0 4 0l-.239-19.133c0-.171-.028-.334-.068-.492.47-.365.776-.93.776-1.57v-8.359c-.004-.146-.011-1.164-.029-2.414.721.629 1.91 1.107 2.433 1.531.667.542 2.463.943 2.972.584.78-.554.178-4.982-.438-7.179zm-3.433-2.841h-2.136c-.18 0-.326-.16-.326-.356v-5.184c0-.196.146-.356.326-.356h2.136c.18 0 .326.16.326.356v4.929a.551.551 0 0 0-.174.266l-.09.332c-.021.003-.04.013-.062.013z"/>
                    <Text
                        transform="matrix(.67 0 0 1 213.04 432.276)"
                        x={0}
                        y={0}
                        className="cls-head-text" fill={primaryColor}
                        style={{
                        fontSize: '14px'
                    }}
                        width={text_width}>
                        {barTitle}
                    </Text>

                    <Text
                        transform="translate(209.813 450.794)"
                        x={0}
                        y={0}
                        style={{
                        fontSize: '4px'
                    }}
                        width={65}>

                        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and type
                        setting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only five centuries, but also
                        the ...

                    </Text>
                </g>

                <g className="bar-dynamic">
                    <linearGradient
                        id={`bar-height-top-shadow-${index}`}
                        gradientUnits="userSpaceOnUse"
                        x1={198.583}
                        y1={644.675 - targetHeight.diff}
                        x2={198.583}
                        y2={659.53 - targetHeight.diff}>
                        <stop offset={0} stopOpacity={0.51}/>
                        <stop offset={1} stopOpacity={0}/>
                    </linearGradient>

                    <rect
                        x="118.861"
                        y={645.094 - targetHeight.diff}
                        fill={`url(#data-bg-${index})`}
                        width="158.333"
                        height={targetHeight.value}/>

                    <path
                        fill={`url(#bar-height-top-shadow-${index})`}
                        d={`M118.861 ${ 644.917 - targetHeight.diff}l.028 14.237 158.333.376.139-14.855z`}/>
                    <path
                        fill="url(#SVGID_5_)"
                        d="M118.882 710.02l-.041-14.457 158.378-.125.063 14.656z"/>
                    <text
                        transform="matrix(.695 0 0 1 131.01 693.791)"
                        fill="#f1f2f2"
                        fontFamily="Oswald"
                        fontSize={34.697}>
                        {bar}
                    </text>
                    <text
                        transform="matrix(.695 0 0 1 158.01 693.791)"
                        fill="#f1f2f2"
                        fontFamily="Oswald"
                        fontSize={24.697}>
                        %
                    </text>
                    
                    {[...Array(Math.floor(upArrowsCount))].map((v, ind) => (
                        <g className="up" key={ind}>
                            <circle
                                className="cls-color-lite"
                                cx={243.484}
                                cy={677.726 - (ind * arrowHeight)}
                                r={13.128}
                                opacity={0.4}/>
                            <path
                                className="cls-color-lite"
                                d={`M249.252 ${ 682.177 - (ind * arrowHeight)}h-12.201l6.434-11.201z`}/>
                        </g>

                    ))}
                </g>

                <g className="bar-fixed-bottom">
                    <path
                        className="cls-color-white"
                        d="M118.528 703.094v125c0 4.971 4.055 9 9.057 9h70.881v-134h-79.938z"/>
                    <text
                        transform="matrix(0 -.67 1 0 149.846 814.98)"
                        fill="#f27026"
                        fontFamily="Utsaah"
                        fontSize={22.111}>
                        INFOGRAPHICS
                    </text>
                    <path
                        d="M278.528 828.094v-125h-80.062v134h71.005c5.002 0 9.057-4.03 9.057-9z"
                        fill="url(#SVGID_8_)"/>
                    <g>
                        <image
                            width={113}
                            height={113}
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="data:image/png;base64,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 AABJRU5ErkJggg=="
                            transform="matrix(.24 0 0 .24 245.045 804.51)"
                            overflow="visible"
                            opacity={0.8}/>
                        <g>
                            <circle cx={258.514} cy={816.979} r={9.969} fill={primaryColor || "#ef5b2c"}/>
                            <circle
                                cx={258.514}
                                cy={816.979}
                                r={9.969}
                                fill="none"
                                stroke="#fff"
                                strokeMiterlimit={10}/>
                        </g>
                    </g>
                </g>

            </g>
        )
    }
}
export default Bar;