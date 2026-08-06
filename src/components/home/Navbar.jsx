import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/images/logo.webp";

import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div
          className="relative max-w-7xl mx-auto px-6 lg:px-8 py-5"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="3rd EduHim"
                className="h-10 w-auto object-contain scale-150 origin-left"
              />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-7 text-[14px] font-medium tracking-wide text-gray-700">

              {/* Home */}
              <li
                onMouseEnter={() => setActiveMenu(null)}
                className="cursor-pointer hover:text-[#3F9975] transition-colors"
              >
                Home
              </li>

              {/* Services */}
              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("services")}
              >
                <button className="flex items-center gap-1 hover:text-[#3F9975] transition-colors">
                  Services

                  <FaChevronDown
                    size={11}
                    className={`transition-transform duration-300 ${
                      activeMenu === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </li>

              {/* Why Us */}
              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("whyus")}
              >
                <button className="flex items-center gap-1 hover:text-[#3F9975] transition-colors">
                  Why Us

                  <FaChevronDown
                    size={11}
                    className={`transition-transform duration-300 ${
                      activeMenu === "whyus" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMenu === "whyus" && (
                  <ul className="absolute left-0 top-full mt-3 w-52 rounded-xl bg-white shadow-xl border py-2">
                    <li className="px-5 py-3 hover:bg-gray-100 cursor-pointer transition">
                      About Us
                    </li>

                    <li className="px-5 py-3 hover:bg-gray-100 cursor-pointer transition">
                      Our Approach
                    </li>

                    <li className="px-5 py-3 hover:bg-gray-100 cursor-pointer transition">
                      Careers
                    </li>
                  </ul>
                )}
              </li>

              {/* Insights */}
              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("insights")}
              >
                <button className="flex items-center gap-1 hover:text-[#3F9975] transition-colors">
                  Insights

                  <FaChevronDown
                    size={11}
                    className={`transition-transform duration-300 ${
                      activeMenu === "insights" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMenu === "insights" && (
                  <ul className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-white shadow-xl border py-2">
                    <li className="px-5 py-3 hover:bg-gray-100 cursor-pointer transition">
                      Blogs & Articles
                    </li>

                    <li className="px-5 py-3 hover:bg-gray-100 cursor-pointer transition">
                      Case Studies
                    </li>

                    <li className="px-5 py-3 hover:bg-gray-100 cursor-pointer transition">
                      White Papers
                    </li>

                    <li className="px-5 py-3 hover:bg-gray-100 cursor-pointer transition">
                      Webinars
                    </li>
                  </ul>
                )}
              </li>
                          </ul>

            {/* Right Side */}
            <div className="flex items-center gap-4">

              {/* Desktop Button */}
              <button className="hidden lg:block bg-[#3F9975] hover:bg-[#348364] text-white px-6 py-2.5 rounded-lg text-[14px] font-medium transition">
                Let's Connect
              </button>

              {/* Mobile Hamburger */}
              <button
                className="lg:hidden text-2xl text-gray-700"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <FaBars />
              </button>

            </div>
          </div>

          {/* Services Mega Menu */}
          <MegaMenu isOpen={activeMenu === "services"} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;