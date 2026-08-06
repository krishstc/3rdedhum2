import { FaArrowLeft, FaTimes } from "react-icons/fa";

function MobileSubMenu({ menu, onBack, onClose }) {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b bg-white sticky top-0 z-10">
        <button
          onClick={onBack}
          className="text-lg text-gray-700 hover:text-black"
        >
          <FaArrowLeft />
        </button>

        <h2 className="text-base font-semibold text-center flex-1 px-3 truncate">
          {menu.title}
        </h2>

        <button
          onClick={onClose}
          className="text-lg text-gray-700 hover:text-black"
        >
          <FaTimes />
        </button>
      </div>

      {/* Submenu List */}
      <div className="overflow-y-auto h-[calc(100%-80px)]">

        {menu.children && menu.children.length > 0 ? (
          menu.children.map((child, index) => (
            <button
              key={index}
              className="w-full text-left px-6 py-3 border-b hover:bg-gray-50 transition text-[15px] text-gray-700"
            >
              {child}
            </button>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            No sub-services available.
          </div>
        )}

      </div>
    </>
  );
}

export default MobileSubMenu;