import { FaArrowLeft, FaTimes } from "react-icons/fa";

import whyUsData from "../../../data/whyUsData";
import insightsData from "../../../data/insightsData";

function MobileContentMenu({ type, onBack, onClose }) {

  const data =
    type === "whyus"
      ? whyUsData
      : insightsData;

  const heading =
    type === "whyus"
      ? "Why 3rd EdHum"
      : "Insights";

  return (
    <>
      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between p-5 border-b bg-white sticky top-0 z-10">

        <button
          onClick={onBack}
          className="text-lg text-gray-700 hover:text-black"
        >
          <FaArrowLeft />
        </button>

        <h2 className="text-lg font-semibold">
          {heading}
        </h2>

        <button
          onClick={onClose}
          className="text-lg text-gray-700 hover:text-black"
        >
          <FaTimes />
        </button>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="overflow-y-auto h-[calc(100%-80px)]">

        {/* Intro */}

        <div className="p-5 bg-[#F8FAF9] border-b">

          <h3 className="text-[#3F9975] font-semibold text-base">
            {data.intro.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            {data.intro.description}
          </p>

        </div>


        {/* ================= COLUMNS ================= */}

        {data.columns.map((column, columnIndex) => (

          <div
            key={column.title}
            className="border-b"
          >

            {/* Column Heading */}

            <div className="px-5 py-4 bg-white">

              <h3 className="text-[#3F9975] font-semibold text-[15px]">
                {column.title}
              </h3>

            </div>


            {/* Column Items */}

            <div className="bg-gray-50">

              {column.items.map((item, itemIndex) => (

                <button
                  key={itemIndex}
                  className="w-full flex items-center gap-3 px-6 py-3 border-t border-gray-100 text-left hover:bg-white transition"
                >

                  {/* Icon */}

                  <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-[#EAF7F0] flex items-center justify-center">

                    <span className="text-[#4BA77A] text-sm">
                      {item.icon}
                    </span>

                  </div>


                  {/* Text */}

                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>

                </button>

              ))}

            </div>

          </div>

        ))}


        {/* ================= PROMO ================= */}

        <div className="bg-[#005C3B] text-white p-6">

          <div className="text-2xl mb-3">
            {data.promo.icon}
          </div>

          <h3 className="text-lg font-semibold">
            {data.promo.title}
          </h3>

          <div className="w-10 h-[3px] bg-white mt-3 mb-4 rounded-full" />

          <p className="text-sm leading-6 text-white/80">
            {data.promo.description}
          </p>

          <button
            type="button"
            className="mt-5 bg-white text-[#438B6D] px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
          >
            {data.promo.button}
            <span className="ml-2">
              →
            </span>
          </button>

        </div>

      </div>
    </>
  );
}

export default MobileContentMenu;