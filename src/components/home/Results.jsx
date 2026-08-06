import {
  TrendingUp,
  Users,
  ChartNoAxesColumn,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: <TrendingUp size={52} strokeWidth={1.6} />,
    number: "2.4x",
    title1: "Increase in leadership",
    title2: "Pipeline Strength",
  },
  {
    icon: <Users size={52} strokeWidth={1.6} />,
    number: "35%",
    title1: "Improvement in Team",
    title2: "Effectiveness",
  },
  {
    icon: <ChartNoAxesColumn size={52} strokeWidth={1.6} />,
    number: "20%",
    title1: "Increase in Sales",
    title2: "Performance",
  },
  {
    icon: <Star size={52} strokeWidth={1.6} />,
    number: "90%",
    title1: "Client Satisfaction",
    title2: "Rate",
  },
];

const Results = () => {
  return (
    <section className="bg-[#F6FCF9] py-24">
      <div className="max-w-[1350px] mx-auto px-8">

        {/* Heading */}
        <p className="text-center uppercase tracking-[3px] text-[#3A9C72] text-lg font-medium mb-20">
          REAL IMPACT. LASTING RESULTS.
        </p>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >

              {/* Icon */}
              <div className="text-[#0B2C25] mb-8">
                {item.icon}
              </div>

              {/* Number */}
              <h2 className="text-[64px] font-bold leading-none text-[#0B2C25]">
                {item.number}
              </h2>

              {/* Description */}
              <p className="mt-6 text-[18px] leading-8 text-[#5D6A6E]">
                {item.title1}
                <br />
                {item.title2}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Results;