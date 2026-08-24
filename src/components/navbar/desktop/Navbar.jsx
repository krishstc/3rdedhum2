import { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../../assets/images/logo1.png";
import MegaMenu from "./MegaMenu";
import MobileMenu from "../mobile/MobileMenu";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMenus = () => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveMenu(null);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  /* ================= CONTACT SCROLL ================= */

  const handleContactClick = (e) => {
    e.preventDefault();

    setActiveMenu(null);
    setIsMobileMenuOpen(false);

    // If already on Home page, scroll directly
    if (location.pathname === "/") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");

        if (contactSection) {
          const navbarHeight = 100;

          const sectionPosition =
            contactSection.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
          });
        }
      }, 100);

      return;
    }

    // If on another page, go to Home first
    navigate("/");

    // Wait for Home page to render, then scroll to Contact
    setTimeout(() => {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        const navbarHeight = 100;

        const sectionPosition =
          contactSection.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight;

        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }
    }, 500);
  };

  /* ================= CUSTOM PROGRAM WHATSAPP ================= */

  const handleCustomProgramClick = () => {
    const whatsappNumber = "919967399069";

    const message = encodeURIComponent(
      "Hello, I am interested in a Custom Program. I would like to know more details."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const menuClass = "relative cursor-pointer group";

  const linkClass =
    "flex items-center gap-1 hover:text-[#3F9975] transition-colors";

  const hoverLine =
    "absolute left-0 right-0 -bottom-4 h-[3px] bg-[#F59E0B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200";

  return (
    <>
      {/* ================= FIXED NAVBAR ================= */}

      <nav
        className="fixed top-0 left-0 w-full z-[9999] bg-white shadow-sm"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* ================= MAIN NAVBAR ================= */}

        <div className="relative max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="3rd EduHim"
              className="h-14 w-auto object-contain scale-150 origin-left drop-shadow-sm"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}

          <ul className="hidden lg:flex items-center gap-12 text-[18px] font-medium text-gray-700">

            {/* HOME */}

            <li
              className={menuClass}
              onMouseEnter={() => setActiveMenu(null)}
            >
              <Link
                to="/"
                onClick={closeMenus}
                className={linkClass}
              >
                Home
              </Link>

              <div className={hoverLine} />
            </li>

            {/* SERVICES */}

            <li
              className={menuClass}
              onMouseEnter={() => setActiveMenu("services")}
            >
              <button
                type="button"
                onClick={() => handleMenuClick("services")}
                className={linkClass}
              >
                Services

                <FaChevronDown
                  size={11}
                  className={`transition-transform duration-300 ${
                    activeMenu === "services"
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              <div className={hoverLine} />
            </li>

            {/* WHY 3RD EDHUM */}

            <li
              className={menuClass}
              onMouseEnter={() => setActiveMenu("whyus")}
            >
              <button
                type="button"
                onClick={() => handleMenuClick("whyus")}
                className={`${linkClass} whitespace-nowrap`}
              >
                Why 3rd EdHum

                <FaChevronDown
                  size={11}
                  className={`transition-transform duration-300 ${
                    activeMenu === "whyus"
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              <div className={hoverLine} />
            </li>

            {/* INSIGHTS */}

            <li
              className={menuClass}
              onMouseEnter={() => setActiveMenu("insights")}
            >
              <button
                type="button"
                onClick={() => handleMenuClick("insights")}
                className={linkClass}
              >
                Insights

                <FaChevronDown
                  size={11}
                  className={`transition-transform duration-300 ${
                    activeMenu === "insights"
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              <div className={hoverLine} />
            </li>

          </ul>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center gap-4">

            {/* CUSTOM PROGRAM */}

            <button
              type="button"
              onClick={handleCustomProgramClick}
              className="hidden lg:block border border-[#3F9975] text-[#3F9975] hover:bg-[#3F9975] hover:text-white px-6 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-300"
            >
              Custom Program
            </button>

            {/* LET'S CONNECT */}

            <button
              type="button"
              onClick={handleContactClick}
              className="hidden lg:block border border-[#3F9975] bg-[#3F9975] hover:bg-[#348364] text-white px-6 py-2.5 rounded-lg text-[14px] font-medium transition"
            >
              Let's Connect
            </button>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              className="lg:hidden w-10 h-10 flex items-center justify-center text-2xl text-gray-700 hover:text-[#3F9975] transition"
              onClick={toggleMobileMenu}
              aria-label={
                isMobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
            >
              {isMobileMenuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </button>

          </div>
        </div>

        {/* ================= MEGA MENUS ================= */}

        <div className="relative z-[100]">

          <MegaMenu
            isOpen={activeMenu === "services"}
            menuType="services"
          />

          <MegaMenu
            isOpen={activeMenu === "whyus"}
            menuType="whyus"
          />

          <MegaMenu
            isOpen={activeMenu === "insights"}
            menuType="insights"
          />

        </div>

      </nav>

      {/* ================= MOBILE MENU ================= */}

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMenus}
      />
    </>
  );
}

export default Navbar;