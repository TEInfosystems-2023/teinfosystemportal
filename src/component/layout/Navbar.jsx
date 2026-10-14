import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-5 w-full  -translate-x-1/2 left-1/2 z-50 bg-transparent text-white fixed ">
      <div className="h-[56px]   mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <div>
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight transition hover:opacity-80"
          >
            TE Infosystems
          </Link>
        </div>

        <div className="backdrop-blur-lg  hidden items-center gap-1 rounded-full border-[0.1px] border-gray-400/50 bg-[]  p-2 text-white shadow-lg backdrop-blur-sm md:flex">
          <Link
            to="/"
            className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/contact"
            className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
          >
            Contact
          </Link>

          <Link
            to="/service"
            className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
          >
            Services
          </Link>

          <Link
            to="/servicedetails"
            className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
          >
            Service Details
          </Link>

          <Link
            to="/about"
            className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
          >
            About
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <button className="flex items-center gap-2 text-sm font-medium transition hover:opacity-70">
            <span className="text-lg">🌐</span>
            EN
          </button>

          <Link
            to="/contact"
            className="rounded-full bg-green-50 px-6 py-3 text-sm font-semibold text-black shadow-md transition-all duration-300 hover:scale-105 hover:bg-green-100"
          >
            Book a Call
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400/40 bg-gradient-to-br from-[#172554] via-[#080d1c] to-black md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>

            <span
              className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="mx-4 mb-4 rounded-2xl border border-gray-400/30 bg-gradient-to-br from-[#172554] via-[#080d1c] to-black p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              Home
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              Contact
            </Link>

            <Link
              to="/service"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              Services
            </Link>

            <Link
              to="/servicedetails"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              Service Details
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              About
            </Link>

            <div className="my-2 h-px bg-gray-400/20"></div>

            <div className="flex items-center justify-between px-4 py-2">
              <button className="flex items-center gap-2 text-sm font-medium">
                <span>🌐</span>
                EN
              </button>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-green-50 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-green-100"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;