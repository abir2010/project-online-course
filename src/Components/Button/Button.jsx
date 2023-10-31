import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

export default function Button() {
  const notify = () => {
    window.alert("Added to Cart! :D");
  };

  return (
    <div>
      <button
        onClick={notify}
        type="submit"
        className="inline-flex disabled items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-gray-900 rounded-3xl text-white transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
      >
        Get this Course
      </button>
      <ToastContainer closeButton={false} />
    </div>
  );
}
