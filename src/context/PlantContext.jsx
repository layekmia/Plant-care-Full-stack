import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase";

const plantsContext = createContext();

export default function PlantsDataProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { displayName: name, email, photoURL: image, uid } = currentUser;
        setUser({ name, email, image, uid });
      } else {
        setUser(null);
        setShowModal(true);
      }
      setIsLoading(false);
    });
    return () => unsubcribe();
  }, []);

  function modalClose() {
    setShowModal(false);
  }

  return (
    <plantsContext.Provider
      value={{ user, isLoading, isOpen, setIsOpen, showModal, modalClose }}
    >
      {children}
    </plantsContext.Provider>
  );
}

function usePlants() {
  const context = useContext(plantsContext);
  return context;
}

export { usePlants };
