import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { PiCopyrightBold } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      {/* rgb(125, 112, 138) */}
      <div style={{ backgroundColor: "#00142f" }} id="Footer">
        <div className="container" style={{ backgroundColor: " #00142f" }}>
          <div className="row p-2 ">
            <div className="col-sm-3 mt-5" style={styles.one}>
              <h5 className="pt-2 pb-2">ABOUT US :</h5>
              <p
                style={styles.text}
                // className="text-lowercase mb-4 font-weight-bold"
              >
                We are committed to providing the best professional education to
                our students and to turn them into knowledgeable and successful
                information technology professionals. For that reason our
                company invests in new facilities, the latest software and
                newest hardware and hires talented teachers and assistants.
              </p>
            </div>
            <div className="col-sm-3 mt-5" style={styles.one}>
              <h5 className="pt-2 pb-2">COURSES</h5>
              <p style={styles.text}>C, C++</p>
              <p style={styles.text}>Java, Python, MySQL</p>
              <p style={styles.text}>Java full stack</p>
              <p style={styles.text}>Python full stack</p>
              <p style={styles.text}>JPA, Servlet</p>
              <p style={styles.text}>Selenium</p>
            </div>
            <div className="col-sm-3 mt-5" style={styles.one}>
              <h5 className="pt-2 pb-2">CONTACT</h5>
              <p style={styles.text}>
                R. Hariharan (Managing Director) <br />
                +91-9952363956
              </p>
              <p style={styles.text}>
                B. Rajasekar (CEO) <br />
                +91-8807796595
              </p>
              <p style={styles.text}>
                R. Rajesh (Executive Director) <br />
                +91-7092043942
              </p>
            </div>
            <div className="col-sm-3 mt-5" style={styles.one}>
              <h5 className="pt-2 pb-2">EMAILS</h5>
              <p style={styles.text}>hariharanr@eduspheresolutions.com</p>
              <p style={styles.text}>rajasekar.rk@eduspheresolutions.com</p>
              <p style={styles.text}>rajesh@eduspheresolutions.com</p>
              <p style={styles.text}>
                <span>Office Mail : </span>edusphere@eduspheresolutions.com
              </p>
            </div>
          </div>

          <hr style={{ color: "white" }} />
          <div className="row ">
            <div className="col-sm-10">
              <div className="cpyright pt-2">
                <p style={styles.text}>
                  <PiCopyrightBold color="white" size={17} />
                  Copyright Act : 2012
                </p>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="row">
                <div className="icons col p-2" id="f1">
                  <span className="unique_icon" style={styles.icons}>
                    <FaFacebookF color="white" size={20} />
                  </span>
                </div>
                <div className="icons col p-2" id="f2">
                  <span className="unique_icon" style={styles.icons}>
                    <FaTwitter color="white" size={20} />
                  </span>
                </div>
                <div className="icons col p-2 mb-4" id="f3">
                  <span className="unique_icon" style={styles.icons}>
                    <IoLogoGoogle color="white" size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

const styles = {
  one: {
    // border: "2px solid orange",
    color: "white",
    textAlign: "left",

    fontFamily: "sans-serif",
    fontSize: 15,
    fontWeight: "600",
  },
  text: {
    textAlign: "left",
    fontFamily: "sans-serif",
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  icons: {
    border: "2px solid white",
    borderRadius: "20px",
    padding: 7,
  },

  heading: {
    textAlign: "left",
    fontFamily: "sans-serif",
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
};
