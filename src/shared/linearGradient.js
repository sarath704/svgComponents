import React from "react";

class LinearGradient extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stops: []
        }
    }
    render() {
        // const data = this.state.stops || this.props.data || [];
        const {data,...props}=this.props;
        return (
            <linearGradient {...props}>
                {data.map((point, i) => <stop key={i} offset={point.offset} stopColor={point.stopColor} />)}
            </linearGradient>
        )

    }
}
export default LinearGradient;