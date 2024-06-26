import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";

import Titles from "./Component_one/Title";

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>;
const Home = () => {
  return (
    <>
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Ek34K3VDEm02I30tume3sCawuBkEVGNcGBUK3nR8JPvn5N1h"
        alt="image"
        style={{ width: "100%", height: "100%" }}
      /> */}

      <div id="image">
        <div className="container">
          <div className="column">
            <h4
              className="main-header"
              style={{ textAlign: "center", color: "white" }}
            >
              Selenium Tutorial
            </h4>
          </div>
        </div>
        <div className="container">
          <nav
            className="navbar navbar-expand-sm "
            style={{ margin: 0, padding: 0 }}
          >
            {/* <a
              // className="navbar-brand"

              href="javascript:void(0)"
              style={{
                backgroundColor: "orange",
                padding: 13,
                width: 200,
                // marginLeft: 110,
                // marginLeft: "auto",
                backgroundColor: "#f44336",
                color: "white",
                textAlign: "center",
                // alignItems: "center",
                textDecoration: "none",
                display: "inlineBlock",
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
              }}
            >
              Selenium Tutorial
            </a> */}

            <div className="container-fluid">
              <a
                className="navbar-brand"
                href="javascript:void(0)"
                style={styles.One}
              >
                HOME
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="mynavbar"
                style={styles.navbar}
              >
                <ul className="navbar-nav me-auto">
                  {/* <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  HOME
                </a>
              </li> */}
                  <li className="nav-item">
                    <div class="dropdown nav-link">
                      <span style={styles.headerOne}>Intoduction</span>
                      <div class="dropdown-content">
                        <p>Hello World!</p>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="javascript:void(0)"
                      style={styles.headerOne}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="javascript:void(0)"
                      style={styles.headerOne}
                    >
                      Contact
                    </a>
                  </li>
                </ul>

                <form className="d-flex" style={{ marginRight: "auto" }}>
                  <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Search"
                  />
                  <button className="btn btn-primary" type="button">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* ####################################################################################################### */}
      <Titles />
    </>
  );
};

export default Home;
const styles = {
  header: {
    padding: 10,

    backgroundColor: "#f44336",
    color: "white",
    // padding: "0px 15px 10px 15px",
    textAlign: "center",
    textDecoration: "none",
    display: "inlineBlock",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
  },
  headerOne: {
    padding: 13,
    color: "grey",
    textAlign: "center",
    textDecoration: "none",
    display: "inlineBlock",
    // borderBottomLeftRadius: "15px",
    // borderBottomRightRadius: "15px",
  },
  One: {
    padding: 10,
    marginRight: 0,
    width: 100,
    color: "white",

    textAlign: "center",
    textDecoration: "none",
    display: "inlineBlock",
    backgroundColor: "#f44336",
    // borderBottomLeftRadius: "15px",
    // borderBottomRightRadius: "15px",
  },
  navbar: {
    boxShadow:
      "0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    // borderBottomLeftRadius: 20,
    backgroundColor: "white",
  },
};
