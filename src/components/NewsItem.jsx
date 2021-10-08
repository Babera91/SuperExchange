import React from "react";
import "../css/News.css"

class NewsItem extends React.Component {
    state = {
        news: [],
        count: this.props.count,
        content: ""
    }

    async componentDidMount() {
        const url = `https://eodhistoricaldata.com/api/news?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&s=AAPL.US&offset=0&limit=${this.state.count}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ news: data })
    }
    getShortText(content) {
        let short = content.slice(0, 500)
        return short;
    }
    render() {

        return (
            <div>
                {this.state.news.map((e) => (
                    <div key={e.date} className="newsItem">
                        <div className="newsTitle">
                            <h2>{e.title}</h2>
                            <h3>Tags: {e.tags[0]}, {e.tags[1]}, {e.tags[2]}</h3>
                            <h3>Symbols: {e.symbols[0]}, {e.symbols[1]}</h3>
                        </div>
                        <p>{this.getShortText(e.content)}...  <a href={e.link} target="_blank" rel="noopener noreferrer">Read more</a> </p>
                    </div>
                ))}
            </div>
        );
    }
}

export default NewsItem;

/*
[
    { "date": "2021-09-28T06:59:54+00:00",
    "title": "iPhone designer to help Ferrari create first electric supercar",
    "content": "Ferrari\n\nSir Jony Ive, the British designer who defined the minimalist look of Apple gadgets, has teamed up with Ferrari to help create the Italian icon\u2019s first electric supercar.\n\nFerrari and Exor, its holding company, said yesterday it had signed a long term agreement to collaborate with LoveFrom, the company Mr Ive founded when he left Apple in 2019.\n\nMr Ive played an integral role designing and developing breakthrough Apple products such as the iMax, iPod, iPhone and iPad. He was one of the leading figures credited with Apple\u2019s rise from a fading computer firm to one of the world\u2019s most valuable companies.\n\nA statement from the companies yesterday said the deal would \u201cbring together Ferrari\u2019s legendary performance and excellence with LoveFrom\u2019s unrivalled experience and creativity that has defined extraordinary world changing products\u201d.\n\nMr Ive and his business partner Marc Newson said: \u201cAs Ferrari owners and collectors, we could not be more excited about collaborating with this extraordinary company and in particular with the design team.\u201d Sir Jony Ive - David Paul Morris\/Bloomberg via Getty Images\n\nFerrari is due to launch its first electric car in 2025. It is also expanding into fashion under the leadership of John Elkann, boss of its holding company Exor.\n\nEarlier this year Exor agreed to buy a stake in French shoe and bag maker Christian Louboutin for \u20ac541m (\u00a3462m). Ferrari has also embraced fashion, and in June presented its first collection of designer looks.\n\nMr Ive's LoveFrom also announced a \u201cmulti-year relationship\u201d with Airbnb last October to design new products and services, having worked on a redesign of the short-term rental company's logo in 2014.",
    "link": "https:\/\/uk.finance.yahoo.com\/news\/iphone-designer-help-ferrari-create-065954660.html",
     "symbols": ["AAPL.US", "RACE.US", "AAPL34.SA"],
    "tags": ["APPLE","FERRARI","HOLDING COMPANY","EXOR","ELECTRIC SUPERCAR","JONY IVE","MARC NEWSON","FERRARI OWNERS",
    "MR IVE"] }]
*/