import React from "react";
import Text from "../shared/text";
class Hourbar extends React.Component {

    getDynamicHeight(dataValue) {
        const totalContainerHeight = 76.9;
        let filler_connecting_curve_height = 10.8;
        const barHeight = Math.max(0, dataValue);
        let showFillers = 1;
        
        const filled = barHeight * 0.6; // Total height of one glass is 80px; 80/100 = 0.8
        const left = (100 - barHeight) * 0.6;
        // Value is generated value based on bar count  , diff is difference between
        // initial and gen
        if (barHeight == 0 || barHeight ==100) {
            filler_connecting_curve_height = 0;
            showFillers = 0;
        }


        const gradientFiller = totalContainerHeight - filled;
        const rectHieght =  totalContainerHeight - filled - filler_connecting_curve_height+2;
        const curverStartPosition = gradientFiller-filler_connecting_curve_height;
        return {filled, left, gradientFiller,showFillers,rectHieght,curverStartPosition};
    }

    render() {
        const barValue = this.props.barValue || 25;
        const dyData = this.getDynamicHeight(barValue);
        console.log(dyData);
        const primaryColor = this.props.primaryColor || "#ED5E29";
        const text_width = this.props.text_width || 200;
        const index = this.props.index;

        const data_bg_color = this.props.data_bg_color;
        return (

            <g id="hourBar" transform={`translate(${index * 80},0)`}>
                <filter id="AI_GaussianBlur_3">
                    <feGaussianBlur stdDeviation={3}/>
                </filter>
                <linearGradient
                    id="bar-bg-1"
                    gradientUnits="userSpaceOnUse"
                    x1={-55.044}
                    y1={81.605}
                    x2={165.746}
                    y2={302.395}
                    gradientTransform="matrix(1 0 0 -1 0 382)">
                    <stop offset={0} stopColor="#d4dcdf"/>
                    <stop offset={0.434} stopColor="#e3e7e9"/>
                    <stop offset={1} stopColor="#f2f3f5"/>
                </linearGradient>
                <path id="background" fill="url(#bar-bg-1)" d="M13.6 11h83.6v358H13.6z"/>

                <path
                    id="bg-bottom"
                    className="st1"
                    d="M52.8 219.2l-20.4 15.4c-4.7 4.1-5.9 5.2-5.9 8.3v46.8c0 3.1 2.5 5.6 5.6 5.6h47.4c3.1 0 5.6-2.5 5.6-5.6V243c0-3.1-1.4-4.3-6.1-8.5l-20.6-15.2-5.6-.1z"/>
                <g className="hour-glass-info-top">
                    <text
                        id="text-top"
                        transform="matrix(.9445 0 0 1 41.589 73.495)"
                        className="st8"
                        fontSize={30.534}
                        fill={primaryColor || "#ef5c27"}>
                        0{index + 1}
                    </text>
                    <Text
                        id="title-top"
                        x={0}
                        y={0}
                        fill="#878787"
                        fontSize={`7.0301px`}
                        filter={`filter:url(#AI_GaussianBlur_3)`}
                        transform="matrix(.9432 0 0 1 35.571 88.307)"
                        width={200}>
                        LOREM IPSUM
                    </Text>
                    <path fill="none" d="M38.4 91.5h34.8v19.9H38.4z"/>
                    <Text
                        x={0}
                        y={0}
                        id="peragraph-top"
                        transform="matrix(.9445 0 0 1 35.443 93.758)"
                        fill={`url(#SVGID_5_)`}
                        fontSize="3.859px"
                        opacity={0.25}
                        width={200}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the koltudeoe djkr leotuem ehyutr.
                    </Text>

                    <path
                        id="Icon"
                        fill={primaryColor || "#ED5E29"}
                        d="M50.1 125.9s1.6-1.7 1.6-2.2c0-.5-1-3.4 1.3-5.2 2.3-1.9 7.1-2 8.7.4 1.6 2.4 1.2 4.6.4 6.4-.8 1.8-2 2.5-1.5 3.3.5.8.8 1.7.8 1.7s-5.8 1.2-6 1.7c-.2.5-.2-1.8-.4-1.7-.2.1-3 .5-3.2.2-.2-.3.3-2.5 0-2.5s-.7-.2-.4-.3c.3-.1-.5 0-.2-.4.2-.4.1-1.2-.3-1-.4.1-.7.3-.8.1-.1-.2 0-.5 0-.5z"/>
                </g>
                <g id="bar-top-source">
                    <linearGradient
                        id="top-bg-shadow-1"
                        gradientUnits="userSpaceOnUse"
                        x1={55.771}
                        y1={143.092}
                        x2={55.771}
                        y2={219.242}>
                        <stop offset={0} stopColor="#020202" stopOpacity={0.4}/>
                        <stop offset={0.016} stopColor="#222221" stopOpacity={0.364}/>
                        <stop offset={0.047} stopColor="#4e4c4b" stopOpacity={0.291}/>
                        <stop offset={0.077} stopColor="#787575" stopOpacity={0.221}/>
                        <stop offset={0.105} stopColor="#9f9d9d" stopOpacity={0.155}/>
                        <stop offset={0.131} stopColor="#bebdbd" stopOpacity={0.094}/>
                        <stop offset={0.153} stopColor="#d3d2d2" stopOpacity={0.041}/>
                        <stop offset={0.171} stopColor="#dddddc" stopOpacity={0}/>
                    </linearGradient>
                    <path
                        id="bg-top"
                        d="M58.4 219.2L79 204c4.7-4.2 6.1-5.4 6.1-8.5v-46.8c0-3.1-2.5-5.6-5.6-5.6H32.1c-3.1 0-5.6 2.5-5.6 5.6v46.8c0 3.1 1.2 4.2 5.9 8.3l20.5 15.4h5.5z"
                        fill="url(#top-bg-shadow-1)"/>
                    <defs>
                        <path
                            id="SVGID_1_"
                            d="M58.4 219.2L79 204c4.7-4.2 6.1-5.4 6.1-8.5v-46.8c0-3.1-2.5-5.6-5.6-5.6H32.1c-3.1 0-5.6 2.5-5.6 5.6v46.8c0 3.1 1.2 4.2 5.9 8.3l20.5 15.4h5.5z"/>
                    </defs>
                    <clipPath id="SVGID_2_">
                        <use xlinkHref="#SVGID_1_" overflow="visible"/>
                    </clipPath>
                    <rect
                        clipPath="url(#SVGID_2_)"
                        fill={data_bg_color[1]}
                        x="26.5"
                        y={220 - dyData.left}
                        width="58.7"
                        height={dyData.left || 34.2}/>

                </g>
                <g className="bar-filler" opacity={dyData.showFillers}>
                    <linearGradient
                        id={`bar-blend-gardient-${index}`}
                        gradientUnits="userSpaceOnUse"
                        x1={55.614}
                        y1={218.242}
                        x2={55.614}
                        y2={218.2 + dyData.rectHieght}>
                        <stop offset={0} stopColor={data_bg_color[1] || "#f9cc27"}/> {/* <stop offset={0.459} stopColor="#f39c2a"/> */}
                        <stop offset={1} stopColor={data_bg_color[0] || "#ec5e29"}/>
                    </linearGradient>
                    <rect
                        id="bar-gradent"
                        fill={`url(#bar-blend-gardient-${index})`}
                        x="52.8"
                        y={218.2}   
                        width="5.6"
                        height={dyData.rectHieght}/>
                    <path
                        id="bar-bottom-curve"
                        fill={data_bg_color[0] || primaryColor}
                        d={`M58.4 ${ 219.5+dyData.curverStartPosition}h-5.6s.1 10.1-8.3 10.8h22.3s-8.2-.8-8.4-10.8z`}/>
                </g>
                <g id="bar-bottom-destination">
                    <defs>
                        <path
                            id="SVGID_3_"
                            d="M52.8 219.2l-20.5 15.4c-4.7 4.1-5.9 5.2-5.9 8.3v46.8c0 3.1 2.5 5.6 5.6 5.6h47.4c3.1 0 5.6-2.5 5.6-5.6V243c0-3.1-1.4-4.3-6.1-8.5l-20.6-15.2-5.5-.1z"/>
                    </defs>
                    <clipPath id="SVGID_4_">
                        <use xlinkHref="#SVGID_3_" overflow="visible"/>
                    </clipPath>
                    <rect
                        x="26.5"
                        y={296 - dyData.filled}
                        clipPath={`url(#SVGID_4_)`}
                        fill={data_bg_color[0] || primaryColor}
                        width="58.7"
                        height={dyData.filled}/>

                    <linearGradient
                        id="gradient_1_"
                        gradientUnits="userSpaceOnUse"
                        x1={26.478}
                        y1={219.242}
                        x2={85.058}
                        y2={219.242}>
                        <stop offset={0} stopColor="#020202" stopOpacity={0.35}/>
                        <stop offset={0.006} stopColor="#060606" stopOpacity={0.348}/>
                        <stop offset={0.113} stopColor="#333232" stopOpacity={0.31}/>
                        <stop offset={0.225} stopColor="#565453" stopOpacity={0.271}/>
                        <stop offset={0.339} stopColor="#787676" stopOpacity={0.232}/>
                        <stop offset={0.456} stopColor="#999796" stopOpacity={0.191}/>
                        <stop offset={0.576} stopColor="#b4b2b2" stopOpacity={0.148}/>
                        <stop offset={0.703} stopColor="#c9c8c7" stopOpacity={0.104}/>
                        <stop offset={0.839} stopColor="#d7d6d6" stopOpacity={0.056}/>
                        <stop offset={1} stopColor="#dddddc" stopOpacity={0}/>
                    </linearGradient>
                    <path
                        id="gradient"
                        d="M85.1 195.5v-46.8c0-3.1-2.5-5.6-5.6-5.6H32.1c-3.1 0-5.6 2.5-5.6 5.6v46.8c0 3.1 1.2 4.2 5.9 8.3l20.5 15.4-20.5 15.4c-4.7 4.1-5.9 5.2-5.9 8.3v46.8c0 3.1 2.5 5.6 5.6 5.6h47.4c3.1 0 5.6-2.5 5.6-5.6V243c0-3.1-1.4-4.3-6.1-8.5l-20.6-15.2L79 204c4.6-4.1 6.1-5.4 6.1-8.5z"
                        fill="url(#gradient_1_)"/>
                    <text
                        transform="matrix(.9445 0 0 1 46.005 291.225)"
                        className="st1 st8"
                        fontSize={15.35}>
                        {barValue}
                    </text>
                    <text
                        transform="matrix(.9445 0 0 1 65.844 291.226)"
                        className="st1 st8"
                        fontSize={8.889}>
                        %
                    </text>
                </g>

                <g className="hour-glass-info-bottom">
                    <g id="shadow-bottom" opacity={0.25} filter="url(#AI_GaussianBlur_3)">
                        <linearGradient
                            id="SVGID_5_"
                            gradientUnits="userSpaceOnUse"
                            x1={302.461}
                            y1={194.281}
                            x2={302.461}
                            y2={182.337}
                            gradientTransform="translate(-245.88 142.987)">
                            <stop offset={0} stopColor="#fff" stopOpacity={0}/>
                            <stop offset={0.086} stopColor="#f8f8f8" stopOpacity={0.101}/>
                            <stop offset={0.192} stopColor="#ebebec" stopOpacity={0.225}/>
                            <stop offset={0.307} stopColor="#d6d7d9" stopOpacity={0.36}/>
                            <stop offset={0.431} stopColor="#b9bbbd" stopOpacity={0.505}/>
                            <stop offset={0.56} stopColor="#95979a" stopOpacity={0.656}/>
                            <stop offset={0.694} stopColor="#6c6d70" stopOpacity={0.813}/>
                            <stop offset={0.83} stopColor="#262627" stopOpacity={0.973}/>
                            <stop offset={0.853}/>
                        </linearGradient>
                        <ellipse cx={56.6} cy={331.3} rx={20.9} ry={6} fill="url(#SVGID_5_)"/>
                    </g>
                    <linearGradient
                        id="SVGID_6_"
                        gradientUnits="userSpaceOnUse"
                        x1={38.299}
                        y1={342.287}
                        x2={72.929}
                        y2={307.656}>
                        <stop offset={0} stopColor="#dbe0e2"/>
                        <stop offset={1} stopColor="#e0e1e2"/>
                    </linearGradient>
                    <path fill="url(#SVGID_6_)" d="M23.5 327.5h25.9l6.5 6.5 7.5-6.5h24.3v-5H23.5z"/>
                    <Text
                        id="text-bottom"
                        fill="#878787"
                        fontSize="4.3651px"
                        x={0}
                        y={0}
                        transform="matrix(.9432 0 0 1 44.78 342.444)"
                        width={text_width}>
                        LOREM IPSUM
                    </Text>
                    <g id="pie-graph">
                        <circle id="_x31_" cx={55.4} cy={354} r={6.8} fill={primaryColor || "#f15b2a"}/>

                        <path
                            id="_x32_"
                            d="M62.2 353.9c0-3.7-2.9-6.6-6.5-6.8l-.4 6.8h6.9z"
                            fill="#e1b7a1"/>
                        <path
                            id="_x33_"
                            d="M55.3 354l5.2 4.5c1.1-1.2 1.7-2.8 1.7-4.5h-6.9z"
                            fill="#e98b62"/>
                    </g>
                </g>
            </g>
        );
    }
}
export default Hourbar;