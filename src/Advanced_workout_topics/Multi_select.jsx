import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import Toast from "../Toast";
import { useState } from "react";
import inputtext_box from "./image_for_Answer/multi_select.png";
import Eduspere_logo from "../Edusphere_logo";
const Multi_select = () => {
  var nav = useNavigate();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Alerts");
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
                  Multi-select
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%219277&parId=58854C9B9741551E%219272&o=OneUp"
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
                  Tasks:
                </h6>
                <li>Navigate to the web application.</li>

                <li>
                  Locate the multi-select checkbox-1 or checkbox-2 on the page.
                </li>
                <li>
                  Select multiple options from the checkbox using different
                  techniques (e.g., by index, by value, by visible text).
                </li>
                <li>
                  Verify that the selected options are correctly displayed.
                </li>
              </ol>
            </div>
          </div>
          <div className="container p-2">
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
                In Selenium, working with a "Multiselect" usually refers to
                interacting with HTML elements that allow users to select
                multiple options from a list. The HTML element typically
                associated with multiselect functionality is the 'select'
                element with the multiple attribute.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <div>
                  <h6
                    style={{
                      //   fontFamily: "sans-serif",
                      paddingBottom: 5,
                      paddingLeft: 20,
                    }}
                  >
                    Checkboxes
                  </h6>
                  <small
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "16px",
                      padding: 20,
                    }}
                  >
                    The form below contains two example checkboxes. You can
                    Select more than one
                  </small>
                </div>
                <div className="row">
                  <div className="col">
                    <p style={{ textAlign: "center", fontSize: "40px" }}>
                      &#128674;
                    </p>
                    <h6 style={{ textAlign: "center" }}>Checkbox - 1</h6>
                    <div
                      className="scrollable-container"
                      id="Secondcheckbox"
                      style={{
                        width: "300px",
                        height: "200px",
                        overflow: "auto",
                        border: "1px solid #ccc",
                      }}
                    >
                      <div
                        className="scrollable-content"
                        style={{ padding: "10px" }}
                      >
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check1"
                            name="option1"
                            value="something"
                            htmlFor="firstcheck"
                          />
                          <label className="form-check-label" htmlFor="check1">
                            Option 1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check2"
                            name="option2"
                            value="something"
                            htmlFor="firstcheck"
                          />
                          <label className="form-check-label" htmlFor="check2">
                            Option 2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check3"
                            name="option3"
                            value="something"
                            htmlFor="firstcheck"
                          />
                          <label className="form-check-label">Option 3</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check4"
                            name="option4"
                            value="something"
                            htmlFor="firstcheck"
                          />
                          <label className="form-check-label">Option 4</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check5"
                            name="option5"
                            value="something"
                            htmlFor="firstcheck"
                          />
                          <label className="form-check-label">Option 5</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check6"
                            name="option6"
                            value="something"
                            htmlFor="firstcheck"
                          />
                          <label className="form-check-label">Option 6</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check7"
                            name="option7"
                            value="something"
                            htmlFor="firstcheck"
                          />
                          <label className="form-check-label">Option 7</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check8"
                            name="option8"
                            value="something"
                            htmlFor="firstcheck"
                          />
                          <label className="form-check-label">Option 8</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check9"
                            name="option9"
                            value="something"
                            htmlFor="firstcheck"
                          />
                          <label className="form-check-label">Option 9</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check10"
                            name="option10"
                            value="something"
                            htmlFor="firstcheck"
                          />
                          <label className="form-check-label">Option 10</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check11"
                            name="option11"
                            value="something"
                            htmlFor="firstcheck"
                          />
                          <label className="form-check-label">Option 11</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check12"
                            name="option12"
                            value="something"
                            htmlFor="firstcheck"
                          />
                          <label className="form-check-label">Option 12</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* second check box &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/}
                  <div className="col">
                    <p style={{ textAlign: "center", fontSize: "40px" }}>
                      &#128663;
                    </p>
                    <h6 style={{ textAlign: "center" }}>Checkbox - 2</h6>
                    <div
                      className="scrollable-container"
                      style={{
                        width: "300px",
                        height: "200px",
                        overflow: "auto",
                        border: "1px solid #ccc",
                      }}
                    >
                      <div
                        className="scrollable-content"
                        style={{ padding: "10px" }}
                        id="firstcheckbox"
                      >
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check100"
                            name="option1"
                            value="something"
                            htmlFor="secondcheck"
                          />
                          <label className="form-check-label" htmlFor="check1">
                            Option 1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check200"
                            name="option2"
                            value="something"
                            htmlFor="secondcheck"
                          />
                          <label className="form-check-label" htmlFor="check2">
                            Option 2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check300"
                            name="option3"
                            value="something"
                            htmlFor="secondcheck"
                          />
                          <label className="form-check-label">Option 3</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check400"
                            name="option4"
                            value="something"
                            htmlFor="secondcheck"
                          />
                          <label className="form-check-label">Option 4</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check500"
                            name="option5"
                            value="something"
                            htmlFor="secondcheck"
                          />
                          <label className="form-check-label">Option 5</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check600"
                            name="option6"
                            value="something"
                            htmlFor="secondcheck"
                          />
                          <label className="form-check-label">Option 6</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check700"
                            name="option7"
                            value="something"
                            htmlFor="secondcheck"
                          />
                          <label className="form-check-label">Option 7</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check800"
                            name="option8"
                            value="something"
                            htmlFor="secondcheck"
                          />
                          <label className="form-check-label">Option 8</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check900"
                            name="option9"
                            value="something"
                            htmlFor="secondcheck"
                          />
                          <label className="form-check-label">Option 9</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check1000"
                            name="option10"
                            value="something"
                            htmlFor="secondcheck"
                          />
                          <label className="form-check-label">Option 10</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check1100"
                            name="option11"
                            value="something"
                            htmlFor="secondcheck"
                          />
                          <label className="form-check-label">Option 11</label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check1200"
                            name="option12"
                            value="something"
                            htmlFor="secondcheck"
                          />
                          <label className="form-check-label">Option 12</label>
                        </div>
                      </div>
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
                    " Explore the power of 'Multiselect' in this Selenium
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
                    <li>click()</li>
                    <li>Actions()</li>
                    <li>findElement()</li>
                    <li>keyDown()</li>
                    <li>option.get(1)</li>
                    <li>build()</li>
                    <li>perform()</li>
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

export default Multi_select;
const styles = {
  one: {
    padding: "5px",
  },
};
