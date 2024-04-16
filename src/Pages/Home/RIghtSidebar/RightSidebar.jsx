import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../Components/UserData/UserData';
const RightSidebar = () => {
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const auth = getAuth();
    const { user } = useContext(UserContext);
    return (
        <div>
            {!user && <div>
                <h2 className="text-xl font-semibold mb-6">Login With</h2>
                <button className="btn btn-outline btn-success w-full mb-3 text-sm" onClick={() => {
                    signInWithPopup(auth, provider)
                        .then(result => {
                            console.log(result.user);
                        })
                        .catch(error => {
                            console.log(error.message)
                        })
                }}><FaGoogle></FaGoogle> Login With Google </button>
                <button className="btn btn-outline w-full mb-3 text-sm" onClick={() => {
                    signInWithPopup(auth, gitProvider)
                        .then(result => {
                            console.log(result.user);
                        })
                        .catch(error => {
                            console.log(error.message)
                        })
                }}><FaGithub></FaGithub> Login With Github </button>
            </div>}
            <div className='mt-10'>
                <h2 className="text-xl font-semibold mb-6">Find Us On</h2>
                <div className='border border-slate-500 rounded-lg  text-xl grid gap-4'>
                    <Link className='flex items-center text-blue-800 border-b border-slate-500 p-4'> <FaFacebook ></FaFacebook> <span className='flex-grow ml-3'> Facebook</span>  </Link>
                    <Link className='flex items-center text-blue-400 border-b border-slate-500 p-2'> <FaTwitter></FaTwitter> <span className='flex-grow ml-3'> Twitter</span>  </Link>
                    <Link className='flex items-center text-amber-500 p-2'> <FaInstagram></FaInstagram> <span className='flex-grow ml-3'> Instagram</span> </Link>
                </div>

            </div>
            <div className='my-10 bg-slate-100 p-5'>
                <h2 className="text-xl font-semibold mb-6">Q-Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />

            </div>
        </div>
    );
};

export default RightSidebar;