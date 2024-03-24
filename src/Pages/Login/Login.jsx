import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Navigate, useLocation } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import { UserContext } from "../../Components/UserData/UserData";
import { useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState('');
    const { userLogin } = useContext(UserContext);
    const [error, setError] = useState('');
    const emailRef = useRef(null);
    const {state}=useLocation();
    console.log(state);

    const handleForgetPassword = () => {
        setError('');
        setSuccess('');
        const email = emailRef.current.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setError('Please provide a valid email to get reset password.')
        }
        else if (email.length < 1) {
            setError('Please provide a valid email to get reset password.')
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    setSuccess('Check your email to reset password...');
                })
                .catch(() => {
                    setError('Please provide a valid email to get reset password.');
                })
        }

    }
    const handleLogin = e => {
        setError('');
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                if (user.emailVerified === false) {
                    setError('Please Verify Your Email Before Trying Login...')
                }
                else {
                    e.target.reset();
                    setSuccess('Logged in. Redirecting to homepage...... ');
                }
            })
            .catch(() => {
                setError('Invalid Email or Password!!!')
            })
    }
    if (success!=='Logged in. Redirecting to homepage...... ') {
        return (
            <div>
                <Navbar></Navbar>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white p-4">
                            <form className="card-body" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <input type="email" ref={emailRef} name="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input input-bordered" name="password" required />
                                    <span className="text-xl ml-auto mr-3 -mt-8" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}</span>
                                </div>
                                <div className="mt-5">
                                    <a href="#" className="label-text-alt link link-hover" onClick={handleForgetPassword}>Forgot password?</a>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className="text-center mb-4">Do not have an account ?? <Link to={'/register'} className="btn btn-link text-red-600">Register</Link> </p>
                            {error.length > 1 ? <p className="text-red-600 text-center font-semibold text-sm">{error}</p> : ''}
                            {success.length > 1 ? <p className="text-green-600 text-center font-semibold text-sm">{success}</p> : ''}

                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
    else{
        if(state){
            return <Navigate to={state}></Navigate>
        }
        else{
            return <Navigate to='/'></Navigate>
        }
    }
};

export default Login;