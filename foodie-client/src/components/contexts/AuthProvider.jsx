import React, {useState, useEffect} from 'react'
import { createContext } from 'react'
//Process of authentication
//import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config"


export const AuthContext = createContext();
//Process of authentication
//Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
//Initializing signup with google
const googleProvider = new GoogleAuthProvider();




const AuthProvider = ({children}) => {

    //Creating user
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    //Create an account
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Signup with gmail account 
    const signUpWithGmail = ()=>{
       return signInWithPopup(auth, googleProvider)
    }

    //login using email & password
    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logout = ()=>{
        signOut(auth)
    }

    //update profile
    const updateuserProfile = ({name, photoURL})=>{
       return updateProfile(auth.currentUser, {displayName: name, photoURL: photoURL
          })
    }

    //change sign-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              setuser(currentUser)
              setloading(false)
            } else {
              // User is signed out
              // ...
            }
          })
          return()=>{
            return unsubscribe
          }
    }, [])
    

    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        // updateProfile,
        logout,
        updateuserProfile
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider