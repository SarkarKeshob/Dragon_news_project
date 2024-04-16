import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

 export const UserContext=createContext(null);

const UserData = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const userRegistration=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const userLogin=(email,password)=>{
        setLoading (true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser.emailVerified){
                console.log(currentUser);
                setUser(currentUser);
                setLoading(false);
            }
            else{
                setUser(null);
                setLoading(false);
            }
        })
        return ()=>{
            unSubscribe();
        }

    },[]);
    const userSignOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    return (
        <div>
            <UserContext.Provider value={{user,userRegistration,userLogin,userSignOut,loading,setLoading}}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

UserData.propTypes={
    children:PropTypes.node,
}

export default UserData;