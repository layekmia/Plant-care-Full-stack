import { createContext, useContext, useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase";

const plantsContext = createContext();

export default function PlantsDataProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalShownRef = useRef(false);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { displayName: name, email, photoURL: image, uid } = currentUser;
        setUser({ name, email, image, uid });
      } else {
        setUser(null);
        if (!modalShownRef.current) {
          modalShownRef.current = true;
        }
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
