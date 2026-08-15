import React from "react";
import { Globe2 } from "lucide-react";
import Footer from "../components/footer/Footer";
import industryExpertise from "../data/IndustryExpertise";

function IndustryExpertise() {
  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">
      <main>

        {/* ================= BREADCRUMB ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pt-10 sm:pt-12 lg:pt-14">
          <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#7B8A86] tracking-wide">
            <span>Home</span>

            <span className="mx-3">›</span>

            <span>{industryExpertise.breadcrumb.section}</span>

            <span className="mx-3">›</span>

            <span>{industryExpertise.breadcrumb.category}</span>

            <span className="mx-3">›</span>

            <span className="text-[#4A8E76]">
              {industryExpertise.breadcrumb.current}
            </span>
          </p>
        </section>


        {/* ================= HERO ================= */}

        <section className="relative max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pt-10 sm:pt-12 lg:pt-14">

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">

            {/* ================= LEFT CONTENT ================= */}

            <div className="relative z-10">

              {/* LABEL */}

              <div className="inline-flex flex-col items-start">

                <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-semibold tracking-[1.2px] text-[#548C78]">
                  {industryExpertise.label}
                </span>

                <span className="mt-3 h-[3px] w-[58px] rounded-full bg-[#4D997A]" />

              </div>


              {/* HEADING */}

              <h1 className="mt-7 max-w-[700px] text-[40px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[62px] leading-[1.08] font-bold tracking-[-2px] text-[#07372F]">

                Cross-Industry{" "}

                <span className="text-[#3C9A72]">
                  Expertise.
                </span>

              </h1>


              {/* INTRODUCTION */}

              <p className="mt-7 max-w-[690px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.48] text-[#4F5958]">
                {industryExpertise.introduction}
              </p>

            </div>


            {/* ================= WORLD MAP IMAGE ================= */}

            <div className="relative hidden lg:flex justify-end items-start pt-0">

            <div className="relative w-[600px] h-[350px] flex items-center justify-center">

                <img
                src={industryExpertise.image}
                alt="Global presence world map"
                className="w-full h-full object-contain scale-110"
                />

            </div>

            </div>

          </div>

        </section>


        {/* ================= INDUSTRY CARDS ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 mt-16 sm:mt-20 lg:mt-24">

          {/* ================= FIRST ROW ================= */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">

            {industryExpertise.industries.slice(0, 3).map((industry) => {

              const Icon = industry.icon;

              return (
                <div
                  key={industry.id}
                  className="
                    min-h-[300px]
                    sm:min-h-[305px]
                    rounded-xl
                    bg-white
                    border
                    border-[#E8E8E8]
                    shadow-[0_4px_10px_rgba(0,0,0,0.12)]
                    px-6
                    sm:px-7
                    lg:px-8
                    py-7
                    sm:py-8
                  "
                >

                  {/* ICON */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D9F8EB]">

                    <Icon
                      size={30}
                      strokeWidth={1.5}
                      className="text-[#4A9877]"
                    />

                  </div>


                  {/* TITLE */}

                  <h2 className="mt-8 text-[16px] sm:text-[17px] lg:text-[18px] font-bold leading-[1.3] text-[#101F1D]">
                    {industry.title}
                  </h2>


                  {/* UNDERLINE */}

                  <div className="mt-3 h-[3px] w-[38px] rounded-full bg-[#4D997A]" />


                  {/* ITEMS */}

                  <ul className="mt-6 space-y-1.5 text-[13px] sm:text-[14px] leading-[1.4] text-[#4F5958]">

                    {industry.items.map((item) => (

                      <li
                        key={item}
                        className="flex items-start gap-2"
                      >

                        <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#303A38]" />

                        <span>
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>
              );

            })}

          </div>


          {/* ================= SECOND ROW ================= */}

          <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:max-w-[900px] md:mx-auto">

            {industryExpertise.industries.slice(3, 5).map((industry) => {

              const Icon = industry.icon;

              return (
                <div
                  key={industry.id}
                  className="
                    min-h-[300px]
                    sm:min-h-[305px]
                    rounded-xl
                    bg-white
                    border
                    border-[#E8E8E8]
                    shadow-[0_4px_10px_rgba(0,0,0,0.12)]
                    px-6
                    sm:px-7
                    lg:px-8
                    py-7
                    sm:py-8
                  "
                >

                  {/* ICON */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D9F8EB]">

                    <Icon
                      size={30}
                      strokeWidth={1.5}
                      className="text-[#4A9877]"
                    />

                  </div>


                  {/* TITLE */}

                  <h2 className="mt-8 text-[16px] sm:text-[17px] lg:text-[18px] font-bold leading-[1.3] text-[#101F1D]">
                    {industry.title}
                  </h2>


                  {/* UNDERLINE */}

                  <div className="mt-3 h-[3px] w-[38px] rounded-full bg-[#4D997A]" />


                  {/* ITEMS */}

                  <ul className="mt-6 space-y-1.5 text-[13px] sm:text-[14px] leading-[1.4] text-[#4F5958]">

                    {industry.items.map((item) => (

                      <li
                        key={item}
                        className="flex items-start gap-2"
                      >

                        <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#303A38]" />

                        <span>
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>
              );

            })}

          </div>

        </section>


        {/* ================= CLOSING CTA ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 mt-16 sm:mt-20 lg:mt-24 pb-14 sm:pb-16 lg:pb-20">

          <div className="rounded-2xl bg-[#D9F8EB] px-6 sm:px-8 lg:px-10 py-7 sm:py-8">

            <div className="flex items-center gap-5 sm:gap-6">

              {/* ICON */}

              <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-[#005641]">

                <Globe2
                  size={28}
                  strokeWidth={1.7}
                  className="text-white"
                />

              </div>


              {/* TEXT */}

              <p className="max-w-[1050px] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.5] font-medium text-[#173D35]">
                {industryExpertise.closing}
              </p>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default IndustryExpertise;