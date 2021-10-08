function convertTimeSeries2Array(timeSeriesData) {

    let keys = Object.keys(timeSeriesData);

    let metaData = timeSeriesData["Meta Data"];
    let objectTimeSeries = timeSeriesData[keys[1]];

    let times = Object.keys(objectTimeSeries);

    let timeSeries = [];

    times.forEach(time => {
        let timeSerie = {
            "time": time,
            "open": Number(objectTimeSeries[time]["1. open"]),
            "high": Number(objectTimeSeries[time]["2. high"]),
            "low": Number(objectTimeSeries[time]["3. low"]),
            "close": Number(objectTimeSeries[time]["4. close"]),
            // "price": Number(objectTimeSeries[time]["5. price"])
        };
        timeSeries.push(timeSerie);
    });

    return {
        metaData, data: [...timeSeries]
    };
}

export default convertTimeSeries2Array;
