import React, { Component } from 'react';
import "../css/DashCrypto.css"
class DashCryptoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code:props.code,
            name: props.name,
            exchange: props.exchange
        }
    }
    render() {
        return (
            <div className="DashCryptoItem">
                <div className="DashCryptoGrid">
                    <img src={`/img/crypto/${this.state.code.toLowerCase()}.svg`} alt={this.state.name} />
                    <p>{this.state.name}</p>
                    <p>
                        {Number(this.state.exchange)
                            .toFixed(2)
                            .toLocaleString()}
                        &nbsp;$
                    </p>
                </div>
            </div>
        );
    }
    //name, price, change(24h)
}

export default DashCryptoItem;