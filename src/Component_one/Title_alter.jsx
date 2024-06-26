import "bootstrap/dist/css/bootstrap.min.css";
import "../image.css";

// import Model from "./Model";
import { FaBars, FaWpforms } from "react-icons/fa";

import { PiMonitorPlayBold } from "react-icons/pi";
import { GrDocumentConfig } from "react-icons/gr";
import { IoReload } from "react-icons/io5";
import { SiKashflow } from "react-icons/si";
import { GiWoodFrame } from "react-icons/gi";
import { MdOutlineTimer } from "react-icons/md";
import { FaEquals } from "react-icons/fa";
import { GiScrollUnfurled } from "react-icons/gi";
import { MdContentPasteSearch } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header";

import one from "./title_image/one.webp";
import two from "./title_image/two.jpeg";
import three from "./title_image/three.webp";
import four from "./title_image/four.jpeg";
import five from "./title_image/five.jpeg";
import six from "./title_image/six.webp";
import seven from "./title_image/seven.webp";
import eight from "./title_image/eight.webp";
import nine from "./title_image/nine.jpeg";
import ten from "./title_image/ten.jpeg";
import eleven from "./title_image/eleven.webp";
import twelve from "./title_image/twelve.webp";

const Title_alter = () => {
  const nav = useNavigate();
  const [selected, setSelected] = useState();

  const [selectedTitle, setSelectedTitle] = useState();
  const [selected_subtopics, setSelected_subtopics] = useState();
  // console.log("selected_subtopics : " + selected_subtopics);
  const [name, setName] = useState();
  var selected_name = "";
  if (name) {
    selected_name = name;
  }

  var selected_title = "";
  if (selectedTitle) {
    selected_title = selectedTitle;
  }

  var selected_subtopic_name = "";
  if (selected_subtopics) {
    selected_subtopic_name = selected_subtopics;
  }

  // useEffect(() => {
  //   if (selected_subtopic_name == "Text Box") {
  //     nav("/text_box");
  //     console.log(selected_subtopic_name);
  //   } else if (selected_subtopics == "Check Box") {
  //     nav("/check_box");
  //   }
  // }, [selected_subtopics]);

  const click_subtopics = (first_name) => {
    if (first_name == "Text Box") {
      nav("/text_box");
    } else if (first_name == "Check Box") {
      nav("/check_box");
    } else if (first_name == "Buttons") {
      nav("/buttons");
    } else if (first_name == "Drop down") {
      nav("/Drop_down");
    } else if (first_name == "Find all links") {
      nav("/Find_all_links");
    } else if (first_name == "Radio Button") {
      nav("/radio_button");
    } else if (first_name == "Textarea") {
      nav("/text_area");
    }

    // Navigate & configuration
    else if (first_name == "Navigate") {
      nav("/Navigate_to");
    } else if (first_name == "Property") {
      nav("/SetProperty");
    } else if (first_name == "Chrome Option Remote Origin Allowance") {
      nav("/Chrome_options");
    } else if (first_name == "Desired capabilities") {
      nav("/Desired_Capabilities");
    }

    // Navigation and xpath
    else if (first_name == "XPath") {
      nav("/Xpath");
    } else if (first_name == "Locators") {
      nav("/locators");
    } else if (first_name == "Navigation") {
      nav("/navigation");
    }

    // Page load strategy
    else if (first_name == "PageLoadStrategy.NORMAL") {
      nav("/pageloadstrategy_normal");
    } else if (first_name == "PageLoadStrategy.EAGER") {
      nav("/pageloadstrategy_eager");
    } else if (first_name == "PageLoadStrategy.NONE") {
      nav("/pageloadstrategy_none");
    }

    // Form
    else if (first_name == "Practice Form") {
      nav("/practice_form");
    }

    // Interactions
    else if (first_name == "Alerts") {
      nav("/Alerts");
    } else if (first_name == "Drag and Drop") {
      nav("/drag_and_drop");
    } else if (first_name == "Keyboard Actions") {
      nav("/Keyboard_action");
    } else if (first_name == "Mouse Actions") {
      nav("/Mouse");
    } else if (first_name == "Multi-select") {
      nav("/Multi_select");
    }
    // waiting strategies
    else if (first_name == "Static Wait") {
      nav("/Static_wait");
    } else if (first_name == "Implicit Wait") {
      nav("/Implicit_wait");
    } else if (first_name == "Explicit Wait") {
      nav("/Explicit_wait");
    } else if (first_name == "Fluent wait") {
      nav("/Fluent_wait");
    }
    // Frames and Windows
    else if (first_name == "Frames") {
      nav("/frame");
    } else if (first_name == "Windows Handling") {
      nav("/Windows_handling");
    }
    // Assertions
    else if (first_name == "Hard Assertions") {
      nav("/Hard_assertions");
    } else if (first_name == "Soft Assertions") {
      nav("/Soft_assertions");
    }
    // Miscellaneous
    else if (first_name == "Screenshot") {
      nav("/screenshot");
    } else if (first_name == "Scrolling Mouse") {
      nav("/Scrolling_mouse");
    } else if (first_name == "Scrolling Page") {
      nav("/Scrolling_page");
    }
    // Testing Framework Integration
    else if (first_name == "TestNG") {
      nav("/Testng");
    }
  };

  const data = [
    {
      id: 0,
      name: "Navigate &  Config",
      image: one,
      // "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
      icons: GrDocumentConfig,
      title: "Navigate &  Config",
      description:
        "Explore Selenium's power with navigate.to(), setProperty(), Chrome options, and desired capabilities. Master web automation effortlessly.",

      subtopics: [
        ["Property"],
        ["Navigate"],
        ["Chrome Option Remote Origin Allowance"],
        ["Desired capabilities"],
      ],
    },
    {
      id: 1,
      name: "Elements",
      image: twelve,
      // "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
      icons: FaBars,
      title: "Elements",
      description:
        "Explore Selenium's core components: Text Box, Check Box, Radio Button, Buttons, Links, etc,. Vital for seamless web automation.",

      subtopics: [
        ["Text Box"],
        ["Check Box"],
        ["Radio Button"],
        ["Drop down"],
        ["Buttons"],
        ["Find all links"],
        ["Textarea"],
      ],
    },
    {
      id: 2,
      name: "Forms",
      image: three,
      // "https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=600",
      icons: FaWpforms,
      title: "Forms",
      description:
        "'Form' section, your gateway to mastering Selenium automation of web forms. Learn to interact with input fields, Checkbox, radio button.",

      subtopics: [["Practice Form"]],
    },
    {
      id: 3,
      name: "Navigation and Basics",
      image: four,
      // "https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=600",
      icons: PiMonitorPlayBold,
      title: "Navigation and Basics",
      description:
        "Master the essentials of web automation with a focus on Navigation, Locators, XPath, laying a solid foundation for efficient element navigation.",
      subtopics: [["Navigation"], ["Locators"], ["XPath"]],
    },
    {
      id: 4,
      name: "Page load strategy",
      image: five,
      // "https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=600",
      icons: IoReload,
      title: "Page load strategy",
      description:
        "Learn Selenium Page Load Strategies: NORMAL for default waiting, EAGER for faster interaction, and NONE for custom synchronization.",
      subtopics: [
        ["PageLoadStrategy.NORMAL"],
        ["PageLoadStrategy.EAGER"],
        ["PageLoadStrategy.NONE"],
      ],
    },
    {
      id: 5,
      name: "Interactions",
      image: six,
      // "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icons: SiKashflow,
      title: "Interactions",
      description:
        "Engage with web elements dynamically – handle alerts, drag and drop, and execute keyboard and mouse actions seamlessly.",
      subtopics: [
        ["Alerts"],
        ["Drag and Drop"],
        ["Keyboard Actions"],
        ["Mouse Actions"],
        ["Multi-select"],
      ],
    },
    {
      id: 6,
      name: "Waiting Strategies",
      image: seven,
      // "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icons: MdOutlineTimer,
      title: "Waiting Strategies",
      description:
        "Learn the art of synchronization with Static, Implicit, Explicit and Fluent waits ensuring adaptability to varied page loads.",
      subtopics: [
        ["Static Wait"],
        ["Implicit Wait"],
        ["Explicit Wait"],
        ["Fluent wait"],
      ],
    },

    {
      id: 7,
      name: "Frames and Windows",
      image: eight,
      // "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icons: GiWoodFrame,
      title: "Frames and Windows",
      description:
        "Navigate diverse web elements confidently, from frames to multiple windows, ensuring robust seamless web automation.",
      // "Navigate diverse web elements confidently, from frames to multiple windows, Vital for seamless web automation.",

      subtopics: [["Frames"], ["Windows Handling"]],
    },
    {
      id: 8,
      name: "Assertions",
      image: nine,
      // "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icons: FaEquals,
      title: "Assertions",
      description:
        "Ensure test script integrity with both hard and soft assertions, enhancing reliability and accuracy of results.",
      subtopics: [["Hard Assertions"], ["Soft Assertions"]],
    },
    {
      id: 9,
      name: "Miscellaneous",
      image: ten,
      // "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icons: GiScrollUnfurled,
      title: "Miscellaneous",
      description:
        "Explore versatile skills – capture screenshots, page scrolling, mouse scrolling and navigate pages with finesse.",
      subtopics: [["Screenshot"], ["Scrolling Mouse"], ["Scrolling Page"]],
    },
    {
      id: 10,
      name: "Testing Framework Integration",
      image: eleven,
      // "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icons: MdContentPasteSearch,
      title: "Testing Framework",
      description:
        // "Organize and streamline Selenium tests with TestNG integration, managing dependencies and executing tests systematically.",
        "Organize and streamline Selenium tests with TestNG integration and executing tests systematically.",

      subtopics: [["TestNG"]],
    },
  ];
  // const subTopics = {
  //   model: [["Text Box"], ["Check Box"], ["Radio Button"], ["Web Tables"]],
  //   model2: [
  //     ["hgckgckytc"],
  //     ["Chgckgckytc"],
  //     ["Radihgckgckytc"],
  //     ["Wehgckgckytc"],
  //   ],
  // };

  // const subTopics = [
  //   [["Text Box"], ["Check Box"], ["Radio Button"], ["Web Tables"]],
  //   [["hgckgckytc"], ["Chgckgckytc"], ["Radihgckgckytc"], ["Wehgckgckytc"]],
  // ];
  // console.log(subTopics);
  // for (var k of subTopics.model) {
  //   console.log(k[0]);
  // }

  // console.log(data);

  // data.map((item) => {
  //   item.subtopics.map((sub, index) => {
  //     console.log(sub);
  //   });
  // });
  const handleClick = (name) => {
    // nav("/Elements", { state: { subtopics: subtopicsData } });
    // if (subtopicsData) {
    //   nav("/Elements", { state: { subtopics: subtopicsData } });
    // }

    if (name === "Elements") {
      nav("/Header_body");
    } else if (name === "Forms") {
      nav("/new_form");
    } else if (name === "Navigation and Basics") {
      nav("/locators_and_xpath");
    } else if (name === "Interactions") {
      nav("/interactions");
    } else if (name === "Waiting Strategies") {
      nav("/waiting_strategies");
    } else if (name === "Frames and Windows") {
      nav("/frame_and_windows");
    } else if (name === "Assertions") {
      nav("/assertions");
    } else if (name === "Miscellaneous") {
      nav("/miscellaneous");
    } else if (name === "Testing Framework Integration") {
      nav("/Testing_frameworks");
    } else if (name === "Page load strategy") {
      nav("/pageloadstrategy");
    } else if (name === "Navigate &  Config") {
      nav("/Navigate_and_configuration");
    }
  };
  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{
          backgroundColor: "rgba(68, 75, 255, 0.1)",
        }}
      >
        <div className="container p-4" style={{}}>
          <div className="container p-2 ">
            <div
              // className="col-sm-10"
              style={{
                // border: "1px solid green",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: 35,
                boxShadow:
                  "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <p style={{ fontSize: 16, fontFamily: "sans-serif" }}>
                Selenium is an open-source testing framework used for automating
                web applications. It provides tools for browser automation,
                allowing testers and developers to write scripts that simulate
                user interactions. Selenium facilitates efficient testing across
                browsers, platforms, and operating systems, enhancing software
                quality and streamlining development processes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid "
        // hsla(14, 0%, 50%, 0.3)
        style={{ backgroundColor: "hsla(32, 0%, 50%, 0.1)" }}
      >
        <div className="container">
          <div className="row ">
            {data &&
              data.map((m, index) => {
                // console.log(m.id);
                // console.log(m.image);
                // console.log(m.icons);
                // console.log(m.title);
                // console.log(m.description);
                // console.log("model   model" + m.model);
                return (
                  // <>
                  <div className="col-sm-3 " key={index}>
                    <div
                      // className="responsive"
                      style={{
                        padding: 10,
                        // gap: "3px",
                        backgroundColor: "white",
                        marginTop: 30,
                      }}
                    >
                      <div
                        className="gallery"
                        style={{
                          // padding: 10,
                          border: "1px  hsla(32, 0%, 50%, 0.1)",
                        }}
                      >
                        {/* <img
                      src={m.image}
                      alt="Cinque Terre"
                      width="600"
                      height="400"
                      style={{ border: "2px solid white", borderRadius: 50 }}
                    /> */}

                        <div className="desc" style={{ textAlign: "center" }}>
                          <div className="element-card">
                            <div style={{ padding: "10px" }}>
                              <img
                                src={m.image}
                                alt="Cinque Terre"
                                width="600"
                                height="400"
                                style={{
                                  border: "2px solid white",
                                  borderRadius: 50,
                                }}
                              />
                            </div>
                            <div className="icon-container">
                              <span
                                className="iconshover"
                                style={{ cursor: "pointer" }}
                                // style={{
                                //   padding: 7,
                                //   color: "red",
                                //   border: "1px solid orange",
                                //   borderRadius: "25px",
                                // }}
                              >
                                <m.icons
                                  color="white"
                                  size={25}
                                  onClick={() => {
                                    handleClick(m.name);
                                  }}
                                />
                              </span>
                            </div>
                            {/* <span
                        style={{
                          padding: 5,
                          color: "red",
                          border: "1px solid orange",
                          borderRadius: "25px",
                        }}
                      >
                        <m.icons color="red" size={25} />
                      </span> */}
                            <h5 style={{ padding: 0 }}>{m.title}</h5>
                            <p
                              // className="element-description"
                              style={{
                                justifyContent: "center",
                                textAlign: "left",
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                              }}
                            >
                              {m.description}
                            </p>
                            {/* {console.log(m.subtopics)} */}
                            {/* MODEL  MODEL MODEL MODEL MODEL MODEL*/}

                            <div className="container mt-3">
                              <button
                                type="button"
                                className="model_button "
                                data-bs-toggle="modal"
                                data-bs-target="#myModal"
                                id="open"
                                onClick={() => {
                                  setSelected(m.subtopics);
                                  setSelectedTitle(m.title);
                                  setName(m.name);
                                }}
                              >
                                {/* Open modal */}
                                Subtopics
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="modal" id="myModal">
                          <div className="modal-dialog modal-fullscreen-sm-down">
                            <div className="modal-content">
                              {/* <div className="modal-header"> */}

                              {/* <h4 className="modal-title">Modal Heading</h4> */}

                              {/* </div> */}

                              <div className="modal-body p-5 ">
                                <button
                                  style={{
                                    float: "right",
                                    // marginTop: "-35px",
                                    // marginRight: "10px",
                                    // border: "2px solid black",
                                  }}
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                ></button>
                                {/* <Forms /> */}

                                <div className="list-group ">
                                  <h3>{selected_title}</h3>
                                  {selected &&
                                    selected.map((v, index) => {
                                      // console.log("First" + v[0]);
                                      return (
                                        // <>
                                        <div
                                          key={index}
                                          className="d-flex  text-white m-2"
                                          // style={styles.one}

                                          style={{
                                            border: "2px solid #7b85a4",
                                            backgroundColor: "#7b85a4",
                                            borderRadius: "50px",
                                            padding: 7,
                                          }}
                                        >
                                          <div className="p-2 ">
                                            <h6>{index + 1 + ".)"}</h6>
                                          </div>
                                          <div className="p-2 ">
                                            <h6
                                              data-bs-dismiss="modal"
                                              style={{
                                                cursor: "pointer",
                                              }}
                                              onClick={() => {
                                                // setSelected_subtopics(v);

                                                click_subtopics(v);
                                              }}
                                            >
                                              {v}
                                            </h6>
                                          </div>
                                        </div>
                                        // {/* </> */}
                                      );
                                    })}
                                  <div
                                    className="m-2"
                                    style={{
                                      border: "2px solid tomato",
                                      backgroundColor: "tomato",
                                      borderRadius: "50px",
                                      padding: 5,
                                    }}
                                  >
                                    <h6
                                      className="text-white p-2"
                                      // type="button"
                                      // className="btn btn-danger"
                                      data-bs-dismiss="modal"
                                      // onClick={() => {
                                      //   nav("/Elements",{});

                                      // }}
                                      style={{
                                        textAlign: "center",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => {
                                        handleClick(selected_name);
                                      }}
                                    >
                                      Full screen
                                    </h6>
                                  </div>
                                </div>

                                {/* <div
                                  className="m-2"
                                  style={{
                                    border: "2px solid tomato",
                                    backgroundColor: "tomato",
                                    borderRadius: "50px",
                                    padding: 5,
                                  }}
                                >
                                  <h6
                                    className="text-white p-2"
                                    // type="button"
                                    // className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                    // onClick={() => {
                                    //   nav("/Elements",{});

                                    // }}
                                    style={{
                                      textAlign: "center",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      handleClick(selected_name);
                                    }}
                                  >
                                    Full screen
                                  </h6>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* MODEL  MODEL MODEL MODEL MODEL MODEL*/}
                      </div>
                    </div>
                  </div>

                  // {/* </> */}
                );
              })}

            <div className="clearfix mb-5"></div>
          </div>
        </div>
      </div>
      {/* <span style={{ padding: 20 }}>
        <MdLoop size={25} color="red" />
      </span>
      <span style={{ padding: 20 }}>
        <MdLoop size={25} color="red" />
      </span>
      <span style={{ padding: 20 }}>
        <FaBars size={25} color="red" />
      </span> */}
    </>
  );
};

export default Title_alter;
const styles = {
  one: {
    // padding: 25,
    border: "5px solid white",
    textAlign: "",
    // textAlign: "justify",
    textAlign: "left",
  },
  two: {
    // padding: 25,
    border: "solid white",
    borderWidth: "0px 25px",
  },
};
