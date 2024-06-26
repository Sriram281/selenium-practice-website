import edusphere_logo from "./Edusphere_image/edusphere_image.jpg";
const Eduspere_logo = () => {
  return (
    <>
      <div className="col">
        <img
          src={edusphere_logo}
          alt="Edusphere solution"
          width={30}
          height={30}
        />
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: 400,
            fontSize: 15,
            color: "rgb(0, 0, 60)",
            // backgroundColor: "rgba(68, 75, 255, 0.1)",
          }}
        >
          <a
            href="https://eduspheresolutions.com"
            target="box"
            style={{ textDecoration: "none", color: "rgb(0, 0, 60)" }}
          >
            Edusphere solution
          </a>
        </p>
      </div>
    </>
  );
};

export default Eduspere_logo;
