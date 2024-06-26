import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import Toast from "../Toast";
import Eduspere_logo from "../Edusphere_logo";
import { useState } from "react";
import inputtext_box from "./image_for_Answer/frame.png";
const Frame = () => {
  var nav = useNavigate();

  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Frame");
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
                  Frame
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%2144933&parId=58854C9B9741551E%2144925&o=OneUp"
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
                  Write a Selenium script in Java to perform the following
                  tasks:
                </h6>
                <li>Switch to the parent iframe.</li>
                <li>Enter the Name "Sriram" into the Name field.</li>
                <li>
                  Enter the Address "p3/456,New york,America" into the Address
                  field.
                </li>
                <li>Click the radio button.</li>

                <li>Switch to the child iframe.</li>
                <li>
                  Enter the favorite cartoon "Jackie chan" into the Cartoon
                  field.
                </li>
                <li>
                  Enter the favorite movie "Kung fu panda" into the Movie field.
                </li>
                <li>Click the radio button.</li>
                <li>Switch back to the parent iframe.</li>
                <li>Enter the Name "Hari" into the Name field.</li>
                <li>Switch back to the main content of the page</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                {/*  */}
                {/*  */}
                {/*  */}

                <iframe
                  style={{
                    width: "100%",
                    height: "63vh",
                  }}
                  title="First IFrame"
                  id="iframe_one"
                  srcDoc={`<!DOCTYPE html>
                  <html lang="en">
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
                  </head>
                  <body>
                  <div class="container-fluid">
                  <h4>Enter your details</h4>
                  <div class="mb-3 mt-3">
                  <label for="email">Name:</label>
                  <input type="name" class="form-control" id="text_one" placeholder="Enter Name" name="name">
                </div>
                <div class="mb-3">
                  <label for="pwd">Address:</label>
                  <input type="address" class="form-control" id="text_two" placeholder="Enter Address" name="name">
                </div>
                <div class="mb-3">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="check0" name="option1" value="something" >
                <label class="form-check-label">Option 1</label>
              </div>
                </div>
                </div>
                 




                <div class="container-fluid" >
                <iframe title="Second IFrame"  id="iframe_two" style="width:100%;height:50vh;" srcDoc='<!DOCTYPE html>
                <html lang="en">
                <head>
                  <title>Bootstrap Example</title>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
                </head>
                <body >
                
                <div class="container-fluid" >
                <h4>Enter your favorite Cartoon and Movie</h4>
                <div class="mb-3 mt-3" >
                <label for="email">Enter your favorite Cartoon:</label>
                <input type="email" class="form-control" id="text_three" placeholder="Cartoon" name="name">
              </div>
              <div class="mb-3 mt-3" >
                <label for="email">Enter your favorite Movie:</label>
                <input type="email" class="form-control" id="text_four" placeholder="Movie" name="name">
              </div>
              <div class="mb-3">
              <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" >
              <label class="form-check-label">Option 2</label>
            </div>
                 
                </div>
              </div>


                </body>
               
                </html>' />
                </div>
                
                  </body>
                  
                </html>`}
                />

                {/* <iframe title="Second IFrame" srcDoc="<h2>Second IFrame</h2>" /> */}
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
                    " Explore the power of 'Frame' in this Selenium practice
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
                    <li>switchTo().frame()</li>
                    <li>click()</li>
                    <li>sendKeys()</li>
                    <li>parentFrame()</li>
                    <li>defaultContent()</li>
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

export default Frame;
const styles = {
  one: {
    padding: "5px",
  },
};
