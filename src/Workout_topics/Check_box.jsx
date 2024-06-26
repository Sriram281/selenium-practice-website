import Header from "../Header";

import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import inputtext_box from "./image_for_answer/checkbox.png";
import { useEffect, useState } from "react";
import Toast from "../Toast";

import Eduspere_logo from "../Edusphere_logo";
const Check_box = () => {
  // const [student_count, setStudent_count] = useState();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("checkbox");

  const [first, setFirst] = useState();

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
                  Check box
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%219201&parId=58854C9B9741551E%2144874&o=OneUp"
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
                  Navigate to the page, Verify 'Finding nemo' checkbox is
                  selected ?.
                </li>
                <li>
                  Navigate to the page, Select 'Luca' checkbox and verify is
                  selected, Enabled, Displayed ?.
                </li>
                <li>
                  Navigate to the page, Select 'Elemental' checkbox and verify
                  is selected, Enabled, Displayed ?.
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <label htmlFor="title" style={styles.one}>
                  Which is your favorite Animated Movie🌟
                </label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Finding_Nemo"
                    name="option1"
                    value="something"
                    checked
                    onChange={(e) => {
                      setFirst(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="check1"
                    style={styles.one}
                  >
                    Finding Nemo
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Luca"
                    name="option2"
                    value="something"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="check2"
                    style={styles.one}
                  >
                    Luca
                  </label>
                </div>
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
                    disabled
                  />
                  <label className="form-check-label" style={styles.one}>
                    Elemental
                  </label>
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
                    " Explore the power of Check Box in this Selenium practice
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
                    <li>click()</li>
                    <li>isSelected()</li>
                    <li>isEnabled()</li>
                    <li>isDisplayed()</li>
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

export default Check_box;
const styles = {
  one: {
    padding: "5px",
  },
};
