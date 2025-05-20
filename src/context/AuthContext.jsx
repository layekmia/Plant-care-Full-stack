import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  function createAccount(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function userLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <AuthContext.Provider value={{ createAccount, userLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { useAuth };
