import { Outlet } from "react-router-dom";
import Header from "../../Components/Shared/Header/Header";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import SidebarLeft from "../../Components/Shared/SidebarLeft/SidebarLeft";
import BreakingNews from "./BreakingNews/BreakingNews";
import RightSidebar from "./RIghtSidebar/RightSidebar";
import { createContext, useEffect, useState } from "react";

const NewsContext = createContext(null);
const Home = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const getNews = async () => {
            const newsProm = await fetch('/news.json');
            const newsArray = await newsProm.json();
            setNews(newsArray);
        }
        getNews();
    }, []);
    return (
        <div>
            <div>
                <Header></Header>
                {news.length > 0 && <NewsContext.Provider value={news}>
                    <BreakingNews></BreakingNews>
                </NewsContext.Provider>}
                <Navbar></Navbar>
            </div>
            <div className="grid grid-cols-5 my-20">
                <div>
                    <NewsContext.Provider value={news}>
                        <SidebarLeft></SidebarLeft>
                    </NewsContext.Provider>
                </div>
                <div className="col-span-3">
                    <h2 className="text-xl font-semibold text-center"> Dragon News Home</h2>
                    <NewsContext.Provider value={news}>
                        <Outlet></Outlet>
                    </NewsContext.Provider>
                </div>
                <div>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};
export { NewsContext };
export default Home;