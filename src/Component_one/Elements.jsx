import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaBars,
  FaBeer,
  FaDesktop,
  FaWindows,
  FaWpforms,
} from "react-icons/fa";
import { MdLoop } from "react-icons/md";
import { useLocation } from "react-router-dom";
const Elements = ({ topics_props }) => {
  const location = useLocation();
  const receivedSubtopics = location.state?.subtopics || [];

  return (
    <>
      <h3
        style={{
          textAlign: "center",
          border: "solid white",
          borderWidth: "1px 50px",
          backgroundColor: "orange",
          color: "white",
          fontWeight: 400,
        }}
      >
        Elements
      </h3>
      <div className="container-flued">
        <div className="container">
          {/* <div className="container" style={{ border: "2px solid red" }}>
          <div className="row">
            <div className="col-sm-2  p-3 bg-primary text-white">
              <p>1.</p>

            </div>
            <div className="col-sm-8  p-3 bg-danger text-white">
              <p>introduction</p>
            </div>
          </div>
        </div> */}

          <div class="list-group">
            {receivedSubtopics.map((item) => {
              // console.log("one" + item)
              return (
                <>
                  <a
                    href="#"
                    class="list-group-item list-group-item-dark"
                    style={styles.one}
                  >
                    <span style={{ padding: 20 }}>
                      <FaBeer size={25} color="red" />
                    </span>
                    {item}
                  </a>
                </>
              );
            })}
            ;
            {/* {receivedData.subtopics.map((item) => {
              console.log(item);
              return (
                <>
                  <a
                    href="#"
                    class="list-group-item list-group-item-dark"
                    style={styles.one}
                  >
                    <span style={{ padding: 20 }}>
                      <FaBeer size={25} color="red" />
                    </span>
                    {item}
                  </a>
                </>
              );
            })} */}
          </div>
          {/* <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-dark"
              style={styles.one}
            >
              <span style={{ padding: 20 }}>
                <FaBeer size={25} color="red" />
              </span>
              Text Box
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-dark"
              style={styles.two}
            >
              <span style={{ padding: 20 }}>
                <FaWpforms size={25} color="red" />
              </span>
              Check Box
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-dark"
              style={styles.one}
            >
              <span style={{ padding: 20 }}>
                <FaDesktop size={25} color="red" />
              </span>
              Radio Button
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-dark"
              style={styles.two}
            >
              <span style={{ padding: 20 }}>
                <FaWindows size={25} color="red" />
              </span>
              Web Tables
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-dark"
              style={styles.one}
            >
              <span style={{ padding: 20 }}>
                <MdLoop size={25} color="red" />
              </span>
              Buttons
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-dark"
              style={styles.two}
            >
              <span style={{ padding: 20 }}>
                <MdLoop size={25} color="red" />
              </span>
              Links
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-dark"
              style={styles.one}
            >
              <span style={{ padding: 20 }}>
                <FaBeer size={25} color="red" />
              </span>
              Broken Links - Images
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-dark"
              style={styles.two}
            >
              <span style={{ padding: 20 }}>
                <FaBars size={25} color="red" />
              </span>
              Upload and Download
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-dark"
              style={styles.one}
            >
              <span style={{ padding: 20 }}>
                <FaBars size={25} color="red" />
              </span>
              Dynamic Properties
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Elements;

const styles = {
  one: {
    // padding: 25,
    border: "25px solid white",
  },
  two: {
    // padding: 25,
    border: "solid white",
    borderWidth: "0px 25px",
  },
};
