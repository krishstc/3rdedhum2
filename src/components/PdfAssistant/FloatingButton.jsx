import popupLogo from "../../assets/images/popup.jpeg";
import "./FloatingButton.css";

function FloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="floating-button fixed bottom-6 right-10 z-50 w-20 h-20 rounded-full overflow-hidden border-2 border-[#28725c]
      shadow-2xl transition-all duration-300"
    >
      <img
        src={popupLogo}
        alt="Learning Resources"
        className="w-full h-full object-cover rounded-full"
      />
    </button>
  );
}

export default FloatingButton;