// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./form_style.css";
// Import your custom CSS file for additional styles

import Header from "../Header";
import Subtopics_body_images from "./Subtopics_body_img";
import { useEffect, useState } from "react";
import { MdFilterFrames } from "react-icons/md";
import { FaWindows } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Frame_and_windows = () => {
  const Elements_titles = [
    {
      key: 1,
      icons: MdFilterFrames,
      title: "Frames",
      Description:
        "Effortlessly interact with frames in Selenium. Master the art of navigating and manipulating embedded frames for seamless web automation.",
    },
    {
      key: 2,
      icons: FaWindows,
      title: "Windows Handling",
      Description:
        "Optimize Selenium automation by mastering window handling. Effectively manage multiple browser windows for a smoother testing experience.",
    },
  ];

  const [elements, setElements] = useState(Elements_titles);
  const [title_name, setTitle_Name] = useState();
  const nav = useNavigate();

  useEffect(() => {
    if (title_name === "Frames") {
      nav("/frame");
      setTitle_Name("");
    } else if (title_name === "Windows Handling") {
      nav("/Windows_handling");
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
              Frames and windows handling
            </h4>
            <p
              className="section-description"
              style={{
                padding: "10px 0px",

                fontFamily: "sans-serif",
                color: "hsla(226, 100%, 5%, 0.8)",
              }}
            >
              Navigate diverse web elements confidently, from frames to multiple
              windows, ensuring robust Selenium automation.
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

export default Frame_and_windows;
