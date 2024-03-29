// AuthProvider.js

import React, { useState, useEffect, createContext } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider, sendEmailVerification } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false); // Update loading state when auth state changes
        });
        return unsubscribe;
    }, [auth]); // Add auth as a dependency to useEffect

    const sendEmailVerificationToCurrentUser = ()=>{
        return sendEmailVerification(auth.currentUser)
    }

    const authInfo = {
        user,
        createUser,
        signUpWithGoogle,
        login,
        logout,
        updateUserProfile,
        loading,
        sendEmailVerificationToCurrentUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
