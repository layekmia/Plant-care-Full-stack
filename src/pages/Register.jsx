import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { Spinner } from "flowbite-react";
import { FaEye, FaEyeSlash, FaFacebook, FaUser } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase";

const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export default function Register() {
  const [isShowPass, setIsShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { createAccount } = useAuth();

  const provider = new GoogleAuthProvider();

  async function handleSignUp(e) {
    e.preventDefault();

    if (!isValidPassword.test(formData.password))
      return toast.error("Password to weak");
    console.log(formData);

    try {
      setIsLoading(true);
      await createAccount(formData.email, formData.password);
      toast.success("accoutn created successfully");
      const user = auth.currentUser;
      await updateProfile(user, {
        displayName: formData.name,
        photoURL: formData.photoURL,
      });
      console.log(user);
      setFormData({
        name: "",
        photoURL: "",
        email: "",
        password: "",
      });
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("Already have an account with this email");
          break;
        case "auth/weak-password":
          toast.error("Password to weak");
          break;
        case "auth/invalid-email":
          toast.error("Invalid Email address");
          break;
        case "auth/netword-request-failed":
          toast.error("Network error. please try again");
          break;
        default:
          toast.error("someting went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      toast.error("something went wrong" + error.message);
    }
  }

  return (
    <div className="h-[calc(100vh-60px)] pt-8 bg-background">
      <div className="bg-white py-5 px-4 w-[300px] mx-auto shadow-md rounded-md text-center font-sans">
        <h2 className="text-xl font-semibold text-secondary mb-4 uppercase">
          Sign up
        </h2>

        <button
          className="flex items-center justify-center gap-2 border bg-gray-50 py-[6px] px-5 rounded-md text-base font-medium w-full"
          onClick={handleGoogleLogin}
        >
          <img
            className="w-5"
            src="https://cdn.iconscout.com/icon/free/png-512/free-google-logo-icon-download-in-svg-png-gif-file-formats--brands-pack-logos-icons-189824.png?f=webp&w=256"
            alt=""
          />
          Google
        </button>

        <div className="relative before:content-[''] after:content-[''] before:absolute after:absolute before:h-[1px] after:h-[1px] before:w-[120px] after:w-[120px] before:top-1/2 after:top-1/2 before:-translate-y-1/2 after:-translate-y-1/2 before:left-0 after:right-0 before:bg-gray-300 after:bg-gray-300 mb-2">
          <span className="text-gray-500 font-semibold">or</span>
        </div>
        <form onSubmit={handleSignUp}>
          <div className="relative mb-4">
            <input
              required
              type="text"
              placeholder="Name"
              className="border w-full py-[6px] pl-10 rounded-[3px] text-gray-700 placeholder:text-gray-500 outline-none focus:ring-[1.5px] focus:ring-primary"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xl text-gray-400">
              <FaUser />
            </span>
          </div>
          <div className="relative mb-4">
            <input
              required
              type="text"
              placeholder="Photo URL"
              className="border w-full py-[6px] pl-10 rounded-[3px] text-gray-700 placeholder:text-gray-500 outline-none focus:ring-[1.5px] focus:ring-primary"
              value={formData.photoURL}
              onChange={(e) =>
                setFormData({ ...formData, photoURL: e.target.value })
              }
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xl text-gray-400">
              <IoLink />
            </span>
          </div>
          <div className="relative mb-4">
            <input
              required
              type="email"
              placeholder="Email Address"
              className="border w-full py-[6px] pl-10 rounded-[3px] text-gray-700 placeholder:text-gray-500 outline-none focus:ring-[1.5px] focus:ring-primary"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xl text-gray-400">
              <MdOutlineMailOutline />
            </span>
          </div>
          <div className="relative mb-2">
            <input
              required
              type={`${isShowPass ? "text" : "password"}`}
              placeholder="Password"
              className="border w-full py-[6px] pl-10 rounded-[3px] text-gray-700 placeholder:text-gray-500 outline-none focus:ring-[1.5px] focus:ring-primary"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xl text-gray-400">
              <CiLock />
            </span>
            <span
              className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setIsShowPass((pass) => !pass)}
            >
              {isShowPass ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <p className="text-left font-medium text-primary">Forgot password</p>
          <button
            disabled={isLoading}
            className={`py-[6px] bg-primary w-full rounded-md mt-5 text-white font-medium text-base ${
              isLoading ? "opacity-50" : ""
            }`}
          >
            {isLoading ? (
              <>
                <Spinner
                  size="sm"
                  aria-label="Info spinner example"
                  className="me-3"
                  light
                />
                creating...
              </>
            ) : (
              "Register"
            )}
          </button>
        </form>
        <p className="text-secondary font-medium mt-5 text-sm">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-primary text-sm hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
