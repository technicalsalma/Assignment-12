import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer';
import Banner from './Pages/Home/Banner';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
