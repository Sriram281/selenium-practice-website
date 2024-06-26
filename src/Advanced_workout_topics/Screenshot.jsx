import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Toast from "../Toast";
import inputtext_box from "./image_for_Answer/screenshot.png";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import Eduspere_logo from "../Edusphere_logo";
import { useState } from "react";

const Screenshot = () => {
  var nav = useNavigate();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Screenshot");
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
                  Screenshot
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&id=58854C9B9741551E%2145907&cid=58854C9B9741551E"
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
                  Write a Java using Selenium that accomplishes the following:
                </h6>

                <li>Capture a screenshot of the entire page.</li>
                <li>
                  Identify a specific element on the page (e.g., a h1 tags, a
                  div, an image, or any other element) and capture a screenshot
                  of only that element.
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
                Taking screenshots using Selenium is a valuable feature for
                website testing, monitoring, and debugging. Selenium provides a
                way to capture screenshots of the current state of a web page
                during test execution.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card" id="screenshot-element">
                {/* <div className="container"> */}
                <div className="row">
                  <div className="col sm-6" id="img_div">
                    <h6 id="heading1">Two Crowned Crane</h6>
                    <img
                      src="https://images.pexels.com/photos/1131454/pexels-photo-1131454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="birds"
                      width="100%"
                      height="100%"
                      id="img1"
                    />
                  </div>
                  <div className="col sm-6" id="img_2">
                    <h6 id="heading2">Zebra</h6>
                    <img
                      src="https://images.pexels.com/photos/4005183/pexels-photo-4005183.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="birds"
                      width="100%"
                      height="100%"
                      id="img2"
                    />
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    marginTop: 50,
                    marginBottom: 25,
                  }}
                >
                  <div className="col sm-6" id="img_3">
                    <h6 id="heading3">Eagle Near Man</h6>
                    <img
                      src="https://images.pexels.com/photos/3114956/pexels-photo-3114956.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="birds"
                      width="100%"
                      height="100%"
                      id="img3"
                    />
                  </div>
                  <div className="col sm-6" id="img_4">
                    <h6 id="heading4">Penguins</h6>
                    <img
                      src="https://images.pexels.com/photos/689784/pexels-photo-689784.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="birds"
                      width="100%"
                      height="100%"
                      id="img4"
                    />
                  </div>
                </div>
                {/* </div> */}
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
                    " Explore the power of 'Screenshot' in this Selenium
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
                    <li>getScreenshotAs(OutputType.FILE)()</li>
                    <li>(TakesScreenshot)driver</li>
                    <li>File</li>
                    <li>FileUtils.copyFile(scrFile, new File())</li>
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

export default Screenshot;
const styles = {
  one: {
    padding: "5px",
  },
};
