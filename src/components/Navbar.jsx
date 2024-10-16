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
    <nav className={`relative flex lg:flex-row flex-col lg:items-center justify-between md:px-16 px-4 py-4 rounded-b-[2rem] bg-[#ED5353] overflow-hidden`}>
      <div className="lg:hidden absolute bottom-0 left-0 right-0 rotate-[180deg z-[1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path
            fill="#FF6B6B"
            fill-opacity="1"
            d="M0,256L60,229.3C120,203,240,149,360,160C480,171,600,245,720,277.3C840,309,960,299,1080,266.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          >
          </path>
        </svg>
      </div>
      <div className="lg:block hidden absolute top-[-4rem] left-0 right-0 z-[1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          >
          <path fill="#FF6B6B"
            fill-opacity="1"
            d="M0,160L34.3,144C68.6,128,137,96,206,74.7C274.3,53,343,43,411,64C480,85,549,139,617,176C685.7,213,754,235,823,208C891.4,181,960,107,1029,112C1097.1,117,1166,203,1234,240C1302.9,277,1371,267,1406,261.3L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
          </path>
        </svg>
      </div>
      <div className="z-10">
        <Link to={"/"} className="text-white text-2xl font-semibold">Jobfinder</Link>
      </div>

      <div className="lg:hidden z-20 absolute right-2">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      <div className={`relative z-[2] lg:block lg:py-0 py-6 ${menuOpen ? "block" : "hidden"}`}>
        {user ? (
          <div className="flex flex-col lg:flex-row lg:items-center items-start gap-4 text-white">
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
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";  // For toggling menu
// import { logout } from "../slices/authSlice";
// import toast from "react-hot-toast";
// import { FiMenu, FiX } from "react-icons/fi";  // Import icons for menu

// export default function Navbar() {
//   const { user } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu

//   const handleLogout = async () => {
//     await dispatch(logout());
//     toast.success('User logged out');
//     navigate("/");
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);  // Toggle the menu
//   };

//   return (
//     <nav className={`relative flex items-center justify-between md:px-16 px-4 py-4 ${menuOpen ? "" : "rounded-b-[2rem]"} bg-[#ED5353] md:overflow-hidden`}>
//       <div className="bg-[#FF6B6B] md:block hidden h-[40px] absolute left-[-15px] bottom-[-1rem]  rotate-[13deg] w-[200px]"></div>
//       <div className="bg-[#FF6B6B] md:block hidden rounded-b-[1.4rem] h-[80px] absolute top-[-60%] left-[40%] rotate-[-25deg] w-[200px]"></div>
//       <div className="bg-[#FF6B6B] md:block hidden rounded-b-[3.4rem] lg:h-[140px] h-[80px] absolute top-[-80%] right-[5%]  rotate-[-8deg] lg:w-[300px] w-[150px]"></div>
//       {/* Logo */}
//       <div className="z-10">
//         <Link to={"/"} className="text-white text-2xl font-semibold">Jobfinder</Link>
//       </div>

//       {/* Menu Button for Small Screens */}
//       <div className="md:hidden z-20">
//         <button onClick={toggleMenu} className="text-white">
//           {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
//         </button>
//       </div>

//       {/* Menu Items */}
//       <div className={`md:flex md:items-center absolute md:relative left-0 px-2 py-4 md:p-0 md:bg-transparent bg-[inherit] w-full md:w-auto ${menuOpen ? "top-16 block rounded-b-[2rem]" : "top-[-100%] hidden"} md:top-auto transition-all duration-300 ease-in-out`}>
//         {user ? (
//           <div className="flex flex-col md:flex-row md:items-center items-start gap-4 text-white">
//             <button onClick={handleLogout} className="px-4 py-[0.4rem]">Logout</button>
//             <button className="px-4 flex items-center gap-3">
//               Hello! Recruiter
//               <img
//                 className="rounded-full w-[3rem]"
//                 src={`https://ui-avatars.com/api/?name=${user?.email}`}
//                 alt="Profile Image"
//                 title={`${user?.email}`}
//               />
//             </button>
//           </div>
//         ) : (
//           <div className="flex items-center md:flex-row gap-3">
//             <Link to={"/login"} className="w-[5.5rem] text-center border border-2 border-white text-white px-4 py-[0.4rem] rounded-md">Login</Link>
//             <Link to={"/register"} className="w-[5.5rem] text-center bg-white text-red-400 px-4 py-2 rounded-md">Register</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

