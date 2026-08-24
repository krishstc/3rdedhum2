import React from "react";
import Footer from "../components/footer/Footer";
import ourMissionValues from "../data/OurMissionValues";
import missionValuesHero from "../assets/images/AboutUs/our-mission-values-hero.png";

function OurMissionValues() {
  const MissionIcon = ourMissionValues.mission.icon;
  const VisionIcon = ourMissionValues.vision.icon;

  const infoItems = [ourMissionValues.mission, ourMissionValues.vision];

  return (
    <div className="min-h-screen bg-white text-[#0B2F2A]">
      <main>
        {/* ================= HERO ================= */}
        <section className="mx-auto max-w-[1400px] px-4 pt-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-[#E2E9E5] bg-gradient-to-r from-[#E9FFF6] to-[#F4FFFB]">
            {/* Breadcrumb */}
            <div className="px-6 pt-8 sm:px-8 lg:px-12">
              <p className="text-[10px] text-[#8A9894] sm:text-[11px] lg:text-[12px]">
                Home <span className="mx-2">›</span>
                {ourMissionValues.breadcrumb.section}
                <span className="mx-2">›</span>
                {ourMissionValues.breadcrumb.category}
                <span className="mx-2">›</span>
                <span className="text-[#4A8E76]">{ourMissionValues.breadcrumb.current}</span>
              </p>
            </div>

            {/* Hero Content */}
            <div className="grid grid-cols-1 items-center px-6 pb-8 pt-8 sm:px-8 lg:grid-cols-2 lg:px-12 lg:pb-10">
              {/* LEFT */}
              <div className="max-w-[650px] animate-[fadeUp_.7s_ease-out]">
                <div className="inline-flex flex-col items-start">
                  <span className="text-[12px] font-semibold tracking-[0.8px] text-[#548C78] sm:text-[13px]">
                    {ourMissionValues.label}
                  </span>
                  <span className="mt-2 h-[3px] w-[52px] rounded-full bg-[#4D997A]" />
                </div>

                <h1 className="mt-5 text-[36px] font-bold leading-[1.08] tracking-[-1.5px] text-[#062F2A] sm:text-[44px] md:text-[48px] lg:text-[50px] xl:text-[54px]">
                  OUR MISSIONS, VISION &{" "}
                  <span className="text-[#3C9A72]">VALUES.</span>
                </h1>

                <p className="mt-5 max-w-[540px] text-[14px] leading-[1.5] text-[#4F5958] sm:text-[15px]">
                  {ourMissionValues.introduction}
                </p>
              </div>

              {/* HERO IMAGE */}
              <div className="mt-8 flex justify-center lg:mt-0 lg:justify-end">
                <img
                  src={missionValuesHero}
                  alt="Our Missions Vision and Values"
                  className="w-full max-w-[500px] object-contain animate-[heroImage_.9s_ease-out] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= MISSION + VALUES ================= */}
        <section className="mx-auto mt-14 max-w-[1300px] px-6 sm:mt-16 sm:px-8 lg:mt-20 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* MISSION & VISION */}
            <div className="space-y-8">
              {infoItems.map((item, index) => {
                const Icon = index === 0 ? MissionIcon : VisionIcon;

                return (
                  <div key={item.title} className="group flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-[#F0FBF6] hover:shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E1F8EE] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={24} strokeWidth={1.7} className="text-[#4A9877]" />
                    </div>

                    <div className="pt-1">
                      <h2 className="text-[16px] font-bold text-[#101F1D] sm:text-[17px]">{item.title}</h2>
                      <div className="mt-2 h-[3px] w-[37px] rounded-full bg-[#4D997A] transition-all duration-300 group-hover:w-[50px]" />
                      <p className="mt-4 max-w-[420px] text-[13px] leading-[1.45] text-[#4F5958] sm:text-[14px]">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* GUIDING VALUES */}
            <div>
              <h2 className="text-[23px] font-bold text-[#101F1D] sm:text-[25px]">{ourMissionValues.guidingValuesTitle}</h2>
              <div className="mt-3 h-[3px] w-[38px] rounded-full bg-[#4D997A]" />

              <div className="mt-5 space-y-4">
                {ourMissionValues.guidingValues.map((value) => {
                  const Icon = value.icon;

                  return (
                    <div key={value.id} className="group relative flex items-center gap-4 overflow-hidden rounded-lg border border-[#E1E5E3] bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8EBDD] hover:bg-[#F0FBF6] hover:shadow-md">
                      <div className="absolute left-0 top-0 h-full w-[10px] bg-[#006247] transition-colors duration-300 group-hover:bg-[#4A9877]" />

                      <div className="ml-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#DDF7EC] transition-transform duration-300 group-hover:scale-105">
                        <Icon size={24} strokeWidth={1.7} className="text-[#4A9877]" />
                      </div>

                      <div>
                        <h3 className="text-[20px] font-semibold text-[#3C9975] sm:text-[21px]">{value.title}</h3>
                        <p className="mt-2 text-[13px] leading-[1.4] text-[#4F5958] sm:text-[14px]">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= CORE VALUES ================= */}
        <section className="mx-auto mt-12 max-w-[1300px] px-6 pb-12 sm:mt-16 sm:px-8 lg:mt-20 lg:px-10">
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
            {ourMissionValues.values.map((value) => {
              const Icon = value.icon;

              return (
                <div key={value.id} className="group min-h-[160px] rounded-xl border border-[#E1E5E3] bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8EBDD] hover:bg-[#F0FBF6] hover:shadow-md sm:px-6">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DDF7EC] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={24} strokeWidth={1.7} className="text-[#4A9877]" />
                    </div>

                    <div>
                      <h3 className="text-[20px] font-bold text-[#101F1D] sm:text-[21px]">{value.title}</h3>
                      <div className="mt-2 h-[3px] w-[37px] rounded-full bg-[#4D997A] transition-all duration-300 group-hover:w-[50px]" />
                      <p className="mt-4 max-w-[470px] text-[13px] leading-[1.45] text-[#4F5958] sm:text-[14px]">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroImage {
          from { opacity: 0; transform: translateX(35px) scale(0.96); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

export default OurMissionValues;