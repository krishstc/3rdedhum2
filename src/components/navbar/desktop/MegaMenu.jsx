import { useState, useEffect } from "react";
import MenuColumns from "./MenuColumns";
import ServiceContent from "./ServiceContent";
import FeatureCard from "./FeatureCard";
const MegaMenu = ({ isOpen }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  // Reset submenu whenever mega menu closes
  useEffect(() => {
    if (!isOpen) {
      setActiveMenu(null);
    }
  }, [isOpen]);

  return (
    <div
      className={`hidden lg:block absolute left-0 top-full mt-0 w-full transition-all duration-300 z-50 ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }`}
    >
      <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-2xl border overflow-hidden">
        <div className="grid grid-cols-4 gap-2 p-6">

          {/* Left Side */}
          <div className="col-span-3">
            {!activeMenu ? (
              <MenuColumns setActiveMenu={setActiveMenu} />
            ) : (
              <ServiceContent
                menu={activeMenu}
                goBack={() => setActiveMenu(null)}
              />
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-start justify-end">
            <FeatureCard />
          </div>

        </div>
      </div>
    </div>
  );
};

export default MegaMenu;