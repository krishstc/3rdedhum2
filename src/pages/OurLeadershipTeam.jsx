import React from "react";
import { UsersRound, Crown } from "lucide-react";
import Footer from "../components/footer/Footer";

import ourLeadershipTeam from "../data/OurLeadershipTeam";

function OurLeadershipTeam() {
  const ClosingIcon = ourLeadershipTeam.closing.icon;

  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">

      {/* ================= MAIN ================= */}

      <main>

        {/* ================= BREADCRUMB ================= */}

        <section className="mx-auto max-w-[1250px] px-6 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:pt-12">

          <p className="text-[11px] tracking-wide text-[#7B8A86] sm:text-[12px] lg:text-[13px]">

            <span>Home</span>

            <span className="mx-2">›</span>

            <span>{ourLeadershipTeam.breadcrumb.section}</span>

            <span className="mx-2">›</span>

            <span>{ourLeadershipTeam.breadcrumb.category}</span>

            <span className="mx-2">›</span>

            <span className="text-[#4A8E76]">
              {ourLeadershipTeam.breadcrumb.current}
            </span>

          </p>

        </section>


        {/* ================= HERO ================= */}

        <section className="relative mx-auto max-w-[1250px] px-6 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:pt-12">

          {/* Background Circle */}

          <div className="pointer-events-none absolute -right-[140px] -top-[70px] hidden h-[360px] w-[360px] rounded-full bg-[#E2F8EF] opacity-80 sm:block" />


          {/* ================= LEADERSHIP ICON ================= */}

          <div className="pointer-events-none absolute right-[-10px] top-[150px] hidden h-[150px] w-[150px] items-center justify-center rounded-full border border-[#CBEFE0] bg-white/70 shadow-[0_12px_35px_rgba(63,153,117,0.12)] md:flex sm:right-[40px] sm:top-[160px] lg:right-[20px] lg:top-[100px] lg:h-[260px] lg:w-[260px]">

            <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#D9F8EB] lg:h-[140px] lg:w-[140px]">

              <Crown
                size={58}
                strokeWidth={1.4}
                className="text-[#3F9975]"
              />

            </div>

          </div>


          <div className="relative z-10">

            {/* LABEL */}

            <div className="inline-flex flex-col items-start">

              <span className="text-[12px] font-semibold tracking-[1px] text-[#548C78] sm:text-[13px] lg:text-[14px]">
                {ourLeadershipTeam.label}
              </span>

              <span className="mt-2 h-[3px] w-[56px] rounded-full bg-[#4D997A]" />

            </div>


            {/* HEADING */}

            <h1 className="mt-6 text-[38px] font-bold leading-[1.08] tracking-[-1.8px] text-[#07372F] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[58px]">

              OUR LEADERSHIP{" "}

              <span className="text-[#3C9A72]">
                TEAM.
              </span>

            </h1>


            {/* INTRODUCTION */}

            <div className="mt-6 max-w-[930px] space-y-5">

              {ourLeadershipTeam.introduction.map((paragraph, index) => (

                <p
                  key={index}
                  className="text-[14px] leading-[1.45] text-[#4F5958] sm:text-[15px] lg:text-[16px]"
                >
                  {paragraph}
                </p>

              ))}

            </div>

          </div>

        </section>


        {/* ================= EXPERTISE AREAS ================= */}

        <section className="mx-auto mt-16 max-w-[900px] px-6 pb-8 sm:mt-20 sm:px-8 lg:mt-24 lg:px-10">

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">

            {ourLeadershipTeam.areas.map((area) => {

              const Icon = area.icon;

              return (

                <div
                  key={area.id}
                  className="flex flex-col items-start"
                >

                  {/* ICON */}

                  <div className="flex h-24 w-24 items-center justify-center rounded-sm bg-[#B9F0D9] sm:h-28 sm:w-28">

                    <Icon
                      size={34}
                      strokeWidth={1.6}
                      className="text-[#3F9975]"
                    />

                  </div>


                  {/* TITLE */}

                  <h2 className="mt-5 text-[22px] font-bold leading-[1.2] text-[#101F1D] sm:text-[24px] lg:text-[25px]">

                    {area.title}

                  </h2>


                  {/* UNDERLINE */}

                  <div className="mt-3 h-[3px] w-[42px] rounded-full bg-[#4D997A]" />


                  {/* LIST */}

                  <ul className="mt-8 space-y-2 text-[14px] leading-[1.35] text-[#4F5958] sm:text-[15px] lg:text-[16px]">

                    {area.items.map((item) => (

                      <li
                        key={item}
                        className="flex items-start gap-2"
                      >

                        <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#4D997A]" />

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

        <section className="mx-auto max-w-[1250px] px-6 pb-16 sm:px-8 lg:px-10">

          <div className="flex items-center gap-5 rounded-xl bg-[#005641] px-6 py-7 sm:gap-6 sm:px-8 sm:py-8 lg:px-10">

            {/* ICON */}

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF] sm:h-14 sm:w-14">

              <ClosingIcon
                size={27}
                strokeWidth={1.7}
                className="text-[#4A9877]"
              />

            </div>


            {/* TEXT */}

            <p className="max-w-[900px] text-[13px] leading-[1.45] text-white sm:text-[14px] lg:text-[15px]">

              {ourLeadershipTeam.closing.text}

            </p>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default OurLeadershipTeam;