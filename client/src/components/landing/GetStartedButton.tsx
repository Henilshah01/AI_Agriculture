import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function GetStartedButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="/dashboard" className="relative inline-flex items-center justify-center mt-12 gap-4 group">
      {/* Background Gradient */}
      <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />

      {/* Button */}
      <button
        className="group relative inline-flex items-center justify-center text-base rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Get Started For Free
        <FaArrowRight className={`ml-2 transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`} />
      </button>
    </Link>
  );
}
