import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { useState } from "react";
import Toast from "../Toast";
import inputtext_box from "./image_for_Answer/testng.png";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import Eduspere_logo from "../Edusphere_logo";
const Testng = () => {
  const [result, setResult] = useState("");
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("TestNG");
  const handleClick = () => {
    // Some logic on button click
    setResult("Expected Result");
  };
  var nav = useNavigate();

  const testng_annotatoin = [
    {
      no: 1,
      explanation:
        "The annotated method will be run only once before all the tests in this suite have run.",
      annotation: "@BeforeSuite",
    },
    {
      no: 2,
      explanation:
        "The annotated method will be run only once after all the tests in this suite have run.",
      annotation: "@AfterSuite",
    },
    {
      no: 3,
      explanation:
        "The annotated method will be run only once before the first test method in the current className is invoked.",
      annotation: "@BeforeClass",
    },
    {
      no: 4,
      explanation:
        "The annotated method will be run only once after all the test methods in the current className have run.",
      annotation: "@AfterClass",
    },
    {
      no: 5,
      explanation:
        "The annotated method will be run before any test method belonging to the classes inside the <test> tag is run.",
      annotation: "@BeforeTest",
    },
    {
      no: 6,
      explanation:
        "The annotated method will be run after all the test methods belonging to the classes inside the <test> tag have run.",
      annotation: "@AfterTest",
    },
    {
      no: 7,
      explanation:
        "The list of groups that this configuration method will run before. This method is guaranteed to run shortly before the first test method that belongs to any of these groups is invoked.",
      annotation: "@BeforeGroups",
    },
    {
      no: 8,
      explanation:
        "The list of groups that this configuration method will run after. This method is guaranteed to run shortly after the last test method that belongs to any of these groups is invoked.",
      annotation: "@AfterGroups",
    },
    {
      no: 9,
      explanation: "The annotated method will be run before each test method.",
      annotation: "@BeforeMethod",
    },
    {
      no: 10,
      explanation: "The annotated method will be run after each test method.",
      annotation: "@AfterMethod",
    },
    {
      no: 11,
      explanation:
        "Marks a method as supplying data for a test method. The annotated method must return an Object[ ][ ] where each Object[ ] can be assigned the parameter list of the test method. The @Test method that wants to receive data from this DataProvider needs to use a dataProvider name equals to the name of this annotation.",
      annotation: "DataProvider",
    },
    {
      no: 12,
      explanation:
        "Marks a method as a factory that returns objects that will be used by TestNG as Test classes. The method must return Object[ ].",
      annotation: "@Factory",
    },
    {
      no: 13,
      explanation: "Defines listeners on a test className.",
      annotation: "@Listeners",
    },
    {
      no: 14,
      explanation: "Describes how to pass parameters to a @Test method.",
      annotation: "@Parameters",
    },
    {
      no: 15,
      explanation: "Marks a className or a method as part of the test.",
      annotation: "@Test",
    },
  ];

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
                  TestNG
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%2146144&parId=58854C9B9741551E%2145992&o=OneUp"
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

                <li>
                  Locate the button with the ID 'your-button-id' and simulate a
                  click.
                </li>
                <li>
                  Capture and assert the text content of the element with the ID
                  'result-id' after the button click.
                </li>
                <li>
                  Implement a method to wait for the button to be clickable
                  before performing the click action.
                </li>
                <li>Close the browser.</li>
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
                TestNG is a robust testing framework for Selenium, enhancing
                test organization, parallel execution, and reporting. With
                annotations and flexible configurations, it offers comprehensive
                test suite control, making Selenium test automation more
                efficient and scalable.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                {testng_annotatoin.map((m, index) => {
                  return (
                    <div key={index + 1}>
                      <div
                        style={{
                          textAlign: "center",
                          border: "1px solid orange",
                          borderRadius: "100px",
                          width: 40,
                          padding: 5,
                          borderWidth: 2,
                          backgroundColor: "orange",
                          color: "white",
                        }}
                      >
                        {/* <span
                          style={{
                            textAlign: "center",
                            border: "1px solid orange",
                            borderRadius: "100px",
                            width: 100,
                            padding: 5,
                            borderWidth: 2,
                            backgroundColor: "orange",
                            color: "white",
                          }}
                        > */}
                        {m.no}
                        {/* </span> */}
                      </div>
                      <small>{m.explanation}</small>
                      <h6>{m.annotation}</h6>
                      <hr />
                    </div>
                  );
                })}
                <div>
                  <button
                    id="your-button-id"
                    className="btn btn-danger"
                    onClick={handleClick}
                  >
                    Click me
                  </button>
                  <div id="result-id">{result}</div>
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
                    " Explore the power of 'TestNG' in this Selenium practice
                    mastering key techniques for seamless web automation and
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
                    <li>click()</li>

                    <li>close()</li>
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

export default Testng;
const styles = {
  one: {
    padding: "5px",
  },
};
