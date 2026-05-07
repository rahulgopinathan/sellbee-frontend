import SellByTextIcon from "../../shared/sellby-text-icon/SellbyTextIcon";
import "./SideBar.css";
import BottomBorderButton from "../../shared/bottom-border-button/bottomBorderButton";
function SideBar() {
  return (
    <div className="sidebar-container">
      <SellByTextIcon />
      <div className="sidebar-buttons">
        <BottomBorderButton text={"Home"} />
        <BottomBorderButton text={"My Ads"} />
        <BottomBorderButton text={"About Us"} />
        <BottomBorderButton text={"Settings"} />
      </div>
      <div>
        <button>Sell Item +</button>
      </div>
    </div>
  );
}

export default SideBar;
