import { useNavigate } from "react-router-dom";
import Header from "./Header";

import { useEffect, useState } from "react";
import { GiConqueror } from "react-icons/gi";
const Introduction = () => {
  const [isHovered, setIsHovered] = useState(false);
  var nav = useNavigate();

  const storage = window.localStorage.getItem("studentID");
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <>
      <Header />

      <div
        className="container-fluid"
        style={{
          backgroundColor: "rgba(68, 75, 255, 0.1)",
        }}
      >
        <div className="container p-4" style={{}}>
          <div className="container p-2 ">
            <div
              // className="col-sm-10"
              style={{
                // border: "1px solid green",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: 35,
                boxShadow:
                  "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <h5>What is Selenium ?</h5>
              <p style={styles.two}>
                Selenium is an open-source testing framework used for automating
                web applications. It provides a set of tools and libraries that
                allow testers and developers to automate web browser
                interactions across different platforms and browsers.
              </p>

              <h5>Why do we use Selenium ?</h5>
              <h6>Automated Testing:</h6>
              <p style={styles.two}>
                Selenium is primarily used for automated testing of web
                applications. It allows testers to write scripts that simulate
                user interactions with web elements such as clicking buttons,
                entering text, and navigating through pages. This automation
                helps in executing repetitive test cases quickly and
                efficiently.
              </p>
              <h6>Cross-browser Testing: </h6>
              <p style={styles.two}>
                Selenium supports testing on multiple web browsers such as
                Chrome, Firefox, Safari, Edge, and Opera. This enables
                developers to ensure that their web applications work
                consistently across different browsers and browser versions.
              </p>
              <h6>Cross-platform Testing:</h6>
              <p style={styles.two}>
                Selenium supports testing on various operating systems like
                Windows, macOS, and Linux. This allows developers to verify the
                functionality of their web applications across different
                platforms.
              </p>
              <h6>Integration with Testing Frameworks:</h6>
              <p style={styles.two}>
                Selenium can be integrated with popular testing frameworks like
                JUnit, TestNG, and NUnit, enabling testers to write and execute
                tests within their preferred testing environment.
              </p>
              <h6>Parallel Testing:</h6>
              <p style={styles.two}>
                Selenium Grid, a part of the Selenium suite, enables parallel
                execution of tests across multiple browsers and platforms
                simultaneously. This reduces the overall test execution time and
                improves efficiency.
              </p>
              <h6>
                Continuous Integration (CI) and Continuous Deployment (CD):
              </h6>
              <p style={styles.two}>
                Selenium can be integrated into CI/CD pipelines to automate the
                testing process as part of the development workflow. This helps
                in identifying issues early in the development cycle and ensures
                the quality of the application before deployment.
              </p>
              <h6>Cost-effective Testing:</h6>
              <p style={styles.two}>
                Since Selenium is open-source, it is freely available for use.
                This makes it a cost-effective solution for organizations
                compared to proprietary testing tools.
              </p>
              <hr />
              <h5>Components of Selenium:</h5>
              <p style={styles.two}>Selenium consists of several components:</p>
              <br />
              <ol>
                <li style={styles.two}>Selenium WebDriver:</li>

                <p style={styles.two}>
                  A tool for automating web browser interactions. It provides a
                  programming interface for writing test scripts in various
                  programming languages such as Java, Python, C#, etc.
                </p>
                <li style={styles.two}>Selenium IDE: </li>
                <p style={styles.two}>
                  A record-and-playback tool for creating simple automation
                  scripts directly within the browser. It is available as a
                  browser extension for Chrome and Firefox.
                </p>
                <li style={styles.two}>Selenium Grid:</li>
                <p style={styles.two}>
                  A distributed testing framework that allows parallel execution
                  of tests across multiple browsers and platforms.
                </p>
              </ol>
              <br />
              <h5>Supported Programming Languages:</h5>
              <p style={styles.two}>
                Selenium WebDriver supports multiple programming languages,
                including:
              </p>
              <ul>
                <li style={styles.two}>Java</li>
                <li style={styles.two}>Python</li>
                <li style={styles.two}>C#</li>
                <li style={styles.two}>Ruby</li>
                <li style={styles.two}>JavaScript (Node.js)</li>
              </ul>
              <span
                style={{ float: "right", cursor: "pointer" }}
                onClick={() => {
                  // setIsHovered(true);

                  if (isHovered) {
                    setIsHovered(false);
                  }
                  if (!isHovered) {
                    setIsHovered(true);
                  }
                }}
              >
                <GiConqueror size={20} color="black" />
              </span>
              {isHovered && (
                <small
                  style={{
                    float: "right",
                    fontFamily: "sans-serif",
                    border: "1px  #000046",
                    borderRadius: "10px",
                    backgroundColor: "#000046",
                    color: "white",
                    marginTop: -5,
                    marginRight: 5,
                    padding: 5,
                    fontSize: 13,
                  }}
                  className="message "
                >
                  Build by: SRIRAM
                </small>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
const styles = {
  one: {
    padding: "5px",
  },
  two: {
    fontFamily: "sans-serif",
    fontWeight: 400,
    color: "rgb(0, 0, 60)",
    // backgroundColor: "rgba(68, 75, 255, 0.1)",
  },
};
