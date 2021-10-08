import React from 'react';
import "../css/Forex.css"

class Forex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: null,
            rate: 0,
            currencyFromString: "",
            currencyToString: "",
            currencyFrom: 0,
            currencyTo: 0,
            exchange: 0,
            isLoading: true
        }
    }
    async componentDidMount() {
        //const url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=EUR&apikey=9RW257WPI2WCJBBF';
        const url = '../data/currencies/usdToEur.json'
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ currency: data });

        // this is the offline version
        let element = this.state.currency["Realtime Currency Exchange Rate"];
        this.setState({ currencyFromString: element["1. From_Currency Code"] });
        this.setState({ currencyToString: element["3. To_Currency Code"] });
        this.setState({ exchange: element["5. Exchange Rate"] });
    }
    handleChangeFromCurrency(state) {
        let from = document.getElementsByClassName("forexInput")[0].value
        document.getElementsByClassName("forexInput")[1].value = from * state
    }
    handleChangeToCurrency(state) {
        let from = document.getElementsByClassName("forexInput")[1].value
        document.getElementsByClassName("forexInput")[0].value = from / state
    }
    render() {
        return (
            <div>
                {!this.isLoading && <div className="forex">
                    <div className="forexHeader">
                        <h2>Forex</h2>
                        <p>Want to kow how much is your money in other currenciest?</p>
                    </div>
                    <div className="forex_container">
                        <div className="amount1">
                            <p className="Amount">Amount</p>
                            <input className="forexInput"
                                type="number"
                                onChange={() => this.handleChangeFromCurrency(this.state.exchange)}
                            />
                        </div>
                        <div className="ContentFlags">
                            <p className="textForex">from</p>
                            <img className="currencyFlag" src="../img/flags/us.svg" alt="" />
                            <p className="forexCurriency">{this.state.currencyFromString}</p>
                        </div>
                        <div>
                            <img className="currencyIcon" src="../img/icons/arrow-combined.svg" alt="" />
                        </div>
                        <div className="contentFlags">
                            <p>in</p>
                            <img className="currencyFlag" src="../img/flags/eu.svg" alt="" />
                            <p className="forexCurriency">{this.state.currencyToString}</p>
                        </div>
                        <div className="amount2">
                            <p>Amount</p>
                            <input className="forexInput"
                                type="number"
                                onChange={() => this.handleChangeToCurrency(this.state.exchange)}
                            />
                        </div>
                    </div>
                    <p className="exchange">The current Exchange Rate is: {this.state.exchange}</p>
                </div>}
            </div>
        );
    }
}

export default Forex;