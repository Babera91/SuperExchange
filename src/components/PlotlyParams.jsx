import React from "react";
import Plot from "react-plotly.js";

class PlotlyParams extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastRefreshed: props.lastRefreshed,
            plotlyData: props.data,
        };
    }

    render() {
        // console.log(this.state.lastRefreshed);
        // console.log(this.state.plotlyData);
        return (
            <div>
                <Plot
                    data={[...this.state.plotlyData]}
                    layout={{
                        title: `Last Update: ${this.state.lastRefreshed}`,
                        orientation: "h",
                    }}
                    // layout={{ width: "200%", height: "80%", title: "hallo" }}
                />
            </div>
        );
    }
}

export default PlotlyParams;
