import Header from "../Header";

import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import inputtext_box from "./image_for_answer/inputtextbox.png";
import Toast from "../Toast";
import { useEffect, useState } from "react";

import Eduspere_logo from "../Edusphere_logo";
const Text_box = () => {
  // const [student_count, setStudent_count] = useState();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Input_text_box");
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
                  Input Text Box
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%219069&parId=58854C9B9741551E%2144874&o=OneUp"
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
                <li>
                  Locate the first input text box on the page and enter a
                  predefined text (e.g., "Sriram").
                </li>
                <li>Locate and get value from the first label tag </li>
                <li>Locate and get text from the second input text box.</li>
                <li>
                  Locate and clear the text from the third input text box.
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <div className="mb-3 mt-3">
                  <label htmlFor="email" id="label1">
                    Enter your full name:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                    name="Enter your full name"
                    onChange={(e) => {}}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd" id="label2">
                    Get text from this text box:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Get text"
                    placeholder="Get text"
                    name="Get text"
                    value="Jackie Chan, a childhood favorite cartoon! 🌟"
                    onChange={(e) => {}}
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" id="label3">
                    Clear the text:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Clear"
                    // placeholder="Clear the text"
                    name="Clear the text"
                    value="Clear the text first"
                    onChange={(e) => {}}
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" id="label4">
                    Edit field is disabled:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="disabled"
                    placeholder="edit field"
                    value="edit field"
                    name="email"
                    disabled
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" id="label5">
                    Readonly Text:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="readonly"
                    placeholder="Enter email"
                    name="email"
                    value="This text is readonly"
                    onChange={(e) => {}}
                    readOnly
                  />
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
                    " Explore the power of input text boxes in this Selenium
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
                    <li>clear()</li>
                    <li>sendKeys()</li>
                    <li>getText()</li>
                    <li>getAttribute()</li>
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

export default Text_box;
