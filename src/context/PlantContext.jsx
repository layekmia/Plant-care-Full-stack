import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase";

const plantsContext = createContext();

export default function PlantsDataProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { displayName: name, email, photoURL: image, uid } = currentUser;
        setUser({ name, email, image, uid });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => unsubcribe();
  }, []);

  return (
    <plantsContext.Provider value={{ user, isLoading }}>
      {children}
    </plantsContext.Provider>
  );
}

function usePlants() {
  const context = useContext(plantsContext);
  return context;
}

export { usePlants };
