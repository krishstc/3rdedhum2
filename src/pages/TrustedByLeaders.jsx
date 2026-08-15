import React from "react";
import { Quote } from "lucide-react";

import Footer from "../components/footer/Footer";
import trustedByLeaders from "../data/TrustedByLeaders";

function TrustedByLeaders() {
  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">
      <main>

        {/* ================= BREADCRUMB ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pt-10 sm:pt-12 lg:pt-14">
          <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#7B8A86] tracking-wide">
            <span>Home</span>

            <span className="mx-2 sm:mx-3">›</span>

            <span>{trustedByLeaders.breadcrumb.section}</span>

            <span className="mx-2 sm:mx-3">›</span>

            <span className="text-[#4A8E76]">
              {trustedByLeaders.breadcrumb.category}
            </span>

            <span className="mx-2 sm:mx-3">›</span>

            <span className="text-[#4A8E76]">
              {trustedByLeaders.breadcrumb.current}
            </span>
          </p>
        </section>


        {/* ================= HERO ================= */}

        <section className="relative max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pt-10 sm:pt-12 lg:pt-14">

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center">

            {/* ================= LEFT CONTENT ================= */}

            <div className="relative z-10">

              {/* LABEL */}

              <div className="inline-flex flex-col items-start">

                <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-[1px] text-[#548C78]">
                  {trustedByLeaders.label}
                </span>

                <span className="mt-2.5 h-[3px] w-[70px] rounded-full bg-[#4D997A]" />

              </div>


              {/* HEADING */}

              <h1 className="mt-6 sm:mt-7 max-w-[850px] text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] xl:text-[60px] leading-[1.08] font-bold tracking-[-1.8px] text-[#07372F]">
                Trusted By Leaders at Every Level
              </h1>


              {/* INTRODUCTION */}

              <p className="mt-6 sm:mt-7 max-w-[900px] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.45] text-[#4F5958]">
                {trustedByLeaders.introduction}

                <span className="text-[#3C9A72] font-medium">
                  {trustedByLeaders.highlightedIntroduction}
                </span>
              </p>

            </div>


            {/* ================= HERO PEOPLE ILLUSTRATION ================= */}

            <div className="relative hidden lg:flex justify-center items-center">

              {/* Decorative background */}

              <div className="relative w-[500px] h-[390px] flex items-end justify-center">

                {/* Background circle */}

                <div className="absolute right-[20px] top-[15px] h-[350px] w-[350px] rounded-full bg-[#D9F8EB] opacity-90" />


                {/* Small dotted decoration */}

                <div className="absolute right-[5px] top-[30px] grid grid-cols-5 gap-[8px] opacity-70">

                  {Array.from({ length: 25 }).map((_, index) => (

                    <span
                      key={index}
                      className="h-[5px] w-[5px] rounded-full bg-[#70BDA7]"
                    />

                  ))}

                </div>


                {/* ================= PROFESSIONAL PEOPLE GROUP ================= */}

                <div className="relative z-10 flex items-end justify-center gap-7 pb-5">


                  {/* ================= LEFT PERSON ================= */}

                  <div className="relative flex w-[105px] flex-col items-center">

                    {/* HEAD HALO */}

                    <div className="absolute top-[-8px] h-[72px] w-[72px] rounded-full border-[7px] border-[#A8E3D0]" />

                    {/* HEAD */}

                    <div className="relative z-10 h-[58px] w-[58px] rounded-full bg-[#3C9A72]" />

                    {/* BODY */}

                    <div className="relative z-10 mt-2 h-[115px] w-[88px] rounded-t-[42px] bg-[#3C9A72]" />

                  </div>


                  {/* ================= CENTER PERSON ================= */}

                  <div className="relative flex w-[125px] flex-col items-center">

                    {/* HEAD HALO */}

                    <div className="absolute top-[-10px] h-[90px] w-[90px] rounded-full border-[8px] border-[#7CCDB5]" />

                    {/* HEAD */}

                    <div className="relative z-10 h-[72px] w-[72px] rounded-full bg-[#287D61]" />

                    {/* BODY */}

                    <div className="relative z-10 mt-2 h-[145px] w-[108px] rounded-t-[52px] bg-[#287D61]" />

                  </div>


                  {/* ================= RIGHT PERSON ================= */}

                  <div className="relative flex w-[105px] flex-col items-center">

                    {/* HEAD HALO */}

                    <div className="absolute top-[-8px] h-[72px] w-[72px] rounded-full border-[7px] border-[#A8E3D0]" />

                    {/* HEAD */}

                    <div className="relative z-10 h-[58px] w-[58px] rounded-full bg-[#3C9A72]" />

                    {/* BODY */}

                    <div className="relative z-10 mt-2 h-[115px] w-[88px] rounded-t-[42px] bg-[#3C9A72]" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= MAIN CONTENT ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 mt-12 sm:mt-16 lg:mt-20">

          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1fr] gap-8 lg:gap-10 items-start">


            {/* ================= BUSINESS BEFORE LEARNING ================= */}

            <div className="rounded-xl bg-[#005641] px-6 sm:px-7 lg:px-8 py-7 sm:py-8 lg:py-9 shadow-sm">

              <h2 className="text-[23px] sm:text-[25px] lg:text-[27px] font-bold text-[#9CEBC9]">
                {trustedByLeaders.businessTitle}
              </h2>


              <div className="mt-6 sm:mt-7 space-y-4">

                {trustedByLeaders.businessAudience.map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-4"
                    >

                      {/* ICON */}

                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">

                        <Icon
                          size={22}
                          strokeWidth={1.7}
                          className="text-[#4A9877]"
                        />

                      </div>


                      {/* TEXT */}

                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium text-white leading-[1.3]">
                        {item.title}
                      </p>

                    </div>
                  );

                })}

              </div>

            </div>


            {/* ================= PARTNERS ================= */}

            <div>

              {/* TITLE */}

              <h2 className="text-[25px] sm:text-[28px] lg:text-[30px] font-bold text-[#07372F]">
                {trustedByLeaders.partnersTitle}
              </h2>


              {/* UNDERLINE */}

              <div className="mt-3 h-[3px] w-[40px] rounded-full bg-[#4D997A]" />


              {/* DESCRIPTION */}

              <p className="mt-5 text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.42] text-[#4F5958]">
                {trustedByLeaders.partnersDescription}
              </p>


              {/* ================= ALLIANCE CARDS ================= */}

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">

                {trustedByLeaders.alliances.map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      className="min-h-[105px] rounded-lg bg-white border border-[#E7E7E7] border-l-[5px] border-l-[#167A5C] shadow-[0_4px_10px_rgba(0,0,0,0.12)] px-4 sm:px-5 py-5 flex items-center gap-4"
                    >

                      {/* ICON */}

                      <div className="shrink-0 flex items-center justify-center">

                        <Icon
                          size={37}
                          strokeWidth={1.5}
                          className="text-[#4A9877]"
                        />

                      </div>


                      {/* TEXT */}

                      <div>

                        <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-semibold leading-[1.35] text-[#303D3A]">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[11px] sm:text-[12px] lg:text-[13px] leading-[1.4] text-[#4F5958]">
                          {item.description}
                        </p>

                      </div>

                    </div>
                  );

                })}

              </div>

            </div>

          </div>

        </section>


        {/* ================= CLOSING QUOTE ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 mt-14 sm:mt-18 lg:mt-20 pb-14 sm:pb-16 lg:pb-20">

          <div className="rounded-2xl bg-[#D9F8EB] px-6 sm:px-8 lg:px-10 py-7 sm:py-8">

            <div className="flex items-center gap-5 sm:gap-6">

              {/* QUOTE ICON */}

              <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-[#005641]">

                <Quote
                  size={27}
                  strokeWidth={2}
                  className="text-white"
                />

              </div>


              {/* VERTICAL LINE */}

              <div className="hidden sm:block h-14 w-[3px] rounded-full bg-[#4D997A]" />


              {/* TEXT */}

              <p className="max-w-[950px] text-[14px] sm:text-[15px] lg:text-[17px] leading-[1.4] font-medium text-[#173D35]">
                {trustedByLeaders.closing}
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

export default TrustedByLeaders;