import Header from "./header/header";
import SideBar from "./side-bar/SideBar";
import "./listing.css";

function ListingItems() {
  return (
    <>
      <SideBar />
      <Header />
      <main className="listing-main">
        <div className="listing-filters">
          <button className="filter-btn">Books</button>
          <button className="filter-btn">Calculator</button>
          <button className="filter-btn">Pencil box</button>
          <button className="filter-btn">Written notes</button>
        </div>
      </main>
    </>
  );
}
export default ListingItems;
