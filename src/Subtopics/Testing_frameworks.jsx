// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./form_style.css";
// Import your custom CSS file for additional styles

import Header from "../Header";
import Subtopics_body_images from "./Subtopics_body_img";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdContentPasteSearch } from "react-icons/md";
import Subtopics_body_images2 from "./subtopics_body_image2";
const Testing_framework = () => {
  const Elements_titles = [
    {
      key: 1,
      icons: MdContentPasteSearch,
      title: "TestNG",
      Description:
        "Elevate Selenium testing with TestNG. Organize, execute, and manage test cases systematically for robust automation and reliable results.",
    },
  ];

  const [elements, setElements] = useState(Elements_titles);
  const [title_name, setTitle_Name] = useState();
  const nav = useNavigate();

  useEffect(() => {
    if (title_name === "TestNG") {
      nav("/Testng");
      setTitle_Name("");
    }
  }, [title_name]);
  return (
    <>
      <Header />
      <Subtopics_body_images2 />
      <div className="container-fluid main-container">
        <div className="continer-fluid" style={{ backgroundColor: "white" }}>
          <div className="container">
            <h4 className="section-heading" style={{ paddingTop: "10px" }}>
              TestNG
            </h4>
            <p
              className="section-description"
              style={{
                padding: "10px 0px",
                color: "hsla(226, 100%, 5%, 0.8)",
                fontFamily: "sans-serif",
              }}
            >
              Organize and streamline Selenium tests with TestNG integration,
              managing dependencies and executing tests systematically.
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

export default Testing_framework;
