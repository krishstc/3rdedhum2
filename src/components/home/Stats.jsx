const stats = [
  {
    number: "100+",
    title1: "Organizations",
    title2: "Partners",
  },
  {
    number: "10,000+",
    title1: "Leaders",
    title2: "Developed",
  },
  {
    number: "100+",
    title1: "Expert",
    title2: "Facilitators",
  },
  {
    number: "10+",
    title1: "Years of",
    title2: "Experience",
  },
  {
    number: "50+",
    title1: "Client",
    title2: "Retention",
  },
];

const Stats = () => {
  return (
    <section className="mt-16">

      {/* Top Wave */}
      <div className="max-w-[13500px] mx-auto overflow-hidden rounded-t-[3px]">
        <svg
          viewBox="0 0 1440 160"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <path
            fill="#043329"
            d="M0,160 C320,20 1120,20 1440,160 L1440,160 L0,160 Z"
          />
        </svg>
      </div>

      {/* Green Section */}
      <div className="bg-[#043329] rounded-[6px] pt-14 pb-14">

        <div className="max-w-[1200px] mx-auto px-4">
              {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className={`text-center py-6 px-3 ${
                    index !== stats.length - 1
                      ? "border-b border-white/20 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                  >
                    <h2 className="text-4xl lg:text-4xl font-semibold text-[#4ae2c1]">
                      {item.number}
                    </h2>

                    <h3 className="mt-3 text-base font-semibold text-white leading-6">
                      {item.title1}
                      <br />
                      {item.title2}
                    </h3>

                  </div>
                ))}

              </div>

            </div>
        </div>

    </section>
  );
};

export default Stats;