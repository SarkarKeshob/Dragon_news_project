import { useContext} from "react";
import { NewsContext } from "../Home";
import { useParams } from "react-router-dom";

import DisplayNews from "../DisplayNews/DisplayNews";



const NewsList = () => {
    const news = useContext(NewsContext);
    const id = useParams()?.id;
    if (id !== undefined && id != 0) {
        const newsDisplay = news.filter(item => item.category_id == id);

        return (
            <div className="mt-6 mx-10">
                {newsDisplay.map(newsItem => (
                    <DisplayNews key={newsItem._id} newsItem={newsItem}></DisplayNews>))}
            </div>
        );
    }
    else {
        return (
            <div className="mt-6 mx-10">
                {news.map(newsItem => (
                    <DisplayNews key={newsItem._id} newsItem={newsItem}></DisplayNews>))}
            </div>
        );
    }
};

export default NewsList;