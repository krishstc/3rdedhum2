import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { servicesData } from "../../../data/serviceData";

const MenuColumns = ({ setActiveMenu }) => {
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    /* ================= YPD ================= */

    if (item.folder === "YPD") {
      setActiveMenu(null);
      navigate("/ypd");
      return;
    }

    /* ================= EXECUTIVE COACHING ================= */

    if (item.folder === "Executive Coaching") {
      setActiveMenu(null);
      navigate("/services/executive-coaching");
      return;
    }

    /* ================= UPCOMING ITEMS ================= */

    if (
      item.folder === "C.L.I.P." ||
      item.folder === "Assessment Center"
    ) {
      setActiveMenu(null);
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
            const isExecutiveCoaching =
              item.folder === "Executive Coaching";

            const isUpcoming =
              item.folder === "C.L.I.P." ||
              item.folder === "Assessment Center";

            const isClickable =
              hasChildren ||
              isYPD ||
              isExecutiveCoaching ||
              isUpcoming;

            return (
              <div
                key={item.title}
                onClick={() => handleMenuClick(item)}
                className={`group rounded-lg border-b border-gray-100 px-2 py-3 transition-all duration-300 ${
                  isClickable
                    ? "cursor-pointer hover:bg-gray-50"
                    : "cursor-default"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#EAF7F0] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#D7F0E2]">
                        <Icon className="text-[14px] text-[#4BA77A] transition-colors duration-300 group-hover:text-[#3F9975]" />
                      </div>
                    )}

                    <h3
                      className={`text-[14px] font-medium leading-snug text-gray-700 transition-colors duration-300 ${
                        isClickable
                          ? "group-hover:text-[#3F9975]"
                          : ""
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {isClickable && (
                    <FaArrowRight className="text-[10px] text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#4BA77A]" />
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