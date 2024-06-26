import { useNavigate } from "react-router-dom";
import Header from "../Header";
import inputtext_box from "./image_for_Answer/Alerts.png";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import Eduspere_logo from "../Edusphere_logo";
import Toast from "../Toast";
import { useState } from "react";

const Alerts = () => {
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
                  Alerts
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%2144930&parId=58854C9B9741551E%2144925&o=OneUp"
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
                  Handling Simple Alert:
                </h6>
                <li>
                  Click the "Simple Alert" button and switch to the alert.
                  Retrieve the alert text and accept the alert.
                </li>
                <hr />
                <h6
                  style={{
                    fontFamily: "monospace",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Handling Confirmation Alert:
                </h6>
                <li>
                  Click the "Confirmation Alert" button and switch to the alert.
                  Retrieve the alert text, dismiss the alert, then click the
                  button again and accept the alert. Capture and print the
                  result.
                </li>
                <hr />
                <h6
                  style={{
                    fontFamily: "monospace",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Handling Prompt Alert:
                </h6>
                <li>
                  Click the "Prompt Alert" button, switch to the alert, send a
                  custom input, and accept the alert. Print the user input
                  captured from the alert.
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <h5>Alert</h5>
                <ul>
                  <li>Alerts are used for simple informational messages.</li>
                  <li>They contain only an "OK" button.</li>
                  <li>Example: "The form has been submitted successfully."</li>
                </ul>
                <button
                  type="button"
                  className="btn btn-danger"
                  id="Alert"
                  onClick={() => {
                    alert("Hi Friends");
                  }}
                >
                  Alert
                </button>
                <hr />
                <br />
                {/*  */}

                <h5>Confirm Alert:</h5>
                <ul>
                  <li>
                    Confirm alerts are used when the user needs to confirm or
                    cancel an action.
                  </li>
                  <li>They contain "OK" and "Cancel" buttons.</li>
                  <li>
                    Example: "Do you want to delete this item? (OK/Cancel)"
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-success"
                  id="confirm"
                  onClick={() => {
                    const isConfirmed = window.confirm(
                      "Are you sure you want to proceed?"
                    );
                  }}
                >
                  Confirm Alert
                </button>
                <hr />
                <br />
                {/*  */}
                <h5>Prompt Alert:</h5>
                <ul>
                  <li>
                    Prompt alerts are used when the user needs to enter some
                    input along with confirming or canceling an action.
                  </li>
                  <li>
                    They contain an input field, "OK," and "Cancel" buttons.
                  </li>
                  <li>
                    Example: "Please enter your name: [input field] (OK/Cancel)"
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-warning"
                  id="prompt"
                  onClick={() => {
                    const userInput = window.prompt(
                      "Enter your favorite Animated movie:",
                      "Eg: Kung Fu Panda"
                    );
                  }}
                >
                  Prompt Alert
                </button>
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
                    " Explore the power of Alert in this Selenium practice
                    mastering key techniques for seamless web automation and
                    testing "
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
                    <h6>Alert</h6>
                    <li>click()</li>
                    <li>ExpectedConditions</li>
                    <li>alertIsPresent()</li>
                    <li>getText()</li>
                    <li>accept()</li>
                  </ol>
                  <hr />
                  <ol
                    style={{
                      fontFamily: "revert",
                      color: "rgb(0, 0, 50)",
                      fontSize: "17px",
                    }}
                  >
                    <h6>Confirm alert</h6>
                    <li>click()</li>
                    <li>ExpectedConditions</li>
                    <li>alertIsPresent()</li>
                    <li>switchTo()</li>
                    <li>alert()</li>
                    <li>getText()</li>
                    <li>dismiss()</li>
                  </ol>
                  <hr />
                  <ol
                    style={{
                      fontFamily: "revert",
                      color: "rgb(0, 0, 50)",
                      fontSize: "17px",
                    }}
                  >
                    <h6>Prompt alert</h6>
                    <li>click()</li>
                    <li>ExpectedConditions</li>
                    <li>alertIsPresent()</li>
                    <li>sendKeys()</li>
                    <li>accept()</li>
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

export default Alerts;
const styles = {
  one: {
    padding: "5px",
  },
};
