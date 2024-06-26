// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./form_style.css";
// Import your custom CSS file for additional styles

import Header from "../Header";
import Subtopics_body_images from "./Subtopics_body_img";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHourglassEnd } from "react-icons/fa6";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { RxLapTimer } from "react-icons/rx";
import { MdOutlineTimer } from "react-icons/md";
const Waiting_strategies = () => {
  const Elements_titles = [
    {
      key: 1,
      icons: MdOutlineTimer,
      title: "Static Wait",
      Description:
        "Improve script reliability with Selenium's Static Wait. Pause execution for precise timing in automation.",
    },
    {
      key: 2,
      icons: RxCounterClockwiseClock,
      title: "Implicit Wait",
      Description:
        "Enhance Selenium scripts with Implicit Wait. Automatically wait for elements, optimizing script performance.",
    },
    {
      key: 3,
      icons: RxLapTimer,
      title: "Explicit Wait",
      Description:
        "Refine Selenium automation with Explicit Wait. Dynamically wait for specific conditions, ensuring accurate script execution.",
    },

    {
      key: 4,
      icons: FaHourglassEnd,
      title: "Fluent Wait",
      Description:
        "Fine-tune Selenium scripts with Fluent Wait. Customize dynamic wait strategies for precise element synchronization in automation.",
    },
  ];

  const [elements, setElements] = useState(Elements_titles);

  const [title_name, setTitle_Name] = useState();
  const nav = useNavigate();

  useEffect(() => {
    if (title_name === "Static Wait") {
      nav("/Static_wait");
      setTitle_Name("");
    } else if (title_name === "Implicit Wait") {
      nav("/Implicit_wait");
      setTitle_Name("");
    } else if (title_name === "Explicit Wait") {
      nav("/Explicit_wait");
      setTitle_Name("");
    } else if (title_name === "Fluent Wait") {
      nav("/Fluent_wait");
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
              Waiting strategy
            </h4>
            <p
              className="section-description"
              style={{
                padding: "10px 0px",
                color: "hsla(226, 100%, 5%, 0.8)",
                fontFamily: "sans-serif",
              }}
            >
              Learn the art of synchronization with Static, Implicit, and
              Explicit waits, ensuring adaptability to varied page loads.
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

export default Waiting_strategies;
