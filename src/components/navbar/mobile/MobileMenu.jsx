import { useEffect, useState } from "react";
import {
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import MobileServiceMenu from "./MobileServiceMenu";
import MobileContentMenu from "./MobileContentMenu";

function MobileMenu({ isOpen, onClose }) {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] =
    useState("main");

  const [selectedServiceTitle, setSelectedServiceTitle] =
    useState(null);

  // ==========================================
  // MOBILE SOLUTIONS CARD EVENT ONLY
  // ==========================================
  useEffect(() => {
    const handleOpenMobileServiceMenu = (event) => {
      const { serviceTitle } =
        event.detail || {};

      if (!serviceTitle) return;

      // First tell Navbar to OPEN the mobile drawer
      window.dispatchEvent(
        new CustomEvent("open-mobile-menu")
      );

      // Then open Services inside the mobile drawer
      setSelectedServiceTitle(serviceTitle);
      setCurrentPage("services");
    };

    window.addEventListener(
      "open-mobile-service-menu",
      handleOpenMobileServiceMenu
    );

    return () => {
      window.removeEventListener(
        "open-mobile-service-menu",
        handleOpenMobileServiceMenu
      );
    };
  }, []);

  const goBack = () => {
    setCurrentPage("main");
    setSelectedServiceTitle(null);
  };

  const closeMenu = () => {
    setCurrentPage("main");
    setSelectedServiceTitle(null);
    onClose();
  };

  const handleHomeClick = () => {
    closeMenu();
    navigate("/");
  };

  const handleServicesClick = () => {
    setSelectedServiceTitle(null);
    setCurrentPage("services");
  };

  const handleWhyUsClick = () => {
    closeMenu();
    navigate("/why-us");
  };

  const handleInsightsClick = () => {
    closeMenu();
    navigate("/insights");
  };

  const handleContactClick = () => {
    closeMenu();

    if (window.location.pathname === "/") {
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 100);
    } else {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 500);
    }
  };

  const handleCustomProgramClick = () => {
    const whatsappNumber = "919702082248";

    const message = encodeURIComponent(
      "Hello, I am interested in a Custom Program. I would like to know more details."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );

    closeMenu();
  };

  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={closeMenu}
        className={`fixed top-[88px] left-0 right-0 bottom-0 bg-black/40 z-[9997] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-[88px] right-0 bottom-0 w-[340px] max-w-[90%] bg-white shadow-2xl z-[9998] transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {currentPage === "main" && (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0">
              <h2 className="text-lg font-semibold text-gray-800">
                Menu
              </h2>

              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 hover:text-black transition"
              >
                <FaTimes />
              </button>
            </div>

            <div className="overflow-y-auto flex-1">
              <button
                onClick={handleHomeClick}
                className="w-full flex items-center justify-between px-5 py-4 border-b hover:bg-gray-50 transition text-left"
              >
                <span>Home</span>
                <FaChevronRight className="text-gray-400 text-sm" />
              </button>

              <button
                onClick={handleServicesClick}
                className="w-full flex items-center justify-between px-5 py-4 border-b hover:bg-gray-50 transition text-left"
              >
                <span>Services</span>
                <FaChevronRight className="text-gray-400 text-sm" />
              </button>

              <button
                onClick={() =>
                  setCurrentPage("whyus")
                }
                className="w-full flex items-center justify-between px-5 py-4 border-b hover:bg-gray-50 transition text-left"
              >
                <span>Why 3rd EdHum</span>
                <FaChevronRight className="text-gray-400 text-sm" />
              </button>

              <button
                onClick={() =>
                  setCurrentPage("insights")
                }
                className="w-full flex items-center justify-between px-5 py-4 border-b hover:bg-gray-50 transition text-left"
              >
                <span>Insights</span>
                <FaChevronRight className="text-gray-400 text-sm" />
              </button>

              <div className="px-5 pt-5 pb-2">
                <button
                  onClick={handleCustomProgramClick}
                  className="w-full border border-[#3F9975] text-[#3F9975] hover:bg-[#3F9975] hover:text-white py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Custom Program
                </button>
              </div>

              <div className="px-5 pt-3 pb-5">
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

        {currentPage === "services" && (
          <MobileServiceMenu
            initialServiceTitle={
              selectedServiceTitle
            }
            onBack={goBack}
            onClose={closeMenu}
          />
        )}

        {currentPage === "whyus" && (
          <MobileContentMenu
            type="whyus"
            onBack={goBack}
            onClose={closeMenu}
          />
        )}

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