import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllPlants from "../pages/AllPlants";
import AddPlant from "../pages/AddPlant";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import PrivateRoutes from "../components/PrivateRoutes";
import AuthPrivate from "../components/AuthPrivate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/login",
        element: (
          <AuthPrivate>
            <Login />
          </AuthPrivate>
        ),
      },
      {
        path: "/register",
        element: (
          <AuthPrivate>
            <Register />
          </AuthPrivate>
        ),
      },
      { path: "/all-plants", element: <AllPlants /> },
      {
        path: "/add-new-plant",
        element: (
          <PrivateRoutes>
            <AddPlant />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      { path: "/about-us", element: <About /> },
    ],
  },
]);
export default router;
