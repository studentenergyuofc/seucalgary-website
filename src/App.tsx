import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import JoinUs from "./pages/JoinUs";
import Interships from "./pages/Internships";
import Blogs from "./pages/Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Partners from "./pages/Partners";
import {useState} from "react";

function App() {
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout dropdownMenu={dropdownMenu} setDropdownMenu={setDropdownMenu}/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="join" element={<JoinUs />} />
            <Route path="internships" element={<Interships />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="partners" element={<Partners />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
