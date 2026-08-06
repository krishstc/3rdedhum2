import { useState, useEffect } from "react";
import MenuColumns from "./MenuColumns";
import ServiceContent from "./ServiceContent";

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
      <div className="max-w-[1320px] mx-auto bg-white rounded-2xl shadow-2xl border overflow-hidden">
        <div className="p-10">
          {!activeMenu ? (
            <MenuColumns setActiveMenu={setActiveMenu} />
          ) : (
            <ServiceContent
              menu={activeMenu}
              goBack={() => setActiveMenu(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;