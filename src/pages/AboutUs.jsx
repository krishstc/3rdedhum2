import React from "react";
import { UsersRound } from "lucide-react";
import Footer from "../components/footer/Footer";
import aboutUs from "../data/AboutUs";

function AboutUs() {
  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">

      <main>

        {/* ================= BREADCRUMB ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pt-10 sm:pt-12 lg:pt-14">

          <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#7B8A86] tracking-wide">

            <span>Home</span>

            <span className="mx-3">›</span>

            <span>{aboutUs.breadcrumb.section}</span>

            <span className="mx-3">›</span>

            <span className="text-[#4A8E76]">
              {aboutUs.breadcrumb.category}
            </span>

          </p>

        </section>


        {/* ================= HERO ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pt-10 sm:pt-12 lg:pt-14">

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">

            {/* ================= LEFT CONTENT ================= */}

            <div>

              <div className="inline-flex flex-col items-start">

                <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-semibold tracking-[1.2px] text-[#548C78]">
                  {aboutUs.label}
                </span>

                <span className="mt-3 h-[3px] w-[68px] rounded-full bg-[#4D997A]" />

              </div>


              <h1 className="mt-7 max-w-[850px] text-[40px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[62px] leading-[1.08] font-bold tracking-[-2px] text-[#07372F]">
                {aboutUs.title}
              </h1>


              <p className="mt-7 max-w-[760px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.48] text-[#4F5958]">
                {aboutUs.introduction}
                <span className="text-[#3C9A72] font-medium">
                  {aboutUs.highlightedIntroduction}
                </span>
              </p>

            </div>


            {/* ================= HERO IMAGE ================= */}

            <div className="relative hidden lg:flex items-center justify-center min-h-[350px]">

              {/* SOFT BACKGROUND */}

              <div className="absolute h-[350px] w-[350px] rounded-[28px] bg-[#E5FAF1]" />

              {/* IMAGE */}

              <div className="relative z-10 h-[450px] w-[450px] overflow-hidden rounded-[28px] shadow-[0_8px_25px_rgba(0,86,65,0.12)]">

                <img
                  src="https://www.cgi.com/sites/default/files/group-of-consultants-at-table.jpg"
                  alt="Business consultants collaborating in a modern office"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

        </section>


        {/* ================= PHILOSOPHY + SOLUTIONS ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 mt-20 sm:mt-24 lg:mt-28 pb-14 sm:pb-16 lg:pb-20">

          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-5 lg:gap-6 items-stretch">


            {/* ================= OUR PHILOSOPHY ================= */}

            <div className="rounded-xl bg-[#005641] px-6 sm:px-7 lg:px-8 py-7 sm:py-8 lg:py-9">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">

                  <UsersRound
                    size={30}
                    strokeWidth={1.7}
                    className="text-[#4A9877]"
                  />

                </div>

                <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-bold text-white">
                  {aboutUs.philosophyTitle}
                </h2>

              </div>


              <div className="mt-10 space-y-5">

                {aboutUs.philosophy.map((item) => (

                  <div
                    key={item.id}
                    className="flex items-start gap-4"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">

                      <UsersRound
                        size={20}
                        strokeWidth={1.6}
                        className="text-[#4A9877]"
                      />

                    </div>

                    <p className="pt-1 text-[13px] sm:text-[14px] leading-[1.4] text-white">
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* ================= SOLUTIONS ================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

              {aboutUs.solutions.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.id}
                    className="min-h-[185px] rounded-xl bg-white border border-[#E7E7E7] shadow-[0_4px_10px_rgba(0,0,0,0.12)] px-5 py-6 flex flex-col items-center text-center"
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">

                      <Icon
                        size={25}
                        strokeWidth={1.6}
                        className="text-[#4A9877]"
                      />

                    </div>


                    <h3 className="mt-5 max-w-[180px] text-[14px] sm:text-[15px] font-bold leading-[1.25] text-[#101F1D]">
                      {item.title}
                    </h3>


                    <div className="mt-2.5 h-[3px] w-[34px] rounded-full bg-[#4D997A]" />


                    <p className="mt-4 max-w-[190px] text-[11px] sm:text-[12px] leading-[1.4] text-[#4F5958]">
                      {item.description}
                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default AboutUs;