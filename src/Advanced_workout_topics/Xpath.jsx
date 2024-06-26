import { useNavigate } from "react-router-dom";
import Header from "../Header";
import inputtext_box from "./image_for_Answer/xpath.png";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import Eduspere_logo from "../Edusphere_logo";
import { useState } from "react";
import Toast from "../Toast";

const Xpath = () => {
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
                  XPath
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%218603&parId=58854C9B9741551E%218588&o=OneUp"
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
                  fontSize: "16px",
                  // color: "rgb(0, 0, 60)",
                  // backgroundColor: "rgba(68, 75, 255, 0.1)",
                }}
              >
                <li>
                  Locate the first input(First name) text box on the page and
                  enter a predefined text (e.g., "Jackie") by using
                  'contains()'.
                </li>
                <li>
                  Locate the second input(Last name) text box on the page and
                  enter a predefined text (e.g., "Chan") by using
                  'normalize-space()'.
                </li>
                <li>
                  Navigate to the page, Select 'Despicable me ' and 'A Bug's
                  Life' checkbox by using Parent and Child - Apex method
                </li>
                <li>
                  Navigate to the page, Select 'The Shawshank Redemption' radio
                  button by using Parent and Child - Apex method
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
                XPath in Selenium is a powerful and flexible XML path language
                used to navigate and locate elements on a web page. It
                facilitates precise identification of HTML elements by defining
                their hierarchical relationships, attributes, or text content,
                enabling efficient automation of web interactions.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <div className="row">
                  <div className="col" style={styles.one}>
                    <label>
                      <h6>First name</h6>
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
                      id="input two"
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
                  <div className="col" id="checkbox_section" style={styles.one}>
                    <label htmlFor="sel1" className="form-label">
                      <h6>Select your favorite Animated Movie</h6>
                    </label>
                    {/* Jackie Chan Ben 10 Dragon Booster Danger House Gloriavin
                    Veedu Gloriavin Veedu */}
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Incredibles"
                        name="option2"
                        value="something"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="check2"
                        style={styles.one}
                      >
                        Incredibles
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Life"
                        name="option2"
                        value="something"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="check2"
                        style={styles.one}
                      >
                        A Bug's Life
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="elemental"
                        className="form-check-input"
                      />
                      <label className="form-check-label" style={styles.one}>
                        Despicable me
                      </label>
                    </div>
                  </div>
                  <div className="col" id="movies">
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
                    " Explore the power of 'XPath' in this Selenium practice
                    mastering key techniques htmlFor seamless web automation and
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
                    <h6>Xpath</h6>
                    <ol>
                      <li>
                        <h6>
                          Syntax :
                          <pre>
                            {"<tagName>[@<attributeName>='<attribute_value>']"}
                          </pre>
                        </h6>
                      </li>
                      <li>
                        <h6>
                          Example : <pre>{"button[@type='submit']"}</pre>
                        </h6>
                      </li>
                    </ol>
                    <hr />
                    <h6>Contains Method</h6>
                    <ol>
                      <li>
                        <h6>
                          Syntax :
                          <pre>
                            {
                              "<tagName>[contains(@<attributeName>,'<attribute_value>')]"
                            }
                          </pre>
                        </h6>
                      </li>
                      <li>
                        <h6>
                          Example : <pre>{"button[contains(@type,'sub')]"}</pre>
                        </h6>
                      </li>
                    </ol>
                    <hr />
                    <h6>Normalize-space</h6>
                    <ol>
                      <li>
                        <h6>
                          Syntax :
                          <pre>
                            {
                              "<tagName>[normalize-space()=’<text inside tag without including space>’]"
                            }
                          </pre>
                        </h6>
                      </li>
                      <li>
                        <h6>
                          Example :{" "}
                          <pre>{"button[normalize-space()=’Submit’]"}</pre>
                        </h6>
                      </li>
                    </ol>
                    <hr />
                    <h6>Parent, Child - Apex method</h6>
                    <ol>
                      <li>
                        <h6>
                          Syntax :
                          <pre>
                            {
                              "<tagName>[@<attributeName>='<attribute_value>']/child::<tagName>[@<attributeName>='<attribute_value>']"
                            }
                          </pre>
                        </h6>
                      </li>
                      <li>
                        <h6>
                          Example :{" "}
                          <pre>
                            {"label[text()='Phone*']/parent::div//child::input"}
                          </pre>
                        </h6>
                      </li>
                    </ol>
                    <hr />
                    <h6>Ancestor/Descendant-Apex method</h6>
                    <ol>
                      <li>
                        <h6>
                          Syntax :
                          <pre>
                            {
                              "<tagName>[@<attributeName>='<attribute_value>']/ancestor::<tagName>[@<attributeName>='<attribute_value>']"
                            }
                          </pre>
                        </h6>
                      </li>
                      <li>
                        <h6>
                          Example :{" "}
                          <pre>
                            {
                              "input[@type='tel']/ancestor::div//descendant::label[text()='Phone*']"
                            }
                          </pre>
                        </h6>
                      </li>
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

export default Xpath;
const styles = {
  one: {
    padding: "5px",
  },
};
