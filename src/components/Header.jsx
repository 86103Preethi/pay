import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import logo from "../assets/profile-logo.png";
import b_logo from "../assets/b-logo.svg";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <header className="bg-white fixed top-0 z-20 shadow-lg h-[88px] w-full">
        <div className="w-full mx-auto px-5 md:px-28 py-3 flex h-[88px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={b_logo} alt="Pay Business logo" className="h-10" />
          </Link>

          {/* Desktop Profile */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              className="flex items-center"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <img
                src={logo}
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3 flex flex-col leading-tight text-left">
                <span className="text-xs text-gray-400">Hello</span>
                <span className="text-xl font-semibold text-gray-900">
                  Thomas Shelby
                </span>
              </div>
              <svg
                className="ml-3 w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-opacity-50">
          <div className="bgGreen w-full h-screen flex flex-col p-6 animate-slideDown">
            <button
              onClick={() => setSidebarOpen(false)}
              className="self-end text-white text-2xl"
            >
              ✕
            </button>

            <div className="mt-10 flex flex-col gap-4">
              {/* Home */}
              <Link
                to="/"
                className="text-lg font-semibold text-white"
                onClick={() => setSidebarOpen(false)}
              >
                Home
              </Link>

              {/* Transaction History Dropdown */}
              <div className="flex flex-col">
                <div className="flex justify-between items-center w-full">
                  {/* History link */}
                  <Link
                    to="/history"
                    className="text-lg font-semibold text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    History
                  </Link>

                  {/* Dropdown toggle (arrow) */}
                  <button
                    onClick={() => toggleDropdown("transaction")}
                    className="ml-2 text-white"
                  >
                    {openDropdown === "transaction" ? "▲" : "▼"}
                  </button>
                </div>

                {/* Dropdown content */}
                {openDropdown === "transaction" && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link
                      to="/transaction-history"
                      className="text-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Transaction History
                    </Link>
                    <Link
                      to="/settled-history"
                      className="text-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Settled History
                    </Link>
                  </div>
                )}
              </div>


              {/* QR */}
              <Link
                to="/qr"
                className="text-lg font-semibold text-white"
                onClick={() => setSidebarOpen(false)}
              >
                QR
              </Link>

              {/* Profile */}
              <Link
                to="/profile"
                className="text-lg font-semibold text-white"
                onClick={() => setSidebarOpen(false)}
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      )}

      
    </>
  );
};

export default Header;