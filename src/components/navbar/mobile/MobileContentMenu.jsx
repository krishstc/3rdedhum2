import { FaArrowLeft, FaTimes, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import whyUsData from "../../../data/whyUsData";
import insightsData from "../../../data/insightsData";

function MobileContentMenu({ type, onBack, onClose }) {
  const data = type === "whyus" ? whyUsData : insightsData;
  const navigate = useNavigate();

  if (!data) return null;

  const handleItemClick = (item) => {
    const label = item.label.trim().toLowerCase();

    /* ================= WHY 3RD EDHUM ================= */

    if (type === "whyus") {

      /* WHAT MAKES US DIFFERENT */
      if (label === "what makes us different") {
        onClose();
        navigate(
          "/why3rdedhum/our-differences/what-makes-us-different"
        );
        return;
      }

      /* THE IMPACT OF LEARNING */
      if (label === "the impact of learning") {
        onClose();
        navigate(
          "/why3rdedhum/our-differences/the-impact-of-learning"
        );
        return;
      }

      /* OUR CLIENT RESULTS */
      if (label === "our client results") {
        onClose();
        navigate(
          "/why3rdedhum/our-differences/our-client-results"
        );
        return;
      }

      /* CUSTOMER SUCCESS STORIES */
      if (label === "customer success stories") {
        onClose();
        navigate(
          "/why3rdedhum/our-differences/customer-success-stories"
        );
        return;
      }

      /* AWARDS & RECOGNITION */
      if (label === "awards & recognition") {
        onClose();
        navigate(
          "/why3rdedhum/our-differences/awards-recognition"
        );
        return;
      }

      /* WHO WE ARE */
      if (label === "who we are") {
        onClose();
        navigate("/why3rdedhum/who-we-are");
        return;
      }

      /* OUR MISSION & VALUES */
      if (label === "our mission & values") {
        onClose();
        navigate("/why3rdedhum/about-us/our-missions-values");
        return;
      }

      /* OUR LEADERSHIP TEAM */
      if (label === "our leadership team") {
        onClose();
        navigate("/why3rdedhum/about-us/our-leadership-team");
        return;
      }

      /* OUR JOURNEY */
      if (label === "our journey") {
        onClose();
        navigate("/why3rdedhum/about-us/our-journey");
        return;
      }

      /* CULTURE & BELIEFS */
      if (label === "culture & beliefs") {
        onClose();
        navigate("/why3rdedhum/about-us/culture-beliefs");
        return;
      }

      /* GLOBAL PRESENCE */
      if (label === "global presence") {
        onClose();
        navigate("/why3rdedhum/our-reach/global-presence");
        return;
      }

      /* INDUSTRY EXPERTISE */
      if (label === "industry expertise") {
        onClose();
        navigate("/why3rdedhum/our-reach/industry-expertise");
        return;
      }

      /* TRUSTED BY LEADERS */
      if (label === "trusted by leaders") {
        onClose();
        navigate("/why3rdedhum/our-reach/trusted-by-leaders");
        return;
      }
    }

    /* ================= INSIGHTS / OTHER ITEMS ================= */

    onClose();
  };

  /* ================= ABOUT US HEADING ================= */

  const handleColumnHeadingClick = (column) => {
    if (
      type === "whyus" &&
      column.title.trim().toLowerCase() === "about us"
    ) {
      onClose();
      navigate("/why3rdedhum/about-us");
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0">

        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-[#3F9975] transition"
        >
          <FaArrowLeft className="text-sm" />

          <span className="text-sm font-medium">
            Back
          </span>
        </button>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-[#EAF7F0] hover:text-[#28725c] transition"
        >
          <FaTimes />
        </button>

      </div>


      {/* ================= CONTENT ================= */}

      <div className="overflow-y-auto flex-1 p-5">

        {/* ================= INTRO ================= */}

        <div className="mb-6">

          <p className="text-xs tracking-[2px] font-semibold text-[#3F9975] mb-2">
            {data.intro.title}
          </p>

          <p className="text-sm leading-6 text-gray-500">
            {data.intro.description}
          </p>

        </div>


        {/* ================= MENU COLUMNS ================= */}

        <div className="space-y-6">

          {data.columns.map((column) => (

            <div key={column.title}>

              {/* ================= COLUMN HEADING ================= */}

              {type === "whyus" &&
              column.title.trim().toLowerCase() === "about us" ? (

                <button
                  type="button"
                  onClick={() => handleColumnHeadingClick(column)}
                  className="text-left"
                >

                  <h3 className="text-xs font-semibold tracking-[1.5px] text-[#3F9975] mb-3 hover:text-[#28725c] transition">
                    {column.title}
                  </h3>

                </button>

              ) : (

                <h3 className="text-xs font-semibold tracking-[1.5px] text-[#3F9975] mb-3">
                  {column.title}
                </h3>

              )}

              <div className="space-y-1">

                {column.items.map((item) => (

                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className="group w-full flex items-center justify-between text-left px-3 py-3 rounded-lg border-b border-gray-100 hover:bg-[#F6FCF9] transition"
                  >

                    <div className="flex items-center gap-3">

                      <span className="w-8 h-8 rounded-md bg-[#EAF7F0] flex items-center justify-center text-[#3F9975] text-sm shrink-0">
                        {item.icon}
                      </span>

                      <span className="text-sm text-gray-700 group-hover:text-[#3F9975] transition">
                        {item.label}
                      </span>

                    </div>

                    <FaChevronRight className="text-[10px] text-gray-300 group-hover:text-[#3F9975] transition" />

                  </button>

                ))}

              </div>

            </div>

          ))}

        </div>


        {/* ================= PROMO CARD ================= */}

        {data.promo && (

          <div className="mt-7 rounded-2xl overflow-hidden bg-gradient-to-br from-[#043329] to-[#28725c] text-white shadow-lg">

            <div className="p-5">

              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl mb-3">
                {data.promo.icon}
              </div>

              <h3 className="text-lg font-bold leading-tight">
                {data.promo.title}
              </h3>

              <p className="text-white/70 text-xs leading-5 mt-3">
                {data.promo.description}
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-4 text-sm text-[#7BE3C4] font-semibold hover:text-white transition"
              >
                {data.promo.button} →
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default MobileContentMenu;