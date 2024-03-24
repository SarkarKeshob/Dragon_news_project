import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import { UserContext } from "../../Components/UserData/UserData";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {userRegistration}=useContext(UserContext);
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const upperCaseRegex=/[A-Z]/;
    const lowerCaseRegex=/[a-z]/;
    const numberRegex=/[0-9]/;
    const specialCharRegex=/[$#@!%^&*()-_+=?/<>,.;:'"\\|{}[\]`~]/;
    
    const handleRegister=e=>{
        setError('');
        setSuccess('');
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photoUrl.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const isUpperCased=upperCaseRegex.test(password);
        const isLowerCased=lowerCaseRegex.test(password);
        const isNumbered=numberRegex.test(password);
        const isSpecialChared=specialCharRegex.test(password);
        if(password.length<8){
            setError('Password should be atleast 8 characters or more');
        }
        else if(!isLowerCased){
            setError('Password must include atleast one lowercase letter');
        }
        else if(!isNumbered){
            setError('Password must include atleast one number');
        }
        else if(!isSpecialChared){
            setError('Password must include one special character')
        }
        else if(!isUpperCased){
            setError('Password must include atleast one Uppercase letter');
        }
        else{
            userRegistration(email,password)
            .then(result=>{
                const user=result.user;
                console.log(user);
                updateProfile(user,{
                    displayName:name,
                    photoURL:photo,
                })
                .then(()=>{
                    console.log('profile updated');
                })
                .catch(error=>{
                    console.log(error.message);
    
                })
                sendEmailVerification(user)
                .then(()=>{
                    setSuccess('Succesfully registered. Please Verify Your Email to Login.')
                })
                

            })
            .catch(error=>{
                const errorMessage=error.message;
                if(errorMessage.includes('already')){
                    setError('Email Already Registered. You can Log in now . ')
                }
            })
            e.target.reset();
        }
       
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white p-4">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="url" name="photoUrl" placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type={showPassword?'text':'password'} placeholder="Password" className="input input-bordered" name="password" required />
                                <span className="text-xl ml-auto mr-3 -mt-8" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}</span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-center mb-4">Already have an account ?? <Link to={'/login'} className="btn btn-link text-red-600">Login Here</Link> </p>
                        {error.length>1 ? <p className="text-red-700 text-center font-semibold text-sm">{error}</p>:'' }
                        {success.length>1? <p className="text-green-500 text-center font-semibold text-sm">{success}</p>:'' }
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;