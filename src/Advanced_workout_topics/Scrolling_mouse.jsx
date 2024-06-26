import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Toast from "../Toast";
import inputtext_box from "./image_for_Answer/scrolling_mouse.png";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import Eduspere_logo from "../Edusphere_logo";
import { useState } from "react";
const Scrolling_mouse = () => {
  var nav = useNavigate();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Scrolling mouse");

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
                  Scrolling mouse
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%2145707&parId=58854C9B9741551E%218703&o=OneUp"
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
              In Selenium, scrolling the mouse refers to the action of moving
              the mouse pointer or wheel, which can be useful for interacting
              with certain elements or navigating through a webpage. Selenium
              provides the Actions className to perform various user
              interactions, including mouse actions.
            </p>
          </div>
        </div>
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
                  Write a Java using Selenium that accomplishes the following:
                </h6>

                <li>
                  Identify and print the text content of an element located
                  using any suitable strategy (e.g., ID, XPath, CSS selector).
                </li>
                <li>
                  Scroll down to the footer of the page using the mouse wheel.
                </li>
                <li>
                  After scrolling to the footer, identify and print the text
                  content of a specific element in the footer.
                </li>
                <li>
                  Locate an iframe on the page (assuming it's present within the
                  footer) and switch to that iframe.
                </li>
                <li>
                  Once inside the iframe, identify a 'Button' and click a button
                  to show alert message then click ok within the iframe.
                </li>
                <li>
                  Identify a 'Check box' and select your favorite childhood
                  cartoon within the iframe.
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <header
                  id="header2"
                  style={{ backgroundColor: "green", height: 60 }}
                >
                  <p
                    style={{
                      fontSize: "30px",
                      fontFamily: "cursive",
                      textAlign: "center",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    Header
                  </p>
                </header>

                <div className="row">
                  <div className="col">
                    <h6 style={{ fontSize: "100px" }}>&#128048;</h6>
                  </div>
                  <div className="col">
                    <h6 style={{ fontSize: "100px" }}>&#128570;</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6 style={{ fontSize: "100px" }}>&#128054;</h6>
                  </div>
                  <div className="col">
                    <h6 style={{ fontSize: "100px" }}>&#128034;</h6>
                  </div>
                </div>
                <div>
                  <iframe
                    style={{ width: "100%" }}
                    id="iframe1"
                    name="myIframe"
                    // width="700"
                    height="400"
                    frameBorder="0"
                    srcDoc={`
                    <!DOCTYPE html>
                    <html lang="en">
                      <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Document</title>
                        <link
                          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                          rel="stylesheet"
                        />
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
                      </head>
                      <body>
                        <div className="container">
                          <h1 id="h11">Hello from Inside Iframe!</h1>
                          <p id="p11">This is some content inside the iframe.</p>
                        </div>
                        <div className="row">
                          <div className="col">
                            <label for=""><h6>Click me to see a 'Alert' message</h6></label><br />
                            <button id="btn1" class="btn btn-warning">Click me</button>
                            <hr />
                            <label for=""><h6>Click me to see a 'Alert' message</h6></label><br />
                            <button id="btn2" class="btn btn-danger">Click me</button>
                          </div>
                          <div className="col">
                          <label for=""><h6>&#127912;Select your favorite cartoon</h6></label>
                            <div class="form-check">
                              <input
                                id="check1"
                                type="checkbox"
                                class="form-check-input"
                                id="check1"
                                name="option1"
                                value="something"
                              />
                              <label class="form-check-label" for="check1">Jackie chan</label>
                            </div>
                            <div class="form-check">
                              <input
                                id="check2"
                                type="checkbox"
                                class="form-check-input"
                                id="check2"
                                name="option2"
                                value="something"
                              />
                              <label class="form-check-label" for="check2">Ben 10</label>
                            </div>
                            <div class="form-check">
                              <input id="check3" type="checkbox" className="form-check-input" />
                              <label class="form-check-label">Dragon booster</label>
                            </div>
                            
                          </div>
                        </div>
                        <script>
   
    var myButton = document.getElementById('btn1');
    var myButton2 = document.getElementById('btn2');

    
    myButton.addEventListener('click', function() {      
        alert('Hi friends, Have a nice day.');
    });

    myButton2.addEventListener('click', function() {      
        alert('Hi friends, Coding ia a fun things.');
    });
</script>
                      </body>

                    </html>`}
                  ></iframe>
                </div>
                <footer
                  id="footer2"
                  style={{ backgroundColor: "orange", height: 60 }}
                >
                  <p
                    style={{
                      fontSize: "30px",
                      fontFamily: "cursive",
                      textAlign: "center",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    Footer
                  </p>
                </footer>
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
                    " Explore the power of 'Scrolling mouse' in this Selenium
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
                    <li>scrollToElement()</li>
                    <li>perform()</li>
                    <li>getRect().y</li>
                    <li>scrollByAmount(0, deltaY)</li>
                    <li>inViewport()</li>
                    <li>
                      <pre>WheelInput.ScrollOrigin.fromElement()</pre>
                    </li>
                    <li>scrollFromOrigin()</li>
                    <li>switchTo().frame()</li>
                    <li>
                      <pre>scrollFromOrigin(scrollOrigin,0, 200)</pre>
                    </li>
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

export default Scrolling_mouse;
const styles = {
  one: {
    padding: "5px",
  },
};
