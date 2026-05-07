import "./SideBar.css";
import BottomBorderButton from "../../../shared/bottom-border-button/bottomBorderButton";
import PillButton from "../../../shared/pill-button/PillButton";
function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-buttons">
        <BottomBorderButton text={"Home"} />
        <BottomBorderButton text={"My Ads"} />
        <BottomBorderButton text={"About Us"} />
        <BottomBorderButton text={"Settings"} />
      </div>
      <PillButton className="sell-item-btn" text="Sell Item +" />
    </div>
  );
}

export default SideBar;
