import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const answers = location.state?.answers;

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-[#111714]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-white font-inter text-2xl">TourList.io</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-7 text-white text-lg items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              to={{ pathname: "/feed" }}
              state={{ answers }}
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>

        {/* Desktop button */}
        <button
          onClick={() => navigate("/onboarding")}
          className="hidden md:block min-w-[84px] bg-[#38e07b] text-[#111714] h-10 px-5 cursor-pointer justify-center font-bold rounded-full hover:bg-[#2fe074] transition-colors"
        >
          Get Started
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111714] px-6 py-4 space-y-4">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="block text-white">
            Home
          </NavLink>
          <NavLink
            to={{ pathname: "/feed" }}
            state={{ answers }}
            onClick={() => setMenuOpen(false)}
            className="block text-white"
          >
            Explore
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block text-white">
            About
          </NavLink>
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/onboarding");
            }}
            className="mt-4 w-full bg-[#38e07b] text-[#111714] py-2 rounded-full font-bold hover:bg-[#2fe074] transition-colors"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
