import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { VscReferences } from "react-icons/vsc";
import { FaLightbulb, FaPersonCircleQuestion } from "react-icons/fa6";
import Toast from "../Toast";
import Eduspere_logo from "../Edusphere_logo";
const SetProperty = () => {
  var nav = useNavigate();

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
                  Basic plugin
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
                {/* <Toast
                  // countfunction={countlist}
                  // count={student_count}
                  heading={heading}
                  image_for_inputtextbox={inputtext_box}
                /> */}
                <FaLightbulb size={25} color="hsl(0, 40%, 70%)" />
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
                href="https://onedrive.live.com/?authkey=%21AGRfN9O0p96AUn8&cid=58854C9B9741551E&id=58854C9B9741551E%212431&parId=58854C9B9741551E%212418&o=OneUp"
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
              <FaPersonCircleQuestion size={25} color="hsl(0, 40%, 70%)" />
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
                Unlock browser control in Selenium with setProperty(). Learn to
                configure properties for enhanced automation, gaining precision
                and customization in testing workflows.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-7 p-3 text-black">
              <div className="element-card">
                <h6>
                  System.setProperty("webdriver.chrome.driver",
                  "path/to/chromedriver");
                </h6>
                <ol>
                  <li>
                    Set the system property "webdriver.chrome.driver" to the
                    path where your ChromeDriver executable is located. You need
                    to download ChromeDriver from the official site and replace
                    "path/to/chromedriver" with the actual path.
                  </li>
                  <li>
                    Additional system properties or browser options can be set
                    based on your requirements.
                  </li>
                  <li>
                    Click refer icon to see a simple example uses the Chrome
                    browser, but you can adapt it for other browsers by changing
                    the WebDriver instantiation and setting the appropriate
                    system property.
                  </li>
                </ol>
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
                    " Explore the power of 'setProperty("")' in this Selenium
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
                    <li>System.setProperty("")</li>
                    <li>WebDriverManager.chromedriver().setup(); </li>
                    <li>WebDriver driver=new ChromeDriver();</li>
                    <li>
                      driver.navigate().to("https://eduspheresolutions.com/");
                    </li>
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

export default SetProperty;
const styles = {
  one: {
    padding: "10px",
  },
};
