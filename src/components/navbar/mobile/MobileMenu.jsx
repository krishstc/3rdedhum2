import { useState } from "react";
import {
  FaTimes,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

import MobileServiceMenu from "./MobileServiceMenu";

function MobileMenu({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState("main");
  const [openMenu, setOpenMenu] = useState(null);

  const openServices = () => {
    setCurrentPage("services");
  };

  const goBack = () => {
    setCurrentPage("main");
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => {
          setCurrentPage("main");
          setOpenMenu(null);
          onClose();
        }}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[340px] max-w-full bg-white shadow-2xl z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ================= MAIN MENU ================= */}
        {currentPage === "main" && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>

              <button
                onClick={() => {
                  setCurrentPage("main");
                  setOpenMenu(null);
                  onClose();
                }}
                className="text-xl text-gray-600 hover:text-black"
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu */}
            <div className="overflow-y-auto h-[calc(100%-80px)]">

              {/* Home */}
              <button className="w-full text-left px-5 py-4 border-b hover:bg-gray-50 transition">
                Home
              </button>

              {/* Services */}
              <button
                onClick={openServices}
                className="w-full flex justify-between items-center px-5 py-4 border-b hover:bg-gray-50 transition"
              >
                <span>Services</span>
                <FaChevronRight />
              </button>

              {/* Why Us */}
              <div className="border-b">
                <button
                  onClick={() => toggleMenu("why")}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition"
                >
                  <span>Why Us</span>

                  {openMenu === "why" ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </button>

                {openMenu === "why" && (
                  <div className="bg-gray-50">

                    <button className="w-full text-left px-10 py-3 hover:bg-gray-100 transition">
                      About Us
                    </button>

                    <button className="w-full text-left px-10 py-3 hover:bg-gray-100 transition">
                      Our Approach
                    </button>

                    <button className="w-full text-left px-10 py-3 hover:bg-gray-100 transition">
                      Careers
                    </button>

                  </div>
                )}
              </div>

              {/* Insights */}
              <div className="border-b">
                <button
                  onClick={() => toggleMenu("insights")}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition"
                >
                  <span>Insights</span>

                  {openMenu === "insights" ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </button>

                {openMenu === "insights" && (
                  <div className="bg-gray-50">

                    <button className="w-full text-left px-10 py-3 hover:bg-gray-100 transition">
                      Blogs & Articles
                    </button>

                    <button className="w-full text-left px-10 py-3 hover:bg-gray-100 transition">
                      Case Studies
                    </button>

                    <button className="w-full text-left px-10 py-3 hover:bg-gray-100 transition">
                      White Papers
                    </button>

                    <button className="w-full text-left px-10 py-3 hover:bg-gray-100 transition">
                      Webinars
                    </button>

                  </div>
                )}
              </div>

              {/* Contact */}
              <div className="p-5">
                <button className="w-full bg-[#3F9975] hover:bg-[#348364] text-white py-3 rounded-lg font-medium transition">
                  Let's Connect
                </button>
              </div>

            </div>
          </>
        )}

        {/* ================= SERVICES ================= */}
        {currentPage === "services" && (
          <MobileServiceMenu
            onBack={goBack}
            onClose={() => {
              setCurrentPage("main");
              setOpenMenu(null);
              onClose();
            }}
          />
        )}
      </div>
    </>
  );
}

export default MobileMenu;