import Plotly from '../components/Plotly';


const Crypto = () => {
    return (
        <div className="crypto">
            <div className="cryptoHeader">
                <h2>Crypto</h2>
                <p>A cryptocurrency (or crypto currency) is a digital asset designed to work as a medium of exchange wherein individual coin ownership records are stored in a ledger existing in a form of computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership.</p>
            </div>
            <Plotly />
        </div>
    );
}

export default Crypto;