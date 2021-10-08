import "../css/Stock.css";

import React, { Component } from "react";

// import { useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import PlotlyParams from "../components/PlotlyParams";

import watchList from "../data/watchList.json";
import stockDay from "../data/stockDayList.json";

import convertTimeSeries2Array from "../modules/convertTimeSeries2Array";
import buildPlotlyDataFromTimeSeries from "../modules/buildPlotlyDataFromTimeSeries";

const ApiKey = "ZCTSJTWC75K141H9";

class Stock extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        // console.log(this.props.match.params.symbol);

        this.state = {
            symbol: this.props.match.params.symbol,
            timeSeries: {},
            plotlyData: [],
            watchListEntry: {},
            loaded: false,
        };
    }

    handleOnChange(e) {
        // console.log(e.target.value);
        // this.setState({ searchText: e.target.value });
    }

    // starts the search
    handleOnClick() {
        let searchText = document.getElementById("txtSearch").value;

        // make an api call to search a symbol by company name
        fetch(
            `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchText}&apikey=${ApiKey}`
        )
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => json.bestMatches)
            .then((bestMatches) =>
                bestMatches.length > 0 ? bestMatches[0] : null
            )
            .then((found) => {
                // make an api call to get the data...
                // this.setState({ loaded: false });
                let symbolFound = found["1. symbol"];
                console.log(symbolFound);
            });
        // console.log(
        //     `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbolFound}&interval=30min&apikey=${ApiKey}`
        // );

        //         fetch(
        //             `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbolFound}&interval=30min&apikey=${ApiKey}`
        //         )
        //             .then((response) => response.json())
        //             .then((json) => console.log(json))
        //             .catch((err) => console.log(err));

        //         // this.setState({ symbol: symbolFound });
        //     });

        // // .then((found) => console.log(found))

        // // .catch((err) => console.log(err));
    }

    componentDidMount() {
        console.log("componentDidMount()");
        // check if the symbol is in the watchlist
        let index = watchList.findIndex(
            (elt) => elt.symbol === this.state.symbol
        );

        // if we are offline and the symbol is not in the watchlist, use the first one from watchlist
        index = Math.max(index, 0);

        let timeSeries;
        if (index > -1) {
            this.setState({ watchListEntry: watchList[index] });
            timeSeries = convertTimeSeries2Array(stockDay[index]);
        }
        if (timeSeries === null) return;

        let plotlyData = buildPlotlyDataFromTimeSeries(timeSeries);
        // console.log(timeSeries);
        // console.log(plotlyData);

        this.setState({ timeSeries: timeSeries });
        this.setState({ plotlyData: plotlyData });
        this.setState({ loaded: true });
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        // console.log(this.state.watchListEntry);
        return (
            <div className="Stock">
                <div className="StockHeader">
                    <div className="StockHeaderTitle">
                        <h2>Stock</h2>
                        <p>
                            With all of the styling tool options available in
                            today’s market
                        </p>
                    </div>
                    <div className="StockHeaderSearch">
                        <input
                            type="text"
                            // value={watchListEntry.name}
                            placeholder="Search..."
                            onChange={this.handleOnChange}
                            id="txtSearch"
                        />
                        <button onClick={this.handleOnClick}>
                            <img src="/img/search.svg" alt="Search" />
                        </button>
                    </div>
                </div>
                <div className="StockDataContainer">
                    <div className="StockData">
                        <h2>
                            {this.state.loaded &&
                                `${this.state.watchListEntry.name} (${this.state.watchListEntry.symbol})`}
                            {!this.state.loaded && "No data available"}
                        </h2>
                    </div>
                    {this.state.loaded && (
                        <PlotlyParams
                            lastRefreshed={
                                this.state.loaded
                                    ? this.state.timeSeries.metaData[
                                    "3. Last Refreshed"
                                    ]
                                    : ""
                            }
                            data={this.state.plotlyData}
                        />
                    )}
                </div>
            </div> // end
        );
    }
}

export default Stock;
