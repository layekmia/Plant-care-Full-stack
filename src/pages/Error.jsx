import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <>
      <Header/>
      <div className="min-h-screen bg-green-50 dark:bg-dark-background flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-9xl font-bold text-green-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2 dark:text-gray-400">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          Oops! The page you're looking for doesn't exist. It might have been
          removed or renamed.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium transition"
        >
          Go Back Home
        </Link>
      </div>
      <Footer/>
    </>
  );
};

export default ErrorPage;
