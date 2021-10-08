const DashForexHeader = (props) => {
    return (
        <div className="DashForexHeader DashForexGrid">
            <div>&nbsp;</div>
            {props.data.map((curr) => (
                <div key={curr.code}>
                    <div
                        className="DashForexFlag"
                        style={{
                            background: `url('/img/flags/${curr.countryCode.toLowerCase()}.svg') center/cover`,
                        }}
                    />
                    <p>{curr.code}</p>
                </div>
            ))}
        </div>
    );
};

export default DashForexHeader;
