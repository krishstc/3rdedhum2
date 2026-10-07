import {
  FaUsers,
  FaBullseye,
  FaHandshake,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Leadership Development",
    description: "Building exemplary leaders who inspire teams.",
    icon: <FaUsers />,
    color: "bg-green-100 text-green-700",
    serviceTitle: "Managerial & Leadership Programs",
  },
  {
    title: "Talent Strategy",
    description:
      "Align talent strategy with business goals and sustainable growth.",
    icon: <FaBullseye />,
    color: "bg-blue-100 text-blue-700",
    serviceTitle: "Organisational Development",
  },
  {
    title: "Team Effectiveness",
    description:
      "Strenghten collaboration and build high-performing teams.",
    icon: <FaHandshake />,
    color: "bg-orange-100 text-orange-600",
    serviceTitle: "Behavioural Skills Workshop",
  },
  {
    title: "Sales Effectiveness",
    description:
      "Propel consultative sales behaviors that win more business.",
    icon: <FaChartLine />,
    color: "bg-purple-100 text-purple-700",
    serviceTitle: "Sales",
  },
  {
    title: "Executive Coaching",
    description:
      "Personalized coaching for leaders to unlock potential.",
    icon: <FaUserTie />,
    color: "bg-red-100 text-red-600",
  },
];

const Solutions = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    // Executive Coaching opens its page directly
    if (service.title === "Executive Coaching") {
      navigate("/services/executive-coaching");
      return;
    }

    if (!service.serviceTitle) return;

    // ==========================================
    // DESKTOP ONLY
    // ==========================================
    if (window.innerWidth >= 1024) {
      window.dispatchEvent(
        new CustomEvent("open-service-menu", {
          detail: {
            serviceTitle: service.serviceTitle,
          },
        })
      );

      return;
    }

    // ==========================================
    // MOBILE ONLY
    // ==========================================
    window.dispatchEvent(
      new CustomEvent("open-mobile-menu")
    );

    window.dispatchEvent(
      new CustomEvent("open-mobile-service-menu", {
        detail: {
          serviceTitle: service.serviceTitle,
        },
      })
    );
  };

  const handleLearnMoreClick = (event, service) => {
    // Prevent the card button from handling the click again
    event.stopPropagation();

    // Use the exact same service action
    handleServiceClick(service);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#3F9975] font-semibold text-sm uppercase tracking-wider mb-3">
            SOLUTIONS THAT DRIVE IMPACT
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Comprehensive Solutions For Every Need
          </h2>

        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <button
              key={service.title}
              type="button"
              onClick={() => handleServiceClick(service)}
              className="group text-left bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${service.color}`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-base font-semibold text-black">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2
               text-xs text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More */}
              <span
                onClick={(event) =>
                  handleLearnMoreClick(event, service)
                }
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3F9975] cursor-pointer"
              >
                <span>Learn More</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;