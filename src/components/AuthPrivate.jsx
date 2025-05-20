import { Navigate, useLocation } from "react-router-dom";
import { usePlants } from "../context/PlantContext";

export default function AuthPrivate({ children }) {
  const { user } = usePlants();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  return user ? <Navigate to={from} /> : children;
}
