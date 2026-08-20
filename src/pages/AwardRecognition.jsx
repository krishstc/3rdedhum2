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

import awardRecognitionHero from "../assets/images/OurDifference/awards-recognition-hero.png";

function AwardRecognition() {
  const aspirationIcons = [
    Handshake,
    UsersRound,
    Lightbulb,
    BriefcaseBusiness,
  ];

  return (
    <div className="min-h-screen bg-white text-[#0B2F2A] overflow-hidden">

      <main>

        {/* ================= HERO ================= */}

        <section className="relative w-full bg-gradient-to-r from-[#EFFFF8] via-[#F2FFF9] to-[#E7F9F1] border-b border-[#D9EDE5] rounded-b-[16px] overflow-hidden">

          <div className="absolute right-[-100px] top-[-80px] w-[420px] h-[420px] rounded-full bg-[#DDF7EC] opacity-70 pointer-events-none" />

          <div className="relative max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 pt-7 pb-8 lg:pt-8 lg:pb-9">

            {/* Breadcrumb */}

            <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-[12px] text-[#82928D] mb-7">

              <span>Home</span>

              <span>›</span>

              <span>Why 3rd EdHum</span>

              <span>›</span>

              <span>Why 3rd EdHum</span>

              <span>›</span>

              <span className="text-[#4A8F76] font-medium">
                Awards & Recognition
              </span>

            </div>

            {/* Hero Grid */}

            <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-10 items-center">

              {/* LEFT CONTENT */}

              <div>

                <div className="inline-flex flex-col items-start">

                  <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-bold tracking-[1.5px] text-[#4F9279]">
                    AWARDS
                  </span>

                  <span className="mt-2 h-[3px] w-[55px] rounded-full bg-[#4D997A]" />

                </div>

                <h1 className="mt-5 text-[38px] sm:text-[44px] md:text-[50px] lg:text-[55px] xl:text-[60px] leading-[1.05] font-extrabold tracking-[-1.8px] text-[#07372F]">

                  Awards &{" "}

                  <span className="text-[#3C9A72]">
                    Recognition.
                  </span>

                </h1>

                {/* Quote */}

                <div className="mt-6 flex items-center gap-4 max-w-[700px]">

                  <div className="w-[4px] h-[58px] rounded-full bg-[#4D997A] shrink-0" />

                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">

                    <Award
                      size={25}
                      strokeWidth={1.8}
                      className="text-[#438F72]"
                    />

                  </div>

                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] text-[#3F4947]">
                    {awardRecognition.quote}
                  </p>

                </div>

                <p className="mt-6 max-w-[700px] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.55] text-[#4F5958]">
                  {awardRecognition.introduction}
                </p>

              </div>

              {/* HERO IMAGE */}

              <div className="relative flex justify-center lg:justify-end">

                <div className="absolute w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] rounded-full bg-[#DDF7EC] opacity-70" />

                <img
                  src={awardRecognitionHero}
                  alt="Awards and Recognition"
                  className="relative z-10 w-full max-w-[500px] lg:max-w-[540px] h-[280px] sm:h-[320px] lg:h-[350px] object-contain drop-shadow-[0_15px_25px_rgba(0,80,60,0.12)] transition-transform duration-500 hover:scale-[1.02]"
                />

              </div>

            </div>

          </div>

        </section>


        {/* ================= REPUTATION + ASPIRATION ================= */}

        <section className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-14">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-10">

            {/* LEFT */}

            <div>

              <div className="flex items-start gap-4 mb-5">

                <div className="w-11 h-11 rounded-full bg-[#E5F8F0] flex items-center justify-center shrink-0">

                  <BadgeCheck
                    size={24}
                    strokeWidth={1.8}
                    className="text-[#439274]"
                  />

                </div>

                <div>

                  <h2 className="text-[22px] sm:text-[24px] lg:text-[27px] font-bold leading-[1.15] text-[#101F1D]">
                    Our Reputation Is Built Through
                  </h2>

                  <div className="mt-2 h-[3px] w-[48px] rounded-full bg-[#4D997A]" />

                </div>

              </div>

              <div className="overflow-hidden rounded-xl border border-[#DCE7E2] bg-white shadow-[0_5px_18px_rgba(0,60,45,0.05)]">

                {awardRecognition.reputationPoints.map((point, index) => (

                  <div
                    key={index}
                    className="group flex items-center gap-4 border-b border-[#DCE7E2] px-4 sm:px-5 py-3.5 transition-all duration-300 hover:bg-[#E8FAF3] hover:pl-6 last:border-b-0"
                  >

                    <span className="w-5 h-5 rounded-full bg-[#E2F8EF] flex items-center justify-center shrink-0 group-hover:bg-[#CDEFE0] transition-colors">

                      <span className="w-2 h-2 rounded-full bg-[#3F9975]" />

                    </span>

                    <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-medium text-[#252D2C]">
                      {point}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* RIGHT */}

            <div>

              <div className="flex items-start gap-4 mb-5">

                <div className="w-11 h-11 rounded-full bg-[#E5F8F0] flex items-center justify-center shrink-0">

                  <Target
                    size={24}
                    strokeWidth={1.8}
                    className="text-[#439274]"
                  />

                </div>

                <div>

                  <h2 className="text-[22px] sm:text-[24px] lg:text-[27px] font-bold leading-[1.15] text-[#101F1D]">
                    What We Aspire to Be Known For
                  </h2>

                  <div className="mt-2 h-[3px] w-[48px] rounded-full bg-[#4D997A]" />

                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {awardRecognition.aspirationCards.map((card, index) => {

                  const Icon = aspirationIcons[index] || Award;

                  return (

                    <div
                      key={card.id}
                      className="group min-h-[160px] rounded-xl bg-[#E2F8EF] px-5 py-5 flex flex-col items-center justify-center text-center border border-[#D5EFE3] transition-all duration-300 hover:-translate-y-2 hover:bg-[#D7F5E7] hover:shadow-[0_12px_28px_rgba(0,91,73,0.12)]"
                    >

                      <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">

                        <Icon
                          size={22}
                          strokeWidth={1.8}
                          className="text-[#4A9877]"
                        />

                      </div>

                      <h3 className="mt-4 text-[14px] sm:text-[15px] lg:text-[16px] font-bold leading-[1.2] text-[#063B3D]">
                        {card.title}
                      </h3>

                      <p className="mt-2.5 text-[11px] sm:text-[12px] lg:text-[13px] leading-[1.4] text-[#596460]">
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

        <section className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 pb-10 lg:pb-12">

          <div className="group relative overflow-hidden flex items-center gap-4 sm:gap-5 rounded-2xl bg-[#005641] px-5 py-6 sm:px-8 sm:py-7 md:px-10 transition-all duration-300 hover:bg-[#006B57] hover:shadow-[0_15px_35px_rgba(0,86,65,0.20)]">

            <div className="absolute right-[-60px] top-[-80px] w-40 h-40 rounded-full bg-[#3F9975] opacity-20 group-hover:scale-125 transition-transform duration-500" />

            <div className="relative z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">

              <Award
                size={24}
                strokeWidth={1.8}
                className="text-[#4A9877]"
              />

            </div>

            <p className="relative z-10 max-w-[850px] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.5] text-white">
              {awardRecognition.closing}
            </p>

          </div>

        </section>

      </main>

      {/* Existing global footer */}

      <Footer />

    </div>
  );
}

export default AwardRecognition;