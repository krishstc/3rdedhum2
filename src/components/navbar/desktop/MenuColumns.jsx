import { FaArrowRight } from "react-icons/fa";
import { servicesData } from "../../../data/serviceData";

const MenuColumns = ({ setActiveMenu }) => {
  const handleMenuClick = (item) => {
    if (item.children?.length) {
      setActiveMenu(item);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-x-3">
      {Object.values(servicesData).map((column, columnIndex) => (
        <div key={columnIndex}>
          {column.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                onClick={() => handleMenuClick(item)}
                className={`group px-2 py-2 rounded-lg border-b border-gray-100 hover:bg-[#F8FAF9] transition-all duration-300 ${
                  item.children?.length
                    ? "cursor-pointer hover:bg-gray-50"
                    : "cursor-default"
                }`}
              >
                <div className="flex items-center justify-between">

                  {/* Left Side */}
                  <div className="flex items-center gap-2">

                    {Icon && (
                      <div className="flex-shrink-0">
                        <Icon className="text-[15px] text-gray-400 transition-colors duration-300 group-hover:text-gray-600" />
                      </div>
                    )}

                    <h3
                      className={`text-[14px] font-medium text-gray-700 leading-6 transition-colors duration-300 ${
                        item.children?.length
                          ? "group-hover:text-gray-900"
                          : ""
                      }`}
                    >
                      {item.title}
                    </h3>

                  </div>

                  {/* Right Arrow */}
                  {item.children?.length && (
                    <FaArrowRight className="text-[10px] text-gray-300 transition-all duration-300 group-hover:text-gray-500 group-hover:translate-x-1" />
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