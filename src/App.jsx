import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import { usePlants } from "./context/PlantContext";
import Spinner from "./components/Spinner";

export default function App() {
  const { isLoading } = usePlants();
  const navigation = useNavigation();
  if (isLoading || navigation.state === 'loading') return <Spinner />;

  return (
    <>
      <div>
        <Header />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}
