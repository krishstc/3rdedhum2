import React from "react";
import { UsersRound } from "lucide-react";
import Footer from "../components/footer/Footer";
import globalPresence from "../data/GlobalPresence";

function GlobalPresence() {
  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">
      <main>

        {/* ================= BREADCRUMB ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pt-10 sm:pt-12 lg:pt-14">
          <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#7B8A86] tracking-wide">
            <span>Home</span>

            <span className="mx-3">›</span>

            <span>{globalPresence.breadcrumb.section}</span>

            <span className="mx-3">›</span>

            <span>{globalPresence.breadcrumb.category}</span>

            <span className="mx-3">›</span>

            <span className="text-[#4A8E76]">
              {globalPresence.breadcrumb.current}
            </span>
          </p>
        </section>


        {/* ================= HERO ================= */}

        <section className="relative max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 pt-10 sm:pt-12 lg:pt-14">

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">

            {/* ================= LEFT CONTENT ================= */}

            <div className="relative z-10">

              {/* LABEL */}

              <div className="inline-flex flex-col items-start">

                <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-semibold tracking-[1.2px] text-[#548C78]">
                  {globalPresence.label}
                </span>

                <span className="mt-3 h-[3px] w-[58px] rounded-full bg-[#4D997A]" />

              </div>


              {/* HEADING */}

              <h1 className="mt-7 max-w-[700px] text-[40px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[62px] leading-[1.08] font-bold tracking-[-2px] text-[#07372F]">
                Global Presence.{" "}
                <span className="text-[#3C9A72]">
                  Local Understanding.
                </span>
              </h1>


              {/* INTRODUCTION */}

              <p className="mt-7 max-w-[680px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] text-[#4F5958]">
                {globalPresence.introduction}
              </p>

            </div>


            {/* ================= IMAGE ================= */}

            <div className="relative z-10 flex justify-center lg:justify-end">

              <div className="w-full max-w-[520px] h-[300px] sm:h-[330px] lg:h-[350px] rounded-[28px] overflow-hidden bg-white shadow-sm">

                <img
                  src={globalPresence.image}
                  alt="Global team collaboration"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

        </section>


        {/* ================= DELIVERY MODES ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 mt-16 sm:mt-20 lg:mt-24">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

            {globalPresence.deliveryModes.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="min-h-[250px] sm:min-h-[270px] rounded-xl bg-white border border-[#E8E8E8] shadow-[0_4px_10px_rgba(0,0,0,0.12)] px-6 sm:px-7 lg:px-8 py-8 sm:py-9 flex items-center gap-6 sm:gap-7"
                >

                  {/* ================= ICON / SHAPE ================= */}

                  <div
                    className={`flex h-[120px] w-[120px] sm:h-[125px] sm:w-[125px] shrink-0 items-center justify-center bg-[#D9F8EB] ${
                      item.shape === "circle"
                        ? "rounded-full"
                        : "rounded-md"
                    }`}
                  >

                    <Icon
                      size={38}
                      strokeWidth={1.5}
                      className="text-[#4A9877]"
                    />

                  </div>


                  {/* ================= CONTENT ================= */}

                  <div>

                    <h2 className="text-[18px] sm:text-[19px] lg:text-[20px] font-bold leading-[1.3] text-[#101F1D]">
                      {item.title}
                    </h2>

                    <div className="mt-3 h-[3px] w-[40px] rounded-full bg-[#4D997A]" />

                    <p className="mt-5 max-w-[360px] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.5] text-[#4F5958]">
                      {item.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </section>


        {/* ================= CLOSING CTA ================= */}

        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 mt-16 sm:mt-20 lg:mt-24 pb-14 sm:pb-16 lg:pb-20">

          <div className="rounded-2xl bg-[#005641] px-6 sm:px-8 lg:px-10 py-7 sm:py-8 lg:py-9">

            <div className="flex items-center gap-5 sm:gap-6">

              {/* ICON */}

              <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">

                <UsersRound
                  size={28}
                  strokeWidth={1.7}
                  className="text-[#4A9877]"
                />

              </div>


              {/* TEXT */}

              <p className="max-w-[1000px] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.5] text-white">
                {globalPresence.closing}
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

export default GlobalPresence;