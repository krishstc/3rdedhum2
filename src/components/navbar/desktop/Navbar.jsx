import { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../../assets/images/logo1.png";
import MegaMenu from "./MegaMenu";
import MobileMenu from "../mobile/MobileMenu";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [initialServiceFolder, setInitialServiceFolder] = useState(null);
  const [initialServiceTitle, setInitialServiceTitle] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* ================= RESET ON ROUTE CHANGE ================= */

  useEffect(() => {
    setActiveMenu(null);
    setInitialServiceFolder(null);
    setInitialServiceTitle(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  /* ================= DESKTOP SERVICE EVENT ONLY ================= */

  useEffect(() => {
    const handleOpenServiceMenu = (event) => {
      const { serviceFolder, serviceTitle } = event.detail || {};

      if (!serviceFolder && !serviceTitle) return;

      // Open DESKTOP menu only
      setInitialServiceFolder(serviceFolder || null);
      setInitialServiceTitle(serviceTitle || null);
      setActiveMenu("services");

      // Make sure mobile menu stays closed
      setIsMobileMenuOpen(false);
    };

    window.addEventListener(
      "open-service-menu",
      handleOpenServiceMenu
    );

    return () => {
      window.removeEventListener(
        "open-service-menu",
        handleOpenServiceMenu
      );
    };
  }, []);

  /* ================= MOBILE MENU EVENT ONLY ================= */

  useEffect(() => {
    const handleOpenMobileMenu = () => {
      // Open MOBILE menu only
      setIsMobileMenuOpen(true);

      // Make sure desktop menu stays closed
      setActiveMenu(null);
      setInitialServiceFolder(null);
      setInitialServiceTitle(null);
    };

    window.addEventListener(
      "open-mobile-menu",
      handleOpenMobileMenu
    );

    return () => {
      window.removeEventListener(
        "open-mobile-menu",
        handleOpenMobileMenu
      );
    };
  }, []);

  /* ================= CLOSE MENUS ================= */

  const closeMenus = () => {
    setActiveMenu(null);
    setInitialServiceFolder(null);
    setInitialServiceTitle(null);
    setIsMobileMenuOpen(false);
  };

  /* ================= MOBILE MENU BUTTON ================= */

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);

    /* Close desktop menu only */
    setActiveMenu(null);
    setInitialServiceFolder(null);
    setInitialServiceTitle(null);
  };

  /* ================= DESKTOP MENU ================= */

  const handleMenuClick = (menu) => {
    setInitialServiceFolder(null);
    setInitialServiceTitle(null);

    setActiveMenu((prev) =>
      prev === menu ? null : menu
    );
  };

  /* ================= SERVICE SELECTION HANDLED ================= */

  const handleInitialServiceHandled = () => {
    setInitialServiceFolder(null);
    setInitialServiceTitle(null);
  };

  /* ================= CONTACT SCROLL ================= */

  const handleContactClick = (e) => {
    e.preventDefault();

    setActiveMenu(null);
    setInitialServiceFolder(null);
    setInitialServiceTitle(null);
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      setTimeout(() => {
        const contactSection =
          document.getElementById("contact");

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

    navigate("/");

    setTimeout(() => {
      const contactSection =
        document.getElementById("contact");

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

  /* ================= CUSTOM PROGRAM ================= */

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

  /* ================= STYLING ================= */

  const menuClass =
    "relative cursor-pointer group";

  const linkClass =
    "flex items-center gap-1 hover:text-[#3F9975] transition-colors";

  const hoverLine =
    "absolute left-0 right-0 -bottom-4 h-[3px] bg-[#F59E0B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200";

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav
        className="fixed top-0 left-0 w-full z-[9999] bg-white shadow-sm"
        onMouseLeave={() => {
          setActiveMenu(null);
          setInitialServiceFolder(null);
          setInitialServiceTitle(null);
        }}
      >
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
              onMouseEnter={() => {
                setActiveMenu(null);
                setInitialServiceFolder(null);
                setInitialServiceTitle(null);
              }}
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
              onMouseEnter={() => {
                setActiveMenu("services");
              }}
            >
              <button
                type="button"
                onClick={() =>
                  handleMenuClick("services")
                }
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
              onMouseEnter={() => {
                setActiveMenu("whyus");
                setInitialServiceFolder(null);
                setInitialServiceTitle(null);
              }}
            >
              <button
                type="button"
                onClick={() =>
                  handleMenuClick("whyus")
                }
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
              onMouseEnter={() => {
                setActiveMenu("insights");
                setInitialServiceFolder(null);
                setInitialServiceTitle(null);
              }}
            >
              <button
                type="button"
                onClick={() =>
                  handleMenuClick("insights")
                }
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

            {/* MOBILE BUTTON */}

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

        {/* ================= DESKTOP MENUS ONLY ================= */}

        <div className="relative z-[100]">

          <MegaMenu
            isOpen={activeMenu === "services"}
            menuType="services"
            initialServiceFolder={initialServiceFolder}
            initialServiceTitle={initialServiceTitle}
            onInitialServiceHandled={
              handleInitialServiceHandled
            }
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