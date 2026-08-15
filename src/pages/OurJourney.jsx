import React from "react";
import { UsersRound, Route } from "lucide-react";
import Footer from "../components/footer/Footer";
import ourJourney from "../data/OurJourney";

function OurJourney() {
  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">
      <main>

        {/* ================= BREADCRUMB ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pt-10 sm:pt-12 lg:pt-14">
          <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#7B8A86] tracking-wide">
            <span>Home</span>
            <span className="mx-3">›</span>
            <span>{ourJourney.breadcrumb.section}</span>
            <span className="mx-3">›</span>
            <span>{ourJourney.breadcrumb.category}</span>
            <span className="mx-3">›</span>
            <span className="text-[#4A8E76]">
              {ourJourney.breadcrumb.current}
            </span>
          </p>
        </section>

        {/* ================= HERO ================= */}

        <section className="relative max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pt-12 sm:pt-14 lg:pt-16">

          <div className="absolute right-[-140px] top-[-10px] hidden lg:block h-[440px] w-[440px] rounded-full bg-[#E5FAF1] opacity-80 pointer-events-none" />

          {/* ================= JOURNEY ICON ================= */}

          <div className="absolute right-[0px] top-[70px] hidden lg:flex h-[320px] w-[320px] items-center justify-center rounded-full bg-white/70 border border-[#CDEDE0] shadow-[0_12px_35px_rgba(63,153,117,0.10)] pointer-events-none">

  <div className="flex h-[225px] w-[225px] items-center justify-center rounded-full bg-[#D9F8EB]">
    <Route
      size={115}
      strokeWidth={1.3}
      className="text-[#3F9975]"
    />
  </div>

</div>

          <div className="relative z-10">

            {/* LABEL */}

            <div className="inline-flex flex-col items-start">
              <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-semibold tracking-[1.2px] text-[#548C78]">
                {ourJourney.label}
              </span>

              <span className="mt-3 h-[3px] w-[60px] rounded-full bg-[#4D997A]" />
            </div>

            {/* HEADING */}

            <h1 className="mt-8 max-w-[850px] text-[42px] sm:text-[48px] md:text-[55px] lg:text-[61px] xl:text-[64px] leading-[1.08] font-bold tracking-[-2px] text-[#07372F]">
              From Training Provider to{" "}
              <span className="text-[#3C9A72]">
                Transformation Partner.
              </span>
            </h1>

            {/* QUOTE */}

            <div className="mt-9 flex items-start gap-5 max-w-[700px]">

              <div className="h-[58px] w-[4px] shrink-0 bg-[#4D997A]" />

              <div>
                <p className="text-[15px] sm:text-[16px] font-semibold leading-[1.5] text-[#303A38]">
                  {ourJourney.quote}
                </p>

                <p className="mt-1 text-[13px] sm:text-[14px] leading-[1.5] text-[#303A38]">
                  {ourJourney.quoteDescription}
                </p>
              </div>

            </div>

            {/* INTRODUCTION */}

            <p className="mt-8 max-w-[850px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.65] text-[#4F5958]">
              {ourJourney.introduction}
            </p>

          </div>
        </section>

        {/* ================= JOURNEY TIMELINE ================= */}

        <section className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-14 mt-20 sm:mt-24 lg:mt-28 pb-12">

          <div className="relative">

            {/* CENTER LINE */}

            <div className="absolute left-1/2 top-[60px] bottom-[60px] hidden -translate-x-1/2 border-l-[3px] border-[#E1E8E4] sm:block" />

            <div className="space-y-16 sm:space-y-12 lg:space-y-14">

              {ourJourney.journey.map((item, index) => {

                const Icon = item.icon;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={item.id}
                    className="relative grid grid-cols-1 sm:grid-cols-2 sm:min-h-[145px]"
                  >

                    {/* JOURNEY CONTENT */}

                    <div
                      className={`flex items-start gap-5 sm:gap-6 ${
                        isLeft
                          ? "sm:pr-[70px]"
                          : "sm:col-start-2 sm:row-start-1 sm:pl-[70px]"
                      }`}
                    >

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">
                        <Icon
                          size={28}
                          strokeWidth={1.7}
                          className="text-[#4A9877]"
                        />
                      </div>

                      <div>

                        <h2 className="text-[18px] sm:text-[19px] font-bold tracking-[0.2px] text-[#101F1D]">
                          {item.title}
                        </h2>

                        <div className="mt-3 h-[3px] w-[42px] rounded-full bg-[#4D997A]" />

                        <p className="mt-5 max-w-[380px] text-[13px] sm:text-[14px] leading-[1.6] text-[#4F5958]">
                          {item.description}
                        </p>

                      </div>

                    </div>

                    {/* NUMBER */}

                    <div className="absolute left-1/2 top-[18px] hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#3F9975] text-[13px] font-semibold text-white sm:flex">
                      {item.id}
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pb-14 sm:pb-16 lg:pb-20">

          <div className="flex items-center gap-5 sm:gap-6 rounded-2xl bg-[#005641] px-6 sm:px-8 md:px-10 py-8 sm:py-9">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">
              <UsersRound
                size={28}
                strokeWidth={1.7}
                className="text-[#4A9877]"
              />
            </div>

            <p className="max-w-[950px] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.6] text-white">
              {ourJourney.closing}
            </p>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default OurJourney;