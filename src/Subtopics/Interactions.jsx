// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./form_style.css";
// Import your custom CSS file for additional styles

import Header from "../Header";
import Subtopics_body_images from "./Subtopics_body_img";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbAlertSquare } from "react-icons/tb";
import { RiDragDropFill } from "react-icons/ri";
import { FaKeyboard } from "react-icons/fa";
import { FaMouse } from "react-icons/fa";
import { GrMultiple } from "react-icons/gr";
import Subtopics_body_images2 from "./subtopics_body_image2";
const Interactions = () => {
  const Elements_titles = [
    {
      key: 1,
      icons: TbAlertSquare,
      title: "Alerts",
      Description:
        "Handle alerts seamlessly in Selenium. Learn to interact with pop-ups and ensure smooth execution of your automation scripts.",
    },
    {
      key: 2,
      icons: RiDragDropFill,
      title: "Drag and Drop",
      Description:
        "Effortlessly move elements with drag and drop in Selenium. Enhance your automation skills for intuitive web application testing.",
    },
    {
      key: 3,
      icons: FaKeyboard,
      title: "Keyboard Actions",
      Description:
        "Master keyboard interactions in Selenium. Boost your automation capabilities by simulating keypresses for precise testing.",
    },

    {
      key: 4,
      icons: FaMouse,
      title: "Mouse Actions",
      Description:
        "Navigate with precision using mouse actions in Selenium. Learn to simulate mouse clicks and movements for effective testing.",
    },
    {
      key: 5,
      icons: GrMultiple,
      title: "Multi-select",
      Description:
        "Efficiently handle multi-select elements in Selenium. Learn the art of selecting multiple options for comprehensive test scenarios.",
    },

    // {
    //   icons: FaLinkSlash,
    //   title: "Broken Links and Images",
    //   Description:
    //     "Identifying and handling broken links and images is crucial for maintaining a robust web application. Selenium assists in detecting and managing these issues during automated testing.",
    // },
    // {
    //   icons: MdCloudUpload,
    //   title: "Upload and Download",
    //   Description:
    //     "Interacting with file upload and download functionality is vital for testing various scenarios. Selenium provides methods to handle file-related operations seamlessly.",
    // },
    // {
    //   icons: MdDynamicFeed,
    //   title: "Dynamic Properties",
    //   Description:
    //     "Web elements with dynamic properties, such as changing IDs or classes, require special handling. Selenium offers strategies to locate and interact with elements, adapting to dynamic changes.",
    // },
  ];

  const [elements, setElements] = useState(Elements_titles);
  const [title_name, setTitle_Name] = useState();
  const nav = useNavigate();
  useEffect(() => {
    if (title_name === "Alerts") {
      nav("/Alerts");
      setTitle_Name("");
    } else if (title_name === "Drag and Drop") {
      nav("/drag_and_drop");
      setTitle_Name("");
    } else if (title_name === "Keyboard Actions") {
      nav("/Keyboard_action");
      setTitle_Name("");
    } else if (title_name === "Mouse Actions") {
      nav("/Mouse");
      setTitle_Name("");
    } else if (title_name === "Multi-select") {
      nav("/Multi_select");
      setTitle_Name("");
    }
  }, [title_name]);
  return (
    <>
      <Header />
      {/* <Subtopics_body_images /> */}
      <Subtopics_body_images2 />
      <div className="container-fluid main-container">
        <div className="continer-fluid" style={{ backgroundColor: "white" }}>
          <div className="container">
            <h4 className="section-heading" style={{ paddingTop: "10px" }}>
              Interaction
            </h4>
            <p
              className="section-description"
              style={{
                padding: "10px 0px",
                color: "hsla(226, 100%, 5%, 0.8)",
                fontFamily: "sans-serif",
              }}
            >
              Engage with web elements dynamically – handle alerts, drag and
              drop, and execute keyboard and mouse actions seamlessly.
            </p>
          </div>
        </div>
        <div className="container">
          {/* <div className="section-container" id="elements-section">
            <h4 className="section-heading">Elements</h4>
            <p className="section-description">
              Welcome to the "Elements" section, where we delve into the
              fundamental components you encounter while automating tests with
              Selenium. Understanding these elements is crucial for effective
              web automation. Let's explore each one in detail:
            </p>
          </div> */}

          <div className="element-container ">
            {/* Repeat this structure for other elements */}
            {elements &&
              elements.map((m) => {
                return (
                  <div
                    key={m.key}
                    className="element-card"
                    style={{ textAlign: "center" }}
                  >
                    <div className="icon-container">
                      <span
                        onClick={() => {
                          setTitle_Name(m.title);
                        }}
                        className="subtitles_icons"
                        // style={{
                        //   border: "1px solid hsla(226, 100%, 5%, 0.8)",
                        //   padding: "7px",
                        //   borderRadius: "25px",
                        //   backgroundColor: "hsla(226, 100%, 5%, 0.8)",
                        // }}
                      >
                        <m.icons className="one" />
                      </span>
                    </div>
                    <h3
                      className="element-title"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setTitle_Name(m.title);
                      }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="element-description"
                      style={{ fontSize: "14px", color: "black" }}
                    >
                      {m.Description}
                    </p>
                  </div>
                );
              })}

            {/* Repeat for other elements */}
            {/* <div className="element-card">
              <div className="icon-container">
                <PiTextboxFill size={70} color="#3b5d50" />
              </div>
              <h3 className="element-title">Text Box</h3>
              <p className="element-description">
                Text boxes are input fields that allow users to enter text. In
                Selenium testing, interacting with text boxes is essential for
                data entry and form submissions.
              </p>
            </div> */}
            {/* Repeat for other elements */}
            {/* <div className="element-card">
              <div className="icon-container">
                <PiTextboxFill size={70} color="#3b5d50" />
              </div>
              <h3 className="element-title">Text Box</h3>
              <p className="element-description">
                Text boxes are input fields that allow users to enter text. In
                Selenium testing, interacting with text boxes is essential for
                data entry and form submissions.
              </p>
            </div> */}
            {/* Repeat for other elements */}
            {/* <div className="element-card">
              <div className="icon-container">
                <PiTextboxFill size={70} color="#3b5d50" />
              </div>
              <h3 className="element-title">Text Box</h3>
              <p className="element-description">
                Text boxes are input fields that allow users to enter text. In
                Selenium testing, interacting with text boxes is essential for
                data entry and form submissions.
              </p>
            </div> */}
            {/* Repeat for other elements */}
            {/* <div className="element-card">
              <div className="icon-container">
                <PiTextboxFill size={70} color="#3b5d50" />
              </div>
              <h3 className="element-title">Text Box</h3>
              <p className="element-description">
                Text boxes are input fields that allow users to enter text. In
                Selenium testing, interacting with text boxes is essential for
                data entry and form submissions.
              </p>
            </div> */}
            {/* Repeat for other elements */}
            {/* <div className="element-card">
              <div className="icon-container">
                <PiTextboxFill size={70} color="#3b5d50" />
              </div>
              <h3 className="element-title">Text Box</h3>
              <p className="element-description">
                Text boxes are input fields that allow users to enter text. In
                Selenium testing, interacting with text boxes is essential for
                data entry and form submissions.
              </p>
            </div> */}
            {/* Repeat for other elements */}
            {/* <div className="element-card">
              <div className="icon-container">
                <PiTextboxFill size={70} color="#3b5d50" />
              </div>
              <h3 className="element-title">Text Box</h3>
              <p className="element-description">
                Text boxes are input fields that allow users to enter text. In
                Selenium testing, interacting with text boxes is essential for
                data entry and form submissions.
              </p>
            </div> */}
            {/* Repeat for other elements */}
            {/* <div className="element-card">
              <div className="icon-container">
                <PiTextboxFill size={70} color="#3b5d50" />
              </div>
              <h3 className="element-title">Text Box</h3>
              <p className="element-description">
                Text boxes are input fields that allow users to enter text. In
                Selenium testing, interacting with text boxes is essential for
                data entry and form submissions.
              </p>
            </div> */}
          </div>

          {/* Repeat the above structure for other rows and elements */}

          <div className="element-container">
            {/* ... Your existing JSX ... */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Interactions;
