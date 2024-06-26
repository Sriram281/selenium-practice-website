import "bootstrap/dist/css/bootstrap.min.css";
import "../image.css";
// import Model from "./Model";
import {
  FaBars,
  FaBeer,
  FaDesktop,
  FaWindows,
  FaWpforms,
} from "react-icons/fa";
import { MdLoop } from "react-icons/md";
import { PiMonitorPlayBold } from "react-icons/pi";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Titles = () => {
  const nav = useNavigate();
  const [selected, setSelected] = useState();

  const [selectedTitle, setSelectedTitle] = useState();

  var selected_title = "";
  if (selectedTitle) {
    selected_title = selectedTitle;
  }
  const data = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
      icons: FaBars,
      title: "Elements",
      description:
        "Explore Selenium's core components: Text Box, Check Box, Radio Button, Web Tables, Buttons, Links, etc,. Vital for seamless web automation.",

      subtopics: [
        ["Text Box"],
        ["Check Box"],
        ["Radio Button"],
        ["Web Tables"],
        ["Buttons"],
        ["Links"],
        ["Broken Links - Images"],
        ["Upload and Download"],
        ["Dynamic Properties"],
      ],
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=600",
      icons: FaWpforms,
      title: "Forms",
      description:
        "'Form' section, your gateway to mastering Selenium automation of web forms. Learn to interact with input fields, etc ,.enhancing your web testing capabilities.",

      subtopics: [["Practice Form"]],
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=600",
      icons: PiMonitorPlayBold,
      title: "Frames and windows",
      description:
        "Conquer Alerts, Frames, and Windows. Navigate pop-ups, iframes, and multi-windows effortlessly for robust automation.",

      subtopics: [
        ["Browser Windows"],
        ["Alerts"],
        ["Frames"],
        ["Nested Frames"],
        ["Model Dialogs"],
      ],
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icons: FaWindows,
      title: "Widgets",
      description:
        "Navigate auto-complete, date pickers and more in Selenium. Elevate your automation master widgets for dynamic web forms and robust scripts.",

      subtopics: [
        ["Accordian"],
        ["Auto Complete"],
        ["Date Picker"],
        ["Slider"],
        ["Progress Bar"],
        ["Tabs"],
        ["Tool Tips"],
        ["Menu"],
        ["Select Menu"],
      ],
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icons: FaWindows,
      title: "Interactions",
      description:
        "'Interactions' section, sortable, selectable, and resizable elements in Selenium. Elevate your automation with dynamic interactions for versatile testing.",

      subtopics: [
        ["Sortable"],
        ["Selectable"],
        ["Resizable"],
        ["Droppable"],
        ["Dragabble"],
      ],
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
  const handleClick = (subtopicsData) => {
    // nav("/Elements", { state: { subtopics: subtopicsData } });
    if (subtopicsData) {
      nav("/Elements", { state: { subtopics: subtopicsData } });
    }
  };
  return (
    <>
      <div className="container" style={{ marginTop: 30 }}>
        <div className="container">
          {data.map((m, index) => {
            // console.log(m.id);
            // console.log(m.image);
            // console.log(m.icons);
            // console.log(m.title);
            // console.log(m.description);
            // console.log("model   model" + m.model);
            return (
              <div className="responsive" style={{ padding: 25 }} key={m.id}>
                <div className="gallery" style={{ padding: 10 }}>
                  <img
                    src={m.image}
                    alt="Cinque Terre"
                    width="600"
                    height="400"
                    style={{ border: "2px solid white", borderRadius: 50 }}
                  />

                  <div className="desc">
                    <span style={{ padding: 20, color: "red" }}>
                      <m.icons color="red" size={20} />
                    </span>
                    <h5>{m.title}</h5>
                    <p
                      style={{
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      {m.description}
                    </p>

                    {/* {console.log(m.subtopics)} */}
                    {/* MODEL  MODEL MODEL MODEL MODEL MODEL*/}
                    <div className="container mt-3">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        id="open"
                        onClick={() => {
                          setSelected(m.subtopics);
                          setSelectedTitle(m.title);
                        }}
                      >
                        Open modal
                      </button>
                    </div>
                    <div className="modal" id="myModal">
                      <div className="modal-dialog modal-fullscreen-sm-down">
                        <div className="modal-content">
                          {/* <div className="modal-header"> */}

                          {/* <h4 className="modal-title">Modal Heading</h4> */}

                          {/* </div> */}

                          <div className="modal-body">
                            <button
                              style={{
                                float: "right",
                                // marginTop: "-35px",
                                // marginRight: "10px",
                                // border: "2px solid black",
                              }}
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                            {/* <Forms /> */}

                            <div class="list-group">
                              <h3>{selected_title}</h3>
                              {selected &&
                                selected.map((v, index) => {
                                  // console.log("First" + v[0]);
                                  return (
                                    <>
                                      {/* <a
                                        href="#"
                                        class="list-group-item list-group-item-dark"
                                        style={styles.one}
                                      >
                                        
                                        <p style={{ paddingLeft: 10 }}>
                                          {index + 1 + ".)"}
                                        </p>
                                        <p style={{ paddingLeft: 40 }}>{v}</p>
                                      </a> */}

                                      <div
                                        class="d-flex p-2 bg-secondary text-white"
                                        style={styles.one}
                                      >
                                        <div class="p-2 bg-secondary">
                                          <h6>{index + 1 + ".)"}</h6>
                                        </div>
                                        <div class="p-2 bg-secondary">
                                          <h6>{v}</h6>
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                            </div>
                          </div>

                          <div className="modal-footer">
                            <button
                              type="button"
                              class="btn btn-danger"
                              data-bs-dismiss="modal"
                              // onClick={() => {
                              //   nav("/Elements",{});

                              // }}
                              onClick={() => handleClick(selected)}
                            >
                              Enter
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* MODEL  MODEL MODEL MODEL MODEL MODEL*/}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="clearfix"></div>
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

export default Titles;
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
