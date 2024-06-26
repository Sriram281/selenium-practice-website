import "./login.css";

import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate();
  const storage = window.localStorage.getItem("studentID");

  const hint_button = [
    {
      primary_key: 1,
      userid: "user01",
      date: 10 / 1 / 24,
      count: 2,
    },
  ];

  const userdetails = [
    {
      student_id: "student01",
      name: "hari",
      email: "student@gmail.com",
      password: 1234567890,
    },
    // {
    //   student_id: "student02",
    //   name: "rajshekar",
    //   email: "rajshekar@gmail.com",
    //   password: 1234,
    // },
    // {
    //   student_id: "student03",
    //   name: "sriram",
    //   email: "sriram@gmail.com",
    //   password: 1209,
    // },
  ];

  useEffect(() => {
    if (storage) {
      nav("/Title_alter");
    } else if (!storage) {
      nav("/");
    }
  }, []);

  const check = () => {
    if (!email) {
      alert("Email should not be empty");
    }
    if (!password) {
      alert("Password should not be empty");
    }
  };

  const one = () => {
    {
      console.log("works");
      userdetails &&
        userdetails.map((m) => {
          if (m.email === email && m.password == password) {
            window.localStorage.setItem("studentID", m.student_id);
            // alert("Login successful");
            nav("/Title_alter");
            setPassword("");
            setEmail("");
          } else {
            alert("something went wrong");
            setPassword("");
            setEmail("");
          }
        });
    }
  };
  return (
    <>
      <div
        className="image mb-1"
        style={{ backgroundColor: "rgba(80, 80, 80, 0.1)" }}
      >
        <div
          className="container "
          id="continer_head"
          style={{ height: "80vh" }}
        >
          <div
            style={{
              // border: "2px solid red",
              padding: "30px",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}
            id="div2"
          >
            <div
              className="element-card"
              id="card"
              // style={{ backgroundColor: "rgba(0, 133, 127, 0.1)" }}
            >
              <div className="header" id="header">
                <h1
                  style={{
                    fontSize: 30,
                    fontFamily: "cursive",
                    fontWeight: 1000,
                    padding: "10px",
                  }}
                >
                  Login
                </h1>
              </div>
              <div className="col" id="content">
                <div
                  className="row"
                  id="container"
                  style={{ paddingBottom: "10px" }}
                >
                  <label
                    style={{ padding: "10px 10px", fontFamily: "sans-serif" }}
                    htmlFor="Enter email"
                  >
                    Enter email :
                  </label>
                  <br />
                  <input
                    className="input1"
                    type="text"
                    id="email"
                    placeholder="Your-email@gmail.com"
                    value={email || ""}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div
                  className="row"
                  style={
                    {
                      // padding: "0px 20px"
                    }
                  }
                >
                  <label
                    style={{ padding: "10px 10px", fontFamily: "sans-serif" }}
                    htmlFor="Enter your phone number"
                  >
                    Enter password :
                  </label>
                  <br />
                  <input
                    className="input1"
                    type="text"
                    id="password"
                    placeholder="Your phone number"
                    value={password || ""}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div
                  className="row"
                  style={{ padding: "30px 0px", cursor: "pointer" }}
                >
                  <button
                    className="btn1"
                    type="btn"
                    id="submit"
                    onClick={() => {
                      check();
                      // one();
                      // if (email && password) {
                      // var value = { email: email, phone_number: password };
                      // axios
                      //   .post("http://localhost:8080/log", value)
                      //   .then((res) => {
                      //     console.log(res.data);
                      //     var k = "";
                      //     k = `${res.data}`;
                      //     var sp = k.split(",");
                      //     var userid = sp[0];
                      //     window.localStorage.setItem("studentID", sp[0]);
                      //     var phone_number = sp[1];
                      //     var emailid = sp[2];
                      //     if (emailid == email && phone_number == password) {
                      //       nav("/Title_alter");
                      //     } else {
                      //       alert(
                      //         "Something went 'wrong' please login again"
                      //       );
                      //     }
                      //   });
                      userdetails.map((m) => {
                        if (m.email == email && m.password == password) {
                          window.localStorage.setItem(
                            "studentID",
                            m.student_id
                          );
                          nav("/Title_alter");
                          setPassword("");
                          setEmail("");
                        } else {
                          setPassword("");
                          setEmail("");
                          alert("Something went 'wrong' please login again");
                        }
                      });
                      // }
                      // {
                      //   userdetails &&
                      //     userdetails.map((m) => {
                      //       if (m.email === email && m.password == password) {
                      //         window.localStorage.setItem(
                      //           "studentID",
                      //           m.student_id
                      //         );
                      //         alert("Login successful");
                      //         nav("/Title_alter");
                      //         setPassword("");
                      //         setEmail("");
                      //       } else {
                      //         setPassword("");
                      //         setEmail("");
                      //       }
                      //     });
                      // }
                      // ("student002","raj@gmail.com","9345985674"),
                    }}
                  >
                    Log In
                  </button>
                </div>

                <div id="footer">
                  <div className="icons" id="f1">
                    <span className="unique_icon">
                      <FaFacebookF color="white" size={25} />
                    </span>
                  </div>
                  <div className="icons" id="f2">
                    <span className="unique_icon">
                      <FaTwitter color="white" size={25} />
                    </span>
                  </div>
                  <div className="icons" id="f3">
                    <span className="unique_icon">
                      <IoLogoGoogle color="white" size={25} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <div className=""> */}
          <div id="answer">
            <div
              className="row p-2 m-3"
              style={{
                // border: "2px solid orange",
                backgroundColor: "rgba(60, 60, 10, 0.1)",
                borderRadius: "25px",
              }}
            >
              <div className="col">
                <p style={{ fontFamily: "sans-serif" }}>
                  Email Id : student@gmail.com
                </p>
              </div>
              <div className="col">
                <p style={{ fontFamily: "sans-serif" }}>
                  Password : 1234567890
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
