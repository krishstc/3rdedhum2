import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import MenuColumns from "./MenuColumns";
import ServiceContent from "./ServiceContent";
import FeatureCard from "./FeatureCard";

import whyUsData from "../../../data/whyUsData";
import insightsData from "../../../data/insightsData";

import whyUsImage from "../../../assets/images/whyus.png";
import whyUsPromoImage from "../../../assets/images/whyus2.png";
import insightsImage from "../../../assets/images/insight.png";
import insightsPromoImage from "../../../assets/images/insights2.png";

function MegaMenu({ isOpen, menuType }) {
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  /* Reset service submenu whenever mega menu closes */
  useEffect(() => {
    if (!isOpen) {
      setActiveService(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const itemClass =
    "group w-full flex items-center gap-4 text-left px-3 py-2.5 rounded-lg hover:bg-[#F5FBF8] transition-all duration-200";

  const iconClass =
    "w-10 h-10 rounded-lg bg-[#EAF7F0] flex items-center justify-center text-[#3F9975] text-[14px] shrink-0";

  const textClass =
    "text-[14px] leading-[1.3] font-medium text-[#414B5A] group-hover:text-[#3F9975] transition-colors";

  /* ================= SERVICES ================= */

  if (menuType === "services") {
    return (
      <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-[999]">
        <div className="max-w-[1400px] mx-auto px-8 py-8">

          {!activeService ? (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-[#0B2C25]">
                  Our Services
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Explore our learning and development solutions.
                </p>
              </div>

              <div className="grid grid-cols-[1fr_270px] gap-8 items-start">
                <MenuColumns setActiveMenu={setActiveService} />
                <FeatureCard />
              </div>
            </>
          ) : (
            <ServiceContent
              menu={activeService}
              goBack={() => setActiveService(null)}
            />
          )}

        </div>
      </div>
    );
  }

  /* ================= WHY 3RD EDHUM ================= */

  if (menuType === "whyus") {
    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-50px)] max-w-[1300px] bg-white rounded-b-[18px] shadow-xl border border-gray-100 overflow-hidden z-[999]">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_260px] min-h-[497px]">

          <div className="relative border-r border-gray-200 px-8 pt-8 pb-5 flex flex-col">
            <h3 className="text-[14px] font-semibold tracking-[0.5px] text-[#5B927B]">
              WHY 3RD EDHUM
            </h3>

            <div className="mt-4 w-[40px] h-[3px] bg-[#3F9975] rounded-full" />

            <p className="mt-7 text-[15px] leading-[1.7] text-[#5D6870] max-w-[190px]">
              {whyUsData.intro.description}
            </p>

            <div className="mt-auto flex justify-center items-end pt-5">
              <img
                src={whyUsImage}
                alt="Why 3rd EdHum"
                className="w-[180px] h-[150px] object-contain object-bottom"
              />
            </div>
          </div>

          {whyUsData.columns.map((column) => (
            <div
              key={column.title}
              className="border-r border-gray-200 px-8 pt-8 pb-5"
            >
              {column.title === "ABOUT US" ? (
                <button
                  onClick={() => navigate("/why-us/about-us")}
                  className="text-left text-[14px] font-semibold tracking-[0.5px] text-[#5B927B] hover:text-[#3F9975] transition-colors"
                >
                  ABOUT US
                </button>
              ) : (
                <h3 className="text-[14px] font-semibold tracking-[0.5px] text-[#5B927B]">
                  {column.title}
                </h3>
              )}

              <div className="mt-4 w-[40px] h-[3px] bg-[#3F9975] rounded-full" />

              <div className="mt-7 space-y-2">
                {column.items.map((item) => (
                  <button key={item.label} className={itemClass}>
                    <span className={iconClass}>{item.icon}</span>
                    <span className={textClass}>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-[#006247] text-white px-8 pt-8 pb-7 flex flex-col">
            <div className="text-[28px] leading-none">
              {whyUsData.promo.icon}
            </div>

            <h3 className="mt-6 text-[19px] leading-[1.3] font-bold">
              Empower People
              <br />
              Elevate Potential.
            </h3>

            <div className="mt-5 w-[40px] h-[3px] bg-white rounded-full" />

            <p className="mt-6 text-[14px] leading-[1.75] text-white/80">
              {whyUsData.promo.description}
            </p>

            <div className="mt-auto pt-5">
              <img
                src={whyUsPromoImage}
                alt="Empower People"
                className="w-full h-[105px] object-contain object-bottom"
              />

              <button className="mt-3 w-full bg-white text-[#3F9975] rounded-lg px-4 py-3 text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-200">
                {whyUsData.promo.button}
                <FaArrowRight className="text-[10px]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  /* ================= INSIGHTS ================= */

  if (menuType === "insights") {
    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-50px)] max-w-[1300px] bg-white rounded-b-[18px] shadow-xl border border-gray-100 overflow-hidden z-[999]">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_260px] min-h-[487px]">

          <div className="relative border-r border-gray-200 px-8 pt-8 pb-5 flex flex-col">
            <h3 className="text-[14px] font-semibold tracking-[0.5px] text-[#5B927B]">
              INSIGHTS
            </h3>

            <div className="mt-4 w-[40px] h-[3px] bg-[#3F9975] rounded-full" />

            <p className="mt-7 text-[15px] leading-[1.7] text-[#5D6870] max-w-[190px]">
              {insightsData.intro.description}
            </p>

            <div className="mt-auto flex justify-center items-end pt-5">
              <img
                src={insightsImage}
                alt="Insights"
                className="w-[190px] h-[150px] object-contain object-bottom"
              />
            </div>
          </div>

          {insightsData.columns.map((column) => (
            <div
              key={column.title}
              className="border-r border-gray-200 px-8 pt-8 pb-5"
            >
              <h3 className="text-[14px] font-semibold tracking-[0.5px] text-[#5B927B]">
                {column.title}
              </h3>

              <div className="mt-4 w-[40px] h-[3px] bg-[#3F9975] rounded-full" />

              <div className="mt-7 space-y-2">
                {column.items.map((item) => (
                  <button key={item.label} className={itemClass}>
                    <span className={iconClass}>{item.icon}</span>
                    <span className={textClass}>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-[#006247] text-white px-8 pt-8 pb-7 flex flex-col">
            <div className="text-[28px] leading-none">
              {insightsData.promo.icon}
            </div>

            <h3 className="mt-6 text-[19px] leading-[1.3] font-bold">
              Knowledge Drives,
              <br />
              Better Leaders.
            </h3>

            <div className="mt-5 w-[40px] h-[3px] bg-white rounded-full" />

            <p className="mt-6 text-[14px] leading-[1.75] text-white/80">
              {insightsData.promo.description}
            </p>

            <div className="mt-auto pt-5">
              <img
                src={insightsPromoImage}
                alt="Knowledge Drives Better Leaders"
                className="w-full h-[105px] object-contain object-bottom"
              />

              <button className="mt-3 w-full bg-white text-[#3F9975] rounded-lg px-4 py-3 text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-200">
                {insightsData.promo.button}
                <FaArrowRight className="text-[10px]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return null;
}

export default MegaMenu;