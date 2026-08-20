import {
  FaUserTie,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaClipboardCheck,
  FaBullseye,
  FaPeopleArrows,
  FaRobot,
  FaCompass,
  FaCogs,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

import Navbar from "../components/navbar/desktop/Navbar";
import Contact from "../components/home/Contact";
import Footer from "../components/footer/Footer";

import heroImage from "../assets/images/OurDifference/our-difference-hero.png";

import WhatMakesUsDifferentData from "../data/WhatMakesUsDifferentData";

const WhatMakesUsDifferent = () => {
  const data = WhatMakesUsDifferentData;

  return (
    <div className="min-h-screen bg-white text-[#07372F] overflow-hidden">

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <Navbar />

      <main className="pt-[2px]">

        {/* =========================================================
            HERO SECTION
        ========================================================= */}

        <section className="relative bg-gradient-to-br from-[#E8FFF5] via-[#F4FFFA] to-[#E5F8EF] border-b border-[#D8EEE5]">

          <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-8 lg:py-11">

            {/* Breadcrumb */}

            <div className="flex flex-wrap items-center gap-2 text-[11px] lg:text-[12px] text-[#78908A] mb-5">

              {data.breadcrumb.map((item, index) => (

                <div
                  key={item}
                  className="flex items-center gap-2"
                >

                  <span
                    className={
                      index === data.breadcrumb.length - 1
                        ? "text-[#3F9975] font-semibold"
                        : ""
                    }
                  >
                    {item}
                  </span>

                  {index !== data.breadcrumb.length - 1 && (
                    <span className="text-[#AABAB5]">
                      ›
                    </span>
                  )}

                </div>

              ))}

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">

              {/* ================= LEFT ================= */}

              <div className="max-w-[700px]">

                <p className="uppercase tracking-[2px] text-[12px] lg:text-[13px] font-bold text-[#3F9975] mb-3">
                  {data.hero.label}
                </p>

                <h1 className="text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[64px] leading-[1.04] font-bold tracking-[-1.8px] text-[#07372F]">

                  {data.hero.title}{" "}

                  <span className="text-[#3F9975]">
                    {data.hero.highlightedTitle}
                  </span>

                </h1>

                <div className="mt-4 h-[4px] w-[62px] rounded-full bg-gradient-to-r from-[#3F9975] to-[#7AD0A8]" />

                <p className="mt-5 text-[15px] lg:text-[17px] leading-7 text-[#536762] max-w-[680px]">
                  {data.hero.description}
                </p>

              </div>


              {/* ================= RIGHT IMAGE ================= */}

              <div className="relative group">

                <div className="relative overflow-hidden rounded-[24px] border border-[#D2EBE1] shadow-[0_15px_40px_rgba(4,70,55,0.10)] transition-all duration-500 group-hover:shadow-[0_22px_50px_rgba(4,70,55,0.18)]">

                  <img
                    src={heroImage}
                    alt="What Makes Us Different"
                    className="w-full h-[260px] sm:h-[320px] lg:h-[350px] object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#005B49]/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                </div>

                {/* Decorative circles */}

                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-[#CFF5E4] -z-10 transition-transform duration-500 group-hover:scale-125" />

                <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-[#E0F8ED] -z-10 transition-transform duration-500 group-hover:scale-125" />

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            BUSINESS BEFORE LEARNING
        ========================================================= */}

        <section className="py-14 lg:py-18 bg-white">

          <div className="max-w-[1350px] mx-auto px-8 lg:px-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* ================= GREEN CARD ================= */}

              <div className="group relative overflow-hidden bg-gradient-to-br from-[#005B49] to-[#004D3F] rounded-[24px] p-8 lg:p-10 min-h-[350px] shadow-[0_15px_40px_rgba(0,91,73,0.14)] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,91,73,0.22)] transition-all duration-500">

                {/* Decorative circle */}

                <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-[#3F9975]/20 transition-transform duration-700 group-hover:scale-150" />

                <div className="relative z-10">

                  <div className="flex items-center gap-4 mb-6">

                    <div className="w-14 h-14 rounded-full bg-[#E4FFF4] flex items-center justify-center text-[#08745D] shrink-0 group-hover:rotate-6 group-hover:scale-105 transition-all duration-300">

                      <FaBullseye className="text-[23px]" />

                    </div>

                    <h2 className="text-[25px] lg:text-[30px] font-bold text-white">
                      {data.businessBeforeLearning.title}
                    </h2>

                  </div>

                  <p className="text-[15px] lg:text-[16px] leading-7 text-[#D8EEE8]">
                    {data.businessBeforeLearning.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-[#5A8F84]">

                    <div className="flex items-center gap-4">

                      <div className="w-11 h-11 rounded-full bg-[#D5E9E3] flex items-center justify-center text-[#005B49] shrink-0">
                        <FaChartLine className="text-[17px]" />
                      </div>

                      <p className="text-[15px] lg:text-[17px] font-semibold text-white leading-6">

                        {data.businessBeforeLearning.bottomText}{" "}

                        <span className="text-[#8DE0C1]">
                          {data.businessBeforeLearning.bottomHighlightedText}
                        </span>

                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* ================= EXPLORE FIRST ================= */}

              <div>

                <p className="uppercase tracking-[2px] text-[12px] font-bold text-[#3F9975] mb-2">
                  OUR APPROACH
                </p>

                <h2 className="text-[31px] lg:text-[39px] font-bold text-[#07372F] leading-tight">
                  What We Explore First
                </h2>

                <div className="mt-3 h-[4px] w-[52px] rounded-full bg-[#4BA77A]" />

                <div className="mt-6 space-y-2">

                  {data.exploreItems.map((item, index) => {

                    const Icon = item.icon;

                    return (

                      <div
                        key={index}
                        className="group flex items-center gap-4 p-3 rounded-xl hover:bg-[#F1FBF6] transition-all duration-300 cursor-default"
                      >

                        <div className="w-12 h-12 rounded-full bg-[#E7F8F0] flex items-center justify-center text-[#3F9975] shrink-0 group-hover:bg-[#D2F2E2] group-hover:scale-110 transition-all duration-300">

                          <Icon className="text-[18px] group-hover:scale-110 transition-transform" />

                        </div>

                        <p className="text-[15px] lg:text-[16px] font-medium text-[#40524D] group-hover:text-[#005B49] transition-colors duration-300">
                          {item.text}
                        </p>

                      </div>

                    );

                  })}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            FOUR APPROACH CARDS
        ========================================================= */}

        <section className="pb-14 lg:pb-18 bg-white">

          <div className="max-w-[1350px] mx-auto px-8 lg:px-12">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {data.approachCards.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="group relative min-h-[265px] rounded-[20px] border border-[#E3ECE8] bg-white p-6 lg:p-7 shadow-[0_7px_22px_rgba(0,0,0,0.035)] hover:-translate-y-2 hover:border-[#BFE6D4] hover:bg-gradient-to-br hover:from-white hover:to-[#F2FBF7] hover:shadow-[0_18px_40px_rgba(0,91,73,0.12)] transition-all duration-400"
                  >

                    <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#3F9975] rounded-full group-hover:w-full transition-all duration-500" />

                    <div className="w-13 h-13 w-[52px] rounded-full bg-[#E8F8F0] flex items-center justify-center text-[#3F9975] group-hover:bg-[#D5F2E4] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">

                      <Icon className="text-[20px]" />

                    </div>

                    <h3 className="mt-6 text-[19px] lg:text-[21px] font-bold text-[#07372F] group-hover:text-[#005B49] transition-colors">
                      {item.title}
                    </h3>

                    <div className="mt-2 h-[3px] w-[36px] rounded-full bg-[#4BA77A] group-hover:w-[52px] transition-all duration-300" />

                    <p className="mt-4 text-[13px] lg:text-[14px] leading-6 text-[#687773]">
                      {item.description}
                    </p>

                    <FaArrowRight className="mt-5 text-[12px] text-[#3F9975] group-hover:translate-x-2 transition-transform duration-300" />

                  </div>

                );

              })}

            </div>

          </div>

        </section>


        {/* =========================================================
            TAILOR MADE SOLUTIONS
        ========================================================= */}

        <section className="pt-12 pb-7 lg:pt-14 lg:pb-8 bg-[#F5FBF8] border-y border-[#E4F0EB]">

          <div className="max-w-[900px] mx-auto px-8 text-center">

            <p className="uppercase tracking-[2px] text-[12px] font-bold text-[#3F9975] mb-2">
              OUR SOLUTIONS
            </p>

            <h2 className="text-[31px] sm:text-[36px] lg:text-[42px] font-bold leading-tight text-[#07372F]">
              {data.tailorMade.title}
            </h2>

            <div className="mx-auto mt-4 h-[4px] w-[58px] rounded-full bg-gradient-to-r from-[#3F9975] to-[#7AD0A8]" />

            <p className="mt-5 text-[15px] lg:text-[17px] leading-7 text-[#63716D]">
              {data.tailorMade.description}
            </p>

          </div>

        </section>


        {/* =========================================================
            SOLUTION CARDS
        ========================================================= */}

        <section className="pt-7 pb-12 lg:pt-8 lg:pb-16 bg-[#F5FBF8]">

          <div className="max-w-[1350px] mx-auto px-8 lg:px-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">

              {data.solutionCards.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="group relative overflow-hidden bg-[#E3F8EE] rounded-[20px] p-7 lg:p-8 min-h-[205px] border border-[#D3EFE2] hover:bg-[#D8F5E7] hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(0,91,73,0.10)] transition-all duration-400"
                  >

                    <div className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full bg-[#B8EBD2]/40 group-hover:scale-150 transition-transform duration-700" />

                    <div className="relative z-10 flex items-start gap-5">

                      <div className="w-13 h-13 w-[52px] rounded-full bg-white flex items-center justify-center text-[#3F9975] shrink-0 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">

                        <Icon className="text-[20px]" />

                      </div>

                      <div className="flex-1">

                        <h3 className="text-[23px] lg:text-[26px] font-bold text-[#07372F] group-hover:text-[#005B49] transition-colors">
                          {item.title}
                        </h3>

                        <div className="mt-2 h-[3px] w-[40px] rounded-full bg-[#4BA77A] group-hover:w-[60px] transition-all duration-300" />

                        <ul className="mt-5 space-y-2">

                          {item.items.map((point, pointIndex) => (

                            <li
                              key={pointIndex}
                              className="flex items-start gap-3 text-[14px] lg:text-[15px] text-[#415851]"
                            >

                              <span className="mt-[8px] w-[5px] h-[5px] rounded-full bg-[#3F9975] shrink-0 group-hover:scale-125 transition-transform" />

                              <span>
                                {point}
                              </span>

                            </li>

                          ))}

                        </ul>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </section>


        {/* =========================================================
            BOTTOM MESSAGE
        ========================================================= */}

        <section className="py-10 lg:py-12 bg-white">

          <div className="max-w-[1350px] mx-auto px-8 lg:px-12">

            <div className="group relative overflow-hidden bg-gradient-to-r from-[#005B49] to-[#006B55] rounded-[20px] px-7 lg:px-10 py-7 lg:py-8 shadow-[0_15px_35px_rgba(0,91,73,0.14)] hover:shadow-[0_20px_45px_rgba(0,91,73,0.20)] transition-all duration-500">

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 lg:gap-7">

                <div className="w-14 h-14 rounded-full bg-[#E0F8ED] flex items-center justify-center text-[#08745D] shrink-0 group-hover:rotate-6 group-hover:scale-105 transition-all duration-300">

                  <FaCompass className="text-[21px]" />

                </div>

                <p className="text-[15px] lg:text-[17px] leading-7 text-white font-medium max-w-[1050px]">
                  {data.bottomMessage.text}
                </p>

              </div>

              <div className="absolute -right-10 -bottom-16 w-40 h-40 rounded-full bg-[#08745D] opacity-40 group-hover:scale-125 transition-transform duration-700" />

              <div className="absolute right-20 -top-16 w-28 h-28 rounded-full bg-[#3F9975] opacity-20 group-hover:scale-125 transition-transform duration-700" />

            </div>

          </div>

        </section>

      </main>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />

    </div>
  );
};

export default WhatMakesUsDifferent;