import { useEffect, useRef } from "react";
import { usePlants } from "../context/PlantContext";

export default function SubscribeModal() {
  const { modalClose } = usePlants();
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        modalClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalClose]);

  return (
   <div  className="fixed px-8 md:px-0 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white  max-w-2xl w-full flex flex-col md:flex-row rounded-md overflow-hidden shadow-lg">
        <div className="md:w-1/2">
          <img
            src="https://flacio.wpbingosite.com/wp-content/themes/flacio/images/newsletter-image.jpg"
            alt="Watering plants"
            className="w-full h-[200px] md:h-[350px] object-cover"
          />
        </div>

        <div className="md:w-1/2 p-8 relative">
          <button
            onClick={modalClose}
            className="absolute hidden md:block top-2 right-4 text-gray-500 hover:text-black text-lg"
          >
            X
          </button>

          <h2 className="text-2xl font-light text-gray-900 mb-2">
            Get free <span className="italic font-medium">Advice</span>
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            we are providing free advice our user
          </p>
          <div className="flex border border-gray-300 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email ..."
              className="w-full px-4 py-2 text-sm outline-none"
            />
            <button className="bg-green-700 text-white px-4 text-sm hover:bg-gray-800">
              SUBSCRIBE
            </button>
          </div>
          <button
            onClick={modalClose}
            className="block text-center w-full mt-4 text-sm text-gray-700 underline hover:text-black"
          >
            no thanks !
          </button>
        </div>
      </div>
    </div>
  );
}
