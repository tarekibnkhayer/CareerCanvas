import { createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
            }
            else {
                setUser(null);
                setLoading(false);
            }
        })
        return () => unSubscribe()
    },[]);
    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    };
    const updateUserInfo = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    };
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        updateUserInfo,
        logoutUser
    };
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;
AuthProviders.propTypes = {
    children: PropTypes.node
}