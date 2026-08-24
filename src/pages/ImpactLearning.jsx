import React from "react";
import { impactPageData } from "../data/ImpactLearning";
import Footer from "../components/footer/Footer";

const ImpactLearning = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#062F2D]">

      {/* ================= HERO ================= */}
      <section className="px-4 pt-5 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-[#DDECE5] bg-gradient-to-r from-[#E7FFF4] to-[#F5FFFB]">

          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C9F5E2]/70" />
          <div className="absolute -bottom-48 -left-40 h-[450px] w-[450px] rounded-full bg-[#DDF9EC]/60" />

          <div className="relative z-10 mx-auto max-w-[1350px] px-6 py-10 sm:px-10 lg:px-14 lg:py-12">

            {/* Breadcrumb */}
            <div className="animate-[fadeUp_.7s_ease-out_both] mb-10 flex flex-wrap items-center gap-2 text-[12px] text-[#7D8E89] sm:text-[13px]">
              {impactPageData.breadcrumb.map((item, index) => (
                <React.Fragment key={`${item}-${index}`}>
                  <span className={index === impactPageData.breadcrumb.length - 1 ? "font-medium text-[#4C9276]" : ""}>
                    {item}
                  </span>

                  {index < impactPageData.breadcrumb.length - 1 && (
                    <span className="text-[#AAB5B1]">›</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Label */}
            <div className="animate-[fadeUp_.7s_ease-out_.1s_both] mb-5">
              <p className="text-[14px] font-bold tracking-[2px] text-[#4E9777] sm:text-[15px]">
                {impactPageData.label}
              </p>
              <div className="mt-3 h-[3px] w-[55px] rounded-full bg-[#4E9777]" />
            </div>

            {/* Heading */}
            <h1 className="animate-[fadeUp_.7s_ease-out_.2s_both] max-w-[1000px] text-[40px] font-extrabold leading-[1.08] tracking-[-2px] text-[#032F2E] sm:text-[48px] md:text-[56px] lg:text-[62px] xl:text-[68px]">
              Learning That Changes{" "}
              <span className="text-[#489873]">People.</span>
              <br />
              Performance. Business.
            </h1>

            {/* Description */}
            <p className="animate-[fadeUp_.7s_ease-out_.3s_both] mt-7 max-w-[1100px] text-[15px] leading-[1.7] text-[#56625F] sm:text-[16px] lg:text-[18px]">
              {impactPageData.description}
            </p>

          </div>
        </div>
      </section>


      {/* ================= IMPACT ARCHITECTURE ================= */}
      <section className="px-6 py-14 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="relative mx-auto h-[520px] w-full max-w-[1050px] lg:h-[570px]">

            {/* Outer circle */}
            <div className="absolute left-1/2 top-5 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#85F1D8] animate-[pulse_5s_ease-in-out_infinite] lg:h-[430px] lg:w-[430px]" />

            {/* Middle circle */}
            <div className="absolute left-1/2 top-[95px] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#20A886] transition-transform duration-700 hover:scale-105 lg:top-[105px] lg:h-[315px] lg:w-[315px]" />

            {/* Inner circle */}
            <div className="absolute left-1/2 top-[170px] h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[#00543F] shadow-[0_15px_40px_rgba(0,84,63,0.25)] transition-transform duration-700 hover:scale-110 lg:top-[185px] lg:h-[205px] lg:w-[205px]" />

            {/* Organisational Impact */}
            <div className="absolute left-1/2 top-[65px] w-[190px] lg:w-[260px]">
              <div className="relative h-[2px] w-full bg-[#17201E]">
                <span className="absolute right-[-7px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 rounded-full bg-[#17201E]" />
              </div>

              <div className="absolute left-[calc(100%+25px)] top-[-10px] w-[300px]">
                <h3 className="text-[19px] font-bold leading-[1.15] text-[#111817] lg:text-[21px]">
                  Organisational
                  <br />
                  Transformation
                </h3>

                <p className="mt-3 text-[14px] leading-[1.5] text-[#66716E] lg:text-[15px]">
                  Pipeline, engagement, and
                  <br />
                  sustained growth
                </p>
              </div>
            </div>

            {/* Individual Impact */}
            <div className="absolute left-[calc(50%+135px)] top-[275px] w-[170px] lg:left-[calc(50%+170px)] lg:w-[210px]">
              <div className="relative h-[2px] w-full bg-[#17201E]">
                <span className="absolute right-[-7px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 rounded-full bg-[#17201E]" />
              </div>

              <div className="absolute left-[calc(100%+25px)] top-[-12px] w-[240px]">
                <h3 className="text-[19px] font-bold leading-[1.15] text-[#111817] lg:text-[21px]">
                  Individual Growth
                </h3>

                <p className="mt-3 text-[14px] leading-[1.5] text-[#66716E] lg:text-[15px]">
                  Pipeline, engagement, and
                  <br />
                  sustained growth
                </p>
              </div>
            </div>

            {/* Team Impact */}
            <div className="absolute right-[calc(50%+135px)] top-[275px] w-[170px] lg:right-[calc(50%+170px)] lg:w-[210px]">
              <div className="relative h-[2px] w-full bg-[#17201E]">
                <span className="absolute left-[-7px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 rounded-full bg-[#17201E]" />
              </div>

              <div className="absolute right-[calc(100%+25px)] top-[-12px] w-[240px] text-right">
                <h3 className="text-[19px] font-bold leading-[1.15] text-[#111817] lg:text-[21px]">
                  Team
                  <br />
                  Improvement
                </h3>

                <p className="mt-3 text-[14px] leading-[1.5] text-[#66716E] lg:text-[15px]">
                  Stronger collaboration and
                  <br />
                  execution
                </p>
              </div>
            </div>

          </div>

          <p className="mx-auto mt-2 max-w-[950px] text-center text-[15px] leading-[1.7] text-[#66716E] lg:text-[16px]">
            {impactPageData.architectureText}
          </p>

        </div>
      </section>


      {/* ================= IMPACT CARDS ================= */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1280px]">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">

            {impactPageData.impactCards.map((card, index) => (
              <div
                key={card.title}
                style={{ animationDelay: `${index * 100}ms` }}
                className="group min-h-[330px] animate-[fadeUp_.6s_ease-out_both] rounded-[16px] border border-[#D8EEE3] bg-[#E3F8ED] p-7 shadow-[0_5px_18px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-[#00543F] hover:shadow-[0_15px_30px_rgba(0,84,63,0.22)] lg:min-h-[360px] lg:p-8"
              >

                {/* Icon */}
                <div className="mb-7 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white text-[24px] text-[#65A388] transition-all duration-300 group-hover:scale-110">
                  {index === 0 && "♙"}
                  {index === 1 && "♧"}
                  {index === 2 && "◎"}
                </div>

                {/* Title */}
                <h2 className="text-[21px] font-bold leading-[1.2] text-[#173E37] transition-colors duration-300 group-hover:text-white lg:text-[23px]">
                  {card.title}
                </h2>

                {/* Underline */}
                <div className="mt-3 h-[3px] w-[42px] rounded-full bg-[#4E9777] transition-colors duration-300 group-hover:bg-[#A9F0D0]" />

                {/* Points */}
                <ul className="mt-6 space-y-3 pl-5">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="list-disc text-[14px] leading-[1.5] text-[#3F514C] transition-colors duration-300 group-hover:text-white lg:text-[15px]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= LEARNING THAT STAYS ================= */}
      <section className="px-6 pb-24 pt-4 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1280px]">

          <h2 className="inline-block border-b-[3px] border-[#6FA889] pb-3 text-[30px] font-extrabold text-[#032F2E] lg:text-[36px] xl:text-[40px]">
            {impactPageData.learningTitle}
          </h2>

          <p className="mt-6 max-w-[1120px] text-[16px] leading-[1.7] text-[#5D6865] lg:text-[17px]">
            {impactPageData.learningDescription}
          </p>

          {/* Learning Process */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">

            {impactPageData.learningProcess.map((item, index) => (
              <div
                key={item.title}
                className="group relative flex min-h-[130px] items-center bg-[#A9D5BD] pl-[110px] pr-12 py-7 transition-all duration-300 hover:-translate-y-1 hover:bg-[#00543F] hover:shadow-[0_12px_25px_rgba(0,84,63,0.20)]"
                style={{ clipPath: "polygon(0 0, calc(100% - 45px) 0, 100% 50%, calc(100% - 45px) 100%, 0 100%, 32px 50%)" }}
              >

                {/* Number */}
                <div className="absolute left-[45px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white text-[19px] font-bold text-[#6CA487] transition-transform duration-300 group-hover:scale-110">
                  {index + 1}
                </div>

                <div>

                  <h3 className="text-[21px] font-bold text-[#173E37] transition-colors duration-300 group-hover:text-white lg:text-[23px]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-[1.5] text-[#456057] transition-colors duration-300 group-hover:text-white/90 lg:text-[15px]">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      <Footer />


      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

    </div>
  );
};

export default ImpactLearning;