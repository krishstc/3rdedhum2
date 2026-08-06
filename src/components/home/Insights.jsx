const resources = [
  {
    type: "ARTICLE",
    title: "6 Skills Every Future-Ready Leader Must Have",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
  },
  {
    type: "WHITE PAPER",
    title: "Building High-Performance Culture: Key Strategies",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900",
  },
  {
    type: "CASE STUDY",
    title: "Driving Business Impact Through Effective Training",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900",
  },
];

const Insights = () => {
  return (
    <section className="py-24 bg-[#F6F8F7]">
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
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[160px] object-cover"
                />

                <div className="p-4">

                  <p className="uppercase text-[11px] tracking-wide font-semibold text-[#4DA879]">
                    {item.type}
                  </p>

                  <h3 className="mt-3 text-[19px] leading-7 font-semibold text-[#072A23] min-h-[72px]">
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