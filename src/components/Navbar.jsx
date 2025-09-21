import { NavLink, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const answers = location.state?.answers

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-[#111714]/80 px-10 py-4 backdrop-blur-sm whitespace-nowrap">
      <h1 className="text-white font-inter text-2xl text">Tourist.io</h1>
      <ul className="flex space-x-7 text-white text-lg items-center my-1">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: "/feed"}}
            state={{ answers }}
          >
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <button
        onClick={() => navigate("/onboarding")}
        className="min-w-[84px] max-w-[480px] bg-[#38e07b] text-[#111714] h-10 px-5 cursor-pointer justify-center font-bold rounded-full hover:bg-[#2fe074] transition-colors"
      >
        GetStarted
      </button>
    </header>
  );
}
