import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import Purchase from './Pages/Purchase/Purchase';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';



function App() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/purchase/:purchaseId" element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>}></Route>
       
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path="profile" element={<MyProfile />}></Route>
            <Route path="review" element={<AddReview />}></Route>
            <Route path="makeadmin" element={<MakeAdmin />}></Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
