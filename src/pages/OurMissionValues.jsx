import React from "react";
import Footer from "../components/footer/Footer";
import ourMissionValues from "../data/OurMissionValues";
import missionValuesHero from "../assets/images/AboutUs/our-mission-values-hero.png";

function OurMissionValues() {
  const MissionIcon = ourMissionValues.mission.icon;
  const VisionIcon = ourMissionValues.vision.icon;

  const infoItems = [
    ourMissionValues.mission,
    ourMissionValues.vision,
  ];

  return (
    <div className="min-h-screen bg-white text-[#0B2F2A]">
      <main>

        {/* HERO */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="overflow-hidden rounded-2xl border border-[#E2E9E5] bg-gradient-to-r from-[#E9FFF6] to-[#F4FFFB]">

            <div className="px-6 sm:px-8 lg:px-12 pt-8">
              <p className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#8A9894]">
                Home <span className="mx-2">›</span>
                {ourMissionValues.breadcrumb.section}
                <span className="mx-2">›</span>
                {ourMissionValues.breadcrumb.category}
                <span className="mx-2">›</span>
                <span className="text-[#4A8E76]">
                  {ourMissionValues.breadcrumb.current}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-6 sm:px-8 lg:px-12 pt-8 pb-8 lg:pb-10">

              <div className="max-w-[650px]">
                <div className="inline-flex flex-col items-start">
                  <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.8px] text-[#548C78]">
                    {ourMissionValues.label}
                  </span>
                  <span className="mt-2 h-[3px] w-[52px] rounded-full bg-[#4D997A]" />
                </div>

                <h1 className="mt-5 text-[36px] sm:text-[44px] md:text-[48px] lg:text-[50px] xl:text-[54px] leading-[1.08] font-bold tracking-[-1.5px] text-[#062F2A]">
                  OUR MISSIONS, VISION &{" "}
                  <span className="text-[#3C9A72]">VALUES.</span>
                </h1>

                <p className="mt-5 max-w-[540px] text-[14px] sm:text-[15px] leading-[1.5] text-[#4F5958]">
                  {ourMissionValues.introduction}
                </p>
              </div>

              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <img
                  src={missionValuesHero}
                  alt="Our Missions Vision and Values"
                  className="w-full max-w-[500px] object-contain transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

            </div>
          </div>
        </section>

        {/* MISSION + VALUES */}
        <section className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10 mt-14 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* MISSION & VISION */}
            <div className="space-y-8">
              {infoItems.map((item, index) => {
                const Icon = index === 0 ? MissionIcon : VisionIcon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-[#F0FBF6] hover:shadow-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E1F8EE] transition-transform duration-300 group-hover:scale-105">
                      <Icon
                        size={24}
                        strokeWidth={1.7}
                        className="text-[#4A9877]"
                      />
                    </div>

                    <div className="pt-1">
                      <h2 className="text-[16px] sm:text-[17px] font-bold text-[#101F1D]">
                        {item.title}
                      </h2>

                      <div className="mt-2 h-[3px] w-[37px] rounded-full bg-[#4D997A] transition-all duration-300 group-hover:w-[50px]" />

                      <p className="mt-4 max-w-[420px] text-[13px] sm:text-[14px] leading-[1.45] text-[#4F5958]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* GUIDING VALUES */}
            <div>
              <h2 className="text-[23px] sm:text-[25px] font-bold text-[#101F1D]">
                {ourMissionValues.guidingValuesTitle}
              </h2>

              <div className="mt-3 h-[3px] w-[38px] rounded-full bg-[#4D997A]" />

              <div className="mt-5 space-y-4">
                {ourMissionValues.guidingValues.map((value) => {
                  const Icon = value.icon;

                  return (
                    <div
                      key={value.id}
                      className="group relative flex items-center gap-4 overflow-hidden rounded-lg border border-[#E1E5E3] bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0FBF6] hover:border-[#C8EBDD] hover:shadow-md"
                    >
                      <div className="absolute left-0 top-0 h-full w-[10px] bg-[#006247] transition-colors duration-300 group-hover:bg-[#4A9877]" />

                      <div className="ml-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#DDF7EC] transition-transform duration-300 group-hover:scale-105">
                        <Icon
                          size={24}
                          strokeWidth={1.7}
                          className="text-[#4A9877]"
                        />
                      </div>

                      <div>
                        <h3 className="text-[20px] sm:text-[21px] font-semibold text-[#3C9975]">
                          {value.title}
                        </h3>

                        <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.4] text-[#4F5958]">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* CORE VALUES */}
        <section className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10 mt-12 sm:mt-16 lg:mt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

            {ourMissionValues.values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.id}
                  className="group min-h-[160px] rounded-xl border border-[#E1E5E3] bg-white px-5 sm:px-6 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0FBF6] hover:border-[#C8EBDD] hover:shadow-md"
                >
                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DDF7EC] transition-transform duration-300 group-hover:scale-105">
                      <Icon
                        size={24}
                        strokeWidth={1.7}
                        className="text-[#4A9877]"
                      />
                    </div>

                    <div>
                      <h3 className="text-[20px] sm:text-[21px] font-bold text-[#101F1D]">
                        {value.title}
                      </h3>

                      <div className="mt-2 h-[3px] w-[37px] rounded-full bg-[#4D997A] transition-all duration-300 group-hover:w-[50px]" />

                      <p className="mt-4 max-w-[470px] text-[13px] sm:text-[14px] leading-[1.45] text-[#4F5958]">
                        {value.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default OurMissionValues;