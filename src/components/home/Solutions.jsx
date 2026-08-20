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
    description: "Building exemplary leaders who inspire teams.",
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
    <section
      id="solutions"
      className="scroll-mt-[88px] bg-[#F6F7F9] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}

        <div className="mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[2px] text-[#2BA56F]">
            SOLUTIONS THAT DRIVE IMPACT
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-gray-900 md:text-3xl">
            Comprehensive Solutions For Every Need
          </h2>

        </div>

        {/* ================= CARDS ================= */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">

          {services.map((service, index) => (

            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-lg ${service.color}`}
              >
                {service.icon}
              </div>

              <h3 className="mb-2 text-[17px] font-semibold text-gray-900 transition group-hover:text-[#2BA56F]">
                {service.title}
              </h3>

              <p className="text-xs leading-5 text-gray-500">
                {service.description}
              </p>

              <button
                type="button"
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#2BA56F] transition-all hover:gap-3"
              >
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