import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchases from './Pages/Purchases/Purchases';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto px-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="purchases"
            element={
              <RequireAuth>
                <Purchases />
              </RequireAuth>
            }
          />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard/>
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
