import React from "react";
import Footer from "../components/footer/Footer";

import ourLeadershipTeam from "../data/OurLeadershipTeam";

function OurLeadershipTeam() {
  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">

      {/* ================= MAIN ================= */}

      <main>

        {/* ================= BREADCRUMB ================= */}

        <section className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 pt-8 sm:pt-10 lg:pt-12">

          <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#7B8A86] tracking-wide">

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

        <section className="relative max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 pt-8 sm:pt-10 lg:pt-12">

          {/* Background Circle */}

          <div className="absolute -right-[140px] -top-[70px] hidden sm:block w-[360px] h-[360px] rounded-full bg-[#E2F8EF] opacity-80 pointer-events-none" />


          <div className="relative z-10">

            {/* LABEL */}

            <div className="inline-flex flex-col items-start">

              <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-[1px] text-[#548C78]">
                {ourLeadershipTeam.label}
              </span>

              <span className="mt-2 h-[3px] w-[56px] rounded-full bg-[#4D997A]" />

            </div>


            {/* HEADING */}

            <h1 className="mt-6 text-[38px] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[58px] leading-[1.08] font-bold tracking-[-1.8px] text-[#07372F]">

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
                  className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.45] text-[#4F5958]"
                >
                  {paragraph}
                </p>

              ))}

            </div>

          </div>

        </section>


        {/* ================= EXPERTISE AREAS ================= */}

        <section className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-10 mt-16 sm:mt-20 lg:mt-24 pb-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

            {ourLeadershipTeam.areas.map((area) => {

              const Icon = area.icon;

              return (

                <div
                  key={area.id}
                  className="flex flex-col items-start"
                >

                  {/* ICON */}

                  <div className="flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-sm bg-[#B9F0D9]">

                    <Icon
                      size={34}
                      strokeWidth={1.6}
                      className="text-[#3F9975]"
                    />

                  </div>


                  {/* TITLE */}

                  <h2 className="mt-5 text-[22px] sm:text-[24px] lg:text-[25px] font-bold leading-[1.2] text-[#101F1D]">

                    {area.title}

                  </h2>


                  {/* UNDERLINE */}

                  <div className="mt-3 h-[3px] w-[42px] rounded-full bg-[#4D997A]" />


                  {/* LIST */}

                  <ul className="mt-8 space-y-2 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.35] text-[#4F5958]">

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

        <section className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 pb-16">

          <div className="flex items-center gap-5 sm:gap-6 rounded-xl bg-[#005641] px-6 sm:px-8 lg:px-10 py-7 sm:py-8">

            {/* ICON */}

            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">

              <ourLeadershipTeam.closing.icon
                size={27}
                strokeWidth={1.7}
                className="text-[#4A9877]"
              />

            </div>


            {/* TEXT */}

            <p className="max-w-[900px] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.45] text-white">

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