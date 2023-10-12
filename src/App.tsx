import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Team from './pages/Team';
import GetInvolved from './pages/GetInvolved';
import Blogs from './pages/Blogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="getinvolved" element={<GetInvolved />} />
          <Route path="team" element={<Team />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
