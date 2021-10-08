const { uuid } = require('uuidv4');

const DashForexItem = (props) => {
    return (
        <div className="DashForexItem DashForexGrid">
            <div
                className="DashForexFlag"
                style={{
                    background: `url(/img/flags/${props.data.countryCode.toLowerCase()}.svg) center/cover`,
                }}
            />
            {props.data.rates.map((rate) => (
                <p key={uuid} style={{ color: Number(rate) === 1 ? "#333" : "#53B9EA" }}>
                    {rate}
                </p>
            ))}
        </div>
    );
};

export default DashForexItem;
