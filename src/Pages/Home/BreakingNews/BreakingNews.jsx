import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { NewsContext } from "../Home";


const BreakingNews = () => {
    const news =useContext(NewsContext);
    const breakingNews=news.filter(newsItem=>newsItem.category_id==1);
    console.log(breakingNews);
    
    return (
        <div className="my-10 flex bg-slate-100">
            <button className="btn btn-accent">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {breakingNews.map(newsItem=><Link className="text-xl mx-12" key={newsItem._id} to={`/${newsItem._id}`}>{newsItem.title}...</Link>)}
            </Marquee>
        </div>
    );
};

export default BreakingNews;