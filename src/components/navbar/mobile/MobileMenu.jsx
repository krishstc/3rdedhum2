import { useState } from "react";
import { FaTimes, FaChevronRight } from "react-icons/fa";

import MobileServiceMenu from "./MobileServiceMenu";
import MobileContentMenu from "./MobileContentMenu";

function MobileMenu({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState("main");

  const goBack = () => {
    setCurrentPage("main");
  };

  const closeMenu = () => {
    setCurrentPage("main");
    onClose();
  };

  const handleContactClick = () => {
    closeMenu();

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <>
      {/* ================= OVERLAY ================= */}

      <div
        onClick={closeMenu}
        className={`fixed top-[88px] left-0 right-0 bottom-0 bg-black/40 z-[9997] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* ================= MOBILE DRAWER ================= */}

      <div
        className={`fixed top-[88px] right-0 bottom-0 w-[340px] max-w-[90%] bg-white shadow-2xl z-[9998] transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* ================= MAIN MENU ================= */}

        {currentPage === "main" && (
          <div className="h-full flex flex-col">

            {/* Header */}

            <div className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0">

              <h2 className="text-lg font-semibold text-gray-800">
                Menu
              </h2>

              {/* Close Button */}

              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 hover:text-black transition"
              >
                <FaTimes />
              </button>

            </div>


            {/* Menu Items */}

            <div className="overflow-y-auto flex-1">

              {/* Home */}

              <button
                onClick={closeMenu}
                className="w-full flex items-center justify-between px-5 py-4 border-b hover:bg-gray-50 transition text-left"
              >
                <span>Home</span>
                <FaChevronRight className="text-gray-400 text-sm" />
              </button>


              {/* Services */}

              <button
                onClick={() => setCurrentPage("services")}
                className="w-full flex items-center justify-between px-5 py-4 border-b hover:bg-gray-50 transition text-left"
              >
                <span>Services</span>

                <FaChevronRight className="text-gray-400 text-sm" />
              </button>


              {/* Why 3rd EdHum */}

              <button
                onClick={() => setCurrentPage("whyus")}
                className="w-full flex items-center justify-between px-5 py-4 border-b hover:bg-gray-50 transition text-left"
              >
                <span>Why 3rd EdHum</span>

                <FaChevronRight className="text-gray-400 text-sm" />
              </button>


              {/* Insights */}

              <button
                onClick={() => setCurrentPage("insights")}
                className="w-full flex items-center justify-between px-5 py-4 border-b hover:bg-gray-50 transition text-left"
              >
                <span>Insights</span>

                <FaChevronRight className="text-gray-400 text-sm" />
              </button>


              {/* Let's Connect */}

              <div className="p-5">

                <button
                  onClick={handleContactClick}
                  className="w-full bg-[#3F9975] hover:bg-[#348364] text-white py-3 rounded-lg font-medium transition"
                >
                  Let's Connect
                </button>

              </div>

            </div>

          </div>
        )}


        {/* ================= SERVICES ================= */}

        {currentPage === "services" && (
          <MobileServiceMenu
            onBack={goBack}
            onClose={closeMenu}
          />
        )}


        {/* ================= WHY US ================= */}

        {currentPage === "whyus" && (
          <MobileContentMenu
            type="whyus"
            onBack={goBack}
            onClose={closeMenu}
          />
        )}


        {/* ================= INSIGHTS ================= */}

        {currentPage === "insights" && (
          <MobileContentMenu
            type="insights"
            onBack={goBack}
            onClose={closeMenu}
          />
        )}

      </div>
    </>
  );
}

export default MobileMenu;