// import { useDispatch, useSelector } from "react-redux"
// import { Link, useNavigate } from "react-router-dom"
// import { logout } from "../slices/authSlice";
// import toast from "react-hot-toast";
// export default function Navbar() {
//   const { user } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   // console.log(user);
//   const dispatch = useDispatch();
//   const handleLogout = async () => {
//     await dispatch(logout());
//     toast.success('User logged out');
//     navigate("/");
//   }
//   return (
//     <nav className="relative flex items-center justify-between md:px-16 px-4 py-4 rounded-b-[2rem] bg-[#ED5353] overflow-hidden">
//       <div className="bg-[#FF6B6B] md:bloc h-[40px] absolute left-[-15px] bottom-[-1rem]  rotate-[13deg] w-[200px]"></div>
//       <div className="bg-[#FF6B6B] md:block hidden rounded-b-[1.4rem] h-[80px] absolute top-[-60%] left-[40%] rotate-[-25deg] w-[200px]"></div>
//       <div className="bg-[#FF6B6B] md:bloc rounded-b-[3.4rem] lg:h-[140px] h-[80px] absolute top-[-80%] right-[5%]  rotate-[-8deg] lg:w-[300px] w-[150px]"></div>
//       <div className="">
//         <Link to={"/"} className="text-white text-2xl font-semibold relative z-1">Jobfinder</Link>
//       </div>
//       <div className="flex items-center gap-4">
//         {
//           user ? (
//             <>
//               <button onClick={handleLogout} className="text-white px-4 py-[0.4rem]  relative z-1">Logout</button>
//               <button className="text-white px-4 relative z-1 flex items-center gap-3">
//                 Hello! Recruiter
//                 <img
//                   className="rounded-full w-[3rem]"
//                   src={`https://ui-avatars.com/api/?name=${user?.email}`}
//                   alt="Profile Image"
//                   title={`${user?.email}`}
//                 />
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to={"/login"} className="border border-2 border-white text-white px-4 py-[0.4rem] rounded-md relative z-1">Login</Link>
//               <Link to={"/register"} className="bg-white text-red-400 px-4 py-2 rounded-md relative z-1">Register</Link>
//             </>
//           )
//         }
//       </div>
//     </nav>
//   )
// }



import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";  // For toggling menu
import { logout } from "../slices/authSlice";
import toast from "react-hot-toast";
import { FiMenu, FiX } from "react-icons/fi";  // Import icons for menu

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu

  const handleLogout = async () => {
    await dispatch(logout());
    toast.success('User logged out');
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Toggle the menu
  };

  return (
    <nav className={`relative flex items-center justify-between md:px-16 px-4 py-4 ${menuOpen ? "" : "rounded-b-[2rem]"} bg-[#ED5353] md:overflow-hidden`}>
      <div className="bg-[#FF6B6B] md:block hidden h-[40px] absolute left-[-15px] bottom-[-1rem]  rotate-[13deg] w-[200px]"></div>
      <div className="bg-[#FF6B6B] md:block hidden rounded-b-[1.4rem] h-[80px] absolute top-[-60%] left-[40%] rotate-[-25deg] w-[200px]"></div>
      <div className="bg-[#FF6B6B] md:block hidden rounded-b-[3.4rem] lg:h-[140px] h-[80px] absolute top-[-80%] right-[5%]  rotate-[-8deg] lg:w-[300px] w-[150px]"></div>
      {/* Logo */}
      <div className="z-10">
        <Link to={"/"} className="text-white text-2xl font-semibold">Jobfinder</Link>
      </div>

      {/* Menu Button for Small Screens */}
      <div className="md:hidden z-20">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Menu Items */}
      <div className={`md:flex md:items-center absolute md:relative left-0 px-2 py-4 md:p-0 md:bg-transparent bg-[inherit] w-full md:w-auto ${menuOpen ? "top-16 block rounded-b-[2rem]" : "top-[-100%] hidden"} md:top-auto transition-all duration-300 ease-in-out`}>
        {user ? (
          <div className="flex flex-col md:flex-row md:items-center items-start gap-4 text-white">
            <button onClick={handleLogout} className="px-4 py-[0.4rem]">Logout</button>
            <button className="px-4 flex items-center gap-3">
              Hello! Recruiter
              <img
                className="rounded-full w-[3rem]"
                src={`https://ui-avatars.com/api/?name=${user?.email}`}
                alt="Profile Image"
                title={`${user?.email}`}
              />
            </button>
          </div>
        ) : (
          <div className="flex items-center md:flex-row gap-3">
            <Link to={"/login"} className="w-[5.5rem] text-center border border-2 border-white text-white px-4 py-[0.4rem] rounded-md">Login</Link>
            <Link to={"/register"} className="w-[5.5rem] text-center bg-white text-red-400 px-4 py-2 rounded-md">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
}


{/* <div className={`flex-col md:flex-row md:flex items-center gap-4 absolute md:static bg-[#ED5353] md:bg-transparent w-full md:w-auto transition-transform duration-300 ease-in-out ${menuOpen ? 'top-[100%] left-0' : '-top-[200%]'}`}>
        {user ? (
          <>
            <button onClick={handleLogout} className="text-white px-4 py-[0.4rem] relative z-1">Logout</button>
            <button className="text-white px-4 relative z-1 flex items-center gap-3">
              Hello! Recruiter
              <img
                className="rounded-full w-[3rem]"
                src={`https://ui-avatars.com/api/?name=${user?.email}`}
                alt="Profile Image"
                title={`${user?.email}`}
              />
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"} className="border border-2 border-white text-white px-4 py-[0.4rem] rounded-md relative z-1">Login</Link>
            <Link to={"/register"} className="bg-white text-red-400 px-4 py-2 rounded-md relative z-1">Register</Link>
          </>
        )}
      </div> */}