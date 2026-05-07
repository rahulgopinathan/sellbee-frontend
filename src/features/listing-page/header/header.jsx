import "./header.css";
import SellByTextIcon from "../../../shared/sellby-text-icon/SellbyTextIcon";
export default function Header() {
  return (
    <div className="header">
      <SellByTextIcon />
      <input
        type="text"
        className="search-txt"
        placeholder="Calculator fx 99..."
      />
      <div className="header-buttons-container">
        <button>Messages</button>
        <button>Akhiljith Kumar</button>
      </div>
    </div>
  );
}
