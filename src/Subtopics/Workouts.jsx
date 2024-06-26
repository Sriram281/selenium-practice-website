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
import { TiEqualsOutline } from "react-icons/ti";
import { TiEquals } from "react-icons/ti";
import { MdFilterFrames } from "react-icons/md";
import { FaWindows } from "react-icons/fa";
import { TbAlertSquare } from "react-icons/tb";
import { RiDragDropFill } from "react-icons/ri";
import { FaKeyboard } from "react-icons/fa";
import { FaMouse } from "react-icons/fa";
import { GrMultiple } from "react-icons/gr";
import { PiScrollFill } from "react-icons/pi";
import { MdMouse } from "react-icons/md";
import { BiScreenshot } from "react-icons/bi";
import { MdOpenInNew } from "react-icons/md";
import { MdSettingsInputComposite } from "react-icons/md";
import { FaChrome } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";
import { IoIosLocate } from "react-icons/io";
import { PiPathBold } from "react-icons/pi";
import { FaWpforms } from "react-icons/fa";
import { IoReloadSharp } from "react-icons/io5";
import { LuLoader } from "react-icons/lu";
import { AiOutlineReload } from "react-icons/ai";
import { MdContentPasteSearch } from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa6";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { RxLapTimer } from "react-icons/rx";
import { MdOutlineTimer } from "react-icons/md";
const Workouts = () => {
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
      key: 35,
      icons: LuRectangleHorizontal,
      title: "Dropdown",
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

    // Assertions
    {
      key: 7,
      icons: TiEqualsOutline,
      title: "Hard Assertions",
      Description:
        "Enforce robust test scripts with Hard Assertions. Ensure expected outcomes, enhancing test result reliability in Selenium.",
    },
    {
      key: 8,
      icons: TiEquals,
      title: "Soft Assertions",
      Description:
        "Enhance Selenium tests with flexibility using Soft Assertions. Validate multiple conditions, improving adaptability in automation.",
    },

    // Frame and windows
    {
      key: 9,
      icons: MdFilterFrames,
      title: "Frames",
      Description:
        "Effortlessly interact with frames in Selenium. Master the art of navigating and manipulating embedded frames for seamless web automation.",
    },
    {
      key: 10,
      icons: FaWindows,
      title: "Windows Handling",
      Description:
        "Optimize Selenium automation by mastering window handling. Effectively manage multiple browser windows for a smoother testing experience.",
    },

    // Interactions
    {
      key: 11,
      icons: TbAlertSquare,
      title: "Alerts",
      Description:
        "Handle alerts seamlessly in Selenium. Learn to interact with pop-ups and ensure smooth execution of your automation scripts.",
    },
    {
      key: 12,
      icons: RiDragDropFill,
      title: "Drag and Drop",
      Description:
        "Effortlessly move elements with drag and drop in Selenium. Enhance your automation skills for intuitive web application testing.",
    },
    {
      key: 13,
      icons: FaKeyboard,
      title: "Keyboard Actions",
      Description:
        "Master keyboard interactions in Selenium. Boost your automation capabilities by simulating keypresses for precise testing.",
    },

    {
      key: 14,
      icons: FaMouse,
      title: "Mouse Actions",
      Description:
        "Navigate with precision using mouse actions in Selenium. Learn to simulate mouse clicks and movements for effective testing.",
    },
    {
      key: 15,
      icons: GrMultiple,
      title: "Multi-select",
      Description:
        "Efficiently handle multi-select elements in Selenium. Learn the art of selecting multiple options for comprehensive test scenarios.",
    },
    {
      key: 16,
      icons: PiScrollFill,
      title: "Scrolling Page",
      Description:
        "Optimize test coverage with Selenium page scrolling. Ensure thorough testing by navigating through lengthy pages seamlessly.",
    },
    {
      key: 17,
      icons: MdMouse,
      title: "Scrolling Mouse",
      Description:
        "Effortlessly simulate mouse scrolling in Selenium. Enhance user experience testing by navigating pages with precision and ease.",
    },
    {
      key: 18,
      icons: BiScreenshot,
      title: "Screenshot",
      Description:
        "Capture and validate results with Selenium screenshots. Enhance test reporting by incorporating visual proof into your automation.",
    },
    {
      key: 19,
      icons: MdOpenInNew,
      title: "Navigate.to()",
      Description:
        "Effortlessly direct your Selenium WebDriver with navigate.to() to traverse through web pages, ensuring seamless navigation in your automated testing journey.",
    },
    {
      key: 20,
      icons: MdSettingsInputComposite,
      title: "setProperty()",
      Description:
        "Empower your Selenium scripts by using setProperty() to configure browser properties, enhancing control and customization for a tailored testing experience.",
    },
    {
      key: 21,
      icons: FaChrome,
      title: "Chrome Option Remote Origin Allowance",
      Description:
        "Unlock the potential of Chrome Options and Remote Origin Allowance in Selenium. Tailor your browser setup, allowing seamless cross-origin interactions for robust testing.",
    },
    {
      key: 22,
      icons: MdOutlineSecurity,
      title: "Desired capabilities",
      Description:
        "Take command of your Selenium WebDriver by utilizing Desired Capabilities. Fine-tune browser behavior, enabling advanced customization and precision in your automated tests.",
    },
    {
      key: 23,
      icons: IoMdLocate,
      title: "Navigation",
      Description:
        "Master web automation navigation. Efficiently move through pages, links, and elements for seamless testing with Selenium.",
    },
    {
      key: 24,
      icons: IoIosLocate,
      title: "Locators",
      Description:
        "Unlock the power of XPath in Selenium. Enhance element identification and selection for precise and robust automation scripts.",
    },
    {
      key: 25,
      icons: PiPathBold,
      title: "XPath",
      Description:
        "Unlock the power of XPath in Selenium. Enhance element identification and selection for precise and robust automation scripts.",
    },
    {
      key: 26,
      icons: FaWpforms,
      title: "Form Handling",
      Description:
        "Optimize form interactions in Selenium. Streamline user input and data submission for effective testing and automation efficiency.",
    },
    {
      key: 27,
      icons: IoReloadSharp,
      title: "PageLoadStrategy.NORMAL",
      Description:
        "Waits for the full page to load before proceeding. Default strategy ensuring comprehensive page readiness.",
    },
    {
      key: 28,
      icons: LuLoader,
      title: "PageLoadStrategy.EAGER",
      Description:
        "Waits until the basic HTML structure is loaded, ignoring images, stylesheets, etc. Optimizes for faster initial page interaction.",
    },
    {
      key: 29,
      icons: AiOutlineReload,
      title: "PageLoadStrategy.NONE",
      Description:
        "Does not wait for the page to load. Allows the user to decide when to proceed, useful for handling dynamic content and custom synchronization.",
    },
    {
      key: 30,
      icons: MdContentPasteSearch,
      title: "TestNG",
      Description:
        "Elevate Selenium testing with TestNG. Organize, execute, and manage test cases systematically for robust automation and reliable results.",
    },
    {
      key: 31,
      icons: MdOutlineTimer,
      title: "Static Wait",
      Description:
        "Improve script reliability with Selenium's Static Wait. Pause execution for precise timing in automation.",
    },
    {
      key: 32,
      icons: RxCounterClockwiseClock,
      title: "Implicit Wait",
      Description:
        "Enhance Selenium scripts with Implicit Wait. Automatically wait for elements, optimizing script performance.",
    },
    {
      key: 33,
      icons: RxLapTimer,
      title: "Explicit Wait",
      Description:
        "Refine Selenium automation with Explicit Wait. Dynamically wait for specific conditions, ensuring accurate script execution.",
    },

    {
      key: 34,
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
    } else if (title_name === "Dropdown") {
      nav("/Drop_down");
      setTitle_Name("");
    }

    // Assertions
    else if (title_name === "Hard Assertions") {
      nav("/Hard_assertions");
      setTitle_Name("");
    } else if (title_name === "Soft Assertions") {
      nav("/Soft_assertions");
      setTitle_Name("");
    }

    // Frames and windows
    else if (title_name === "Frames") {
      nav("/frame");
      setTitle_Name("");
    } else if (title_name === "Windows Handling") {
      nav("/Windows_handling");
      setTitle_Name("");
    }

    // Interactions
    else if (title_name === "Alerts") {
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

    // Miscellaneous
    else if (title_name === "Scrolling Page") {
      nav("/Scrolling_page");
      setTitle_Name("");
    } else if (title_name === "Scrolling Mouse") {
      nav("/Scrolling_mouse");
      setTitle_Name("");
    } else if (title_name === "Screenshot") {
      nav("/screenshot");
      setTitle_Name("");
    }

    // Navigation_and_conf
    else if (title_name === "Navigate.to()") {
      nav("/Navigate_to");
      setTitle_Name("");
    } else if (title_name === "setProperty()") {
      nav("/SetProperty");
      setTitle_Name("");
    } else if (title_name === "Chrome Option Remote Origin Allowance") {
      nav("/Chrome_options");
      setTitle_Name("");
    } else if (title_name === "Desired capabilities") {
      nav("/Desired_Capabilities");
      setTitle_Name("");
    }

    // Navigation_and_basics
    else if (title_name === "Navigation") {
      nav("/navigation");
      setTitle_Name("");
    } else if (title_name === "Locators") {
      nav("/locators");
      setTitle_Name("");
    } else if (title_name === "XPath") {
      nav("/Xpath");
      setTitle_Name("");
    }

    // New form
    else if (title_name === "Form Handling") {
      nav("/practice_form");
      setTitle_Name("");
    }

    // Page load strategy
    else if (title_name === "PageLoadStrategy.NORMAL") {
      nav("/pageloadstrategy_normal");
      setTitle_Name("");
    } else if (title_name === "PageLoadStrategy.EAGER") {
      nav("/pageloadstrategy_eager");
      setTitle_Name("");
    } else if (title_name === "PageLoadStrategy.NONE") {
      nav("/pageloadstrategy_none");
      setTitle_Name("");
    }

    // Testing_framework
    else if (title_name === "TestNG") {
      nav("/Testng");
      setTitle_Name("");
    }

    // Waiting_strategy
    else if (title_name === "Static Wait") {
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
              Introduction
            </h4>
            <p
              className="section-description"
              style={{
                padding: "10px 0px",

                fontFamily: "sans-serif",
                color: "hsla(226, 100%, 5%, 0.8)",
              }}
            >
              Selenium is an open-source testing framework used for automating
              web applications. It provides tools for browser automation,
              allowing testers and developers to write scripts that simulate
              user interactions. Selenium facilitates efficient testing across
              browsers, platforms, and operating systems, enhancing software
              quality and streamlining development processes.
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

          <div className="element-container mb-5">
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
                        style={{ cursor: "pointer" }}
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

export default Workouts;
