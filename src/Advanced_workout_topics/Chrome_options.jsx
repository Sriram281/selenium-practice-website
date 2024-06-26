import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { VscReferences } from "react-icons/vsc";
import { FaLightbulb, FaPersonCircleQuestion } from "react-icons/fa6";

import Eduspere_logo from "../Edusphere_logo";

import { useState } from "react";

const Chrome_options = () => {
  var nav = useNavigate();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Remote Origin Allowance");
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
                  Remote Origin Allowance
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
                {/* <Toast
                  // countfunction={countlist}
                  // count={student_count}
                  heading={heading}
                  image_for_inputtextbox={inputtext_box}
                /> */}
                <FaLightbulb size={25} color="hsl(0, 40%, 70%)" />
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%2144343&parId=58854C9B9741551E%2144341&o=OneUp"
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
              <FaPersonCircleQuestion size={25} color="hsl(0, 40%, 70%)" />
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
                Explore Selenium's Remote Origin Allowance. Learn to tailor
                browser settings, allowing seamless cross-origin interactions
                for robust, flexible testing.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <h6>option.addArguments("--remote-allow-origins=*")</h6>
                <p>
                  This Chrome option specifies the origins (domains) that are
                  allowed to make cross-origin requests to the browser. The
                  wildcard <h6>* in --remote-allow-origins=*</h6> means that all
                  origins are allowed.
                </p>

                <h6>Why it's used</h6>
                <ol>
                  <li>
                    When running Selenium tests on a local machine, the browser
                    typically doesn't enforce strict cross-origin policies.
                    However, in a remote execution environment, such as a
                    Selenium Grid or a cloud-based testing platform, browsers
                    may have more restrictive settings for security reasons.
                  </li>

                  <li>
                    By using <h6>--remote-allow-origins=*</h6>, you are
                    essentially telling the Chrome browser to relax its
                    cross-origin policies and allow requests from any origin
                    when running in a remote environment. This can be necessary
                    for proper interaction between your Selenium scripts and the
                    browser during testing.
                  </li>
                </ol>
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
                    " Explore the power of 'Remote Origin Allowance' in this
                    Selenium practice mastering key techniques for seamless web
                    automation and testing "
                  </p>
                </header>
                <h6>What you would have to use :</h6>
                <div className="list">
                  <ol
                    style={{
                      fontFamily: "revert",
                      color: "rgb(0, 0, 50)",
                      fontSize: "16px",
                    }}
                  >
                    <li>ChromeOptions()</li>
                    <li>option.addArguments("--remote-allow-origins=*")</li>
                    <li>ChromeDriver(option)</li>
                    <li>driver.get()</li>
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

export default Chrome_options;
const styles = {
  one: {
    padding: "10px",
  },
};
