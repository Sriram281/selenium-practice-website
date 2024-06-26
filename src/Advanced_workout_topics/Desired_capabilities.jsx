import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { VscReferences } from "react-icons/vsc";
import { FaLightbulb, FaPersonCircleQuestion } from "react-icons/fa6";
import { useState } from "react";
import Eduspere_logo from "../Edusphere_logo";

const Desired_Capabilities = () => {
  var nav = useNavigate();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Desired Capabilities");
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
                  Desired Capabilities
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%2144607&parId=58854C9B9741551E%2144581&o=OneUp"
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
                Selenium Desired Capabilities. Learn to fine-tune browser
                behavior, gaining advanced customization for optimal control in
                automated testing workflows.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <h6>options.addArguments("incognito");</h6>
                <ol>
                  <li>
                    <h6>Explanation: </h6> This adds the argument to launch the
                    Chrome browser in incognito (private browsing) mode.
                  </li>
                  <li>
                    <h6>Use Case: </h6> Useful for testing scenarios where you
                    want a clean session without any stored cookies or browsing
                    history.
                  </li>
                </ol>
                <hr />
                <h6>options.addArguments("--disable-extensions");</h6>
                <ol>
                  <li>
                    <h6>Explanation: </h6>Disables browser extensions during the
                    WebDriver session.
                  </li>
                  <li>
                    <h6>Use Case: </h6> Can be used to ensure that browser
                    extensions do not interfere with automated tests.
                  </li>
                </ol>
                <hr />

                <h6>options.addArguments("test-type");</h6>
                <ol>
                  <li>
                    <h6>Explanation: </h6> This argument is an old Chrome flag
                    that used to be recommended for WebDriver. However, as of
                    recent Chrome versions, it is considered obsolete and may
                    not have any significant effect.
                  </li>
                  <li>
                    <h6>Use Case: </h6> Historically recommended for resolving
                    certain WebDriver issues, but not commonly used in modern
                    WebDriver setups.
                  </li>
                </ol>
                <hr />
                <h6>options.addArguments("--disable-web-security");</h6>
                <ol>
                  <li>
                    <h6>Explanation: </h6> Disables web security features, such
                    as the same-origin policy. This allows running tests without
                    restrictions related to cross-origin requests.
                  </li>
                  <li>
                    <h6>Use Case: </h6> Useful when testing scenarios involving
                    cross-origin requests, though be cautious as it can
                    introduce security risks.
                  </li>
                </ol>
                <hr />

                <h6>
                  options.addArguments("--allow-running-insecure-content");
                </h6>
                <ol>
                  <li>
                    <h6>Explanation: </h6>Allows running content that is
                    considered insecure, such as mixed content (HTTP content on
                    an HTTPS page).
                  </li>
                  <li>
                    <h6>Use Case: </h6> Useful for testing websites that include
                    both secure (HTTPS) and insecure (HTTP) content.
                  </li>
                </ol>

                <hr />
                <h6>cap.setCapability(ChromeOptions.CAPABILITY, options);</h6>
                <ol>
                  <li>
                    <h6>Explanation: </h6> Sets the ChromeOptions as a
                    capability to be used when initializing the ChromeDriver.
                  </li>
                  <li>
                    <h6>Use Case: </h6>Required for integrating ChromeOptions
                    with DesiredCapabilities in Selenium.
                  </li>
                </ol>

                <hr />
                <h6>options.merge(cap);</h6>
                <ol>
                  <li>
                    <h6>Explanation: </h6>Merges additional capabilities with
                    the existing ChromeOptions.
                  </li>
                  <li>
                    <h6>Use Case: </h6> Useful when combining ChromeOptions with
                    other desired capabilities to customize the WebDriver setup
                    further.
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
                    " Explore the power of 'Chrome Options and Remote Origin
                    Allowance' in this Selenium practice mastering key
                    techniques for seamless web automation and testing "
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
                    <li>DesiredCapabilities()</li>
                    <li>ChromeOptions()</li>
                    <li>options.setAcceptInsecureCerts(true)</li>
                    <li>options.merge(cap)</li>
                    <li>ptions.addArguments("start-maximized");</li>
                    <li>options.addArguments("incognito");</li>
                    <li>
                      <pre>options.addArguments("--disable-extensions");</pre>
                    </li>
                    <li>options.addArguments("test-type");</li>
                    <li>
                      <pre>options.addArguments("--disable-web-security");</pre>
                    </li>

                    <li>
                      <pre>
                        options.addArguments("--allow-running-insecure-content");
                      </pre>
                    </li>
                    <li>
                      <pre>
                        cap.setCapability(ChromeOptions.CAPABILITY, options);
                      </pre>
                    </li>
                    <li>options.merge(cap);</li>
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

export default Desired_Capabilities;
const styles = {
  one: {
    padding: "10px",
  },
};
