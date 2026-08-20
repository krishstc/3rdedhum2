import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { servicesData } from "../../../data/serviceData";

const MenuColumns = ({ setActiveMenu }) => {
  const navigate = useNavigate();

  /* =========================================================
     HANDLE MENU ITEM CLICK
  ========================================================= */

  const handleMenuClick = (item) => {
    /* ================= YPD ================= */

    if (item.folder === "YPD") {
      setActiveMenu(null);
      navigate("/ypd");
      return;
    }

    /* ================= UPCOMING ITEMS ================= */

    if (
      item.folder === "CLIP" ||
      item.folder === "ExecutiveCoaching" ||
      item.folder === "AssessmentCenter"
    ) {
      /* Close Mega Menu first */
      setActiveMenu(null);

      /* Force page reload every time */
      window.location.href = "/upcoming";

      return;
    }

    /* ================= NORMAL SERVICE ================= */

    if (item.children?.length) {
      setActiveMenu(item);
      return;
    }
  };

  return (
    <div className="grid grid-cols-3 gap-x-3">
      {Object.values(servicesData).map((column, columnIndex) => (
        <div key={columnIndex}>
          {column.map((item) => {
            const Icon = item.icon;

            const hasChildren = Boolean(item.children?.length);
            const isYPD = item.folder === "YPD";

            const isUpcoming =
              item.folder === "CLIP" ||
              item.folder === "ExecutiveCoaching" ||
              item.folder === "AssessmentCenter";

            const isClickable = hasChildren || isYPD || isUpcoming;

            return (
              <div
                key={item.title}
                onClick={() => handleMenuClick(item)}
                className={`group px-2 py-3 rounded-lg border-b border-gray-100 transition-all duration-300 ${isClickable ? "cursor-pointer hover:bg-gray-50" : "cursor-default"}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <div className="w-8 h-8 rounded-md bg-[#EAF7F0] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#D7F0E2] group-hover:scale-105">
                        <Icon className="text-[14px] text-[#4BA77A] transition-colors duration-300 group-hover:text-[#3F9975]" />
                      </div>
                    )}

                    <h3
                      className={`text-[14px] font-medium text-gray-700 leading-snug transition-colors duration-300 ${isClickable ? "group-hover:text-[#3F9975]" : ""}`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {isClickable && (
                    <FaArrowRight className="text-[10px] text-gray-300 transition-all duration-300 group-hover:text-[#4BA77A] group-hover:translate-x-1" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MenuColumns;