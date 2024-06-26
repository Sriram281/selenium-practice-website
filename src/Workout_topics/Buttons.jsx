import { useNavigate } from "react-router-dom";
import Header from "../Header";

import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import inputtext_box from "./image_for_answer/button.png";
import Toast from "../Toast";
import { useEffect, useState } from "react";

import edusphere from "./image_for_answer/edusphere_image.jpg";
const Buttons = () => {
  var nav = useNavigate();
  // const [student_count, setStudent_count] = useState();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Buttons");
  // useEffect(() => {
  //   countlist();
  // }, []);

  // const countlist = (c) => {
  //   axios
  //     .get("http://localhost:8080/countlist")
  //     .then((res) => {
  //       res.data.map((m) => {
  //         m.listofTopics.map((n) => {
  //           if (storage === m.userid && heading === n.title_name) {
  //             setStudent_count(m.count);
  //           }
  //         });
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   // setStudent_count(c);
  // };
  return (
    <>
      <Header />
      <div className="container p-2">
        <div className="row">
          <div className="col-sm-7">
            <div className="row">
              <div className="col">
                <img
                  src={edusphere}
                  alt="Edusphere solution"
                  width={30}
                  height={30}
                />
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: 400,
                    fontSize: 15,
                    color: "rgb(0, 0, 60)",
                    // backgroundColor: "rgba(68, 75, 255, 0.1)",
                  }}
                >
                  Edusphere solution
                </p>
              </div>
              <div className="col">
                <p
                  style={{
                    fontFamily: "cursive",
                    fontWeight: "600",
                    fontSize: "30px",
                    color: "rgb(0, 86, 125)",
                  }}
                >
                  Button Handling
                </p>
              </div>
            </div>

            {/* <p
              style={{
                fontFamily: "cursive",
                fontWeight: "600",
                fontSize: "30px",
                color: "rgb(0, 86, 125)",
              }}
            >
              Buttons
            </p> */}
          </div>

          <div className="d-flex justify-content-around  col-sm-5">
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%219622&parId=58854C9B9741551E%2144874&o=OneUp"
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
                  Navigate to the page, click the "Go back" button, and verify
                  that it redirects to the login page.
                </li>
                <li>
                  Navigate to the page, click the "Go to Home page" button, and
                  verify that it redirects to the login page.
                </li>
                <li>
                  Navigate to the page, click the "Alert" button, and verify
                  that it receive a alert message.
                </li>
              </ol>
            </div>
          </div>
          <div className="container p-2 ">
            <div
              // className="col-sm-10"
              style={{
                // border: "1px solid green",
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
                In Selenium, buttons are HTML elements that users can interact
                with by clicking, submitting, or performing other actions.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <div style={styles.one}>
                  <label htmlFor="lab" style={{ marginBottom: 10 }}>
                    Click to go back:
                  </label>

                  <br />
                  <button
                    type="button"
                    id="go_back"
                    className="btn btn-success"
                    onClick={() => {
                      nav("/Header_body");
                    }}
                  >
                    Go back
                  </button>
                </div>

                <br />
                <div style={styles.one}>
                  <label htmlFor="lab" style={{ marginBottom: 10 }}>
                    Click to go 'Home' page:
                  </label>
                  <br />
                  <button
                    id="go_to_home"
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      nav("/Title_alter");
                    }}
                  >
                    Go to Home page
                  </button>
                </div>

                <br />
                <div style={styles.one}>
                  <label htmlFor="lab" style={{ marginBottom: 10 }}>
                    Click to see 'Alert' message:
                  </label>
                  <br />
                  <button
                    id="alert"
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      //   const userInput = window.prompt(
                      //     "Enter a value:",
                      //     "default value"
                      //   );
                      alert("Hi, Hava a nice day");
                    }}
                  >
                    Alert
                  </button>
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
                      fontFamily: "sans-serif",
                    }}
                  >
                    " Explore the power of Buttons in this Selenium practice
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

export default Buttons;
const styles = {
  one: {
    padding: "5px",
  },
};
