import React from "react";
import { ArrowRight } from "lucide-react";
import Footer from "../components/footer/Footer";

import ourMissionValues from "../data/OurMissionValues";

function OurMissionValues() {
  const MissionIcon = ourMissionValues.mission.icon;
  const VisionIcon = ourMissionValues.vision.icon;

  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">

      {/* ================= MAIN ================= */}

      <main>

        {/* ================= BREADCRUMB ================= */}

        <section className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 pt-8 sm:pt-10 lg:pt-12">

          <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#7B8A86] tracking-wide">

            <span>Home</span>

            <span className="mx-2">›</span>

            <span>{ourMissionValues.breadcrumb.section}</span>

            <span className="mx-2">›</span>

            <span>{ourMissionValues.breadcrumb.category}</span>

            <span className="mx-2">›</span>

            <span className="text-[#4A8E76]">
              {ourMissionValues.breadcrumb.current}
            </span>

          </p>

        </section>


        {/* ================= HERO ================= */}

        <section className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 pt-8 sm:pt-10 lg:pt-12">

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 xl:gap-20 items-start">

            {/* ================= LEFT ================= */}

            <div>

              {/* LABEL */}

              <div className="inline-flex flex-col items-start">

                <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-[1px] text-[#548C78]">
                  {ourMissionValues.label}
                </span>

                <span className="mt-2 h-[3px] w-[56px] rounded-full bg-[#4D997A]" />

              </div>


              {/* HEADING */}

              <h1 className="mt-6 text-[38px] sm:text-[44px] md:text-[50px] lg:text-[52px] xl:text-[56px] leading-[1.05] font-bold tracking-[-1.8px] text-[#07372F]">

                OUR MISSIONS, VISION &{" "}

                <span className="text-[#3C9A72]">
                  VALUES.
                </span>

              </h1>


              {/* INTRODUCTION */}

              <p className="mt-6 max-w-[520px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.55] text-[#4F5958]">

                {ourMissionValues.introduction}

              </p>


              {/* MISSION */}

              <div className="mt-8 sm:mt-9 flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">

                  <MissionIcon
                    size={25}
                    strokeWidth={1.7}
                    className="text-[#4A9877]"
                  />

                </div>

                <div className="pt-1">

                  <h2 className="text-[16px] sm:text-[17px] font-bold text-[#101F1D]">
                    {ourMissionValues.mission.title}
                  </h2>

                  <div className="mt-2 h-[3px] w-[38px] rounded-full bg-[#4D997A]" />

                  <p className="mt-4 max-w-[430px] text-[13px] sm:text-[14px] leading-[1.45] text-[#4F5958]">
                    {ourMissionValues.mission.description}
                  </p>

                </div>

              </div>


              {/* VISION */}

              <div className="mt-8 flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">

                  <VisionIcon
                    size={25}
                    strokeWidth={1.7}
                    className="text-[#4A9877]"
                  />

                </div>

                <div className="pt-1">

                  <h2 className="text-[16px] sm:text-[17px] font-bold text-[#101F1D]">
                    {ourMissionValues.vision.title}
                  </h2>

                  <div className="mt-2 h-[3px] w-[38px] rounded-full bg-[#4D997A]" />

                  <p className="mt-4 max-w-[430px] text-[13px] sm:text-[14px] leading-[1.45] text-[#4F5958]">
                    {ourMissionValues.vision.description}
                  </p>

                </div>

              </div>

            </div>


            {/* ================= RIGHT ================= */}

            <div className="lg:pt-[135px]">

              {/* TITLE */}

              <div>

                <h2 className="text-[23px] sm:text-[25px] lg:text-[27px] font-bold leading-[1.2] text-[#101F1D]">
                  {ourMissionValues.guidingValuesTitle}
                </h2>

                <div className="mt-3 h-[3px] w-[38px] rounded-full bg-[#4D997A]" />

              </div>


              {/* GUIDING VALUE CARDS */}

              <div className="mt-5 space-y-4">

                {ourMissionValues.guidingValues.map((value) => {

                  const Icon = value.icon;

                  return (

                    <div
                      key={value.id}
                      className="relative flex items-center gap-4 sm:gap-5 overflow-hidden rounded-lg border border-[#E0E5E2] bg-white px-5 py-4 sm:px-6 sm:py-4.5 shadow-sm"
                    >

                      <div className="absolute left-0 top-0 h-full w-[10px] bg-[#006247]" />

                      <div className="ml-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D8F7EA]">

                        <Icon
                          size={24}
                          strokeWidth={1.7}
                          className="text-[#4A9877]"
                        />

                      </div>

                      <div>

                        <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#3C9975]">
                          {value.title}
                        </h3>

                        <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.45] text-[#4F5958]">
                          {value.description}
                        </p>

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

        </section>


        {/* ================= CORE VALUES ================= */}

        <section className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 mt-20 sm:mt-24 lg:mt-28 pb-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {ourMissionValues.values.map((value) => {

              const Icon = value.icon;

              return (

                <div
                  key={value.id}
                  className="min-h-[155px] rounded-xl border border-[#E2E6E4] bg-white px-5 sm:px-6 py-6 sm:py-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D8F7EA]">

                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        className="text-[#4A9877]"
                      />

                    </div>

                    <div>

                      <h3 className="text-[20px] sm:text-[21px] lg:text-[22px] font-bold text-[#101F1D]">

                        {value.title}

                      </h3>

                      <div className="mt-2 h-[3px] w-[38px] rounded-full bg-[#4D997A]" />

                      <p className="mt-4 max-w-[450px] text-[13px] sm:text-[14px] leading-[1.45] text-[#4F5958]">

                        {value.description}

                      </p>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default OurMissionValues;