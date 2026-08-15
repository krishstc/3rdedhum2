import { FaChevronRight, FaArrowRight } from "react-icons/fa";
import whoWeAreData from "../data/WhoWeAreData";
import Footer from "../components/footer/Footer";

function WhoWeAre() {
  return (
    <div className="w-full bg-white text-[#0B2C25]">

      {/* ================= BREADCRUMB ================= */}

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-[84px] pt-6 pb-3">

        <div className="flex items-center gap-2 flex-wrap text-[12px] sm:text-[13px] text-gray-500">

          {whoWeAreData.breadcrumb.map((item, index) => (

            <div
              key={`${item}-${index}`}
              className="flex items-center gap-2"
            >

              <span
                className={
                  index === whoWeAreData.breadcrumb.length - 1
                    ? "font-semibold text-[#0B2C25]"
                    : ""
                }
              >
                {item}
              </span>

              {index < whoWeAreData.breadcrumb.length - 1 && (
                <FaChevronRight className="text-[8px] text-gray-400" />
              )}

            </div>

          ))}

        </div>

      </div>


      {/* ================= HERO ================= */}

      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-[84px] pt-8 pb-12 lg:pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}

          <div className="max-w-[600px]">

            <div className="inline-block mb-5">

              <p className="text-[13px] sm:text-[14px] font-semibold text-[#3F9975] uppercase tracking-[1px]">
                {whoWeAreData.hero.label}
              </p>

              <div className="mt-2 w-[45px] h-[2px] bg-[#3F9975]"></div>

            </div>


            <h1 className="text-[44px] sm:text-[52px] lg:text-[62px] font-bold leading-[1.05] tracking-[-1.5px] text-[#10252D]">

              {whoWeAreData.hero.title}

            </h1>


            <p className="mt-6 max-w-[590px] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.65] text-gray-700">

              {whoWeAreData.hero.description}

            </p>


            {/* FOCUS AREAS */}

            <div className="mt-8 space-y-4">

              {whoWeAreData.focusAreas.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="flex items-center gap-4"
                  >

                    <div className="w-[54px] h-[54px] rounded-[12px] bg-[#EAF7F0] flex items-center justify-center shrink-0">

                      <Icon className="text-[22px] text-[#3F9975]" />

                    </div>


                    <div>

                      <h3 className="text-[16px] sm:text-[17px] font-bold text-[#17252B]">

                        {item.title}

                      </h3>

                      <p className="mt-1 text-[12px] sm:text-[13px] leading-5 text-gray-600">

                        {item.description}

                      </p>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="relative lg:pl-2">

            <div className="absolute -top-10 -left-10 w-[300px] h-[300px] rounded-full bg-[#F1F7F4]"></div>

            <div className="relative z-10 rounded-[24px] overflow-hidden">

              <img
                src={whoWeAreData.hero.image}
                alt="Who We Are"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-[310px] sm:h-[390px] lg:h-[460px] object-cover rounded-[24px]"
              />

            </div>

            {/* DOT PATTERN */}

            <div className="absolute -right-4 bottom-[-20px] w-[90px] h-[90px] opacity-40 hidden xl:block">

              <div className="grid grid-cols-5 gap-2">

                {Array.from({ length: 25 }).map((_, index) => (

                  <span
                    key={index}
                    className="w-[5px] h-[5px] rounded-full bg-[#3F9975]"
                  ></span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHAT DEFINES US ================= */}

      <section className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-0 pb-12">

        <div className="rounded-[24px] bg-[#F3F7F5] px-5 sm:px-8 lg:px-10 py-9 sm:py-11">

          <div className="text-center mb-9">

            <p className="text-[13px] sm:text-[14px] font-semibold text-[#3F9975] uppercase tracking-[0.8px]">
              WHAT DEFINES US
            </p>

            <div className="w-[45px] h-[2px] bg-[#3F9975] mx-auto mt-2"></div>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

            {whoWeAreData.definingUs.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className={`px-5 py-5 text-center ${
                    index < whoWeAreData.definingUs.length - 1
                      ? "lg:border-r lg:border-gray-300"
                      : ""
                  }`}
                >

                  <div className="w-[58px] h-[58px] mx-auto flex items-center justify-center">

                    <Icon className="text-[32px] text-[#174C43]" />

                  </div>


                  <h3 className="mt-4 text-[16px] sm:text-[17px] font-bold text-[#17252B]">

                    {item.title}

                  </h3>


                  <p className="mt-3 text-[12px] sm:text-[13px] leading-[1.6] text-gray-600 max-w-[200px] mx-auto">

                    {item.description}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-0 pb-14">

        <div className="relative overflow-hidden rounded-[22px] bg-[#00453F] px-6 sm:px-8 lg:px-12 py-8">

          {/* DOT PATTERN */}

          <div className="absolute left-0 bottom-0 opacity-30 hidden sm:block">

            <div className="grid grid-cols-7 gap-2">

              {Array.from({ length: 42 }).map((_, index) => (

                <span
                  key={index}
                  className="w-[4px] h-[4px] rounded-full bg-[#3F9975]"
                ></span>

              ))}

            </div>

          </div>


          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">

            <div className="flex items-center gap-5">

              <div className="w-[68px] h-[68px] rounded-full bg-white flex items-center justify-center shrink-0">

                <span className="text-[#174C43] text-[25px] font-bold">
                  ♧
                </span>

              </div>


              <div>

                <h2 className="text-[18px] sm:text-[20px] lg:text-[21px] font-bold text-white">

                  {whoWeAreData.cta.title}

                </h2>


                <p className="mt-2 max-w-[620px] text-[12px] sm:text-[13px] leading-5 text-gray-200">

                  {whoWeAreData.cta.description}

                </p>

              </div>

            </div>


            <button
              type="button"
              className="flex items-center justify-center gap-3 shrink-0 border border-white/70 rounded-[9px] px-5 py-3 text-[13px] sm:text-[14px] font-semibold text-white hover:bg-white hover:text-[#00453F] transition-all duration-300"
            >

              {whoWeAreData.cta.button}

              <FaArrowRight className="text-[11px]" />

            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default WhoWeAre;