import logo from "../../assets/images/logo.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#032B22] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Logo */}
          <div className="col-span-2 lg:col-span-1">

            {/* Mobile Layout */}
            <div className="flex items-center gap-4 lg:hidden">

              {/* Logo - Left */}
              <div className="bg-white rounded-2xl w-24 h-20 flex items-center justify-center flex-shrink-0">
                <img
                  src={logo}
                  alt="3rd Edge"
                  className="w-20 object-contain"
                />
              </div>

              {/* Text + Social - Right */}
              <div className="flex-1 flex flex-col items-center text-center">

                <p className="text-sm text-gray-300 leading-4">
                  Helping Others
                  <br />
                  Through Learning
                </p>

                <div className="flex items-center justify-center gap-3 mt-4">

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2f8c72] transition"
                  >
                    <FaInstagram size={16} />
                  </a>

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2f8c72] transition"
                  >
                    <FaLinkedinIn size={16} />
                  </a>

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2f8c72] transition"
                  >
                    <FaFacebookF size={16} />
                  </a>

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2f8c72] transition"
                  >
                    <FaWhatsapp size={16} />
                  </a>

                </div>

              </div>

            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">

              <div className="bg-white rounded-2xl w-32 h-24 flex items-center justify-center">
                <img
                  src={logo}
                  alt="3rd Edge"
                  className="w-24 object-contain"
                />
              </div>

              <p className="mt-6 text-sm text-gray-300 leading-6">
                Helping Others
                <br />
                Through Learning
              </p>

              <div className="flex items-center gap-4 mt-6">

                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2f8c72] transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2f8c72] transition"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2f8c72] transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2f8c72] transition"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-5">
              Solutions
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Leadership Development</li>
              <li className="hover:text-white cursor-pointer">Team Strategy</li>
              <li className="hover:text-white cursor-pointer">Team Effectiveness</li>
              <li className="hover:text-white cursor-pointer">Sales Effectiveness</li>
              <li className="hover:text-white cursor-pointer">Executive Coaching</li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-5">
              Programs
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">For Leaders</li>
              <li className="hover:text-white cursor-pointer">For Teams</li>
              <li className="hover:text-white cursor-pointer">For Managers</li>
              <li className="hover:text-white cursor-pointer">For Individual</li>
              <li className="hover:text-white cursor-pointer">Industries</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-5">
              Resources
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Insights</li>
              <li className="hover:text-white cursor-pointer">Case Studies</li>
              <li className="hover:text-white cursor-pointer">White Papers</li>
              <li className="hover:text-white cursor-pointer">Webinars</li>
              <li className="hover:text-white cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-5">
              Company
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Approach</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © 2025 3rd Edge Human Capital. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
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