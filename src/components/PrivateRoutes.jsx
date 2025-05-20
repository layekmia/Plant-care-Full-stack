import { Navigate, useLocation } from "react-router-dom";
import { usePlants } from "../context/PlantContext";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const { user } = usePlants();
  return user ? children : <Navigate state={{ from: location }} to="/login" />;
}
