import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import Toast from "../Toast";
import Eduspere_logo from "../Edusphere_logo";
import { useState } from "react";
import inputtext_box from "./image_for_Answer/keyboard_actions.png";
const Keyboard_action = () => {
  var nav = useNavigate();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Keyboard Actions");
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
                  Keyboard Actions
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%2145341&parId=58854C9B9741551E%219271&o=OneUp"
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
                  Write a Selenium script that performs the following steps:
                </h6>
                <li>Open a browser and navigate to the login page.</li>

                <li>Enter a sample username into the First name field.</li>
                <li>
                  Simulate pressing the "Tab" key to navigate to the password
                  field.
                </li>
                <li>Enter a sample username into the Last name field.</li>
                <li>
                  Copy the text from Last name field and paste to Enter email
                  field
                </li>

                <li>
                  Print a message to the console indicating the successful paste
                  text to Enter email field.
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <h6>Why we use keyboard actions in selenium ?</h6>

                <small>
                  Keyboard actions are used to simulate user interactions with
                  web elements using the keyboard. These actions are essential
                  htmlFor automating web applications and testing their
                  functionality.
                </small>

                <div className="row">
                  <div className="col was-validated" style={styles.one}>
                    <label>
                      <h6>First name</h6>
                    </label>
                    <input
                      id="inputone"
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="name"
                      required
                    />
                  </div>

                  <div className="col was-validated" style={styles.one}>
                    <label>
                      <h6>Last name</h6>
                    </label>
                    <input
                      id="inputtwo"
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      name="name"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col was-validated" style={styles.one}>
                    <label>
                      <h6>Enter Email</h6>
                    </label>
                    <input
                      id="inputthree"
                      type="text"
                      className="form-control"
                      placeholder="Enter email"
                      name="name"
                      required
                    />
                  </div>

                  <div className="col was-validated" style={styles.one}>
                    <label>
                      <h6>Address-1</h6>
                    </label>
                    <input
                      id="inputfour"
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      name="address1"
                      required
                    />
                  </div>
                </div>
                {/* </div> */}
                <div className="row">
                  <div className="col was-validated" style={styles.one}>
                    <label>
                      <h6>Address-2</h6>
                    </label>
                    <input
                      id="inputfive"
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      name="address2"
                      required
                    />
                  </div>

                  <div className="col" style={styles.one}>
                    <label htmlFor="radio">
                      <h6>Select your favorite movie</h6>
                    </label>
                    {/* <div className="row"> */}
                    <div className="form-check col">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="radio1"
                        name="optradio"
                        value="option1"
                      />
                      <label className="form-check-label" htmlFor="radio1">
                        The Shawshank Redemption
                      </label>
                    </div>
                    <div className="form-check col">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="radio2"
                        name="optradio"
                        value="option2"
                      />
                      <label className="form-check-label" htmlFor="radio2">
                        Forrest Gump
                      </label>
                    </div>
                    <div className="form-check col">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="radio3"
                        name="optradio"
                        value="option3"
                      />
                      <label className="form-check-label" htmlFor="radio3">
                        Spiderman 3
                      </label>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
                <div className="form-check mb-3 was-validated">
                  <label className="form-check-label">
                    <input
                      id="inputseven"
                      className="form-check-input"
                      type="checkbox"
                      name="remember"
                      required
                    />
                    I agree to all{" "}
                    <span style={{ color: "orangered" }}>
                      terms and conditions
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => {
                    alert("Everything is fine, keep practicing");
                  }}
                >
                  Submit
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
                    " Explore the power of 'Keyboard Actions' in this Selenium
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
                    <li>findElement()</li>
                    <li>Actions()</li>
                    <li>sendKeys()</li>
                    <li>click()</li>
                    <li>keyDown()</li>
                    <li>keyUp()</li>
                    <li>Assert</li>
                    <li>sendKeys(Keys.HOME)</li>
                    <li>
                      Keys.ARROW_LEFT, Keys.SHIFT, Keys.END, Keys.ARROW_UP,
                      etc,.
                    </li>
                    <li>Platform.getCurrent()</li>
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

export default Keyboard_action;
const styles = {
  one: {
    padding: "10px",
  },
};
