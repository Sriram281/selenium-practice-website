import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { useState } from "react";
import inputtext_box from "./image_for_Answer/drag_and_drop.png";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import Toast from "../Toast";
import Eduspere_logo from "../Edusphere_logo";

const Drag_and_drop = () => {
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Drag and Drop");
  var nav = useNavigate();
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
                  Drag and Drop
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%219242&parId=58854C9B9741551E%218699&o=OneUp"
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
                  Drag and Drop:
                </h6>
                <li>
                  Locate the 'Source' element and drag it to the 'Target'
                  element.
                </li>
                <hr />
                <h6
                  style={{
                    fontFamily: "monospace",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Validation:
                </h6>
                <li>
                  After the drag-and-drop operation, verify that the text inside
                  the 'Target' element has changed to confirm that the
                  drag-and-drop was successful.
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <div>
                  <h5>Drag and Drop Example</h5>
                  <p>
                    Drag and drop is a user interface (UI) interaction where the
                    user can select a draggable object and move it to a
                    different location or drop it onto another element.
                  </p>
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
                    " Explore the power of 'Drag and Drop' in this Selenium
                    practice mastering key techniques for seamless web
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
                    <li>findElement()</li>
                    <li>Action()</li>
                    <li>dragAndDrop(from,to)</li>
                    <li>perform()</li>
                    <li>getText()</li>
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

export default Drag_and_drop;
const styles = {
  one: {
    padding: "5px",
  },
};
