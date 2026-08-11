import { useState, useEffect } from "react";

import MenuColumns from "./MenuColumns";
import ServiceContent from "./ServiceContent";
import FeatureCard from "./FeatureCard";

import whyUsData from "../../../data/whyUsData";
import insightsData from "../../../data/insightsData";

import whyUsIntro from "../../../assets/images/whyus.png";
import whyUsPromo from "../../../assets/images/whyus2.png";
import insightsIntro from "../../../assets/images/insight.png";
import insightsPromo from "../../../assets/images/insights2.png";

const MegaMenu = ({ isOpen, menuType }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  /* Reset submenu whenever mega menu closes */
  useEffect(() => {
    if (!isOpen) {
      setActiveMenu(null);
    }
  }, [isOpen]);

  return (
    <div
      className={`hidden lg:block absolute left-0 top-full w-full transition-all duration-300 z-[100] ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }`}
    >
      <div className="max-w-[1300px] mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

        {/* =====================================================
            SERVICES
        ====================================================== */}

        {menuType === "services" && (
          <div className="grid grid-cols-4 gap-2 p-6">

            {/* LEFT SIDE */}

            <div className="col-span-3">
              {!activeMenu ? (
                <MenuColumns
                  setActiveMenu={setActiveMenu}
                />
              ) : (
                <ServiceContent
                  menu={activeMenu}
                  goBack={() => setActiveMenu(null)}
                />
              )}
            </div>

            {/* RIGHT SIDE */}

            <div className="flex items-start justify-end">
              <FeatureCard />
            </div>

          </div>
        )}


        {/* =====================================================
            WHY 3RD EDHUM
            5 COLUMNS
        ====================================================== */}

        {menuType === "whyus" && (
          <div className="grid grid-cols-5 min-h-[430px]">

            {/* =================================================
                COLUMN 1 - INTRO
            ================================================= */}

            <div className="p-8 border-r border-gray-200 flex flex-col">

              {/* TOP CONTENT */}

              <div>
                <h3 className="text-[#5B9278] font-semibold text-[15px] tracking-wide">
                  {whyUsData.intro.title}
                </h3>

                <div className="w-10 h-[3px] bg-[#4BA77A] mt-4 mb-6 rounded-full"></div>

                <p className="text-[14px] leading-[1.8] text-gray-600">
                  {whyUsData.intro.description}
                </p>
              </div>

              {/* IMAGE AT BOTTOM */}

              <div className="mt-auto pt-6 flex justify-center">

                <img
                  src={whyUsIntro}
                  alt="Why 3rd EdHum"
                  className="w-full h-auto max-h-[130px] object-contain rounded-xl"
                />

              </div>

            </div>


            {/* =================================================
                COLUMN 2, 3, 4
            ================================================= */}

            {whyUsData.columns.map((column, index) => (
              <div
                key={column.title}
                className={`p-8 ${
                  index < whyUsData.columns.length - 1
                    ? "border-r border-gray-200"
                    : ""
                }`}
              >

                <h3 className="text-[#5B9278] font-semibold text-[15px] tracking-wide">
                  {column.title}
                </h3>

                <div className="w-10 h-[3px] bg-[#4BA77A] mt-4 mb-7 rounded-full"></div>

                <div className="space-y-5">

                  {column.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 group cursor-pointer"
                    >

                      {/* ICON */}

                      <div className="w-10 h-10 rounded-lg bg-[#EAF7F0] flex items-center justify-center shrink-0 group-hover:bg-[#D7F0E2] transition-colors">

                        <span className="text-[#4BA77A] text-[15px]">
                          {item.icon}
                        </span>

                      </div>

                      {/* TEXT */}

                      <span className="text-[14px] font-medium text-gray-700 leading-snug group-hover:text-[#3F9975] transition-colors">
                        {item.label}
                      </span>

                    </div>
                  ))}

                </div>

              </div>
            ))}


            {/* =================================================
                COLUMN 5 - PROMO
            ================================================= */}

            <div className="bg-[#005C3B] text-white p-8 flex flex-col">

              {/* TOP CONTENT */}

              <div>

                <div className="text-3xl mb-5">
                  {whyUsData.promo.icon}
                </div>

                <h3 className="text-[18px] font-semibold leading-snug">
                  {whyUsData.promo.title}
                </h3>

                <div className="w-10 h-[3px] bg-white mt-4 mb-6 rounded-full"></div>

                <p className="text-[14px] leading-[1.8] text-white/80">
                  {whyUsData.promo.description}
                </p>

              </div>

              {/* IMAGE + BUTTON AT BOTTOM */}

              <div className="mt-auto pt-6">

                <div className="w-full flex justify-center mb-5">

                  <img
                    src={whyUsPromo}
                    alt="Empower People Elevate Potential"
                    className="w-full h-auto max-h-[115px] object-contain rounded-xl"
                  />

                </div>

                <button
                  type="button"
                  className="bg-white text-[#438B6D] px-5 py-2.5 rounded-md text-[13px] font-semibold hover:bg-gray-100 transition"
                >
                  {whyUsData.promo.button}

                  <span className="ml-2">
                    →
                  </span>
                </button>

              </div>

            </div>

          </div>
        )}


        {/* =====================================================
            INSIGHTS
            5 COLUMNS
        ====================================================== */}

        {menuType === "insights" && (
          <div className="grid grid-cols-5 min-h-[430px]">

            {/* =================================================
                COLUMN 1 - INTRO
            ================================================= */}

            <div className="p-8 border-r border-gray-200 flex flex-col">

              {/* TOP CONTENT */}

              <div>

                <h3 className="text-[#5B9278] font-semibold text-[15px] tracking-wide">
                  {insightsData.intro.title}
                </h3>

                <div className="w-10 h-[3px] bg-[#4BA77A] mt-4 mb-6 rounded-full"></div>

                <p className="text-[14px] leading-[1.8] text-gray-600">
                  {insightsData.intro.description}
                </p>

              </div>

              {/* IMAGE AT BOTTOM */}

              <div className="mt-auto pt-6 flex justify-center">

                <img
                  src={insightsIntro}
                  alt="Insights"
                  className="w-full h-auto max-h-[130px] object-contain rounded-xl"
                />

              </div>

            </div>


            {/* =================================================
                COLUMN 2, 3, 4
            ================================================= */}

            {insightsData.columns.map((column, index) => (
              <div
                key={column.title}
                className={`p-8 ${
                  index < insightsData.columns.length - 1
                    ? "border-r border-gray-200"
                    : ""
                }`}
              >

                <h3 className="text-[#5B9278] font-semibold text-[15px] tracking-wide">
                  {column.title}
                </h3>

                <div className="w-10 h-[3px] bg-[#4BA77A] mt-4 mb-7 rounded-full"></div>

                <div className="space-y-5">

                  {column.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 group cursor-pointer"
                    >

                      {/* ICON */}

                      <div className="w-10 h-10 rounded-lg bg-[#EAF7F0] flex items-center justify-center shrink-0 group-hover:bg-[#D7F0E2] transition-colors">

                        <span className="text-[#4BA77A] text-[15px]">
                          {item.icon}
                        </span>

                      </div>

                      {/* TEXT */}

                      <span className="text-[14px] font-medium text-gray-700 leading-snug group-hover:text-[#3F9975] transition-colors">
                        {item.label}
                      </span>

                    </div>
                  ))}

                </div>

              </div>
            ))}


            {/* =================================================
                COLUMN 5 - PROMO
            ================================================= */}

            <div className="bg-[#005C3B] text-white p-8 flex flex-col">

              {/* TOP CONTENT */}

              <div>

                <div className="text-3xl mb-5">
                  {insightsData.promo.icon}
                </div>

                <h3 className="text-[18px] font-semibold leading-snug">
                  {insightsData.promo.title}
                </h3>

                <div className="w-10 h-[3px] bg-white mt-4 mb-6 rounded-full"></div>

                <p className="text-[14px] leading-[1.8] text-white/80">
                  {insightsData.promo.description}
                </p>

              </div>

              {/* IMAGE + BUTTON AT BOTTOM */}

              <div className="mt-auto pt-6">

                <div className="w-full flex justify-center mb-5">

                  <img
                    src={insightsPromo}
                    alt="Insights"
                    className="w-full h-auto max-h-[115px] object-contain rounded-xl"
                  />

                </div>

                <button
                  type="button"
                  className="bg-white text-[#438B6D] px-5 py-2.5 rounded-md text-[13px] font-semibold hover:bg-gray-100 transition"
                >
                  {insightsData.promo.button}

                  <span className="ml-2">
                    →
                  </span>
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default MegaMenu;