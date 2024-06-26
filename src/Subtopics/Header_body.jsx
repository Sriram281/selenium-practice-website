// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PiTextboxFill } from "react-icons/pi";

import { LuRectangleHorizontal } from "react-icons/lu";
import { FaLink } from "react-icons/fa";

// import "./form_style.css";
// Import your custom CSS file for additional styles

import Header from "../Header";
import Subtopics_body_images from "./Subtopics_body_img";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoMdRadioButtonOn } from "react-icons/io";
import { BsTextareaResize } from "react-icons/bs";
const Header_body = () => {
  const Elements_titles = [
    {
      key: 1,
      icons: PiTextboxFill,
      title: "Text Box",
      Description:
        "Text boxes are input fields that allow users to enter text. In Selenium testing, interacting with text boxes is essential for data entry and form submissions.",
    },
    {
      key: 2,
      icons: IoMdCheckboxOutline,
      title: "Check Box",
      Description:
        "Check boxes represent binary choices, allowing users to select or deselect options. Selenium enables you to manipulate these checkboxes as part of your automated testing scenarios.",
    },
    {
      key: 3,
      icons: IoMdRadioButtonOn,
      title: "Radio Button",
      Description:
        "Radio buttons are used to choose one option from a set. Selenium allows you to interact with radio buttons to validate and automate selection processes.",
    },
    // {
    //   icons: FaTable,
    //   title: "Web Tables",
    //   Description:
    //     "Web tables organize data in rows and columns. Selenium provides tools to navigate and verify the contents of these tables, making data-driven testing more effective.",
    // },
    {
      key: 4,
      icons: LuRectangleHorizontal,
      title: "Buttons",
      Description:
        "Buttons trigger actions on a web page. Selenium allows you to simulate button clicks, enabling comprehensive testing of user interactions",
    },
    {
      key: 5,
      icons: FaLink,
      title: "Links and find all links",
      Description:
        "Links connect different parts of a website. Selenium enables you to navigate through links, validating proper redirection and ensuring seamless user journeys.",
    },
    {
      key: 6,
      icons: BsTextareaResize,
      title: "Textarea",
      Description:
        "Textarea are input fields that allow users to enter text. In Selenium testing, interacting with textarea is essential for data entry and form submissions.",
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
    if (title_name === "Text Box") {
      nav("/text_box");
      setTitle_Name("");
    } else if (title_name === "Check Box") {
      nav("/check_box");
      setTitle_Name("");
    } else if (title_name === "Radio Button") {
      nav("/radio_button");
      setTitle_Name("");
    } else if (title_name === "Buttons") {
      nav("/buttons");
      setTitle_Name("");
    } else if (title_name === "Links and find all links") {
      nav("/Find_all_links");
      setTitle_Name("");
    } else if (title_name === "Textarea") {
      nav("/text_area");
      setTitle_Name("");
    }
  }, [title_name]);

  return (
    <>
      <Header />
      <Subtopics_body_images />
      <div className="container-fluid main-container">
        <div className="continer-fluid" style={{ backgroundColor: "white" }}>
          <div className="container">
            <h4 className="section-heading" style={{ paddingTop: "10px" }}>
              Elements
            </h4>
            <p
              className="section-description"
              style={{
                padding: "10px 0px",

                fontFamily: "sans-serif",
                color: "hsla(226, 100%, 5%, 0.8)",
              }}
            >
              Welcome to the "Elements" section, where we delve into the
              fundamental components you encounter while automating tests with
              Selenium. Understanding these elements is crucial for effective
              web automation. Let's explore each one in detail:
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
              elements.map((m, index) => {
                return (
                  <div
                    key={index}
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
                      // onClick={handleClick(m.title)}
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

export default Header_body;
