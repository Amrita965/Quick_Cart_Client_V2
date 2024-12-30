import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase-config";
import { ToastContainer } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser || !currentUser) {
        setUser(currentUser);
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL ? photoURL : auth.currentUser.photoURL,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        createUser,
        userLogin,
        logoutUser,
        updateUserProfile,
        isLoading,
        setIsLoading,
        user,
      }}
    >
      {children} {/*<App /> == children*/}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
