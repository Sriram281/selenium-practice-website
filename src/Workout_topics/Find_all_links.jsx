import { useNavigate } from "react-router-dom";
import Header from "../Header";

import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import inputtext_box from "./image_for_answer/find_all_links.png";
import { useEffect, useState } from "react";

import Toast from "../Toast";

import Eduspere_logo from "../Edusphere_logo";
const Find_all_links = () => {
  var nav = useNavigate();
  // const [student_count, setStudent_count] = useState();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Find_all_links");
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
  //             console.log("Text box : " + m.count);
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
                  Find all links
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%219288&parId=58854C9B9741551E%219275&o=OneUp"
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
                <li>Use a loop to iterate through all the links.</li>
                <li>
                  Inside the loop, click on each link and capture the title of
                  the resulting page using WebDriver methods.
                </li>
                <li>Print the title after clicking each link.</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <h5>Colored Navbars</h5>
                <nav
                  className="navbar navbar-expand-sm bg-secondary navbar-light"
                  id="nav_one"
                >
                  <div className="container-fluid">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link active text-white"
                          href="https://www.bookchor.com/"
                        >
                          Active-1
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white"
                          href="https://www.bookchor.com/"
                        >
                          Link-1
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white"
                          href="https://www.bookchor.com/"
                        >
                          Link-2
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white"
                          href="https://www.bookchor.com/"
                        >
                          Link-3
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white"
                          href="https://www.bookchor.com/"
                        >
                          Link-4
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled text-white"
                          href="https://www.bookchor.com/"
                        >
                          Disabled-1
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <br />
                {/*  */}

                <nav
                  className="navbar navbar-expand-sm bg-danger navbar-light"
                  id="nav_two"
                >
                  <div className="container-fluid">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link active text-white"
                          href="https://www.bookchor.com/"
                        >
                          Active-2
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white"
                          href="https://www.bookchor.com/"
                        >
                          Link-5
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white"
                          href="https://www.bookchor.com/"
                        >
                          Link-6
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white"
                          href="https://www.bookchor.com/"
                        >
                          Link-7
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white"
                          href="https://www.bookchor.com/"
                        >
                          Link-8
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled text-white"
                          href="https://www.bookchor.com/"
                        >
                          Disabled-2
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <br />
                {/*  */}
                <nav
                  className="navbar navbar-expand-sm bg-info navbar-light"
                  id="nav_three"
                >
                  <div className="container-fluid">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link active text-white"
                          href="https://www.bookchor.com/"
                        >
                          Active-3
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white"
                          href="https://www.bookchor.com/"
                        >
                          Link-9
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white"
                          href="https://www.bookchor.com/"
                        >
                          Link-10
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white"
                          href="https://www.bookchor.com/"
                        >
                          Link-11
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white"
                          href="https://www.bookchor.com/"
                        >
                          Link-12
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled text-white"
                          href="https://www.bookchor.com/"
                        >
                          Disabled-3
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
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
                    " Explore the power of links in this Selenium practice
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
                    <li>List and WebElement</li>
                    <li>findElements()</li>
                    <li>xpath()</li>
                    <li>size()</li>
                    <li>get().getText()</li>
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

export default Find_all_links;
const styles = {
  one: {
    padding: "5px",
  },
};
