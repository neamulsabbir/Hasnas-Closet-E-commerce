import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase.init/Firebase.Init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)

  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailassword(auth, email, password);
  };
  
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  const userSignOut = () => {
    setLoading(true)
    signOut(auth);
  };
  
  const updateUserProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)

    });
    
    return () => unsubscribe();
  }, []);

  const authInfo = {
    signUp,
    signIn,
    userSignOut,
    updateUserProfile,
    user,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
