import NewsItem from "../components/NewsItem";
import "../css/News.css"

const News = () => {
    return (
        <div className="news">
            <h2>News</h2>
            <NewsItem count={4} />
        </div>
    );
};

export default News;
