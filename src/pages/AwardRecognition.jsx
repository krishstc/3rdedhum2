import React from "react";
import {
  Award,
  Handshake,
  Target,
  BriefcaseBusiness,
  Lightbulb,
  UsersRound,
  BadgeCheck,
} from "lucide-react";
import Footer from "../components/footer/Footer";

import awardRecognition from "../data/AwardRecognition";

function AwardRecognition() {
  const aspirationIcons = [
    Handshake,
    UsersRound,
    Lightbulb,
    BriefcaseBusiness,
  ];

  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">

      {/* ================= MAIN ================= */}

      <main>

        {/* ================= BREADCRUMB ================= */}

        <section className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 pt-8 sm:pt-10 lg:pt-12">

          <p className="text-[12px] lg:text-[13px] text-[#7B8A86] tracking-wide">

            <span>Home</span>

            <span className="mx-2">›</span>

            <span>Why 3rd EdHum</span>

            <span className="mx-2">›</span>

            <span>Why 3rd EdHum</span>

            <span className="mx-2">›</span>

            <span className="text-[#4A8E76]">Awards & Recognition</span>

          </p>

        </section>


        {/* ================= HERO ================= */}

        <section className="relative max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 pt-8 sm:pt-10 lg:pt-12">

          <div className="absolute -right-[130px] -top-[80px] w-[360px] h-[360px] rounded-full bg-[#E8FAF3] opacity-80 pointer-events-none" />

          <div className="relative z-10">

            {/* LABEL */}

            <div className="inline-flex flex-col items-start">

              <span className="text-[13px] lg:text-[14px] font-semibold tracking-[1px] text-[#548C78]">
                AWARDS
              </span>

              <span className="mt-2 h-[3px] w-[56px] rounded-full bg-[#4D997A]" />

            </div>


            {/* HEADING */}

            <h1 className="mt-6 text-[40px] sm:text-[46px] md:text-[52px] lg:text-[58px] leading-[1.08] font-bold tracking-[-1.8px] text-[#07372F]">

              Awards &{" "}

              <span className="text-[#3C9A72]">
                Recognition.
              </span>

            </h1>


            {/* QUOTE */}

            <div className="mt-7 sm:mt-8 flex items-center gap-4 sm:gap-5 max-w-[1050px]">

              <div className="h-[60px] w-[4px] shrink-0 bg-[#4D997A]" />

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">

                <Award
                  size={27}
                  strokeWidth={1.7}
                  className="text-[#4A9877]"
                />

              </div>

              <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.5] text-[#3F4947]">

                {awardRecognition.quote}

              </p>

            </div>


            {/* INTRODUCTION */}

            <p className="mt-7 sm:mt-8 max-w-[1100px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.55] text-[#4F5958]">

              {awardRecognition.introduction}

            </p>

          </div>

        </section>


        {/* ================= REPUTATION + ASPIRATION ================= */}

        <section className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 mt-12 sm:mt-14 lg:mt-16 pb-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">


            {/* ================= LEFT ================= */}

            <div>

              {/* TITLE */}

              <div className="flex items-start gap-4 mb-5 sm:mb-6">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">

                  <BadgeCheck
                    size={25}
                    strokeWidth={1.7}
                    className="text-[#4A9877]"
                  />

                </div>

                <div>

                  <h2 className="text-[23px] sm:text-[25px] lg:text-[27px] font-bold leading-[1.2] text-[#101F1D]">

                    Our Reputation Is Built Through

                  </h2>

                  <div className="mt-2 h-[3px] w-[45px] rounded-full bg-[#4D997A]" />

                </div>

              </div>


              {/* LIST */}

              <div className="overflow-hidden rounded-lg border border-[#DCE4E1] bg-white shadow-sm">

                {awardRecognition.reputationPoints.map(
                  (point, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-4 border-b border-[#DCE4E1] px-4 py-3 last:border-b-0 sm:px-5 sm:py-3.5"
                    >

                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">

                        <span className="h-2 w-2 rounded-full bg-[#3F9975]" />

                      </span>

                      <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium text-[#252D2C]">

                        {point}

                      </span>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* ================= RIGHT ================= */}

            <div>

              {/* TITLE */}

              <div className="flex items-start gap-4 mb-5 sm:mb-6">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">

                  <Target
                    size={25}
                    strokeWidth={1.7}
                    className="text-[#4A9877]"
                  />

                </div>

                <div>

                  <h2 className="text-[23px] sm:text-[25px] lg:text-[27px] font-bold leading-[1.2] text-[#101F1D]">

                    What We Aspire to Be Known For

                  </h2>

                  <div className="mt-2 h-[3px] w-[45px] rounded-full bg-[#4D997A]" />

                </div>

              </div>


              {/* ASPIRATION CARDS */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {awardRecognition.aspirationCards.map((card, index) => {

                  const Icon = aspirationIcons[index] || Award;

                  return (

                    <div
                      key={card.id}
                      className="min-h-[165px] bg-[#E2F8EF] px-5 py-5 flex flex-col items-center justify-center text-center rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">

                        <Icon
                          size={23}
                          strokeWidth={1.7}
                          className="text-[#4A9877]"
                        />

                      </div>


                      <h3 className="mt-4 text-[15px] sm:text-[16px] lg:text-[17px] font-bold leading-[1.2] text-[#063B3D]">

                        {card.title}

                      </h3>


                      <p className="mt-3 text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.4] text-[#596460]">

                        {card.description}

                      </p>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 pb-10">

          <div className="flex items-center gap-4 sm:gap-5 rounded-xl bg-[#005641] px-5 py-6 sm:px-8 sm:py-7 md:px-10">

            {/* ICON */}

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">

              <Award
                size={25}
                strokeWidth={1.7}
                className="text-[#4A9877]"
              />

            </div>


            {/* TEXT */}

            <p className="max-w-[850px] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.5] text-white">

              {awardRecognition.closing}

            </p>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default AwardRecognition;