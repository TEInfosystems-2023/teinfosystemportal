
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 rounded-full px-5 py-2
        text-sm font-medium text-black
        transition-all duration-300
        group-hover:bg-black group-hover:text-white"
      >
        Services

        <svg
          className="w-3 h-3 transition-transform duration-300
          group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className="absolute left-0 top-full pt-3 w-60
        invisible opacity-0 translate-y-3
        group-hover:visible group-hover:opacity-100
        group-hover:translate-y-0
        transition-all duration-300 ease-out z-50"
      >
        <div className="rounded-2xl bg-white p-2
          shadow-xl shadow-black/10 border border-gray-100">

          <Link
            to="/soft-development"
            className="block rounded-xl px-4 py-3
            text-sm font-medium text-gray-700
            hover:bg-gray-100 hover:text-black
            transition-all duration-200"
          >
            Software Development
          </Link>

          

          

        </div>
      </div>

    </div>
  );
}

export default Dropdown;
