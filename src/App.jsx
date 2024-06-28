import HomeLayout from "./Components/Home/HomeLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopAllLayout from "./Components/ShopAll/ShopAllLayout";
import SingleILayout from "./Components/SingleItem/SingleILayout";

import BlogLayout from "./Components/Blog/BlogLayout";
import AboutUsLayout from "./Components/AboutUs/AboutUsLayout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/shopAll" element={<ShopAllLayout />} />
          <Route path="/blog" element={<BlogLayout />} />
          <Route path="/aboutUs" element={<AboutUsLayout />} />
          <Route path="/SingleILayout" element={<SingleILayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
