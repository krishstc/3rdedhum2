import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/footer/Footer";
import heroImage from "../assets/images/OurDifference/our-client-result-hero.png";
import ourClientResultData from "../data/OurClientResult";

const OurClientResult = () => {
  const data = ourClientResultData;

  return (
    <div className="min-h-screen bg-white text-[#07372F] overflow-hidden">
      <main className="pt-[2px]">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#E8FFF5] via-[#F2FFF9] to-[#EFFFF7] border-b border-[#DCEFE7]">
          <div className="absolute -right-32 -top-32 w-[430px] h-[430px] rounded-full bg-[#D9F8EB] opacity-60 pointer-events-none" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 pt-7 pb-8 lg:pt-8 lg:pb-10">

            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 mb-7 text-[11px] lg:text-[12px] text-[#82938E]">
              {data.breadcrumb.map((item, index) => (
                <React.Fragment key={`${item}-${index}`}>
                  <span className={index === data.breadcrumb.length - 1 ? "text-[#3F9975] font-semibold" : ""}>{item}</span>
                  {index < data.breadcrumb.length - 1 && <span className="text-[#AABAB5]">/</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-12 items-center">

              {/* LEFT */}
              <div className="max-w-[650px] animate-[fadeUp_.7s_ease-out]">
                <p className="uppercase tracking-[1.8px] text-[12px] lg:text-[13px] font-bold text-[#3F9975] mb-4">{data.hero.label}</p>

                <h1 className="text-[39px] sm:text-[46px] lg:text-[56px] xl:text-[62px] leading-[1.02] tracking-[-1.8px] font-extrabold text-[#07372F]">
                  {data.hero.title}{" "}
                  <span className="text-[#3F9975]">{data.hero.highlightedTitle}</span>
                </h1>

                <div className="mt-5 w-[55px] h-[4px] rounded-full bg-[#4BA77A]" />

                <p className="mt-5 max-w-[650px] text-[14px] lg:text-[15px] leading-[1.55] text-[#566760]">{data.hero.description}</p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative animate-[heroImage_.9s_ease-out]">
                <div className="group relative overflow-hidden rounded-[22px]">
                  <img src={heroImage} alt="Success Measured by Outcomes" className="w-full h-[245px] sm:h-[280px] lg:h-[300px] object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005B49]/10 to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= RESULT CARDS ================= */}
        <section className="bg-white px-8 lg:px-12 py-8 lg:py-10">
          <div className="max-w-[1320px] mx-auto space-y-5">
            {data.results.map((item, index) => {
              const LeftIcon = item.leftIcon;
              const RightIcon = item.rightIcon;

              return (
                <div key={item.title} style={{ animationDelay: `${index * 100}ms` }} className="group relative flex min-h-[140px] lg:min-h-[145px] overflow-hidden rounded-[10px] border border-[#E1E6E4] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8FFF5] hover:border-[#B9E7D3] hover:shadow-[0_14px_30px_rgba(63,151,117,0.14)] animate-[fadeUp_.6s_ease-out_both]">

                  {/* LEFT GREEN ICON PANEL */}
                  <div className="w-[92px] sm:w-[105px] lg:w-[115px] shrink-0 bg-[#005B49] flex items-center justify-center transition-all duration-300 group-hover:bg-[#08745D]">
                    <LeftIcon className="text-[30px] sm:text-[34px] lg:text-[38px] text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* CENTER CONTENT */}
                  <div className="flex-1 px-6 sm:px-7 lg:px-8 py-5 lg:py-6">
                    <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#07372F]">{item.title}</h2>

                    <ul className="mt-3 space-y-[3px]">
                      {item.points.map((point) => (
                        <li key={point} className="relative pl-3 text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.4] text-[#4A5955]">
                          <span className="absolute left-0 top-[7px] w-[4px] h-[4px] rounded-full bg-[#3F9975]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* DIVIDER */}
                  <div className="hidden sm:block self-center h-[90px] w-[2px] bg-[#E4E9E7]" />

                  {/* RIGHT ICON */}
                  <div className="hidden sm:flex w-[145px] lg:w-[180px] shrink-0 items-center justify-center">
                    <div className="w-[54px] h-[54px] lg:w-[58px] lg:h-[58px] rounded-full bg-[#E6F9F0] flex items-center justify-center text-[#65A98B] transition-all duration-300 group-hover:bg-[#CFF3DF] group-hover:text-[#3F9975] group-hover:scale-110">
                      <RightIcon className="text-[20px] lg:text-[22px]" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* ================= BOTTOM MESSAGE ================= */}
        <section className="px-8 lg:px-12 pt-1 pb-8 lg:pb-10 bg-white">
          <div className="max-w-[1320px] mx-auto">

            <div className="group relative overflow-hidden flex flex-col sm:flex-row items-center gap-5 lg:gap-6 bg-[#005B49] rounded-[12px] px-6 lg:px-7 py-6 lg:py-7 shadow-[0_10px_25px_rgba(0,91,73,0.15)] transition-all duration-300 hover:bg-[#006B56]">

              {/* Icon */}
              <div className="w-[52px] h-[52px] shrink-0 rounded-full bg-[#E1F7EC] flex items-center justify-center text-[#08745D] transition-transform duration-300 group-hover:scale-110">
                <data.bottomMessage.icon className="text-[20px]" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-[14px] lg:text-[15px] font-semibold text-white">{data.bottomMessage.title}</h3>
                <p className="mt-1 max-w-[650px] text-[11px] lg:text-[12px] leading-[1.45] text-[#CBE8DF]">{data.bottomMessage.description}</p>
              </div>

              {/* Button */}
              <button type="button" className="shrink-0 flex items-center gap-2 border border-[#8CCBB3] rounded-[6px] px-4 py-2 text-[11px] lg:text-[12px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#005B49] hover:border-white">
                {data.bottomMessage.button}
                <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Decorative Circle */}
              <div className="absolute -right-16 -bottom-24 w-[170px] h-[170px] rounded-full bg-[#08745D] opacity-30 pointer-events-none" />

            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes heroImage { from { opacity: 0; transform: translateX(35px) scale(0.96); } to { opacity: 1; transform: translateX(0) scale(1); } }
      `}</style>

    </div>
  );
};

export default OurClientResult;