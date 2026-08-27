import futureReadyLeader from "../../assets/images/insights/future-ready-leader.jpeg";
import highPerformanceCulture from "../../assets/images/insights/high-performance-culture.jpeg";
import effectiveTraining from "../../assets/images/insights/effective-training.jpeg";

const resources = [
  {
    type: "ARTICLE",
    title: "6 Skills Every Future-Ready Leader Must Have",
    image: futureReadyLeader,
  },
  {
    type: "WHITE PAPER",
    title: "Building High-Performance Culture: Key Strategies",
    image: highPerformanceCulture,
  },
  {
    type: "CASE STUDY",
    title: "Driving Business Impact Through Effective Training",
    image: effectiveTraining,
  },
];

const Insights = () => {
  return (
    <section className="py-20 bg-[#F6F8F7]">
      <div className="max-w-[1280px] mx-auto px-8">

        <div className="grid lg:grid-cols-[0.9fr_2.6fr] gap-10 items-start">

          {/* LEFT */}
          <div className="pt-3">

            <p className="uppercase tracking-[2px] text-[#4DA879] text-xs font-semibold">
              INSIGHTS & RESOURCES
            </p>

            <h2 className="mt-4 text-[24px] lg:text-[28px] leading-[38px] font-bold text-[#072A23]">
              Stay Ahead with
              <br />
              the Latest
              <br />
              Insights and Best
              <br />
              Practices.
            </h2>

            <button className="mt-8 border border-[#77C39F] text-[#4DA879] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#4DA879] hover:text-white transition-all duration-300">
              Explore Resources →
            </button>

          </div>

          {/* RIGHT */}
          <div className="grid md:grid-cols-3 gap-6">

            {resources.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer"
              >

                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[160px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="p-4">

                  <p className="uppercase text-[11px] tracking-wide font-semibold text-[#4DA879]">
                    {item.type}
                  </p>

                  <h3 className="mt-3 text-[19px] leading-7 font-semibold text-[#072A23] min-h-[72px] group-hover:text-[#3F9975] transition-colors duration-300">
                    {item.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Insights;