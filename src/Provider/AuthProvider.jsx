import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider  } from "firebase/auth";




export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {


  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const facebookProvider = new FacebookAuthProvider()

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const handleGitHubSignIn = () => {
    return signInWithPopup(auth, githubProvider)
  }

  const handleFacebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider)
  }

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }


  const updateUser = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo
    })
  }



  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('user in the auth state changes', currentUser)
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email: userEmail}
      setUser(currentUser);
      setLoading(false)
    })
    return () => {
      unSubscribe();
    }
  },[user?.email])




  const authInfo = {
    user,
    createUser,
    logOut,
    signIn,
    handleGoogleSignIn,
    handleGitHubSignIn,
    handleFacebookSignIn,
    loading,
    updateUser


  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;