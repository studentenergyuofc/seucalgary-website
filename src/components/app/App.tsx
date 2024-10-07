import "./App.css";
import Layout from "./AppLayout/AppLayout";
import About from "@pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "@pages/landing/Home";
import Blogs from "@pages/featuredArticles/FeaturesArticles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                dropdownMenu={dropdownMenu}
                setDropdownMenu={setDropdownMenu}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
