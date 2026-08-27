import popupLogo from "../../assets/images/popup1.png";
import "./FloatingButton.css";

function FloatingButton({ onClick }) {
  return (
    <button onClick={onClick} aria-label="Open learning resources" className="floating-button fixed z-[99999] bottom-4 right-3 w-24 h-24 sm:bottom-5 sm:right-5 sm:w-28 sm:h-28 md:bottom-6 md:right-6 md:w-32 md:h-32 overflow-hidden border-0 outline-none shadow-none bg-transparent p-0 box-border cursor-pointer">
      <img src={popupLogo} alt="Learning Resources" className="block w-full h-full object-contain border-0 outline-none" />
    </button>
  );
}

export default FloatingButton;