import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./context/AuthContext";
import PlantsDataProvider from "./context/PlantContext";
import ThemeProbider from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProbider>
      <AuthProvider>
        <PlantsDataProvider>
          <RouterProvider router={router} />
        </PlantsDataProvider>
      </AuthProvider>
    </ThemeProbider>
  </StrictMode>
);
