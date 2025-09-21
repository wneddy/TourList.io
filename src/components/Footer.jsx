import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="mx-auto  bottom-0 items-center justify-center w-full flex ml-0 space-x-45 h-45 py-5 bg-[#111714]/100 text-white">
        <div className="ml-5 mt-0">
          <h3 className="font-bold text-lg">Tourist.io</h3>
          <p>Your adventure starts here.</p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/feed">Explore</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <ul className="flex justify-evenly gap-4">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
        {/* <hr className="flex flex-col border-t border-white my-6 w-1/2 mx-auto" /> */}
        <p className="font-semibold">2025 Copyright All Reserverd</p>
      </footer>
    </>
  );
}
