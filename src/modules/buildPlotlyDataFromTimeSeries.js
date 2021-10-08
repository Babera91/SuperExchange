function buildPlotlyDataFromTimeSeries(timeSeriesData) {

    if (Object.keys(timeSeriesData).length === 0) { return []; }

    const times = [];
    const open = [];
    const high = [];
    const low = [];
    const close = [];

    timeSeriesData.data.forEach(timeSerie => {
        times.push(timeSerie.time);
        open.push(timeSerie.open);
        high.push(timeSerie.high);
        low.push(timeSerie.low);
        close.push(timeSerie.close);
    });

    let data = [
        {
            type: "scatter",
            x: [...times],
            y: [...open],
            name: "Open"
        },
        {
            type: "scatter",
            x: [...times],
            y: [...high],
            name: "High"
        },
        {
            type: "scatter",
            x: [...times],
            y: [...low],
            name: "Low"
        },
        {
            type: "scatter",
            x: [...times],
            y: [...close],
            name: "Close"
        },
    ];

    return data;
}

export default buildPlotlyDataFromTimeSeries