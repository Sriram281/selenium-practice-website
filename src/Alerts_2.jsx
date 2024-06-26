const Alerts_2 = () => {
  return (
    <>
      <div className="container">
        <button
          className="btn btn-warning text-white"
          onClick={() => {
            alert("Hi, Have a nice day");
          }}
        >
          Click me
        </button>
      </div>
    </>
  );
};

export default Alerts_2;
