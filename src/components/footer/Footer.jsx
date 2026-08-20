import logo from "../../assets/images/logo.png";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  /* ================= SOCIAL MEDIA LINKS ================= */

  const socialLinks = {
    instagram: "https://www.instagram.com/3rdedhum?igsh=MWM5aWdveWdhOG42cQ%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/people/3rd-Edhum-Consultants-Pvt-Ltd/61556303931006/",
    linkedin: "https://www.linkedin.com/company/101544274/admin/dashboard/",
    whatsapp: "https://wa.me/919967399069",
  };

  /* ================= CONTACT US ================= */

  const handleContactClick = () => {
    if (window.location.pathname === "/") {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        const navbarHeight = 88;
        const sectionPosition = contactSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }

      return;
    }

    navigate("/");

    setTimeout(() => {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        const navbarHeight = 88;
        const sectionPosition = contactSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  /* ================= PROGRAMS ================= */

  const handleProgramsClick = () => {
    if (window.location.pathname === "/") {
      const programsSection = document.getElementById("programs");

      if (programsSection) {
        const navbarHeight = 88;
        const sectionPosition = programsSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }

      return;
    }

    navigate("/");

    setTimeout(() => {
      const programsSection = document.getElementById("programs");

      if (programsSection) {
        const navbarHeight = 88;
        const sectionPosition = programsSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  /* ================= SOLUTIONS ================= */

  const handleSolutionsClick = () => {
    if (window.location.pathname === "/") {
      const solutionsSection = document.getElementById("solutions");

      if (solutionsSection) {
        const navbarHeight = 88;
        const sectionPosition = solutionsSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }

      return;
    }

    navigate("/");

    setTimeout(() => {
      const solutionsSection = document.getElementById("solutions");

      if (solutionsSection) {
        const navbarHeight = 88;
        const sectionPosition = solutionsSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  /* ================= ABOUT US ================= */

  const handleAboutUsClick = () => {
    navigate("/why3rdedhum/who-we-are");
  };

  return (
    <footer className="bg-[#032B22] pt-14 pb-6 text-white">
      <div className="mx-auto max-w-7xl px-8">

        {/* ================= FOOTER GRID ================= */}

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">

          {/* ================= LOGO ================= */}

          <div className="col-span-2 lg:col-span-1">

            {/* MOBILE */}

            <div className="flex items-center gap-4 lg:hidden">

              <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-2xl bg-white">
                <img src={logo} alt="3rd Edge" loading="lazy" className="w-20 object-contain" />
              </div>

              <div className="flex flex-1 flex-col items-center text-center">

                <p className="text-sm leading-4 text-gray-300">
                  Helping Others
                  <br />
                  Through Learning
                </p>

                <div className="mt-4 flex items-center justify-center gap-3">

                  {/* INSTAGRAM */}

                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:bg-[#2f8c72]">
                    <FaInstagram size={16} />
                  </a>

                  {/* LINKEDIN */}

                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:bg-[#2f8c72]">
                    <FaLinkedinIn size={16} />
                  </a>

                  {/* FACEBOOK */}

                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:bg-[#2f8c72]">
                    <FaFacebookF size={16} />
                  </a>

                  {/* WHATSAPP */}

                  <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:bg-[#2f8c72]">
                    <FaWhatsapp size={16} />
                  </a>

                </div>
              </div>
            </div>

            {/* DESKTOP */}

            <div className="hidden lg:block">

              <div className="flex h-24 w-32 items-center justify-center rounded-2xl bg-white">
                <img src={logo} alt="3rd Edge" loading="lazy" className="w-24 object-contain" />
              </div>

              <p className="mt-6 text-sm leading-6 text-gray-300">
                Helping Others
                <br />
                Through Learning
              </p>

              <div className="mt-6 flex items-center gap-4">

                {/* INSTAGRAM */}

                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-[#2f8c72]">
                  <FaInstagram />
                </a>

                {/* LINKEDIN */}

                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-[#2f8c72]">
                  <FaLinkedinIn />
                </a>

                {/* FACEBOOK */}

                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-[#2f8c72]">
                  <FaFacebookF />
                </a>

                {/* WHATSAPP */}

                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-[#2f8c72]">
                  <FaWhatsapp />
                </a>

              </div>
            </div>
          </div>

          {/* ================= SOLUTIONS ================= */}

          <div>
            <h3 className="mb-3 text-base font-semibold lg:mb-5 lg:text-lg">
              Solutions
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li onClick={handleSolutionsClick} className="cursor-pointer hover:text-white">Leadership Development</li>
              <li onClick={handleSolutionsClick} className="cursor-pointer hover:text-white">Team Strategy</li>
              <li onClick={handleSolutionsClick} className="cursor-pointer hover:text-white">Team Effectiveness</li>
              <li onClick={handleSolutionsClick} className="cursor-pointer hover:text-white">Sales Effectiveness</li>
              <li onClick={handleSolutionsClick} className="cursor-pointer hover:text-white">Executive Coaching</li>
            </ul>
          </div>

          {/* ================= PROGRAMS ================= */}

          <div>
            <h3 className="mb-3 text-base font-semibold lg:mb-5 lg:text-lg">
              Programs
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li onClick={handleProgramsClick} className="cursor-pointer hover:text-white">For Leaders</li>
              <li onClick={handleProgramsClick} className="cursor-pointer hover:text-white">For Teams</li>
              <li onClick={handleProgramsClick} className="cursor-pointer hover:text-white">For Managers</li>
              <li onClick={handleProgramsClick} className="cursor-pointer hover:text-white">For Individual</li>
              <li onClick={handleProgramsClick} className="cursor-pointer hover:text-white">Industries</li>
            </ul>
          </div>

          {/* ================= RESOURCES ================= */}

          <div>
            <h3 className="mb-3 text-base font-semibold lg:mb-5 lg:text-lg">
              Resources
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li className="cursor-pointer hover:text-white">Insights</li>
              <li className="cursor-pointer hover:text-white">Case Studies</li>
              <li className="cursor-pointer hover:text-white">White Papers</li>
              <li className="cursor-pointer hover:text-white">Webinars</li>
              <li className="cursor-pointer hover:text-white">Blogs</li>
            </ul>
          </div>

          {/* ================= COMPANY ================= */}

          <div>
            <h3 className="mb-3 text-base font-semibold lg:mb-5 lg:text-lg">
              Company
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">

              <li>
                <button type="button" onClick={handleAboutUsClick} className="cursor-pointer text-left transition-colors hover:text-white">
                  About Us
                </button>
              </li>

              <li className="cursor-pointer hover:text-white">
                Our Approach
              </li>

              <li className="cursor-pointer hover:text-white">
                Careers
              </li>

              <li>
                <button type="button" onClick={handleContactClick} className="text-left transition-colors hover:text-white">
                  Contact Us
                </button>
              </li>

            </ul>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">

          <p>
            © 2026 3rd Edge Human Capital. All Rights Reserved.
          </p>

          <div className="mt-4 flex gap-6 md:mt-0">

            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms of Use
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;