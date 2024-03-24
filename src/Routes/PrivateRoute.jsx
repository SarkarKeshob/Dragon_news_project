import { useContext } from "react";
import { UserContext } from "../Components/UserData/UserData";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(UserContext);
    const {pathname}=useLocation();
    console.log(pathname);
    if(loading){
        return <div className="mt-32 text-center"><span className="loading loading-spinner loading-lg text-error"></span>
        </div>
    }
    else if(user?.emailVerified===true){
        return children;
    }
    else{
        return <Navigate state={pathname} to='/login'></Navigate>
    }
};
PrivateRoute.propTypes={
    children:PropTypes.node,
}
export default PrivateRoute;