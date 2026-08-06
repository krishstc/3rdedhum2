import { useMemo, useState } from "react";
import {
  FaArrowLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

import { servicesData } from "../../data/serviceData";
import MobileSubMenu from "./MobileSubMenu";

function MobileServiceMenu({ onBack, onClose }) {
  const [selectedMenu, setSelectedMenu] = useState(null);

  // Merge all three columns into one array
  const allMenus = useMemo(() => {
    return [
      ...servicesData.column1,
      ...servicesData.column2,
      ...servicesData.column3,
    ];
  }, []);

  // Open submenu
  if (selectedMenu) {
    return (
      <MobileSubMenu
        menu={selectedMenu}
        onBack={() => setSelectedMenu(null)}
        onClose={onClose}
      />
    );
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b">

        <button
          onClick={onBack}
          className="text-lg text-gray-700 hover:text-black"
        >
          <FaArrowLeft />
        </button>

        <h2 className="text-lg font-semibold">
          Services
        </h2>

        <button
          onClick={onClose}
          className="text-lg text-gray-700 hover:text-black"
        >
          <FaTimes />
        </button>
      </div>

      {/* Services List */}
      <div className="overflow-y-auto h-[calc(100%-80px)]">

        {allMenus.map((item, index) => {

          const Icon = item.icon;

          return (
            <button
              key={index}
              onClick={() => setSelectedMenu(item)}
              className="w-full flex items-center justify-between px-5 py-4 border-b hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">

                {Icon && (
                  <Icon className="text-[#3F9975] text-lg" />
                )}

                <span className="text-left text-[15px] font-medium">
                  {item.title}
                </span>

              </div>

              {item.children && (
                <FaChevronRight className="text-gray-400 text-sm" />
              )}
            </button>
          );
        })}

      </div>
    </>
  );
}

export default MobileServiceMenu;