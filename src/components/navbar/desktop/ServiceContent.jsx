import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const ServiceContent = ({ menu, goBack }) => {
  if (!menu) return null;

  const handlePdfOpen = (title) => {
    const pdfPath = `/pdf/${menu.folder}/${title}.pdf`;
    window.open(pdfPath, "_blank");
  };

  const columns = 3;
  const itemsPerColumn = Math.ceil(menu.children.length / columns);

  const menuColumns = Array.from({ length: columns }, (_, index) =>
    menu.children.slice(index * itemsPerColumn, (index + 1) * itemsPerColumn)
  );

  return (
    <div className="w-full">

      <button
        onClick={goBack}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#3F9975] transition-colors mb-6"
      >
        <FaArrowLeft className="text-xs" />
        Back to Services
      </button>

      <div className="grid grid-cols-4 gap-x-8 items-start">

        {/* COLUMN 1-3: SERVICE ITEMS */}
        <div className="col-span-3">

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {menu.title}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-x-8 gap-y-2">
            {menuColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-1">
                {column.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handlePdfOpen(item)}
                    className="group flex items-center justify-between rounded-md px-2 py-2 cursor-pointer transition-all duration-200 hover:bg-gray-50"
                  >
                    <span className="text-[14px] font-normal text-gray-600 group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>

                    <FaChevronRight className="text-[10px] text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-gray-500 transition-all duration-200" />
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>

        {/* COLUMN 4: SERVICES FEATURE CARD */}
        <div className="col-span-1">
          <FeatureCard />
        </div>

      </div>
    </div>
  );
};

export default ServiceContent;