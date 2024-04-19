import { useEffect, useState } from "react";
import Header from "../../Components/Shared/Header/Header";
import RightSidebar from "../Home/RIghtSidebar/RightSidebar";
import { useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Comments from "../../Components/Shared/Comments/Comments";



const NewsDetails = () => {
    const [newsDetails, setNewsDetails] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const getNews = async () => {
            const newsProm = await fetch('/news.json');
            const newsArray = await newsProm.json();
            const selectedNews = newsArray.filter(newsItem => newsItem._id === id);
            setNewsDetails(selectedNews);
          
        }
        getNews();
    }, [id]);
    console.log(newsDetails);
    return (
        <div>
            {newsDetails.length > 0 && (<>
                <div>
                    <Header></Header>
                    <Navbar></Navbar>
                </div>
                <div className="grid grid-cols-3 mt-10">
                    <div className="col-span-2">
                        <h2 className="text-xl font-semibold"> Dragon News</h2>
                        <div className="border p-8 grid gap-6 my-6">
                            <figure>
                                <img src={newsDetails[0].image_url} alt={newsDetails.title} />
                            </figure>
                            <h1 className="text-xl font-bold text-slate-800">{newsDetails[0].title}</h1>
                            <p className="text-lg text-slate-500">{newsDetails[0].details}</p>

                            <div>
                                <Comments postId={id}></Comments>
                            </div>
                            <button className="btn btn-info p-4 w-fit text-white"> <BsArrowLeft /> All news in  this category</button>

                        </div>

                    </div>
                    <div className="ml-10">
                        <RightSidebar></RightSidebar>
                    </div>
                </div>
            </>)}
        </div>

    );
};

export default NewsDetails;