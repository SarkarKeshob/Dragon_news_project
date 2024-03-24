import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NewsContext } from "../../../Pages/Home/Home";
import { CiCalendar } from "react-icons/ci";

const SidebarLeft = () => {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);


    useEffect(() => {
        const getCategories = async () => {
            const catProm = await fetch('/categories.json');
            const categoryArray = await catProm.json();
            setCategories(categoryArray);
            setActiveCategory(categoryArray[0].id)
        }
        getCategories();

    }, []);
    const news = useContext(NewsContext);
    const selectedNews = news.filter(newsItem => newsItem.category_id == 4);

    return (
        <div>
            <div>
                <h2 className="text-xl font-semibold mb-6">All Categories</h2>
                <div className="grid gap-3 text-lg ml-4 font semibold text-slate-500">
                    {categories.map((category) => <NavLink to={`/categories/${category.id}`} key={category.id} onClick={() => { setActiveCategory(category.id) }}> <button className={activeCategory === category.id ? 'btn btn-neutral' : 'btn btn-ghost'}>{category.name}</button></NavLink>)}

                </div>

            </div>
            <div className="grid gap-4 my-4">
                {selectedNews.map(newsItem => (
                    <div key={newsItem._id} className="card   card-compact bg-base-100 shadow-xl">
                        <figure><img src={newsItem.image_url} alt={newsItem.id} /></figure>
                        <div className="card-body">
                            <h2 className="text-sm font-bold">{newsItem.title}</h2>
                            <div className="flex">
                                <p>Sports</p>
                                <span><CiCalendar />
                                </span>

                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    );
};

export default SidebarLeft;