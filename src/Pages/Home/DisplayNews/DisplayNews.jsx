import { BsBookmark } from "react-icons/bs";
import { IoEye, IoShareSocialOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const DisplayNews = ({newsItem}) => {
    return (
        <div className="mb-10 bg-slate-50">
            <div className="flex items-center justify-between bg-slate-200 p-6 mb-4">
                <div className="flex justify-between items-center gap-4">
                    <img src={newsItem.author.img} alt={newsItem.author.name} className="rounded-full w-12 h-12" />
                    <div>
                        <p className="text-xs font-semibold">{newsItem.author.name}</p>
                        <p className="text-xs font-semibold text-slate-400">{newsItem.author.published_date?.slice(0, newsItem.author.published_date.indexOf(' '))}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between  gap-4">
                    <button className="text-2xl"><BsBookmark /></button>
                    <button className="text-2xl"> <IoShareSocialOutline /></button>
                </div>
            </div>
            <div className="px-8 py-4 grid gap-4">
                <h2 className="text-lg font-semibold">{newsItem.title}</h2>
                <img src={newsItem.image_url} alt="" />
                <p className="text-justify text-sm text-slate-500">{newsItem.details?.slice(0, 306)}.....</p>
                <div>
                    <button className="btn btn-link text-amber-500 m-0 p-0"><Link to={`/news-details/${newsItem._id}`}>Read More</Link></button>
                </div>
                <div className="flex justify-between items-center">
                    <div className=" flex items-center gap-4">
                        <div className="rating rating-md rating-half" >
                            <input type="radio" name="rating-10" className="rating-hidden" readOnly />
                            <input type="radio" name="rating-10" className="bg-amber-600 mask mask-star-2 mask-half-1" readOnly />
                            <input type="radio" name="rating-10" className="bg-amber-600 mask mask-star-2 mask-half-2"  readOnly/>
                            <input type="radio" name="rating-10" className="bg-amber-600 mask mask-star-2 mask-half-1" checked  readOnly/>
                            <input type="radio" name="rating-10" className="bg-amber-600 mask mask-star-2 mask-half-2" readOnly/>
                            <input type="radio" name="rating-10" className="bg-amber-600 mask mask-star-2 mask-half-1" readOnly/>
                            <input type="radio" name="rating-10" className="bg-amber-600 mask mask-star-2 mask-half-2" readOnly/>
                            <input type="radio" name="rating-10" className="bg-amber-600 mask mask-star-2 mask-half-1" readOnly/>
                            <input type="radio" name="rating-10" className="bg-amber-600 mask mask-star-2 mask-half-2" readOnly/>
                            <input type="radio" name="rating-10" className="bg-amber-600 mask mask-star-2 mask-half-1" readOnly/>
                            <input type="radio" name="rating-10" className="bg-amber-600 mask mask-star-2 mask-half-2" readOnly/>
                        </div>
                        <p>{newsItem.rating.number}</p>
                    </div>
                    <div className="text-slate-400 text-2xl flex items-center gap-4">
                        <IoEye></IoEye>
                        <p className="text-lg text-slate-600">{newsItem.total_view}</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

DisplayNews.propTypes={
    newsItem:PropTypes.object,
}

export default DisplayNews;