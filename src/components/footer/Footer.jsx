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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo */}
          <div>

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

  <a href="#">
    <FaInstagram
      size={20}
      className="hover:text-[#59D58E] transition-all"
    />
  </a>

  <a href="#">
    <FaLinkedinIn
      size={20}
      className="hover:text-[#59D58E] transition-all"
    />
  </a>

  <a href="#">
    <FaFacebookF
      size={20}
      className="hover:text-[#59D58E] transition-all"
    />
  </a>

  <a href="#">
    <FaWhatsapp
      size={20}
      className="hover:text-[#59D58E] transition-all"
    />
  </a>

</div>

          </div>

          {/* Solutions */}

          <div>

            <h3 className="text-lg font-semibold mb-5">
              Solutions
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">

              <li className="hover:text-white cursor-pointer">
                Leadership Development
              </li>

              <li className="hover:text-white cursor-pointer">
                Talent Strategy
              </li>

              <li className="hover:text-white cursor-pointer">
                Team Effectiveness
              </li>

              <li className="hover:text-white cursor-pointer">
                Sales Effectiveness
              </li>

            </ul>

          </div>

          {/* Programs */}

          <div>

            <h3 className="text-lg font-semibold mb-5">
              Programs
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">

              <li className="hover:text-white cursor-pointer">
                Emerging Leaders
              </li>

              <li className="hover:text-white cursor-pointer">
                Mid-Level Managers
              </li>

              <li className="hover:text-white cursor-pointer">
                Senior Leaders
              </li>

              <li className="hover:text-white cursor-pointer">
                Executive Coaching
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-lg font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">

              <li className="hover:text-white cursor-pointer">
                Insights
              </li>

              <li className="hover:text-white cursor-pointer">
                Case Studies
              </li>

              <li className="hover:text-white cursor-pointer">
                Whitepapers
              </li>

              <li className="hover:text-white cursor-pointer">
                Blogs
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-lg font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">

              <li className="hover:text-white cursor-pointer">
                About Us
              </li>

              <li className="hover:text-white cursor-pointer">
                Our Team
              </li>

              <li className="hover:text-white cursor-pointer">
                Careers
              </li>

              <li className="hover:text-white cursor-pointer">
                Contact Us
              </li>

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