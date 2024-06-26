import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import { VscReferences } from "react-icons/vsc";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import inputtext_box from "./image_for_Answer/Navigation.png";
import Toast from "../Toast";
import { useEffect, useState } from "react";
import Eduspere_logo from "../Edusphere_logo";
const Navigation = () => {
  var nav = useNavigate();
  const [firstname, setFirst_name] = useState();
  const [lastname, setLast_name] = useState();
  const [age, setAge] = useState();
  const [course, setCourse] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();

  const [select, setSelect] = useState();
  const [radio, setRadio] = useState();

  const location = useLocation();
  const storage = window.localStorage.getItem("studentID");
  const [heading, setHeading] = useState("Navigation");
  useEffect(() => {
    try {
      if (location.state.data) {
        const back_to_receive = location.state.data;

        setFirst_name(back_to_receive.first_name);
        setLast_name(back_to_receive.last_name);
        setAge(back_to_receive.age);
        setCourse(back_to_receive.course);
        setEmail(back_to_receive.email);
        setAddress(back_to_receive.address);
        setSelect(back_to_receive.select);
        setRadio(back_to_receive.radio);
      }
    } catch {}
  }, []);

  const list = {
    first_name: firstname,
    last_name: lastname,
    age: age,
    course: course,
    email: email,
    address: address,
    radio: radio,
    select: select,
  };

  const navigate_to_Form_list = () => {
    nav("/navigation_list", { state: { myData: list } });
  };
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
                  Navigation
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%2144810&parId=58854C9B9741551E%2144807&o=OneUp"
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
                "Enhance user journeys with Selenium Navigation. Seamlessly move
                between pages, submit forms, and ensure a smooth browsing
                experience. Elevate your web automation with powerful navigation
                capabilities."
              </p>
            </div>
          </div>
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
                  Write a Selenium script that performs the following steps:
                </h6>
                <li>Navigate to the sample form page.</li>

                <li>Fill out the form with user data.</li>
                <li>Submit the form.</li>

                <li>Navigate to a page where the entered data is displayed.</li>
                <li>Click the back button.</li>

                <li>
                  Verify if the entered data is retained in the form and you can
                  alter a data if you want.
                </li>
                <li>Submit the form again.</li>
                <li>Navigate forward to a confirmation page.</li>
                <li>Navigate back to the form page.</li>
                <li>Refresh the form page.</li>
                <li>Close the browser window.</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <h6>Enter your details :</h6>
                <div className="row">
                  <div className="col was-validated" style={styles.one}>
                    <label>
                      <h6>First name</h6>
                    </label>
                    <input
                      id="inputone"
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="first_name"
                      required
                      value={firstname || ""}
                      onChange={(e) => {
                        setFirst_name(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col was-validated" style={styles.one}>
                    <label>
                      <h6>Last name</h6>
                    </label>
                    <input
                      id="inputtwo"
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      name="last_name"
                      required
                      value={lastname || ""}
                      onChange={(e) => {
                        setLast_name(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col was-validated" style={styles.one}>
                    <label>
                      <h6>Enter your age</h6>
                    </label>
                    <input
                      id="age"
                      type="text"
                      className="form-control"
                      placeholder="Enter your age"
                      name="age"
                      required
                      value={age || ""}
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col was-validated" style={styles.one}>
                    <label>
                      <h6>Course</h6>
                    </label>
                    <input
                      id="course"
                      type="text"
                      className="form-control"
                      placeholder="Course"
                      name="course"
                      required
                      value={course || ""}
                      onChange={(e) => {
                        setCourse(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col was-validated" style={styles.one}>
                    <label>
                      <h6>Enter Email</h6>
                    </label>
                    <input
                      id="inputthree"
                      type="text"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      required
                      value={email || ""}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col was-validated" style={styles.one}>
                    <label>
                      <h6>Address</h6>
                    </label>
                    <input
                      id="inputfour"
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      name="address1"
                      required
                      value={address || ""}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {/* </div> */}
                <div className="row">
                  <div className="col was-validated" style={styles.one}>
                    <label htmlFor="sel1" className="form-label">
                      <h6>Select your favorite Animated Movie</h6>
                    </label>
                    {/* Jackie Chan Ben 10 Dragon Booster Danger House Gloriavin
                    Veedu Gloriavin Veedu */}
                    <select
                      className="form-select mt-1"
                      id="firstselect"
                      style={{ border: "1px solid grey" }}
                      value={select || ""}
                      onChange={(e) => {
                        setSelect(e.target.value);
                      }}
                    >
                      <option id="option1" disabled>
                        Animated Movie
                      </option>
                      <option id="option2" value={"Luca"}>
                        Luca
                      </option>
                      <option id="option3" value={"Finding Nemo"}>
                        Finding Nemo
                      </option>
                      <option id="option4" value={"A Bug's Life"}>
                        A Bug's Life
                      </option>
                      <option id="option5" value={"Inside Out"}>
                        Inside Out
                      </option>
                    </select>
                  </div>

                  <div className="col" style={styles.one}>
                    <label htmlFor="radio">
                      <h6>Select your favorite movie</h6>
                    </label>
                    {/* <div className="row"> */}
                    <div className="form-check col">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="radio1"
                        name="optradio"
                        value="The Shawshank Redemption"
                        onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                      />
                      <label className="form-check-label" htmlFor="radio1">
                        The Shawshank Redemption
                      </label>
                    </div>
                    <div className="form-check col">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="radio2"
                        name="optradio"
                        value="Forrest Gump"
                        onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                      />
                      <label className="form-check-label" htmlFor="radio2">
                        Forrest Gump
                      </label>
                    </div>
                    <div className="form-check col">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="radio3"
                        name="optradio"
                        value="Spiderman 3"
                        onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                      />
                      <label className="form-check-label" htmlFor="radio3">
                        Spiderman 3
                      </label>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
                <div className="form-check mb-3 was-validated">
                  <label className="form-check-label">
                    <input
                      id="inputseven"
                      className="form-check-input"
                      type="checkbox"
                      name="remember"
                      required
                    />
                    I agree to all{" "}
                    <a
                      id="terms"
                      style={{ color: "orangered" }}
                      href="https://www.termsandcondiitionssample.com/"
                    >
                      terms and conditions
                    </a>
                  </label>
                </div>
                <button
                  id="submit"
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => {
                    if (!firstname) {
                      alert("Enter your 'First name' please");
                    } else if (!lastname) {
                      alert("Enter your 'Last name' please");
                    } else if (!age) {
                      alert("Enter your 'Age' please");
                    } else if (!course) {
                      alert("Enter your 'Course' please");
                    } else if (!email) {
                      alert("Enter your 'Email' please");
                    } else if (!address) {
                      alert("Enter your 'Address' please");
                    } else if (!select) {
                      alert("Select your 'Favorite childhood cartoon' please");
                    } else if (!radio) {
                      alert("Select your 'Favorite movie' please");
                    } else {
                      navigate_to_Form_list();
                    }
                  }}
                >
                  Submit
                </button>
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
                    " Explore the power of 'Navigation' in this Selenium
                    practice mastering key techniques htmlFor seamless web
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
                    <li>findElement()</li>
                    <li>By.id()</li>
                    <li>By.name()</li>
                    <li>By.className()</li>
                    <li>By.tagName()</li>
                    <li>By.linkText()</li>
                    <li>By.partialLinkText()</li>
                    <li>By.cssSelector()</li>
                    <li>click()</li>
                    <li>refresh()</li>
                    <li>back()</li>
                    <li>forward()</li>
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

export default Navigation;
const styles = {
  one: {
    padding: "10px",
  },
};
