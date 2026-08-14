import React from "react";
import { impactPageData } from "../data/ImpactLearning";
import Footer from "../components/Footer/Footer";

const ImpactLearning = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFF9F9] text-[#062F2D] overflow-hidden">

      {/* ================= HERO / INTRO ================= */}

      <section className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-24 pt-8 pb-12">

        {/* Background decorative shape */}
        <div className="absolute right-[-180px] top-[-80px] w-[500px] h-[500px] rounded-full bg-[#E5F8EF] opacity-80 pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto">

          {/* Breadcrumb */}

          <div className="flex flex-wrap items-center gap-2 mb-12 text-[12px] lg:text-[13px] text-[#8B9A96]">

            {impactPageData.breadcrumb.map((item, index) => (

              <React.Fragment key={`${item}-${index}`}>

                <span
                  className={
                    index === impactPageData.breadcrumb.length - 1
                      ? "text-[#4C9276] font-medium"
                      : ""
                  }
                >
                  {item}
                </span>

                {index < impactPageData.breadcrumb.length - 1 && (
                  <span className="text-[#AAB5B1]">
                    /
                  </span>
                )}

              </React.Fragment>

            ))}

          </div>


          {/* Section Label */}

          <div className="mb-5">

            <p className="text-[13px] lg:text-[14px] font-bold tracking-[3px] text-[#4E9777]">
              {impactPageData.label}
            </p>

            <div className="mt-3 w-[45px] h-[3px] rounded-full bg-[#4E9777]" />

          </div>


          {/* Main Heading */}

          <h1 className="max-w-[1000px] text-[42px] sm:text-[50px] lg:text-[60px] xl:text-[66px] leading-[1.08] tracking-[-2px] font-extrabold text-[#032F2E]">

            Learning That Changes{" "}

            <span className="text-[#489873]">
              People.
            </span>

            <br />

            Performance. Business.

          </h1>


          {/* Description */}

          <p className="mt-7 max-w-[1120px] text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.7] text-[#56625F]">
            {impactPageData.description}
          </p>

        </div>

      </section>


      {/* ================= IMPACT ARCHITECTURE ================= */}

      <section className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-24 pt-4 pb-20">

        <div className="max-w-[1200px] mx-auto">

          {/* Diagram */}

          <div className="relative mx-auto w-full max-w-[1050px] h-[520px] lg:h-[570px]">

            {/* Outer Circle */}

            <div className="absolute left-1/2 top-[20px] -translate-x-1/2 w-[380px] h-[380px] lg:w-[430px] lg:h-[430px] rounded-full bg-[#85F1D8]" />


            {/* Middle Circle */}

            <div className="absolute left-1/2 top-[95px] lg:top-[105px] -translate-x-1/2 w-[280px] h-[280px] lg:w-[315px] lg:h-[315px] rounded-full bg-[#20A886]" />


            {/* Inner Circle */}

            <div className="absolute left-1/2 top-[170px] lg:top-[185px] -translate-x-1/2 w-[180px] h-[180px] lg:w-[205px] lg:h-[205px] rounded-full bg-[#00543F]" />


            {/* ================= ORGANISATIONAL IMPACT ================= */}

            <div className="absolute left-1/2 top-[65px] w-[190px] lg:w-[260px]">

              <div className="relative h-[2px] w-full bg-[#17201E]">

                <span className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-[#17201E]" />

              </div>

              <div className="absolute left-[calc(100%+25px)] top-[-10px] w-[300px]">

                <h3 className="text-[18px] lg:text-[20px] font-bold leading-[1.15] text-[#111817]">
                  Organisational
                  <br />
                  Transformation
                </h3>

                <p className="mt-3 text-[13px] lg:text-[14px] leading-[1.5] text-[#66716E]">
                  Pipeline, engagement, and
                  <br />
                  sustained growth
                </p>

              </div>

            </div>


            {/* ================= INDIVIDUAL IMPACT ================= */}

            <div className="absolute left-[calc(50%+135px)] lg:left-[calc(50%+170px)] top-[275px] w-[170px] lg:w-[210px]">

              <div className="relative h-[2px] w-full bg-[#17201E]">

                <span className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-[#17201E]" />

              </div>

              <div className="absolute left-[calc(100%+25px)] top-[-12px] w-[240px]">

                <h3 className="text-[18px] lg:text-[20px] font-bold leading-[1.15] text-[#111817]">
                  Individual Growth
                </h3>

                <p className="mt-3 text-[13px] lg:text-[14px] leading-[1.5] text-[#66716E]">
                  Pipeline, engagement, and
                  <br />
                  sustained growth
                </p>

              </div>

            </div>


            {/* ================= TEAM IMPROVEMENT ================= */}

            <div className="absolute right-[calc(50%+135px)] lg:right-[calc(50%+170px)] top-[275px] w-[170px] lg:w-[210px]">

              <div className="relative h-[2px] w-full bg-[#17201E]">

                <span className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-[#17201E]" />

              </div>

              <div className="absolute right-[calc(100%+25px)] top-[-12px] w-[240px] text-right">

                <h3 className="text-[18px] lg:text-[20px] font-bold leading-[1.15] text-[#111817]">
                  Team
                  <br />
                  Improvement
                </h3>

                <p className="mt-3 text-[13px] lg:text-[14px] leading-[1.5] text-[#66716E]">
                  Stronger collaboration and
                  <br />
                  execution
                </p>

              </div>

            </div>

          </div>


          {/* Architecture Description */}

          <p className="max-w-[900px] mx-auto mt-2 text-center text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.7] text-[#66716E]">
            {impactPageData.architectureText}
          </p>

        </div>

      </section>


      {/* ================= IMPACT CARDS ================= */}

      <section className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">

        <div className="max-w-[1280px] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {impactPageData.impactCards.map((card, index) => (

              <div
                key={card.title}
                className="min-h-[330px] lg:min-h-[360px] rounded-[14px] bg-[#E3F8ED] p-7 lg:p-8 shadow-sm"
              >

                {/* Card Header */}

                <div className="flex items-center gap-4 mb-7">

                  <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shrink-0 text-[22px] text-[#65A388]">

                    {index === 0 && "♙"}
                    {index === 1 && "♧"}
                    {index === 2 && "◎"}

                  </div>

                  <h2 className="text-[20px] lg:text-[22px] font-bold text-[#173E37] leading-[1.2]">
                    {card.title}
                  </h2>

                </div>


                {/* Card Points */}

                <ul className="space-y-3 pl-5 list-disc">

                  {card.points.map((point) => (

                    <li
                      key={point}
                      className="text-[13px] lg:text-[14px] leading-[1.45] text-[#3F514C]"
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

      <section className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 pt-4 pb-24">

        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}

          <div className="mb-5">

            <h2 className="inline-block pb-3 border-b-[3px] border-[#6FA889] text-[28px] lg:text-[34px] xl:text-[38px] font-extrabold text-[#032F2E]">
              {impactPageData.learningTitle}
            </h2>

          </div>


          {/* Description */}

          <p className="max-w-[1120px] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-[#5D6865]">
            {impactPageData.learningDescription}
          </p>


          {/* Learning Process */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10">

            {impactPageData.learningProcess.map((item, index) => (

              <div
                key={item.title}
                className="relative min-h-[125px] lg:min-h-[140px] flex items-center bg-[#A9D5BD] pl-[110px] pr-12 py-7"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 45px) 0, 100% 50%, calc(100% - 45px) 100%, 0 100%, 32px 50%)",
                }}
              >

                {/* Number */}

                <div className="absolute left-[45px] w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center text-[#6CA487] text-[18px] font-bold">
                  {index + 1}
                </div>


                {/* Content */}

                <div>

                  <h3 className="text-[20px] lg:text-[22px] font-bold text-[#173E37] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[13px] lg:text-[14px] leading-[1.5] text-[#456057]">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= EXISTING FOOTER ================= */}

      <Footer />

    </div>
  );
};

export default ImpactLearning;