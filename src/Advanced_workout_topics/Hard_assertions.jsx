import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import inputtext_box from "./image_for_Answer/hard_assertions.png";
import Toast from "../Toast";
import Eduspere_logo from "../Edusphere_logo";
import { useState } from "react";
const Hard_assertions = () => {
  var nav = useNavigate();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Hard assertions");
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
                  Hard assertions
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&id=58854C9B9741551E%218715&cid=58854C9B9741551E"
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
                <li>
                  <strong>`assertEquals`</strong>: Verify that the page first
                  input text box label name is equal to "First name".
                </li>

                <li>
                  <strong> `assertEquals`</strong>: Confirm that the entered
                  value matches the attribute value of the input field.
                </li>
                <li>
                  <strong>`assertNotEquals`</strong>: Ensure that the attribute
                  is not set to an incorrect value.
                </li>
                <li>
                  <strong>`assertTrue`</strong>: Assert that the 'Radio button'
                  is checked.
                </li>
                <li>
                  <strong>`assertFalse`</strong>: Confirm that the 'Radio
                  button' is unchecked after interacting with it.
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <h6>Why we use Hard Assertions in selenium ?</h6>

                <small>
                  Hard Assertions are used to verify whether a certain condition
                  holds true and to halt the execution of the test script if the
                  condition is false.
                </small>

                <div className="row">
                  <div className="col" style={styles.one}>
                    <label>
                      <h6 id="first_name">First name</h6>
                    </label>
                    <input
                      id="inputone"
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="name"
                    />
                  </div>

                  <div className="col" style={styles.one}>
                    <label>
                      <h6>Second name</h6>
                    </label>
                    <input
                      id="inputtwo"
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      name="name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={styles.one}>
                    <label>
                      <h6>Enter Email</h6>
                    </label>
                    <input
                      id="inputthree"
                      type="text"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>

                  <div className="col" style={styles.one}>
                    <label>
                      <h6>Address-1</h6>
                    </label>
                    <input
                      id="inputfour"
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      name="address1"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={styles.one}>
                    <label htmlFor="sel1" className="form-label">
                      <h6>Select your favorite Animated Movie</h6>
                    </label>
                    {/* Jackie Chan Ben 10 Dragon Booster Danger House Gloriavin
                    Veedu Gloriavin Veedu */}
                    <select
                      className="form-select mt-3"
                      id="firstselect"
                      style={{ border: "1px solid grey" }}
                    >
                      <option id="option1" disabled>
                        Animated Movie
                      </option>
                      <option id="option2">Luca</option>
                      <option id="option3">Finding Nemo</option>
                      <option id="option4">A Bug's Life</option>
                      <option id="option5">Inside Out</option>
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="radio">
                      <h6>Select your favorite movie</h6>
                    </label>
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
                    " Explore the power of 'Hard assertions' in this Selenium
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
                    <li>click()</li>
                    <li>isSelected()</li>
                    <li>isDisplayed()</li>
                    <li>xpath()</li>
                    <li>Assert</li>
                    <li>assertFalse()</li>
                    <li>assertTrue()</li>
                    <li>assertEquals()</li>
                    <li>assertNotEquals()</li>
                    <li>assertNull()</li>
                    <li>assertNotNull()</li>
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

export default Hard_assertions;
const styles = {
  one: {
    padding: "10px",
  },
};
