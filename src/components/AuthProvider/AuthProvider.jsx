import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const registerUser = (email, password) =>{
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    const loggingWithGoogle = () =>{
      return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        registerUser,
        loginUser,
        user,
        logOut,
        setUser,
        loggingWithGoogle,
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
          if (currentUser) {
            console.log(currentUser);
            setUser(currentUser)
          } else {
            console.log('logged Out');
            setUser(null)
          }  
        })
        return () =>{
            unsubscribe();
        }
    },[])
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;