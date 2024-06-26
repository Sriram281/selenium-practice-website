import { useNavigate } from "react-router-dom";
import Header from "../Header";
import inputtext_box from "./image_for_Answer/tab_and_window.png";
import Toast from "../Toast";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import Eduspere_logo from "../Edusphere_logo";
import { useState } from "react";
const Windows_handling = () => {
  var nav = useNavigate();
  const openGoogleInNewWindow = () => {
    window.open(
      "https://www.flipkart.com/",
      "GoogleWindow",
      "width=600,height=400"
    );
  };
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
                  Window handling
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%2145903&parId=58854C9B9741551E%218818&o=OneUp"
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
                  Your task is to write a Selenium script in Java that does the
                  following:
                </h6>
                <h6
                  style={{
                    fontFamily: "monospace",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  New Tab :
                </h6>
                <ol>
                  <li>Open the main application page.</li>
                  <li>Click on a 'New tab' that opens a new Tab.</li>
                  <li>Switch to the new Tab and perform some actions.</li>
                  <li>Maximize the tab.</li>
                  <li>
                    Close the new window and switch back to the main window.
                  </li>
                </ol>
                <hr />
                <h6
                  style={{
                    fontFamily: "monospace",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  New Window :
                </h6>
                <ol>
                  <li>Open the main application page.</li>
                  <li>Click on a 'New window' that opens a new Window.</li>
                  <li>Switch to the new Window and perform some actions.</li>

                  <li>Maximize the window.</li>
                  <li>
                    Close the new window and switch back to the main window.
                  </li>
                </ol>
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
                Selenium window handling is vital for web automation when
                dealing with multiple browser windows or tabs. It involves
                identifying, switching, and performing actions on different
                windows, ensuring seamless interaction within complex web
                applications.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <p style={{ fontFamily: "sans-serif", fontSize: "16px" }}>
                  1. Clicking a link that opens in a new window/tab will
                  activate it on screen, but WebDriver won't identify the
                  OS-active window. To manage the new window, use a loop for the
                  two visible windows, switching to the one not originally
                  active.
                </p>

                <div className="row">
                  <div className="col">
                    <h6 style={{ textAlign: "center" }}>
                      Click 'New Tab' link
                    </h6>

                    <a
                      href="https://www.amazon.in/"
                      target="box"
                      id="first_link"
                    >
                      <p id="first_paragraph" style={{ textAlign: "center" }}>
                        New tab
                      </p>
                    </a>
                  </div>
                  <div className="col">
                    <h6 style={{ textAlign: "center" }}>
                      Click 'New Window' link
                    </h6>

                    <a href="Title_alter" target="_blank" id="newWindow">
                      <p
                        id="second_paragraph"
                        style={{ textAlign: "center" }}
                        onClick={openGoogleInNewWindow}
                      >
                        New Window
                      </p>
                    </a>
                  </div>
                </div>

                <p style={{ fontFamily: "sans-serif", fontSize: "16px" }}>
                  2. Selenium 4 introduces NewWindow API for effortless creation
                  of new tabs/windows with automatic switching. Simplify tab
                  management seamlessly on your website.
                </p>
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
                    " Explore the power of 'Windows handling' in this Selenium
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
                    <h6>Get window handle</h6>
                    <li>getWindowHandle()</li>
                    <li>size()</li>
                    <li>findElement()</li>
                    <li>ExpectedConditions.numberOfWindowsToBe()</li>
                    <li>ExpectedConditions.titleIs()</li>
                    <li>contentEquals()</li>
                    <li>switchTo().window()</li>
                    <hr />
                    <h6>
                      This feature works with Selenium 4 and later versions.
                      Opens a new tab and switches to new tab
                    </h6>
                    <ol>
                      <li>switchTo().newTab()</li>
                      <li>switchTo().newWindow()</li>
                    </ol>
                    <hr />
                    <h6>Access each dimension individually</h6>
                    <ol>
                      <li>
                        <pre>driver.manage().window().getSize().getWidth()</pre>
                      </li>
                      <li>
                        <pre>
                          driver.manage().window().getSize().getHeight()
                        </pre>
                      </li>
                      <li>size.getWidth()</li>
                      <li>size.getHeight()</li>
                    </ol>
                    <hr />
                    <h6>Restores the window and sets the window size.</h6>
                    <ol>
                      <li>
                        <pre>
                          driver.manage().window().setSize(new Dimension(1024,
                          768))
                        </pre>
                      </li>
                    </ol>
                    <hr />
                    <h6>Access each dimension individually</h6>
                    <ol>
                      <li>
                        <pre>driver.manage().window().getPosition().getX()</pre>
                      </li>
                      <li>
                        <pre>driver.manage().window().getPosition().getY()</pre>
                      </li>
                    </ol>
                    <hr />
                    <h6>store the dimensions and query them later</h6>
                    <ol>
                      <li>Point</li>
                      <li>
                        <pre>driver.manage().window().getPosition()</pre>
                      </li>
                    </ol>
                    <hr />
                    <h6>
                      Move the window to the top left of the primary monitor
                    </h6>
                    <ol>
                      <li>
                        <pre>
                          driver.manage().window().setPosition(new Point(0, 0))
                        </pre>
                      </li>
                    </ol>
                    <hr />

                    <h6>Maximize tab</h6>
                    <ol>
                      <li>
                        <pre>driver.manage().window().maximize()</pre>
                      </li>
                    </ol>
                    <hr />

                    <h6>Minimize window</h6>
                    <ol>
                      <li>
                        <pre>driver.manage().window().minimize()</pre>
                      </li>
                    </ol>
                    <hr />
                    <h6>Fullscreen window</h6>
                    <ol>
                      <li>
                        <pre>driver.manage().window().fullscreen()</pre>
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

export default Windows_handling;
const styles = {
  one: {
    padding: "5px",
  },
};

// const Windows_handling = () => {
// const openGoogleInNewWindow = () => {
//   window.open(
//     "https://www.google.com",
//     "GoogleWindow",
//     "width=600,height=400"
//   );
// };

//   return (
//     <>
//       <div>
//         <button onClick={openGoogleInNewWindow}>Open New Window</button>
//       </div>
//     </>
//   );
// };

// export default Windows_handling;
