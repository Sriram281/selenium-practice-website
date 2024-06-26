import "bootstrap/dist/css/bootstrap.min.css";
import { PiTextboxFill } from "react-icons/pi";
import { ImCheckboxChecked } from "react-icons/im";
import { IoMdRadioButtonOn } from "react-icons/io";
import { LuRectangleHorizontal } from "react-icons/lu";
import { FaLink } from "react-icons/fa";
import { FaTable } from "react-icons/fa6";
import { FaLinkSlash } from "react-icons/fa6";
import { MdCloudUpload } from "react-icons/md";
import { MdDynamicFeed } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import { SiSelenium } from "react-icons/si";
import { IoSearchCircle } from "react-icons/io5";
// import myimage from "./Images/two.jpg";
import "./form_style.css";
const Form = () => {
  return (
    <>
      {/* <div className="container-fluid" style={styles.one}> */}
      {/* <div className="container-fluid" style={styles.one}> */}
      {/* <img src={myimage} alt="one" /> */}
      <header>
        <div
          className="container-fluid"
          style={{
            // border: "1px solid red",
            backgroundColor: "hsla(226, 100%, 5%, 0.8)",
          }}
        >
          <div className="container">
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
              <div class="row">
                <div class="col-sm-8 p-2">
                  <h6
                    style={{
                      fontWeight: 300,
                      color: "white",
                      fontSize: 18,
                      fontFamily: "monospace",
                    }}
                  >
                    Practice Selenium Testing
                  </h6>
                </div>
                <div
                  class="col-sm-4 p-0  text-black"
                  // style={{
                  //   border: "1px solid yellow",
                  //   backgroundColor: "black",
                  // }}
                >
                  <div
                    class="d-flex justify-content-between"
                    // style={{
                    //   border: "1px solid blue",
                    //   backgroundColor: "black",
                    // }}
                  >
                    <div
                      class="p-1 "
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
                      >
                        Logout
                      </button>
                    </div>
                    <div
                      class="p-2 "
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
                      class="p-2 "
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
        </div>
        {/* header 2 */}
        <div className="container-fluid">
          <div className="container">
            <div class="row">
              <div class="col-sm-2 p-3">
                <p
                  style={{
                    fontWeight: 900,
                    fontFamily: "revert",
                    fontSize: 30,
                    color: "grey",
                  }}
                >
                  Selenium
                </p>
              </div>
              <div class="col-sm-6 p-3  text-black">
                <div className="container">
                  {/* d-flex justify-content-between bg-white mb-0 */}
                  <div class="row">
                    <div class="p-2 col">
                      <p
                        className="navbar_hover"
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
                    <div class="p-2 col">
                      <p
                        className="navbar_hover"
                        // style={{
                        //   fontWeight: 500,
                        //   fontFamily: "sans-serif",
                        //   fontSize: 18,
                        //   color: "grey",
                        // }}
                      >
                        Introduction
                      </p>
                    </div>
                    <div class="p-2 col">
                      <p
                        className="navbar_hover"
                        // style={{
                        //   fontWeight: 500,
                        //   fontFamily: "sans-serif",
                        //   fontSize: 18,
                        //   color: "grey",
                        // }}
                      >
                        About
                      </p>
                    </div>
                    <div class="p-2 col">
                      <p
                        className="navbar_hover"
                        // style={{
                        //   fontWeight: 500,
                        //   fontFamily: "sans-serif",
                        //   fontSize: 18,
                        //   color: "grey",
                        // }}
                      >
                        Contact
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 p-3  text-black">
                {/*  */}
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search here....."
                    style={{
                      border: "2px solid rgb(180, 180, 180)",
                      borderRadius: "25px",
                      backgroundColor: "rgb(240, 240, 240)",
                      textAlign: "center",
                      color: "grey",
                      fontWeight: 500,
                    }}
                  />
                  <IoSearchCircle size={45} color="rgb(255, 78, 71)" />
                  {/* <span class="input-group-text">

                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* </div> */}
      {/* image */}
      {/* <div className="container-fluid"> */}
      <div className="row" style={{ gap: 0 }}>
        <div
          className="col-sm-6"
          // id="img"
          style={{
            boder: "1px solid rgb(210, 210, 210)",
            // backgroundColor: "rgb(210, 210, 210)",
          }}
        >
          <img
            src="https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // src="https://images.pexels.com/photos/6953573/pexels-photo-6953573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
            style={{
              // border: "2px solid white",
              // borderRadius: 50,
              width: "103%",
              height: "60vh",
              // float: "left",
            }}
          />
        </div>

        <div
          className="col-sm-6"
          style={{
            boder: "1px solid rgb(210, 210, 210)",
            // backgroundColor: "rgb(210, 210, 210)",
          }}
        >
          <img
            src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="CinqueTerre"
            style={{
              // border: "2px solid white",
              // borderRadius: 50,
              width: "100%",
              height: "60vh",
              // float: "right",
            }}
          />
        </div>
      </div>
      {/* <div className="gallery">
          <img
            src="https://images.pexels.com/photos/4065615/pexels-photo-4065615.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Cinque Terre"
            style={{
              border: "2px solid white",
              // borderRadius: 50,
              width: "50%",
              height: "40vh",
              float: "right",
            }}
          />
        </div> */}
      {/* </div> */}
      {/* image */}
      <div className="container-fluid" style={styles.one}>
        <div className="container">
          <div className="container" style={styles.one}>
            <h4>Elements</h4>
            <p>
              Welcome to the "Elements" section, where we delve into the
              fundamental components you encounter while automating tests with
              Selenium. Understanding these elements is crucial for effective
              web automation. Let's explore each one in detail:
            </p>
          </div>
          <div class="row">
            <div class="col-sm-3 p-3  " style={styles.one}>
              <div className="container" style={styles.one}>
                <div style={styles.two}>
                  <PiTextboxFill size={70} color="#3b5d50" />
                </div>

                <h3 style={styles.two}>Text Box</h3>
                <p style={styles.two}>
                  Text boxes are input fields that allow users to enter text. In
                  Selenium testing, interacting with text boxes is essential for
                  data entry and form submissions.
                </p>
              </div>
            </div>
            <div class="col-sm-3 p-3 " style={styles.one}>
              <div className="container" style={styles.one}>
                <div style={styles.two}>
                  <ImCheckboxChecked size={50} color="#3b5d50" />
                </div>
                <h3 style={styles.two}>Check Box</h3>
                <p style={styles.two}>
                  Check boxes represent binary choices, allowing users to select
                  or deselect options. Selenium enables you to manipulate these
                  checkboxes as part of your automated testing scenarios.
                </p>
              </div>
            </div>
            <div class="col-sm-3 p-3  " style={styles.one}>
              <div className="container" style={styles.one}>
                <div style={styles.two}>
                  <IoMdRadioButtonOn size={60} color="#3b5d50" />
                </div>
                <h3 style={styles.two}>Radio Button</h3>
                <p style={styles.two}>
                  Radio buttons are used to choose one option from a set.
                  Selenium allows you to interact with radio buttons to validate
                  and automate selection processes.
                </p>
              </div>
            </div>
            <div class="col-sm-3 p-3 " style={styles.one}>
              <div className="container" style={styles.one}>
                <div style={styles.two}>
                  <FaTable size={50} color="#3b5d50" />
                </div>
                <h3 style={styles.two}>Web Tables</h3>
                <p style={styles.two}>
                  Web tables organize data in rows and columns. Selenium
                  provides tools to navigate and verify the contents of these
                  tables, making data-driven testing more effective.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-3 p-3 " style={styles.one}>
              <div className="container" style={styles.one}>
                <div style={styles.two}>
                  <LuRectangleHorizontal size={60} color="#3b5d50" />
                </div>
                <h3 style={styles.two}>Buttons</h3>
                <p style={styles.two}>
                  Buttons trigger actions on a web page. Selenium allows you to
                  simulate button clicks, enabling comprehensive testing of user
                  interactions
                </p>
              </div>
            </div>
            <div class="col-sm-3 p-3  " style={styles.one}>
              <div className="container" style={styles.one}>
                <div style={styles.two}>
                  <FaLink size={60} color="#3b5d50" />
                </div>
                <h3 style={styles.two}>Links</h3>
                <p style={styles.two}>
                  Links connect different parts of a website. Selenium enables
                  you to navigate through links, validating proper redirection
                  and ensuring seamless user journeys.
                </p>
              </div>
            </div>
            <div class="col-sm-3 p-3 " style={styles.one}>
              <div className="container" style={styles.one}>
                <div style={styles.two}>
                  <FaLinkSlash size={60} color="#3b5d50" />
                </div>

                <h3 style={styles.two}>Broken Links and Images</h3>
                <p style={styles.two}>
                  Identifying and handling broken links and images is crucial
                  for maintaining a robust web application. Selenium assists in
                  detecting and managing these issues during automated testing.
                </p>
              </div>
            </div>
            <div class="col-sm-3 p-3  " style={styles.one}>
              <div className="container" style={styles.one}>
                <div style={styles.two}>
                  {" "}
                  <MdCloudUpload size={60} color="#3b5d50" />
                </div>

                <h3 style={styles.two}>Upload and Download</h3>
                <p style={styles.two}>
                  Interacting with file upload and download functionality is
                  vital for testing various scenarios. Selenium provides methods
                  to handle file-related operations seamlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="container" style={styles.one}>
              <div className="col-sm-12 p-3 " style={styles.one}>
                <div className="container" style={styles.two}>
                  <MdDynamicFeed size={60} color="black" />
                </div>
                <h3 style={styles.two}>Dynamic Properties</h3>
                <p style={styles.two}>
                  Web elements with dynamic properties, such as changing IDs or
                  classes, require special handling. Selenium offers strategies
                  to locate and interact with elements, adapting to dynamic
                  changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
const styles = {
  one: {
    border: "2px solid black",
  },
  two: {
    textAlign: "center",
    fontWeight: 500,
  },
};

// import React from "react";

// import "./form_style.css"; // Import your custom CSS file for additional styles
// import { PiTextboxFill } from "react-icons/pi";
// import Header from "../Header";
// const MyComponent = () => {
//   return (
//     <>
//       <Header />

//       <div className="container-fluid main-container">
//         <div className="container">
//           <div className="section-container" id="elements-section">
//             <h4 className="section-heading">Elements</h4>
//             <p className="section-description">
//               Welcome to the "Elements" section, where we delve into the
//               fundamental components you encounter while automating tests with
//               Selenium. Understanding these elements is crucial for effective
//               web automation. Let's explore each one in detail:
//             </p>
//           </div>

//           <div className="element-container">
//             {/* Repeat this structure for other elements */}
//             <div className="element-card">
//               <div className="icon-container">
//                 <PiTextboxFill size={70} color="#3b5d50" />
//               </div>
//               <h3 className="element-title">Text Box</h3>
//               <p className="element-description">
//                 Text boxes are input fields that allow users to enter text. In
//                 Selenium testing, interacting with text boxes is essential for
//                 data entry and form submissions.
//               </p>
//             </div>
//             {/* Repeat for other elements */}
//             <div className="element-card">
//               <div className="icon-container">
//                 <PiTextboxFill size={70} color="#3b5d50" />
//               </div>
//               <h3 className="element-title">Text Box</h3>
//               <p className="element-description">
//                 Text boxes are input fields that allow users to enter text. In
//                 Selenium testing, interacting with text boxes is essential for
//                 data entry and form submissions.
//               </p>
//             </div>
//             {/* Repeat for other elements */}
//             <div className="element-card">
//               <div className="icon-container">
//                 <PiTextboxFill size={70} color="#3b5d50" />
//               </div>
//               <h3 className="element-title">Text Box</h3>
//               <p className="element-description">
//                 Text boxes are input fields that allow users to enter text. In
//                 Selenium testing, interacting with text boxes is essential for
//                 data entry and form submissions.
//               </p>
//             </div>
//             {/* Repeat for other elements */}
//             <div className="element-card">
//               <div className="icon-container">
//                 <PiTextboxFill size={70} color="#3b5d50" />
//               </div>
//               <h3 className="element-title">Text Box</h3>
//               <p className="element-description">
//                 Text boxes are input fields that allow users to enter text. In
//                 Selenium testing, interacting with text boxes is essential for
//                 data entry and form submissions.
//               </p>
//             </div>
//             {/* Repeat for other elements */}
//             <div className="element-card">
//               <div className="icon-container">
//                 <PiTextboxFill size={70} color="#3b5d50" />
//               </div>
//               <h3 className="element-title">Text Box</h3>
//               <p className="element-description">
//                 Text boxes are input fields that allow users to enter text. In
//                 Selenium testing, interacting with text boxes is essential for
//                 data entry and form submissions.
//               </p>
//             </div>
//             {/* Repeat for other elements */}
//             <div className="element-card">
//               <div className="icon-container">
//                 <PiTextboxFill size={70} color="#3b5d50" />
//               </div>
//               <h3 className="element-title">Text Box</h3>
//               <p className="element-description">
//                 Text boxes are input fields that allow users to enter text. In
//                 Selenium testing, interacting with text boxes is essential for
//                 data entry and form submissions.
//               </p>
//             </div>
//             {/* Repeat for other elements */}
//             <div className="element-card">
//               <div className="icon-container">
//                 <PiTextboxFill size={70} color="#3b5d50" />
//               </div>
//               <h3 className="element-title">Text Box</h3>
//               <p className="element-description">
//                 Text boxes are input fields that allow users to enter text. In
//                 Selenium testing, interacting with text boxes is essential for
//                 data entry and form submissions.
//               </p>
//             </div>
//             {/* Repeat for other elements */}
//             <div className="element-card">
//               <div className="icon-container">
//                 <PiTextboxFill size={70} color="#3b5d50" />
//               </div>
//               <h3 className="element-title">Text Box</h3>
//               <p className="element-description">
//                 Text boxes are input fields that allow users to enter text. In
//                 Selenium testing, interacting with text boxes is essential for
//                 data entry and form submissions.
//               </p>
//             </div>
//           </div>

//           {/* Repeat the above structure for other rows and elements */}

//           <div className="element-container">
//             {/* ... Your existing JSX ... */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyComponent;
