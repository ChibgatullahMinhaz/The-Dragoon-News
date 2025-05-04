import React, {  useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext, LoaderContext } from "../../Context/Context";
import { auth } from "../../../features/Auth/Firebase/firebase.init";


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { isLoading,setIsLoading } = useContext(LoaderContext);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const creteUserWithGoogle = (provider) => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };
  const createUserWithGithub = (provider) => {
    toast.warning("Coming soon!");
  };
  const sendVerificationEmail = (currentUser) => {
    setIsLoading(true);
    return sendEmailVerification(currentUser);
  };
  const logout = ()=> {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
     return ()=> unsubscribe();
    });
  }, [setIsLoading]);

  const userInfo = {
    user,
    logout,
    createUser,
    createUserWithGithub,
    setIsLoading,
    creteUserWithGoogle,
    sendVerificationEmail,
    userLogin,
    isLoading
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;