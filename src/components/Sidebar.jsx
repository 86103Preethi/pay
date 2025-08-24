//src/components/Sidebar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "../assets/s-home.png";
import Qr from "../assets/s-qr.png";
import History from "../assets/s-history.png";
import Profile from "../assets/s-profile.png";
import Bharat from "../assets/bharat.png";


const Sidebar = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  // Check if a link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      {/* Mobile toggle button */}
      <button
        type="button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 
              10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 
              1.5h-7.5a.75.75 0 01-.75-.75zM2 
              10a.75.75 0 01.75-.75h14.5a.75.75 
              0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`mt-[152px]  h-[calc(100vh-64px)] transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >

        <div className="h-full overflow-y-auto bg-[#42794a] rounded-2xl border border-[#42794a] flex flex-col">
          
          <ul className="space-y-2 px-3 py-4 font-medium ">
          
            <li>
              <Link
                to="/"
                className={`flex items-center p-4 rounded-lg group ${
                  isActiveLink("/") 
                    ? "bg-white text-[#42794a]" 
                    : "text-white hover:bg-white hover:text-[#42794a]"
                }`}
              >
               <img src={Home} alt="home" className="w-6 h-6" />
                <span className="ms-3">Home</span>
              </Link>
            </li>


            <li>
              <Link
                to="/qr"
                className={`flex items-center p-4 rounded-lg group ${
                  isActiveLink("/qr") 
                    ? "bg-white text-[#42794a]" 
                    : "text-white hover:bg-white hover:text-[#42794a]"
                }`}
              >
               <img src={Qr} alt="qr" className="w-6 h-6" />
                <span className="flex-1 ms-3 whitespace-nowrap">Qr</span>
              </Link>
            </li>


            <li className="flex flex-col">
              <div
                className={`flex items-center justify-between w-full p-4 text-base transition duration-75 rounded-lg group ${
                  (isActiveLink("/history") || isActiveLink("/history")) 
                    ? "bg-white text-[#42794a]" 
                    : "text-white hover:bg-white hover:text-[#42794a]"
                }`}
              >
                {/* History Link (navigates) */}
                <Link
                  to="/history"
                  className="flex items-center flex-1"
                >
                  <img src={History} alt="history" className="w-6 h-6" />
                  <span className="flex-1 ms-3 text-left whitespace-nowrap">History</span>
                </Link>
                {/* Dropdown Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                  className="ml-2"
                >
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      isHistoryOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                
              </div>
              {/* Dropdown submenu */}
              {isHistoryOpen && (
                <ul className="py-2 space-y-2">
                  <li>
                    <Link
                      to="/transaction-history"
                      className={`flex items-center w-full p-4 rounded-lg ${
                        isActiveLink("/transaction-history") 
                          ? "bg-white text-[#42794a]" 
                          : "text-white hover:bg-white hover:text-[#42794a]"
                      }`}
                    >
                      <img src={History} alt="history" className="w-6 h-6" />
                      <span className="flex-1 ms-3 text-left whitespace-nowrap">Transaction History</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settlement-history"
                      className={`flex items-center w-full p-4 rounded-lg ${
                        isActiveLink("/settlement-history") 
                          ? "bg-white text-[#42794a]" 
                          : "text-white hover:bg-white hover:text-[#42794a]"
                      }`}
                    >
                      <img src={History} alt="history" className="w-6 h-6" />
                      <span className="flex-1 ms-3 text-left whitespace-nowrap"> Settlement History</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>


            <li>
              <Link
                to="/profile"
                className={`flex items-center p-4 rounded-lg group ${
                  isActiveLink("/profile") 
                    ? "bg-white text-[#42794a]" 
                    : "text-white hover:bg-white hover:text-[#42794a]"
                }`}
              >
                <img src={Profile} alt="profile" className="w-6 h-6" />
                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>

            
          </ul>

          <div className="mt-auto border-t border-[#42794a] bg-white rounded-b-2xl p-3">
            <img src={Bharat} alt="b-logo" className="w-[86px] h-[34px] mx-auto" />
          </div>


        </div>

      </aside>
    </div>
    
  );
};

export default Sidebar;