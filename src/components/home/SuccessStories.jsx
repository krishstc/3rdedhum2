import futureReadyLeaders from "../../assets/images/success-stories/future-ready-leaders.jpeg";
import salesPerformance from "../../assets/images/success-stories/sales-performance.jpeg";
import highPerformanceCulture from "../../assets/images/success-stories/high-performance-culture.jpeg";

const stories = [
  {
    title: "Building Future-Ready Leaders at a Global Company",
    image: futureReadyLeaders,
  },
  {
    title: "Transforming Sales Performance Organization-Wide",
    image: salesPerformance,
  },
  {
    title: "Creating a High-Performance Culture That Lasts",
    image: highPerformanceCulture,
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 bg-[#F5F7F6]">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="bg-[#062C24] rounded-[32px] px-8 lg:px-10 py-8 lg:py-10">

          <div className="grid lg:grid-cols-[0.75fr_1.75fr] gap-8 items-start">

            {/* LEFT */}
            <div className="pt-1">

              <p className="uppercase tracking-[2px] text-white text-xs font-semibold">
                SUCCESS STORIES
              </p>

              <h2 className="text-white text-[40px] leading-[42px] font-bold mt-4">
                Real Stories.
                <br />
                Real Results.
              </h2>

              <div className="text-[#5CE0AE] text-5xl leading-none mt-8">
                ❝
              </div>

              <p className="text-white text-[16px] leading-8 mt-4 max-w-[300px]">
                3rdEdHum's leadership program has transformed the way we
                develop our people. The impact has been measurable and
                sustained.
              </p>

              <div className="mt-8">
                <h4 className="text-white text-xl font-bold">
                  – Head of HR
                </h4>

                <p className="text-gray-300 text-sm mt-1">
                  Globe Manufacturing Company
                </p>
              </div>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {stories.map((story, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-[18px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer"
                >

                  <div className="overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[185px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between min-h-[170px]">

                    <h3 className="text-[17px] leading-7 font-semibold text-[#062C24] group-hover:text-[#3F9975] transition-colors duration-300">
                      {story.title}
                    </h3>

                    <button className="mt-5 flex items-center gap-2 text-[15px] font-medium text-[#062C24] group">
                      Read Story

                      <span className="text-lg group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SuccessStories;