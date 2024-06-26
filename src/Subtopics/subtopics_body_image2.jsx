import "bootstrap/dist/css/bootstrap.min.css";
import myimage1 from "./Images/two.jpg";
import myimage2 from "./Images/one.webp";
const Subtopics_body_images2 = () => {
  return (
    <>
      <div className="row" style={{ margin: "0px", padding: "0px" }}>
        <div
          className="col-sm-6"
          // id="img"
          style={{
            // boder: "1px solid rgb(210, 210, 210)",
            // backgroundColor: "rgb(210, 210, 210)",
            textAlign: "center",
            justifyItems: "center",
          }}
        >
          <img
            src={myimage2}
            // src="https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // src="https://images.pexels.com/photos/6953573/pexels-photo-6953573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
            style={{
              // border: "2px solid white",
              // borderRadius: 50,
              width: "103%",
              height: "60vh",
              // float: "left",
            }}
          />
        </div>

        <div
          className="col-sm-6"
          style={
            {
              // boder: "1px solid rgb(210, 210, 210)",
              // backgroundColor: "rgb(210, 210, 210)",
            }
          }
        >
          <img
            src={myimage1}
            // src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="CinqueTerre"
            style={{
              // border: "2px solid white",
              // borderRadius: 50,
              width: "100%",
              height: "60vh",
              // float: "right",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Subtopics_body_images2;
