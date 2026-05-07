import SellByTextIcon from "../../shared/sellby-text-icon/SellbyTextIcon";
import "./SideBar.css";
import BottomBorderButton from "../../shared/bottom-border-button/bottomBorderButton";
import PillButton from "../../shared/pill-button/PillButton";
function SideBar() {
  return (
    <div className="sidebar-container">
      <SellByTextIcon />
      <div className="sidebar-gap-sm" />
      <div className="sidebar-buttons">
        <BottomBorderButton text={"Home"} />
        <BottomBorderButton text={"My Ads"} />
        <BottomBorderButton text={"About Us"} />
        <BottomBorderButton text={"Settings"} />
      </div>
      <div className="sidebar-gap-lg" />
      <div>
        <PillButton text="Sell Item +" />
      </div>
    </div>
  );
}

export default SideBar;
