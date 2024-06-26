// import inputtextbox from "./image_for_answer/Screenshot 2024-02-03 175301.png";

const Model_for_image = ({ image }) => {
  return (
    <>
      <div className="container mt-0">
        {/* <h2>Modal Scroll Example</h2>
        <p>Click on the button to open the modal.</p> */}

        <p
          //   type="button"
          //   className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Answer
        </p>
      </div>

      {/* <!-- The Modal --> */}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-scrollable modal-fullscreen">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}

            <div className="modal-header">
              <div>
                <h4 className="modal-title">Answer</h4>
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <div className="container">
                {/* <h3>Some text to enable scrolling..</h3> */}
                <img src={image} alt="input" />
              </div>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model_for_image;
