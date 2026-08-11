import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import logo from "../../../assets/images/logo.webp";
import MegaMenu from "./MegaMenu";
import MobileMenu from "../mobile/MobileMenu";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          <div className="flex items-center">
            <img
              src={logo}
              alt="3rd EduHim"
              className="h-14 w-auto object-contain scale-150 origin-left"
            />
          </div>


          {/* ================= DESKTOP MENU ================= */}

          <ul className="hidden lg:flex items-center gap-12 text-[18px] font-medium text-gray-700">

            {/* HOME */}

            <li
              onMouseEnter={() => setActiveMenu(null)}
              className="cursor-pointer hover:text-[#3F9975] transition-colors"
            >
              Home
            </li>


            {/* SERVICES */}

            <li
              className="relative"
              onMouseEnter={() => setActiveMenu("services")}
            >
              <button className="flex items-center gap-1 hover:text-[#3F9975] transition-colors">
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

              {activeMenu === "services" && (
                <div className="absolute left-0 right-0 -bottom-4 h-[3px] bg-[#F59E0B] rounded-full"></div>
              )}
            </li>


            {/* WHY 3RD EDHUM */}

            <li
              className="relative"
              onMouseEnter={() => setActiveMenu("whyus")}
            >
              <button className="flex items-center gap-1 hover:text-[#3F9975] transition-colors whitespace-nowrap">
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

              {activeMenu === "whyus" && (
                <div className="absolute left-0 right-0 -bottom-4 h-[3px] bg-[#F59E0B] rounded-full"></div>
              )}
            </li>


            {/* INSIGHTS */}

            <li
              className="relative"
              onMouseEnter={() => setActiveMenu("insights")}
            >
              <button className="flex items-center gap-1 hover:text-[#3F9975] transition-colors">
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

              {activeMenu === "insights" && (
                <div className="absolute left-0 right-0 -bottom-4 h-[3px] bg-[#F59E0B] rounded-full"></div>
              )}
            </li>

          </ul>


          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center gap-4">

            {/* CUSTOM PROGRAM */}

            <button
              className="hidden lg:block border border-[#3F9975] text-[#3F9975] hover:bg-[#3F9975] hover:text-white px-6 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-300"
            >
              Custom Program
            </button>


            {/* LET'S CONNECT */}

            <a
              href="#contact"
              className="hidden lg:block border border-[#3F9975] bg-[#3F9975] hover:bg-[#348364] text-white px-6 py-2.5 rounded-lg text-[14px] font-medium transition"
            >
              Let's Connect
            </a>


            {/* MOBILE HAMBURGER */}

            <button
              className="lg:hidden text-2xl text-gray-700"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>

          </div>

        </div>


        {/* ================= MEGA MENUS ================= */}

        <div className="relative z-[100]">

          {/* SERVICES */}

          <MegaMenu
            isOpen={activeMenu === "services"}
            menuType="services"
          />

          {/* WHY 3RD EDHUM */}

          <MegaMenu
            isOpen={activeMenu === "whyus"}
            menuType="whyus"
          />

          {/* INSIGHTS */}

          <MegaMenu
            isOpen={activeMenu === "insights"}
            menuType="insights"
          />

        </div>

      </nav>


      {/* ================= MOBILE MENU ================= */}

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;