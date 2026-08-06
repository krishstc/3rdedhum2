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
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="relative max-w-[1400px] mx-auto px-8 py-4"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="3rd EduHim"
                className="h-14 w-auto object-contain scale-150 origin-left"
              />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-12 text-[18px] font-medium text-gray-700">
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
                {activeMenu === "services" && (
                  <div className="absolute left-0 right-0 -bottom-4 h-[3px] bg-[#F59E0B] rounded-full"></div>
                )}
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
                  <div className="absolute left-0 right-0 -bottom-4 h-[3px] bg-[#F59E0B] rounded-full"></div>
                )}
                {activeMenu === "whyus" && (
                  <ul className="absolute left-0 text-sm top-full mt-6 w-52 rounded-xl bg-white shadow-xl border py-2">
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
                  <div className="absolute left-0 right-0 -bottom-4 h-[3px] bg-[#F59E0B] rounded-full"></div>
                )}
                {activeMenu === "insights" && (
                  <ul className="absolute left-0 text-sm top-full mt-6 w-56 rounded-xl bg-white shadow-xl border py-2">
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
              {/* Contact Us */}
              <button className="hidden lg:block border border-[#3F9975] text-[#3F9975] hover:bg-[#3F9975] hover:text-white px-6 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-300">
                Custom Program
              </button>

              <button className="hidden lg:block border border-[#3F9975] bg-[#3F9975] hover:bg-[#348364] text-white px-6 py-2.5 rounded-lg text-[14px] font-medium transition">
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