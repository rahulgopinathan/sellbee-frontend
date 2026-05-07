import Header from "./header/header";
import SideBar from "./side-bar/SideBar";
import "./listing.css";

function ListingItems() {
  return (
    <>
      <SideBar />
      <Header />
      <main className="listing-main"></main>
    </>
  );
}
export default ListingItems;
