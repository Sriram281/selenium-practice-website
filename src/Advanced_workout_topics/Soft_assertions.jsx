import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { VscReferences } from "react-icons/vsc";
import inputtext_box from "./image_for_Answer/soft_assertions.png";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import Toast from "../Toast";
import Eduspere_logo from "../Edusphere_logo";
import { useState } from "react";
const Soft_assertions = () => {
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
                  Soft assertions
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%2145674&parId=58854C9B9741551E%2145673&o=OneUp"
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
                  Verify that the page title is equal to "Example Domain."
                </li>
                <hr />
                <h6>
                  Locate an input field on the page and perform the following
                  verifications:
                </h6>
                <ol>
                  <li>
                    Confirm that the entered value matches the attribute value
                    of the input field.
                  </li>
                  <li>
                    Ensure that the attribute is not set to an incorrect value.
                  </li>
                </ol>
                <hr />
                <h6>
                  Locate a radio button on the page and perform the following
                  verifications:
                </h6>
                <ol>
                  <li>Assert that the radio button is initially checked.</li>
                  <li>
                    Interact with the radio button to ensure it becomes
                    unchecked.
                  </li>
                  <li>Reassert that the radio button is unchecked.</li>
                </ol>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <h6>Why we use Soft assertions in selenium ?</h6>

                <small>
                  Soft assertions are used to handle multiple verification
                  points in a test case, allowing the script to continue
                  execution even if some verifications fail. Soft assertions
                  collect information about all failures and report them at the
                  end of the test execution.
                </small>

                <div className="row">
                  <div className="col" style={styles.one}>
                    <label>
                      <h6>First name</h6>
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

                  <div className="col" style={styles.one}>
                    <label>
                      <h6>Second name</h6>
                    </label>
                    <input
                      style={{ border: "1px solid pink" }}
                      id="inputtwo"
                      type="text"
                      className="form-control"
                      placeholder="Second name"
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
                      style={{ border: "1px solid pink" }}
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
                      style={{ border: "1px solid pink" }}
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
                      style={{ border: "1px solid pink" }}
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
                        style={{ border: "1px solid grey" }}
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
                        style={{ border: "1px solid grey" }}
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
                        style={{ border: "1px solid grey" }}
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
                    " Explore the power of 'Soft assertions' in this Selenium
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
                    <li>SoftAssert</li>
                    <li>assertEquals()</li>
                    <li>assertAll()</li>
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

export default Soft_assertions;
const styles = {
  one: {
    padding: "10px",
  },
};
