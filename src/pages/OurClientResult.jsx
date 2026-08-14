import React from "react";

import {
  ArrowRight,
  UsersRound,
  Crown,
  TrendingUp,
  Users,
  Sprout,
  Brain,
} from "lucide-react";

import Footer from "../components/footer/Footer";

import ourClientResults from "../data/OurClientResult";

function OurClientResult() {
  const resultVisuals = [
    Crown,
    TrendingUp,
    Users,
    Sprout,
    Brain,
  ];

  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">

      {/* ================= MAIN ================= */}

      <main>

        {/* ================= BREADCRUMB ================= */}

        <section className="max-w-[1250px] mx-auto px-8 lg:px-10 pt-10 lg:pt-12">

          <p className="text-[13px] lg:text-[14px] text-[#7B8A86] tracking-wide">

            <span>Home</span>

            <span className="mx-2">›</span>

            <span>Why 3rd EdHum</span>

            <span className="mx-2">›</span>

            <span>Why 3rd EdHum</span>

            <span className="mx-2">›</span>

            <span className="text-[#4A8E76]">
              Our Client Results
            </span>

          </p>

        </section>


        {/* ================= HERO ================= */}

        <section className="relative max-w-[1250px] mx-auto px-8 lg:px-10 pt-10 lg:pt-12">

          <div className="absolute -right-[130px] top-0 w-[360px] h-[360px] rounded-full bg-[#E8FAF3] opacity-80 pointer-events-none" />

          <div className="relative z-10 max-w-[1000px]">

            {/* LABEL */}

            <div className="inline-flex flex-col items-start">

              <span className="text-[14px] lg:text-[15px] font-semibold tracking-[1.2px] text-[#548C78]">
                Client Results
              </span>

              <span className="mt-2 h-[3px] w-[48px] rounded-full bg-[#4D997A]" />

            </div>


            {/* HEADING */}

            <h1 className="mt-6 text-[42px] sm:text-[48px] md:text-[54px] lg:text-[60px] leading-[1.08] font-bold tracking-[-1.8px] text-[#07372F]">

              Success Measured by{" "}

              <span className="text-[#3C9A72]">
                Outcomes.
              </span>

            </h1>


            {/* DESCRIPTION */}

            <p className="mt-5 max-w-[950px] text-[15px] lg:text-[16px] leading-[1.55] text-[#4F5958]">

              Our clients don't partner with us to conduct workshops.
              They partner with us to improve business performance.
              Across industries, organisations have experienced measurable
              improvements that translate directly into competitive advantage,
              stronger cultures, and sustainable growth. Every engagement
              includes robust mechanisms to evaluate learning effectiveness
              and genuine business impact because accountability matters as
              much to us as it does to you.

            </p>

          </div>

        </section>


        {/* ================= RESULT CARDS ================= */}

        <section className="max-w-[1250px] mx-auto px-8 lg:px-10 mt-14 lg:mt-16 pb-10">

          <div className="space-y-5">

            {ourClientResults.map((result, index) => {

              const Icon = result.icon;

              const ResultVisual =
                resultVisuals[index % resultVisuals.length];

              return (

                <div
                  key={result.id}
                  className="group flex min-h-[155px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_3px_8px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* ================= LEFT ICON ================= */}

                  <div className="flex w-[105px] shrink-0 items-center justify-center bg-[#E2F8EF] sm:w-[120px] md:w-[135px]">

                    <Icon
                      size={40}
                      strokeWidth={1.7}
                      className="text-[#4A9877] transition-transform duration-300 group-hover:scale-110"
                    />

                  </div>


                  {/* ================= CONTENT ================= */}

                  <div className="flex flex-1 flex-col justify-center px-6 py-6 sm:px-7 md:px-8">

                    <h2 className="mb-3 text-[20px] font-bold text-[#063B3D] md:text-[22px]">

                      {result.title}

                    </h2>


                    <ul className="space-y-1.5 text-[13px] leading-5 text-[#333] md:text-[14px]">

                      {result.points.map((point, pointIndex) => (

                        <li
                          key={pointIndex}
                          className="flex items-start"
                        >

                          <span className="mr-2 mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#063B3D]" />

                          <span>
                            {point}
                          </span>

                        </li>

                      ))}

                    </ul>

                  </div>


                  {/* ================= DIVIDER ================= */}

                  <div className="my-6 hidden w-[2px] shrink-0 bg-gray-200 md:block" />


                  {/* ================= RIGHT VISUAL ================= */}

                  <div className="flex w-[115px] shrink-0 items-center justify-center sm:w-[135px] md:w-[155px]">

                    <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#B9F0D8] transition-all duration-300 group-hover:scale-110">

                      <ResultVisual
                        size={32}
                        strokeWidth={1.6}
                        className="text-[#4A9877]"
                      />

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="max-w-[1250px] mx-auto px-8 lg:px-10 pb-10">

          <div className="flex flex-col gap-6 rounded-xl bg-[#005641] px-6 py-7 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-10">

            {/* CTA LEFT */}

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">

                <UsersRound
                  size={25}
                  strokeWidth={1.7}
                  className="text-[#4A9877]"
                />

              </div>


              <div>

                <h3 className="text-[15px] font-semibold md:text-[17px]">

                  Real outcomes. Measurable impact. Lasting change.

                </h3>


                <p className="mt-1 max-w-[580px] text-[12px] leading-5 text-white/80 md:text-[13px]">

                  We are committed to driving meaningful results that
                  create value for your people and your business.

                </p>

              </div>

            </div>


            {/* CTA BUTTON */}

            <button
              type="button"
              className="inline-flex w-fit items-center gap-2 rounded-md border border-white/50 px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#005641]"
            >

              See How We Drive Results

              <ArrowRight size={16} />

            </button>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default OurClientResult;