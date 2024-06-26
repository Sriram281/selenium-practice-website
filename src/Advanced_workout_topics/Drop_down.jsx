import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Eduspere_logo from "../Edusphere_logo";
import Toast from "../Toast";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { useState } from "react";
import inputtext_box from "./image_for_Answer/drop_down.png";
const Drop_down = () => {
  var nav = useNavigate();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("dropdown");
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
                  Drop down
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%219212&parId=58854C9B9741551E%218696&o=OneUp"
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
                  Select "Interstellar" and "Captain Jack Sparrow" from the
                  first dropdown.
                </li>
                <li>Select "Finding Nemo" from the second dropdown.</li>
                <li>
                  Input "Loki" into the input field for the third dropdown.
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <h6>Select your favorite Movie</h6>

                <select
                  multiple
                  className="form-select"
                  id="select2"
                  name="sellist2"
                  style={{ border: "1px solid grey" }}
                >
                  <option id="option6">The Shawshank Redemption</option>
                  <option id="option7">Forrest Gump</option>
                  <option id="option8">Interstellar</option>
                  <option id="option9">Captain Jack Sparrow</option>
                  <option id="option10">spiderman 3</option>
                </select>
                <hr />

                <h6>Select your favorite Animated Movie</h6>

                <select
                  className="form-select mt-3"
                  id="firstselect"
                  style={{ border: "1px solid grey" }}
                >
                  <option id="option1" disabled>
                    Animated Movie
                  </option>
                  <option id="option2">Luca</option>
                  <option id="option3">Finding Nemo</option>
                  <option id="option4">A Bug's Life</option>
                  <option id="option5">Inside Out</option>
                </select>
                <hr />
                <h6>Select your favorite Web series</h6>

                <input
                  className="form-control"
                  list="datalistone"
                  name="browser"
                  id="dropdownThree"
                  style={{ border: "1px solid grey" }}
                />
                <datalist id="datalistone">
                  <option id="Thrones" value="The Game Of Thrones" />
                  <option value="Lord Of The Rings" />
                  <option value="Loki" />
                  <option value="Money Heist" />
                  <option value="Stranger Thinks" />
                </datalist>
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
                    " Explore the power of 'Dropdown' in this Selenium practice
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
                    <li>Select()</li>
                    <li>selectByVisibleText()</li>
                    <li>isSelected()</li>
                    <li>isEnabled()</li>
                    <li>isDisplayed()</li>
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

export default Drop_down;
const styles = {
  one: {
    padding: "5px",
  },
};
