import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import inputtext_box from "./image_for_Answer/Explicit_wait.png";
import Toast from "../Toast";
import { useState } from "react";
import Eduspere_logo from "../Edusphere_logo";
const Explicit_wait = () => {
  const [Fname, setFname] = useState();
  const [Lname, SetLname] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  var nav = useNavigate();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Explicit wait");
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
                  Explicit wait
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%219219&parId=58854C9B9741551E%218719&o=OneUp"
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
                  Uses an explicit wait to wait for the 'First name' input text
                  box to be present.
                </li>
                <li>
                  Uses an explicit wait to wait for the 'Last name' input text
                  box to be present.
                </li>
                <li>
                  Uses an explicit wait to wait for the 'Email' input text box
                  to be present.
                </li>
                <li>
                  Uses an explicit wait to wait for the 'Address' input text box
                  to be present.
                </li>
                <li>
                  Uses another explicit wait to wait for the submit button to be
                  clickable.
                </li>
                <li>Clicks the submit button</li>
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
                Explicit wait allows Selenium to wait for a certain condition to
                be met before proceeding. It provides more flexibility by
                specifying conditions such as element visibility or
                clickability.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <div className="row">
                  <div className="col" style={styles.one}>
                    <label>
                      <h6 id="first_name">First name</h6>
                    </label>
                    <input
                      id="inputone"
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="name"
                      value={Fname || ""}
                      onChange={(e) => {
                        setFname(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col" style={styles.one}>
                    <label>
                      <h6>Last name</h6>
                    </label>
                    <input
                      id="inputtwo"
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      name="name"
                      value={Lname || ""}
                      onChange={(e) => {
                        SetLname(e.target.value);
                      }}
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
                      value={email || ""}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
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
                      value={address || ""}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="p-2">
                  <button
                    id="btn1"
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      alert("Have a nice day Mr/Mis " + Fname + " " + Lname);
                      setFname("");
                      SetLname("");
                      setEmail("");
                      setAddress("");
                    }}
                  >
                    Submit
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
                    }}
                  >
                    " Explore the power of 'Explicit wait' in this Selenium
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
                    <li>WebElement</li>
                    <li>wait.until</li>
                    <li>
                      <pre>ExpectedConditions.visibilityOfElementLocated()</pre>
                    </li>
                    <li>xpath()</li>
                    <li>click()</li>
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

export default Explicit_wait;
const styles = {
  one: {
    padding: "5px",
  },
};
