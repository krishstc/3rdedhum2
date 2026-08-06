import {
  FaUsers,
  FaBullseye,
  FaHandshake,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    title: "Leadership Development",
    description:
      "Building exemplary leaders who inspire teams.",
    icon: <FaUsers />,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Talent Strategy",
    description:
      "Align talent strategy with business goals and sustainable growth.",
    icon: <FaBullseye />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Team Effectiveness",
    description:
      "Strenghten collaboration and build high-performing teams.",
    icon: <FaHandshake />,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Sales Effectiveness",
    description:
      "Propel consultative sales behaviors that win more business.",
    icon: <FaChartLine />,
    color: "bg-purple-100 text-purple-700",
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
  return (
    <section className="py-24 bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[2px] text-[#2BA56F] text-sm font-semibold">
            SOLUTIONS THAT DRIVE IMPACT
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-900">
            Comprehensive Solutions For Every Need
          </h2>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
                className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg mb-4 ${service.color}`}              >
                {service.icon}
              </div>

              <h3
                className="text-[17px] font-semibold text-gray-900 mb-2 group-hover:text-[#2BA56F] transition">
                {service.title}
              </h3>

              <p className="text-xs text-gray-500 leading-5">
                {service.description}
              </p>

              <button className="mt-5 text-[#2BA56F] text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;