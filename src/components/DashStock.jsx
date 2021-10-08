import "../css/DashStock.css";

import React from "react";
import DashStockElement from "./DashStockElement";

import globalWatchList from "../data/watchList.json";
import "../css/DashBoard.css"

// const ApiKey = "ZCTSJTWC75K141H9";
// const Search = "tesla";

class DashStock extends React.Component {
    state = {
        watchList: [...globalWatchList],
    };

    // componentDidMount() {
    //     fetch(
    //         // `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.searchFor}&apikey=${ApiKey}`
    //         `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${Search}&apikey=${ApiKey}`
    //     )
    //         .then((response) => response.json())
    //         .then((json) => this.setState({ search: json }));
    // }

    render() {
        return (
            <div className="DashStock">
                {/* display as grid */}
                <div className="DashStockGrid DashStockGridHeader">
                    <p>Symbol</p>
                    <p>Watchlist</p>
                    <p>Market Overview</p>
                </div>

                {this.state.watchList.map((element) => (
                    <DashStockElement
                        key={element.symbol}
                        name={element.name}
                        symbol={element.symbol}
                        count={Math.floor(Math.random() * 1000) + 1}
                    />
                ))}
            </div>
        );
    }
}

export default DashStock;
