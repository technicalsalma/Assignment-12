import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navber = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/myportfolio">My Portfolio</Link>
      </li>
      {user && (
        <li className="hidden lg:block">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button className="btn btn-outline btn-secondary" onClick={logout}>
            SignOut
          </button>
        ) : (
          <Link className="btn btn-outline btn-secondary" to="/login">
            Login
          </Link>
        )}
      </li>
      <div>
        <p className="hidden lg:block mt-3 ml-10 text-secondary">{user && user?.displayName}</p>
      </div>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex="0"
            className="btn btn-outline btn-secondary lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="text-secondary text-2xl font-bold mr-5">Drill Machine</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>

      <div className="navbar-end">
        <label
          tabIndex="1"
          for="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navber;


// import { signOut } from 'firebase/auth';
// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import auth from '../../firebase.init';
// import img from '../../assests/images/cartoon-boy-images-4.jpg'


// const Navbar = ({ children }) => {
//     const navigate = useNavigate()
//     const [user] = useAuthState(auth)
//     const logOut = () => {
//         signOut(auth)
//         localStorage.removeItem('accessToken')
//         navigate('/')
//     }
//     return (
//         <div className="drawer">
//             <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col">
//                 {/* <!-- Navbar --> */}
//                 <div className="w-full navbar bg-transparent my-2">
//                     <div className="flex-none lg:hidden">
//                         <label for="my-drawer-2" className="btn btn-ghost btn-circle drawer-button lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
//                         </label>
//                     </div>
//                     <div className="px-2 mx-2 text-3xl font-bold font-serif uppercase">
//                         <Link to='/'>Tool Time</Link>
//                     </div>
//                     <div className=" mx-auto hidden lg:block">
//                         <ul className="menu menu-horizontal">
//                             {/* <!-- Navbar menu content here --> */}
//                             <li><NavLink to='/'>Home</NavLink></li>
//                             {
//                                 user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
//                             }
//                             <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
//                             <li><NavLink to='/blogs'>Blogs</NavLink></li>


//                             <li><NavLink to='/register'>Register</NavLink></li>
//                             {
//                                 user ?
//                                     <li><button onClick={logOut}>Sign Out</button></li>
//                                     :
//                                     <li><NavLink to='/login'>Login</NavLink></li>
//                             }
//                         </ul>
//                     </div>
//                     <Link to='/dashboard'>
//                         <div className="avatar hidden lg:block">
//                             <div className="w-8 rounded-full">
//                                 {/* <img src={user && (user?.photoURL || img)} alt="" /> */}
//                             </div>
//                         </div>
//                         <p className='hidden lg:block ml-1 mr-4'>
//                             {user && user?.displayName}
//                         </p>
//                     </Link>
//                     <label for="my-drawer-3" className="btn btn-square block lg:hidden btn-ghost grid">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//                     </label>

//                 </div>
//                 {/* <!-- Page content here --> */}
//                 {children}
//             </div>
//             <div className="drawer-side">
//                 <label for="my-drawer-3" className="drawer-overlay"></label>
//                 <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
//                     {/* <!-- Sidebar content here --> */}
//                     <li><NavLink to='/'>Home</NavLink></li>
//                     {
//                         user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
//                     }
//                     <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
//                     <li><NavLink to='/blogs'>Blogs</NavLink></li>


//                     <li><NavLink to='/register'>Register</NavLink></li>
//                     {
//                         user ?
//                             <li><button onClick={logOut}>Sign Out</button></li>
//                             :
//                             <li><NavLink to='/login'>Login</NavLink></li>
//                     }

//                 </ul>


//             </div>

//         </div>
//     );
// };

// export default Navbar;
