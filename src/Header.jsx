import "bootstrap/dist/css/bootstrap.min.css";
// import { PiTextboxFill } from "react-icons/pi";
// import { ImCheckboxChecked } from "react-icons/im";
// import { IoMdRadioButtonOn } from "react-icons/io";
// import { LuRectangleHorizontal } from "react-icons/lu";
// import { FaLink } from "react-icons/fa";
// import { FaTable } from "react-icons/fa6";
// import { FaLinkSlash } from "react-icons/fa6";
// import { MdCloudUpload } from "react-icons/md";
// import { MdDynamicFeed } from "react-icons/md";

import { FaUserTie } from "react-icons/fa6";
import { SiSelenium } from "react-icons/si";
import { IoSearchCircle } from "react-icons/io5";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Search";
import Login_check from "./Login_check";
const Header = () => {
  const nav = useNavigate();

  return (
    <>
      {/* <Login_check /> */}
      <header>
        <div
          className="container-fluid"
          style={{
            // border: "1px solid red",
            backgroundColor: "hsla(226, 100%, 5%, 0.8)",
          }}
        >
          {/* header 1 */}
          <div
            className="container"
            style={
              {
                // border: "1px solid pink",
                // backgroundColor: "black",
              }
            }
          >
            <div className="row">
              <div className="col-sm-8 p-2">
                <h6
                  style={{
                    fontWeight: 300,
                    color: "white",
                    fontSize: 18,
                    fontFamily: "monospace",
                  }}
                >
                  {/* Practice Selenium Testing */}
                  Selenium Practice Website
                </h6>
              </div>
              <div
                className="col-sm-4 p-0  text-black"
                // style={{
                //   border: "1px solid yellow",
                //   backgroundColor: "black",
                // }}
              >
                <div
                  className="d-flex justify-content-between"
                  // style={{
                  //   border: "1px solid blue",
                  //   backgroundColor: "black",
                  // }}
                >
                  <div
                    className="p-1 "
                    // style={{
                    //   border: "1px solid blue",
                    //   backgroundColor: "black",
                    // }}
                  >
                    <button
                      className="btn btn-danger"
                      style={{
                        border: "2px solid white",
                        borderRadius: "20px",
                        fontWeight: 600,
                        // fontFamily: ,
                        fontSize: 15,
                        color: "white",
                      }}
                      onClick={() => {
                        window.localStorage.removeItem("studentID");
                        nav("/");
                      }}
                    >
                      Logout
                    </button>
                  </div>
                  <div
                    className="p-2 "
                    style={
                      {
                        // border: "1px solid blue",
                        // backgroundColor: "black",
                      }
                    }
                  >
                    <FaUserTie size={25} color="white" />
                  </div>
                  <div
                    className="p-2 "
                    style={
                      {
                        // border: "1px solid blue",
                        // backgroundColor: "black",
                      }
                    }
                  >
                    <SiSelenium size={25} color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header 2 */}
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-2 p=0">
                <p
                  style={{
                    fontWeight: 900,
                    fontFamily: "revert",
                    fontSize: 25,
                    color: "hsl(0, 20%, 50%)",
                  }}
                >
                  Selenium
                </p>
              </div>
              <div className="col-sm-6 p-0  text-black">
                <div className="container">
                  {/* d-flex justify-content-between bg-white mb-0 */}
                  <div className="row">
                    <div
                      className="pt-2 col"
                      onClick={() => {
                        nav("/Title_alter");
                      }}
                    >
                      <p
                        className="navbar_hover"
                        id="home"
                        // style={{
                        //   fontWeight: 500,
                        //   fontFamily: "sans-serif",
                        //   fontSize: 18,
                        //   color: "grey",
                        // }}
                      >
                        Home
                      </p>
                    </div>
                    <div
                      className="pt-2 col"
                      onClick={() => {
                        nav("/Introduction");
                      }}
                    >
                      <p
                        className="navbar_hover"
                        id="introduction"
                        // style={{
                        //   fontWeight: 500,
                        //   fontFamily: "sans-serif",
                        //   fontSize: 18,
                        //   color: "grey",
                        // }}
                      >
                        <a style={{ textDecoration: "none", color: "grey" }}>
                          Introduction
                        </a>
                      </p>
                    </div>
                    <div
                      className="pt-2 col"
                      onClick={() => {
                        nav("/workout");
                      }}
                    >
                      <p
                        className="navbar_hover"
                        id="topics"
                        // style={{
                        //   fontWeight: 500,
                        //   fontFamily: "sans-serif",
                        //   fontSize: 18,
                        //   color: "grey",
                        // }}
                      >
                        <a style={{ textDecoration: "none", color: "grey" }}>
                          Workouts
                        </a>
                      </p>
                    </div>
                    <div className="pt-2 col">
                      <p
                        className="navbar_hover"
                        id="about"

                        // style={{
                        //   fontWeight: 500,
                        //   fontFamily: "sans-serif",
                        //   fontSize: 18,
                        //   color: "grey",
                        // }}
                      >
                        <a
                          href="#Footer"
                          style={{ textDecoration: "none", color: "grey" }}
                        >
                          About
                        </a>
                      </p>
                    </div>
                    <div className="pt-2 col">
                      <p
                        className="navbar_hover"
                        id="contact"

                        // style={{
                        //   fontWeight: 500,
                        //   fontFamily: "sans-serif",
                        //   fontSize: 18,
                        //   color: "grey",
                        // }}
                      >
                        <a
                          href="#Footer"
                          style={{ textDecoration: "none", color: "grey" }}
                        >
                          Contact
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 pt-1  text-black">
                {/*  */}
                <div className="input-group">
                  {/* <input
                    type="search"
                    className="form-control"
                    placeholder="Search here....."
                    style={{
                      border: "2px solid hsl(0, 5%, 50%)",
                      borderRadius: "25px",
                      backgroundColor: "hsl(0, 100%, 100%)",
                      textAlign: "center",
                      color: "grey",
                      fontWeight: 500,
                    }}
                    
                  /> */}
                  <Search />
                  {/* <IoSearchCircle size={45} color="rgb(255, 78, 71)" /> */}
                  {/* <span className="input-group-text">
                    
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

const styles = {
  one: {
    border: "2px solid black",
  },
  two: {
    textAlign: "center",
    fontWeight: 500,
  },
};

// import "bootstrap/dist/css/bootstrap.min.css";
// // import { PiTextboxFill } from "react-icons/pi";
// // import { ImCheckboxChecked } from "react-icons/im";
// // import { IoMdRadioButtonOn } from "react-icons/io";
// // import { LuRectangleHorizontal } from "react-icons/lu";
// // import { FaLink } from "react-icons/fa";
// // import { FaTable } from "react-icons/fa6";
// // import { FaLinkSlash } from "react-icons/fa6";
// // import { MdCloudUpload } from "react-icons/md";
// // import { MdDynamicFeed } from "react-icons/md";
// import { FaUserTie } from "react-icons/fa6";
// import { SiSelenium } from "react-icons/si";
// import { IoSearchCircle } from "react-icons/io5";
// import "./Styles.css";
// import { useNavigate } from "react-router-dom";
// const Header = () => {
//   const nav = useNavigate();
//   return (
//     <>
//       <header>
//         <div
//           className="container-fluid"
//           style={{
//             // border: "1px solid red",
//             backgroundColor: "hsla(226, 100%, 5%, 0.8)",
//           }}
//         >
//           {/* header 1 */}
//           <div
//             className="container"
//             style={
//               {
//                 // border: "1px solid pink",
//                 // backgroundColor: "black",
//               }
//             }
//           >
//             <div className="row">
//               <div className="col-sm-8 p-2">
//                 <h6
//                   style={{
//                     fontWeight: 300,
//                     color: "white",
//                     fontSize: 18,
//                     fontFamily: "monospace",
//                   }}
//                 >
//                   {/* Practice Selenium Testing */}
//                   Selenium Practice Website
//                 </h6>
//               </div>
//               <div
//                 className="col-sm-4 p-0  text-black"
//                 // style={{
//                 //   border: "1px solid yellow",
//                 //   backgroundColor: "black",
//                 // }}
//               >
//                 <div
//                   className="d-flex justify-content-between"
//                   // style={{
//                   //   border: "1px solid blue",
//                   //   backgroundColor: "black",
//                   // }}
//                 >
//                   <div
//                     className="p-1 "
//                     // style={{
//                     //   border: "1px solid blue",
//                     //   backgroundColor: "black",
//                     // }}
//                   >
//                     <button
//                       className="btn btn-danger"
//                       style={{
//                         border: "2px solid white",
//                         borderRadius: "20px",
//                         fontWeight: 600,
//                         // fontFamily: ,
//                         fontSize: 15,
//                         color: "white",
//                       }}
//                       onClick={() => {
//                         window.localStorage.removeItem("studentID");
//                         nav("/");
//                       }}
//                     >
//                       Logout
//                     </button>
//                   </div>
//                   <div
//                     className="p-2 "
//                     style={
//                       {
//                         // border: "1px solid blue",
//                         // backgroundColor: "black",
//                       }
//                     }
//                   >
//                     <FaUserTie size={25} color="white" />
//                   </div>
//                   <div
//                     className="p-2 "
//                     style={
//                       {
//                         // border: "1px solid blue",
//                         // backgroundColor: "black",
//                       }
//                     }
//                   >
//                     <SiSelenium size={25} color="white" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* header 2 */}
//         <div className="container-fluid">
//           <div className="container">
//             <div className="row">
//               <div className="col-sm-2 p-3">
//                 <p
//                   style={{
//                     fontWeight: 900,
//                     fontFamily: "revert",
//                     fontSize: 30,
//                     color: "grey",
//                   }}
//                 >
//                   Selenium
//                 </p>
//               </div>
//               <div className="col-sm-6 p-3  text-black">
//                 <div className="container">
//                   {/* d-flex justify-content-between bg-white mb-0 */}
//                   <div className="row">
//                     <div className="p-2 col">
//                       <p
//                         className="navbar_hover"
//                         // style={{
//                         //   fontWeight: 500,
//                         //   fontFamily: "sans-serif",
//                         //   fontSize: 18,
//                         //   color: "grey",
//                         // }}
//                       >
//                         Home
//                       </p>
//                     </div>
//                     <div className="p-2 col">
//                       <p
//                         className="navbar_hover"
//                         // style={{
//                         //   fontWeight: 500,
//                         //   fontFamily: "sans-serif",
//                         //   fontSize: 18,
//                         //   color: "grey",
//                         // }}
//                       >
//                         Introduction
//                       </p>
//                     </div>
//                     <div className="p-2 col">
//                       <p
//                         className="navbar_hover"
//                         // style={{
//                         //   fontWeight: 500,
//                         //   fontFamily: "sans-serif",
//                         //   fontSize: 18,
//                         //   color: "grey",
//                         // }}
//                       >
//                         About
//                       </p>
//                     </div>
//                     <div className="p-2 col">
//                       <p
//                         className="navbar_hover"
//                         // style={{
//                         //   fontWeight: 500,
//                         //   fontFamily: "sans-serif",
//                         //   fontSize: 18,
//                         //   color: "grey",
//                         // }}
//                       >
//                         Contact
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-sm-4 p-3  text-black">
//                 {/*  */}
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Search here....."
//                     style={{
//                       border: "2px solid rgb(180, 180, 180)",
//                       borderRadius: "25px",
//                       backgroundColor: "rgb(240, 240, 240)",
//                       textAlign: "center",
//                       color: "grey",
//                       fontWeight: 500,
//                     }}
//                   />
//                   <IoSearchCircle size={45} color="rgb(255, 78, 71)" />
//                   {/* <span className="input-group-text">

//                   </span> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

// const styles = {
//   one: {
//     border: "2px solid black",
//   },
//   two: {
//     textAlign: "center",
//     fontWeight: 500,
//   },
// };
