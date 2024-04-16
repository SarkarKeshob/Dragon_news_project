import Header from "../../Components/Shared/Header/Header";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import RightSidebar from "../Home/RIghtSidebar/RightSidebar";

const About = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-5 gap-8">
                <div className="col-span-4 mt-10">
                    <h2 className="text-xl text-slate-600">Welcome to <span className="text-2xl font-bold italic text-black">Dragon News</span>, your trusted source for reliable news and information. At <span className="text-2xl font-bold italic text-black">Dragon News</span>, we are dedicated to delivering timely, accurate, and unbiased reporting on local, national, and international events that matter most to you.</h2>
                    <div className="mt-8">
                        <h1 className="text-3xl font-bold underline text-black">History:</h1>
                        <p className="text-slate-600">
                            Founded 1997, <span className="text-lg font-bold italic text-black">Dragon News</span>  has been a cornerstone of the community, serving readers with integrity and excellence in journalism. Our team of experienced journalists, editors, and contributors are committed to upholding the highest standards of ethical reporting while keeping you informed and engaged.


                        </p>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-3xl font-bold underline text-black">Our Motto:</h1>
                        <p className="text-slate-600">
                            Whether it's breaking news, investigative reports, in-depth analysis, or feature stories, <span className="text-lg font-bold italic text-black">Dragon News</span> covers a wide range of topics spanning politics, business, technology, culture, sports, and more. We strive to provide comprehensive coverage that reflects the diverse perspectives and voices within our community.

                        </p>
                        <p className="mt-4">
                            At <span className="text-lg font-bold italic text-black">Dragon News</span>, we understand the importance of staying connected in today's fast-paced world. That's why we offer multiple platforms for you to access our content, including our website, mobile app, social media channels, and print edition. No matter how you prefer to consume the news, we're here to keep you informed wherever you are.


                        </p>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-3xl font-bold underline text-black mb-5">FAQs:</h1>

                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default About;