import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111714] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="font-bold text-lg">Tourist.io</h3>
          <p className="text-sm text-gray-400 mt-2">
            Your adventure starts here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-[#38e07b]">Home</NavLink>
            </li>
            <li>
              <NavLink to="/feed" className="hover:text-[#38e07b]">Explore</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#38e07b]">About</NavLink>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-bold text-lg">Follow Us</h3>
          <ul className="flex gap-4 mt-2 text-xl">
            <li><FaFacebook className="hover:text-[#38e07b] cursor-pointer" /></li>
            <li><FaTwitter className="hover:text-[#38e07b] cursor-pointer" /></li>
            <li><FaInstagram className="hover:text-[#38e07b] cursor-pointer" /></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex items-center md:justify-end">
          <p className="text-sm text-gray-400">
            © 2025 Tourist.io — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
