import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";

import { useState } from "react";
const Navigation_list = () => {
  var nav = useNavigate();
  const location = useLocation();
  const receivedData = location.state.myData;
  const [data, setData] = useState([receivedData]);

  const send_back = () => {
    nav("/navigation", { state: { data: receivedData } });
  };
  return (
    <>
      <Header />
      <div className="container p-2">
        <div className="row">
          <div className="col-sm-6">
            <p
              style={{
                fontFamily: "cursive",
                fontWeight: "600",
                fontSize: "30px",
                color: "rgb(0, 86, 125)",
              }}
            ></p>
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
          <div className="row">
            <div className="col-sm-12 p-3 text-black">
              <div className="element-card">
                <div className="m-2">
                  <button
                    id="back"
                    className="btn btn-warning"
                    onClick={send_back}
                  >
                    Back
                  </button>
                </div>
                <h4>Your Details:</h4>
                {/* <p>Received Data: {JSON.stringify(receivedData)}</p> */}
                {data.map((m, index) => {
                  return (
                    <div key={index}>
                      <table
                        className="table "
                        style={{ border: "2px solid white" }}
                      >
                        {/* <thead>
                          <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                          </tr>
                        </thead> */}
                        <tbody>
                          <tr>
                            <td style={styles.tr}>
                              <h6>First name</h6>
                            </td>
                            <td style={styles.tr}>{m.first_name}</td>
                          </tr>
                          <tr>
                            <td style={styles.tr}>
                              <h6>Last name</h6>
                            </td>
                            <td style={styles.tr}>{m.last_name}</td>
                          </tr>
                          <tr>
                            <td style={styles.tr}>
                              <h6>Age</h6>
                            </td>
                            <td style={styles.tr}>{m.age}</td>
                          </tr>
                          <tr>
                            <td style={styles.tr}>
                              <h6>Course</h6>
                            </td>
                            <td style={styles.tr}>{m.course}</td>
                          </tr>
                          <tr>
                            <td style={styles.tr}>
                              <h6>Email</h6>
                            </td>
                            <td style={styles.tr}>{m.email}</td>
                          </tr>
                          <tr>
                            <td style={styles.tr}>
                              <h6>Address</h6>
                            </td>
                            <td style={styles.tr}>{m.address}</td>
                          </tr>
                          <tr>
                            <td style={styles.tr}>
                              <h6>Favorite cartoon</h6>
                            </td>
                            <td style={styles.tr}>{m.select}</td>
                          </tr>
                          <tr>
                            <td style={styles.tr}>
                              <h6>Favorite movie</h6>
                            </td>
                            <td style={styles.tr}>{m.radio}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation_list;
const styles = {
  one: {
    padding: "10px",
  },
  tr: {
    border: "2px solid white",
    backgroundColor: "#87838d",
    color: "white",
    fontFamily: "sans-serif",
  },
};
