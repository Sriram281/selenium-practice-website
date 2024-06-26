import { useEffect, useRef, useState } from "react";
import "./Toaststyle.css";
import { IoMdCloseCircle } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";
import axios from "axios";
import Model_for_image from "./Model_for_image";
const Toast = ({ heading, image_for_inputtextbox }) => {
  // console.log(count);
  const [count_limit, setCount_limit] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };
  const handleCloseToast = () => {
    setShowToast(false);
  };

  const storage = window.localStorage.getItem("studentID");
  // const date = new Date();
  // const formattedDate = date.toLocaleDateString("en-US");

  // const send_count_data = () => {
  //   const value = [
  //     {
  //       userid: storage,
  //       date: formattedDate,
  //       count: 3,
  //       listofTopics: [
  //         {
  //           title_name: heading,
  //         },
  //       ],
  //     },
  //   ];
  //   axios
  //     .post("http://localhost:8080/existingcount", value)
  //     .then((res) => {
  //       axios
  //         .get("http://localhost:8080/countlist")
  //         .then((res) => {
  //           res.data.map((m) => {
  //             m.listofTopics.map((n) => {
  //               if (storage === m.userid && heading === n.title_name) {
  //                 countfunction(m.count);
  //                 setCount_limit(m.count);
  //               }
  //             });
  //           });
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/countlist")
  //     .then((res) => {
  //       res.data.map((m) => {
  //         m.listofTopics.map((n) => {
  //           if (storage === m.userid && heading === n.title_name) {
  //             countfunction(m.count);
  //             setCount_limit(m.count);
  //           }
  //         });
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   check_count();
  // }, []);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   // Your custom logic here
  // };
  // const check_count = () => {
  //   // console.log(count);
  //   if (count === 1 || count === 0) {
  //     setIsVisible(false);
  //     const timeoutId = setTimeout(() => {
  //       setIsVisible(true);
  //     }, 3000);

  //     return () => clearTimeout(timeoutId);
  //   } else if (count >= 2) {
  //     setIsVisible(true);
  //   } else if (count == undefined) {
  //     setIsVisible(true);
  //   }
  // };

  useEffect(() => {
    setIsVisible(true);
    // if (count_limit > 1) {
    //   setCount_limit(count_limit - 1);
    // } else if (count_limit == 1) {
    //   const timeoutId = setTimeout(() => {
    //     setIsVisible(true);
    //     setCount_limit(3);
    //   }, 3000);

    //   return () => clearTimeout(timeoutId);
    // } else {
    //   setCount_limit(3);
    // }

    setIsVisible(false);
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
      setCount_limit(3);
    }, 180000);
  }, []);

  const Update_count = () => {
    if (count_limit > 1) {
      setCount_limit(count_limit - 1);
    } else if (count_limit == 1) {
      setIsVisible(false);
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
        setCount_limit(3);
      }, 180000);

      return () => clearTimeout(timeoutId);
    } else {
      setCount_limit(3);
    }
  };
  return (
    <>
      {isVisible ? (
        <>
          <FaLightbulb
            size={25}
            color="hsl(41, 100%, 50%)"
            onClick={() => {
              handleShowToast();
            }}
            // style={{ background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%) }}
          />
          <small
            className="badge bg-danger"
            style={{
              position: "absolute",
              left: 25,
              borderRadius: "25px",
              // padding: 2,
              // padding: "8px 10px 8px 10px",
            }}
          >
            {count_limit}
          </small>
        </>
      ) : (
        <FaLightbulb size={25} color="hsl(41, 100%, 86%)" />
      )}
      {/* <div className=""> */}
      {/* <FaLightbulb size={25} color="orange" onClick={handleShowToast} /> */}
      {showToast && (
        <div className="custom-toast">
          <div
            className="toast-header"
            style={{ textAlign: "center", justifyContent: "space-around" }}
          >
            {/* <span> */}
            {/* <button onClick={handleCloseToast}>X</button> */}
            <span
              style={{
                backgroundColor: "white",
                border: "white",
                borderRadius: "25px",
              }}
            >
              <IoMdCloseCircle
                color="orange"
                size={30}
                onClick={handleCloseToast}
              />
            </span>
            {/* </span> */}
          </div>

          <div
            className="toast-body"
            style={{
              textAlign: "center",
              justifyContent: "space-around",
            }}
            onClick={() => {
              // send_count_data();
              handleCloseToast();
              // check_count();
              Update_count();
            }}
          >
            <h6 style={{ cursor: "pointer" }}>
              {/* Answer */}
              <Model_for_image image={image_for_inputtextbox} />
            </h6>
          </div>
        </div>
      )}
      {/* </div> */}
    </>
  );
};

export default Toast;
