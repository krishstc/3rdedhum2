import React from "react";
import { ArrowRight, UsersRound } from "lucide-react";
import Footer from "../components/footer/Footer";
import cultureBelief from "../data/CultureBelief";

function CultureBelief() {
  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">
      <main>

        {/* ================= BREADCRUMB ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pt-10 sm:pt-12 lg:pt-14">
          <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#7B8A86] tracking-wide">
            <span>Home</span>

            <span className="mx-3">›</span>

            <span>{cultureBelief.breadcrumb.section}</span>

            <span className="mx-3">›</span>

            <span>{cultureBelief.breadcrumb.category}</span>

            <span className="mx-3">›</span>

            <span className="text-[#4A8E76]">
              {cultureBelief.breadcrumb.current}
            </span>
          </p>
        </section>


        {/* ================= HERO ================= */}

        <section className="relative max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pt-10 sm:pt-12 lg:pt-14">

          {/* BACKGROUND CIRCLE */}

          <div className="absolute right-[-150px] top-[-40px] hidden lg:block h-[500px] w-[500px] rounded-full bg-[#E5FAF1] opacity-80 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">

            {/* ================= LEFT CONTENT ================= */}

            <div>

              {/* LABEL */}

              <div className="inline-flex flex-col items-start">

                <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-semibold tracking-[1.2px] text-[#548C78]">
                  {cultureBelief.label}
                </span>

                <span className="mt-3 h-[3px] w-[58px] rounded-full bg-[#4D997A]" />

              </div>


              {/* HEADING */}

              <h1 className="mt-7 max-w-[900px] text-[40px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[62px] leading-[1.08] font-bold tracking-[-2px] text-[#07372F]">
                CULTURE &{" "}
                <span className="text-[#3C9A72]">
                  BELIEFS.
                </span>
              </h1>


              {/* INTRODUCTION */}

              <p className="mt-6 max-w-[920px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.55] text-[#4F5958]">
                {cultureBelief.introduction}
              </p>

            </div>


            {/* ================= HERO VISUAL ================= */}

            <div className="relative hidden lg:flex items-center justify-center min-h-[320px]">

              <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-[#D9F8EB]">

                <div className="absolute h-[220px] w-[220px] rounded-full bg-white shadow-[0_8px_25px_rgba(0,86,65,0.10)]" />

                <div className="relative z-10 flex h-[125px] w-[125px] items-center justify-center rounded-full bg-[#005641] shadow-[0_8px_20px_rgba(0,86,65,0.15)]">

                  <UsersRound
                    size={58}
                    strokeWidth={1.4}
                    className="text-[#E2F8EF]"
                  />

                </div>

                <div className="absolute top-[35px] right-[35px] h-5 w-5 rounded-full bg-[#4D997A]" />

                <div className="absolute bottom-[45px] left-[30px] h-4 w-4 rounded-full bg-[#A7DCC7]" />

                <div className="absolute bottom-[30px] right-[65px] h-3 w-3 rounded-full bg-[#3C9A72]" />

              </div>

            </div>

          </div>
        </section>


        {/* ================= CORE BELIEFS ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 mt-20 sm:mt-24 lg:mt-28">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

            {cultureBelief.beliefs.map((belief) => {

              const Icon = belief.icon;

              return (
                <div
                  key={belief.id}
                  className="min-h-[210px] sm:min-h-[225px] rounded-xl bg-white border border-[#E8E8E8] shadow-[0_4px_10px_rgba(0,0,0,0.12)] px-6 sm:px-7 lg:px-8 py-7 sm:py-8 flex items-center gap-5 sm:gap-6"
                >

                  {/* ICON BOX */}

                  <div className="flex h-[105px] w-[105px] sm:h-[110px] sm:w-[110px] shrink-0 items-center justify-center rounded-md bg-[#D9F8EB]">

                    <Icon
                      size={36}
                      strokeWidth={1.5}
                      className="text-[#4A9877]"
                    />

                  </div>


                  {/* CONTENT */}

                  <div>

                    <h2 className="text-[16px] sm:text-[17px] lg:text-[18px] font-bold leading-[1.3] text-[#101F1D]">
                      {belief.title}
                    </h2>

                    <div className="mt-3 h-[3px] w-[38px] rounded-full bg-[#4D997A]" />

                    <p className="mt-5 max-w-[330px] text-[13px] sm:text-[14px] leading-[1.55] text-[#4F5958]">
                      {belief.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>
        </section>


        {/* ================= CULTURE PRINCIPLES ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 mt-16 sm:mt-20 lg:mt-24">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">

            {cultureBelief.principles.map((principle) => {

              const Icon = principle.icon;

              return (
                <div
                  key={principle.id}
                  className="min-h-[215px] sm:min-h-[225px] rounded-xl bg-[#E2F8EF] px-6 sm:px-7 py-7 sm:py-8 flex flex-col items-center text-center"
                >

                  {/* ICON */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">

                    <Icon
                      size={25}
                      strokeWidth={1.7}
                      className="text-[#4A9877]"
                    />

                  </div>


                  {/* TITLE */}

                  <h2 className="mt-7 max-w-[250px] text-[16px] sm:text-[17px] lg:text-[18px] font-bold leading-[1.25] text-[#101F1D]">
                    {principle.title}
                  </h2>


                  {/* UNDERLINE */}

                  <div className="mt-3 h-[3px] w-[38px] rounded-full bg-[#4D997A]" />


                  {/* DESCRIPTION */}

                  <p className="mt-5 max-w-[250px] text-[13px] sm:text-[14px] leading-[1.5] text-[#4F5958]">
                    {principle.description}
                  </p>

                </div>
              );
            })}

          </div>
        </section>


        {/* ================= CTA ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 mt-16 sm:mt-20 lg:mt-24 pb-14 sm:pb-16 lg:pb-20">

          <div className="rounded-2xl bg-[#005641] px-6 sm:px-8 lg:px-10 py-7 sm:py-8 lg:py-9">

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">

              {/* ICON */}

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">

                <UsersRound
                  size={27}
                  strokeWidth={1.7}
                  className="text-[#4A9877]"
                />

              </div>


              {/* TEXT */}

              <div className="flex-1">

                <h2 className="text-[16px] sm:text-[17px] font-semibold text-white">
                  {cultureBelief.cta.title}
                </h2>

                <p className="mt-2 max-w-[700px] text-[12px] sm:text-[13px] leading-[1.5] text-white/80">
                  {cultureBelief.cta.description}
                </p>

              </div>


              {/* BUTTON */}

              <button
                type="button"
                className="shrink-0 flex items-center justify-center gap-2 rounded-md border border-white/50 px-5 py-2.5 text-[12px] sm:text-[13px] font-medium text-white hover:bg-white hover:text-[#005641] transition-all duration-200"
              >
                {cultureBelief.cta.button}

                <ArrowRight
                  size={15}
                  strokeWidth={1.7}
                />

              </button>

            </div>

          </div>
        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default CultureBelief;