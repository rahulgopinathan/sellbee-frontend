import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./features/login/LoginPage";
import ListingItems from "./features/listing-page/listing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/listing" element={<ListingItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
