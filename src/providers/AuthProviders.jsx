import { createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";
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
            const userEmail = currentUser?.email || user?.email;
            setUser(currentUser);
            setLoading(false);
            if(currentUser){
                const user = {email: userEmail};
                axios.post('https://career-canvas-server.vercel.app/jwt', user, {withCredentials: true}).then().catch();
            }
            else {
                axios.post('https://career-canvas-server.vercel.app/logout', user, {
                    withCredentials: true
                }).then(res => console.log(res.data)).catch(err => console.error(err));
            }
        });
        return () => unSubscribe()
    },[user]);
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
        setLoading(false);
        return signOut(auth);
    };
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        updateUserInfo,
        logoutUser,
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