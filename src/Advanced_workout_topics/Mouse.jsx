import { useNavigate } from "react-router-dom";
import Header from "../Header";
import "./Hover_button.css";
import { useState } from "react";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import Toast from "../Toast";
import Eduspere_logo from "../Edusphere_logo";
import inputtext_box from "./image_for_Answer/mouse_action.png";
const Mouse = () => {
  var nav = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Mouse Actions");
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [coordinates_box, setCoordinates_box] = useState({ x: 0, y: 0 });
  const [draggedItem, setDraggedItem] = useState(null);
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleDragStart = (e, index) => {
    setDraggedItem(items[index]);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();

    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const updatedItems = [...items];
    updatedItems.splice(index, 0, updatedItems.splice(draggedIndex, 1)[0]);

    setItems(updatedItems);
    setDraggedItem(null);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  //get x and y axis of this display

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCoordinates({ x: clientX, y: clientY });
  };
  const handleMouseMove_box = (event) => {
    const { clientX, clientY } = event;
    setCoordinates_box({ x: clientX, y: clientY });
  };

  return (
    <>
      <Header />
      <div className="container p-2">
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <Eduspere_logo />
              <div className="col">
                <p
                  style={{
                    fontFamily: "cursive",
                    fontWeight: "600",
                    fontSize: "30px",
                    color: "rgb(0, 86, 125)",
                  }}
                >
                  Mouse Actions
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-around  col-sm-6">
            <div
              style={{
                // border: "1px solid red",
                // width: "150px",
                position: "relative",
              }}
              className="relative"
            >
              <div
                style={{ cursor: "pointer", position: "absolute" }}
                className="absolute"
              >
                <Toast
                  // countfunction={countlist}
                  // count={student_count}
                  heading={heading}
                  image_for_inputtextbox={inputtext_box}
                />
                <br />
                <small>Hint</small>
              </div>
              {/* <small
                className="badge bg-danger"
                style={{ position: "absolute", left: 25 }}
              >
                {student_count}
              </small> */}
            </div>

            {/* <p>Hint</p> */}
            <div style={{ cursor: "pointer" }}>
              <a
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%2145678&parId=58854C9B9741551E%219269&o=OneUp"
                target="box"
              >
                <VscReferences size={25} color="green" />
              </a>

              <br />
              <small>Refer</small>
            </div>
            <div
              data-bs-toggle="collapse"
              data-bs-target="#demo"
              style={{ cursor: "pointer" }}
            >
              <FaPersonCircleQuestion size={25} color="rgb(123, 88, 161)" />
              <br />
              <small>Questions</small>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "rgba(68, 75, 255, 0.1)",
        }}
      >
        <div className="container p-4" style={{}}>
          <div className="container p-2 collapse" id="demo">
            <div
              // className="element-card"
              style={{
                //   border: "1px solid green",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: 15,
                boxShadow:
                  "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <h6>Open a webpage. Write a Selenium script in Eclipse.</h6>
              <ol
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: 400,
                  // color: "rgb(0, 0, 60)",
                  // backgroundColor: "rgba(68, 75, 255, 0.1)",
                }}
              >
                <h6
                  style={{
                    fontFamily: "monospace",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Mouse action:
                </h6>
                <li>Navigate to the web application.</li>

                <li>
                  Click on the "Click htmlFor result page" link in the
                  navigation menu.
                </li>
                <li>Enter a username in the input text box.</li>
                <li>Drag and drop the draggable element to the target area.</li>
                <li>
                  Click the button and handle any resulting pop-up or
                  interaction.
                </li>

                <li>
                  Hover over the box and capture information or validate its
                  behavior.
                </li>
                <li>
                  Get the coordinates of the mouse on the screen and within a
                  specific element.
                </li>
              </ol>
            </div>
          </div>
          <div className="container p-1">
            <div
              // className="element-card"
              style={{
                //   border: "1px solid green",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: 15,
                boxShadow:
                  "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: 400,
                  color: "rgb(0, 0, 60)",
                  // backgroundColor: "rgba(68, 75, 255, 0.1)",
                }}
              >
                Mouse actions in Selenium involve simulating user interactions
                with the mouse, like clicking, double-clicking, dragging, and
                hovering. They are crucial htmlFor automating web interactions
                that require mouse events, enhancing test accuracy and coverage.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <div className="row" onMouseMove={handleMouseMove}>
                  <div className="col" style={styles.one}>
                    <h6>Click a link to see 'Alert'</h6>
                    <a
                      htmlFor="navigation"
                      href="#"
                      id="link1"
                      onClick={() => {
                        alert("Hi friends, Hava a nice day");
                      }}
                    >
                      Click htmlFor Result page
                    </a>
                  </div>

                  <div className="col" style={styles.one}>
                    <label>
                      <h6>Enter something :</h6>
                    </label>
                    <input
                      style={{ border: "1px solid pink" }}
                      id="inputone"
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="name"
                    />
                  </div>
                </div>
                <hr />
                {/* drag and drop */}
                <div id="draganddrop#" onMouseMove={handleMouseMove}>
                  <div>
                    <h5 id="d">Drag and Drop Example</h5>
                    <small>
                      Drag and drop is a user interface (UI) interaction where
                      the user can select a draggable object and move it to a
                      different location or drop it onto another element.
                    </small>
                    <h6> </h6>
                    <div
                      className="d-flex justify-content-around bg-white mb-3"
                      id="one"
                    >
                      {items.map((item, index) => (
                        <div
                          className="p-2 bg-danger text-white"
                          id={"drag" + index}
                          key={index}
                          draggable // onDragStart={(e) => handleDragStart(e, index)}
                          onDragStart={(e) => {
                            handleDragStart(e, index);
                          }}
                          onDragOver={handleDragOver}
                          onDrop={(e) => {
                            handleDrop(e, index);
                          }}
                          style={{
                            backgroundColor:
                              draggedItem === item ? "orange" : "white",
                            border: "1px solid red",
                            width: "80px",
                            height: "70px",
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row" onMouseMove={handleMouseMove}>
                  <div className="col" style={styles.one}>
                    <label htmlFor="hover">
                      <h6 id="hover_one">Hover me to see a message :</h6>
                    </label>
                    <br />
                    <button
                      className={`button ${isHovered ? "hovered" : ""}`}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      id="hoverbtn_two"
                    >
                      Hover me
                    </button>
                    {isHovered && (
                      <p className="message">Show message when hovering</p>
                    )}
                  </div>

                  <div className="col" style={styles.one}>
                    <label htmlFor="button">
                      <h6 id="text_one">Click a button to see a 'Alert'</h6>
                    </label>
                    <br />
                    <button
                      type="button"
                      className="btn btn-warning"
                      id="normal_btn"
                      onClick={() => {
                        alert("hi Friends, Keep learning ");
                      }}
                    >
                      Normal Button
                    </button>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div
                    className="col"
                    style={styles.one}
                    onMouseMove={handleMouseMove}
                  >
                    <label htmlFor="mouseXY">
                      <h6 id="M_coordinates">Mouse Coordinates : </h6>
                    </label>
                    <br />
                    <small id="small_M_coordinates">
                      Its purpose is to display the current x and y coordinates
                      of the mouse cursor when it hovers over the component.
                    </small>
                    <h6> </h6>
                    <p
                      id="P_coordinates"
                      style={{ fontSize: "18px", fontFamily: "monospace" }}
                    >
                      Mouse Coordinates: {coordinates.x}, {coordinates.y}
                    </p>
                  </div>
                  <div className="col">
                    <label htmlFor="mouseXY">
                      <h6 id="M_coordinates_2">
                        Mouse Coordinates within a Box :
                      </h6>
                    </label>
                    <br />

                    <small id="small_M_coordinates_2">
                      Its purpose is to display the current x and y coordinates
                      of the mouse cursor when it hovers over the Border box.
                    </small>

                    <div
                      style={{ border: "2px solid grey", height: "25vh" }}
                      onMouseMove={handleMouseMove_box}
                      id="coordinates"
                    >
                      <h6> </h6>
                      <p
                        id="M_coordinates_2_2"
                        style={{ fontSize: "18px", fontFamily: "monospace" }}
                      >
                        Mouse Coordinates within a Boxs: {coordinates_box.x},{" "}
                        {coordinates_box.y}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 p-3 text-black">
              <div className="element-card">
                <header>
                  <p
                    style={{
                      fontFamily: "revert",
                      color: "rgb(0, 0, 50)",
                      fontSize: "16px",
                    }}
                  >
                    " Explore the power of 'Mouse actions' in this Selenium
                    practice mastering key techniques htmlFor seamless web
                    automation and testing "
                  </p>
                  <h6>What you would have to use :</h6>
                </header>
                <div className="list">
                  <ol
                    style={{
                      fontFamily: "revert",
                      color: "rgb(0, 0, 50)",
                      fontSize: "16px",
                    }}
                  >
                    <h6>
                      &#128515; First four functions are commonly used mouse
                      actions :
                    </h6>
                    <li> findElement()</li>
                    <li>Actions()</li>
                    <li>perform()</li>
                    <li>Assertions</li>

                    <ol>
                      <h6>&#128048; For click and hold :</h6>
                      <li>clickAndHold()</li>
                    </ol>
                    <hr />
                    <ol>
                      <h6>&#9748; For click and release :</h6>
                      <li>click()</li>
                    </ol>
                    <hr />
                    <ol>
                      <h6>&#10052; For rightClick :</h6>
                      <li>contextClick()</li>
                    </ol>
                    <hr />
                    <ol>
                      <h6>&#127912; For doubleClick :</h6>
                      <li>doubleClick()</li>
                    </ol>
                    <hr />
                    <ol>
                      <h6>&#128690; For hovers :</h6>
                      <li>moveToElement()</li>
                    </ol>
                    <hr />
                    <ol>
                      <h6>&#127923; For move by Offset from element :</h6>
                      <li>moveToElement(tracker, 8, 0)</li>
                    </ol>
                    <hr />
                    <ol>
                      <h6>&#127936; For move by Offset from viewport :</h6>
                      <li>PointerInput()</li>
                      <li>Sequence()</li>
                      <li>addAction()</li>
                      <li>createPointerMove()</li>
                      <li>viewport()</li>
                      <li>RemoteWebDriver</li>
                      <li>Collections.singletonList()</li>
                    </ol>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mouse;
const styles = {
  one: {
    padding: "10px",
  },
};

// import React, { useState } from "react";

// const MouseCoordinates = () => {
//   const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     const { clientX, clientY } = event;
//     setCoordinates({ x: clientX, y: clientY });
//   };

//   return (
//     <div onMouseMove={handleMouseMove}>
//       <p>
//         Mouse Coordinates: {coordinates.x}, {coordinates.y}
//       </p>
//     </div>
//   );
// };

// export default MouseCoordinates;
