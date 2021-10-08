import "../css/DashForex.css";

import React from "react";
import DashForexHeader from "./DashForexHeader";
import DashForexItem from "./DashForexItem";

// const ApiKey = "ZCTSJTWC75K141H9";

class DashForex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            currencies: [
                {
                    countryCode: "US",
                    currencyName: "United States Dollar",
                    code: "USD",
                    factor: 1,
                },
                {
                    countryCode: "EU",
                    currencyName: "EURO",
                    code: "EUR",
                    factor: 0.84208,
                },
                {
                    countryCode: "GB",
                    currencyName: "British Pound Sterling",
                    code: "GBP",
                    factor: 0.74745,
                },
                {
                    countryCode: "IN",
                    currencyName: "Indian Rupee",
                    code: "INR",
                    factor: 73.9441,
                },
                {
                    countryCode: "AU",
                    currencyName: "Australian Dollar",
                    code: "AUD",
                    factor: 1.35886,
                },
            ],
        };
    }

    componentDidMount() {
        let currTable = [...this.state.currencies];
        // for (let i = 1; i < currTable.length; i++) {
        //     // we need to use a timeout to bypass time limitations for multiple api calls
        //     let apiUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=${currTable[i].code}&apikey=${ApiKey}`;
        //     setTimeout(() => {
        //         fetch(apiUrl)
        //             .then((response) => response.json())
        //             .then((data) => {
        //                 // console.log(data);
        //                 if (!Object.keys(data).includes(["Note"])) {
        //                     let idx1 = Object.keys(data)[0];
        //                     let idx2 = Object.keys(data[idx1])[4];
        //                     // console.log(idx1, idx2);
        //                     currTable[i].factor = Number(data[idx1][idx2]);
        //                 }
        //             })
        //             .catch((err) => console.log(err));
        //     }, 200);
        // }
        // console.log(currTable);

        this.setState({ currencies: this.buildForexTable(currTable) });
        this.setState({ loaded: true });
    }

    buildForexTable = (currencyTable) => {
        let exch = [...currencyTable];

        // build an array with exchange rates relative to currency[0]
        let rates = [];
        for (let i = 0; i < exch.length; i++) {
            rates.push(exch[i].factor.toFixed(5));
        }
        exch[0].rates = [...rates];

        for (let i = 1; i < exch.length; i++) {
            rates = [];
            for (let j = 0; j < exch.length; j++) {
                let value = exch[0].rates[j] / exch[0].rates[i];

                rates.push(value.toFixed(5));
            }
            exch[i].rates = [...rates];
        }

        // for (let i = 0; i < exch.length; i++) {
        //     console.log(i, exch[i]);
        // }

        return exch;
    };

    render() {
        return (
            <div className="DashForex">
                <DashForexHeader data={this.state.currencies} />
                {this.state.loaded &&
                    this.state.currencies.map((item) => (
                        <DashForexItem key={item.code} data={item} />
                    ))}
            </div>
        );
    }
}

export default DashForex;
