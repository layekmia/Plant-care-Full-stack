import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import { usePlants } from "./context/PlantContext";
import Spinner from "./components/Spinner";
import MobileNabMenu from "./components/MobileNabMenu";
import SubscribeModal from "./components/SubscriptionModal";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { isLoading, showModal } = usePlants();
  const navigation = useNavigation();

  const { darkMode } = useTheme();

  if (isLoading || navigation.state === "loading") return <Spinner />;

  return (
    <>
      <div className="relative">
        <Header />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
        <MobileNabMenu />
        {showModal && <SubscribeModal />}
      </div>
      {darkMode ? (
        <ToastContainer autoClose={1000} theme="dark" />
      ) : (
        <ToastContainer autoClose={1000} />
      )}
    </>
  );
}
