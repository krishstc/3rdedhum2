import Footer from "../components/footer/Footer";
import whyUsPromoImage from "../assets/images/whyus2.png";
import WhatMakesUsDifferentData from "../data/WhatMakesUsDifferent";

function WhatMakesUsDifferent() {
  const data = WhatMakesUsDifferentData;

  return (
    <div className="bg-[#FFF7F7] text-[#0B2F2A] overflow-hidden">

      {/* ================= BREADCRUMB ================= */}

      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 pt-10 lg:pt-12">

        <p className="text-[11px] lg:text-[12px] text-[#7B8A86] tracking-wide">

          {data.breadcrumb.map((item, index) => (
            <span key={item}>

              {index > 0 && (
                <span className="mx-2">
                  ›
                </span>
              )}

              <span
                className={
                  index === data.breadcrumb.length - 1
                    ? "text-[#4A8E76]"
                    : ""
                }
              >
                {item}
              </span>

            </span>
          ))}

        </p>

      </section>

      {/* ================= HERO ================= */}

      <section className="relative max-w-[1400px] mx-auto px-8 lg:px-12 pt-10 lg:pt-12">

        <div className="absolute -right-[130px] top-0 w-[360px] h-[360px] rounded-full bg-[#E8FAF3] opacity-80 pointer-events-none" />

        <div className="relative z-10 text-center max-w-[950px] mx-auto">

          <div className="inline-flex flex-col items-center">

            <span className="text-[12px] lg:text-[13px] font-semibold tracking-[1.2px] text-[#548C78] uppercase">
              {data.hero.label}
            </span>

            <span className="mt-3 h-[3px] w-[48px] rounded-full bg-[#4D997A]" />

          </div>

          <h1 className="mt-6 text-[40px] sm:text-[46px] md:text-[52px] lg:text-[58px] leading-[1.08] font-bold tracking-[-1.8px] text-[#07372F]">

            {data.hero.title}{" "}

            <span className="text-[#3C9A72]">
              {data.hero.highlightedTitle}
            </span>

          </h1>

          <p className="mt-6 max-w-[900px] mx-auto text-[14px] lg:text-[15px] leading-[1.6] text-[#4F5958]">

            {data.hero.description}

          </p>

        </div>

        {/* ================= BUSINESS + EXPLORE ================= */}

        <div className="mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">

          {/* BUSINESS BEFORE LEARNING */}

          <div className="bg-[#005A46] rounded-[12px] px-8 lg:px-10 py-9 lg:py-10 text-white min-h-[300px]">

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#F0FFF9] text-[#5B9D82] flex items-center justify-center shrink-0">

                <data.businessBeforeLearning.icon className="text-[23px] lg:text-[26px]" />

              </div>

              <h2 className="text-[25px] lg:text-[29px] font-semibold">

                {data.businessBeforeLearning.title}

              </h2>

            </div>

            <p className="mt-7 text-[14px] lg:text-[15px] leading-[1.6] text-white/90 max-w-[620px]">

              {data.businessBeforeLearning.description}

            </p>

            <div className="mt-7 pt-5 border-t border-white/30 flex items-center gap-4">

              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">

                <data.businessBeforeLearning.bottomIcon className="text-[16px]" />

              </div>

              <p className="text-[14px] lg:text-[15px] leading-[1.4] font-medium">

                {data.businessBeforeLearning.bottomText}

                <br />

                {data.businessBeforeLearning.bottomHighlightedText}

              </p>

            </div>

          </div>

          {/* WHAT WE EXPLORE FIRST */}

          <div className="lg:pt-1">

            <h2 className="text-[27px] lg:text-[31px] font-bold text-[#101817]">

              What We Explore First

            </h2>

            <div className="mt-3 h-[4px] w-[38px] bg-[#419977] rounded-full" />

            <div className="mt-7 space-y-6">

              {data.exploreItems.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-5"
                  >

                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#E5F8F0] text-[#5DAD8C] flex items-center justify-center shrink-0">

                      <Icon className="text-[19px] lg:text-[21px]" />

                    </div>

                    <p className="text-[14px] lg:text-[15px] text-[#303A38] leading-[1.4]">

                      {item.text}

                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* ================= FOUR APPROACH CARDS ================= */}

        <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          {data.approachCards.map((card, index) => {

            const Icon = card.icon;

            return (
              <div
                key={index}
                className="bg-white border border-[#E7E7E7] rounded-[10px] px-6 lg:px-7 py-7 lg:py-8 min-h-[245px] lg:min-h-[260px] text-center shadow-[0_3px_12px_rgba(0,0,0,0.03)]"
              >

                <div className="mx-auto w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#E8F8F1] text-[#5A9D81] flex items-center justify-center">

                  <Icon className="text-[22px] lg:text-[25px]" />

                </div>

                <h3 className="mt-5 text-[17px] lg:text-[19px] font-bold text-[#111817]">

                  {card.title}

                </h3>

                <div className="mx-auto mt-3 h-[3px] w-[30px] rounded-full bg-[#4B9978]" />

                <p className="mt-5 text-[12px] lg:text-[13px] leading-[1.55] text-[#626B69]">

                  {card.description}

                </p>

              </div>
            );
          })}

        </div>

        {/* ================= TAILOR MADE ================= */}

        <section className="mt-18 lg:mt-20">

          <div className="text-center max-w-[950px] mx-auto">

            <h2 className="text-[27px] lg:text-[31px] font-bold text-[#111817]">

              {data.tailorMade.title}

            </h2>

            <div className="mx-auto mt-3 h-[3px] w-[36px] bg-[#439978] rounded-full" />

            <p className="mt-5 text-[13px] lg:text-[14px] leading-[1.6] text-[#5D6664]">

              {data.tailorMade.description}

            </p>

          </div>

          {/* ================= SOLUTION CARDS ================= */}

          <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">

            {data.solutionCards.map((card, index) => {

              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="bg-[#DFF8EE] border border-[#CDEDE0] rounded-[11px] px-7 lg:px-8 py-7 lg:py-8 min-h-[190px] lg:min-h-[205px]"
                >

                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white text-[#5C9F83] flex items-center justify-center shrink-0">

                      <Icon className="text-[21px] lg:text-[24px]" />

                    </div>

                    <div className="flex-1">

                      <h3 className="text-[22px] lg:text-[25px] font-semibold text-[#15201D]">

                        {card.title}

                      </h3>

                      <div className="mt-3 h-[3px] w-[30px] bg-[#419978] rounded-full" />

                      <ul className="mt-5 space-y-2 text-[12px] lg:text-[13px] text-[#3F4946]">

                        {card.items.map((item, itemIndex) => (

                          <li
                            key={itemIndex}
                            className="flex items-start gap-3"
                          >

                            <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[#34433E] shrink-0" />

                            <span>
                              {item}
                            </span>

                          </li>

                        ))}

                      </ul>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

        {/* ================= BOTTOM MESSAGE ================= */}

        <section className="mt-14 lg:mt-16 mb-14">

          <div className="relative overflow-hidden bg-[#003D35] rounded-[12px] min-h-[115px] lg:min-h-[125px] px-7 lg:px-9 py-6 flex items-center">

            <div className="flex items-center gap-5 lg:gap-6 relative z-10 max-w-[850px]">

              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#F1FFF9] text-[#5B9D82] flex items-center justify-center shrink-0">

                <data.bottomMessage.icon className="text-[21px] lg:text-[24px]" />

              </div>

              <p className="text-[12px] lg:text-[13px] leading-[1.55] text-white/90">

                {data.bottomMessage.text}

              </p>

            </div>

            {whyUsPromoImage && (

              <img
                src={whyUsPromoImage}
                alt="Future of work"
                className="absolute right-3 lg:right-8 bottom-0 w-[150px] lg:w-[190px] h-[110px] lg:h-[120px] object-contain object-bottom"
              />

            )}

          </div>

        </section>

      </section>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default WhatMakesUsDifferent;