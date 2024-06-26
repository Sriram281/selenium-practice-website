import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { useState } from "react";

const Draganddrop = () => {
  var nav = useNavigate();
  const [draggedItem, setDraggedItem] = useState(null);
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleDragStart = (e, index) => {
    setDraggedItem(items[index]);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index.toString());
  };
  console.log(draggedItem);
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();

    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const updatedItems = [...items];
    updatedItems.splice(index, 0, updatedItems.splice(draggedIndex, 1)[0]);

    setItems(updatedItems);
    setDraggedItem(null);
  };
  return (
    <>
      <Header />
      <div className="container p-2">
        <p
          style={{
            fontFamily: "cursive",
            fontWeight: "600",
            fontSize: "30px",
            color: "rgb(0, 86, 125)",
          }}
        >
          Drag and Drop
        </p>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "rgba(68, 75, 255, 0.1)",
        }}
      >
        <div className="container p-4" style={{}}>
          <div class="row">
            <div class="col-sm-7 p-3 text-black">
              <div className="element-card">
                <div>
                  <h5>Drag and Drop Example</h5>
                  <p>
                    Drag and drop is a user interface (UI) interaction where the
                    user can select a draggable object and move it to a
                    different location or drop it onto another element.
                  </p>
                  <div
                    className="d-flex justify-content-around bg-white mb-3"
                    id="one"
                  >
                    {items.map((item, index) => (
                      <div
                        className="p-2 bg-danger text-white"
                        id={"drag" + index}
                        key={index}
                        draggable // onDragStart={(e) => handleDragStart(e, index)}
                        onDragStart={(e) => {
                          handleDragStart(e, index);
                          console.log("onDragStart : " + e);
                        }}
                        onDragOver={handleDragOver}
                        onDrop={(e) => {
                          handleDrop(e, index);
                          console.log("onDrop : " + e);
                        }}
                        style={{
                          backgroundColor:
                            draggedItem === item ? "orange" : "white",
                          border: "1px solid red",
                          width: "80px",
                          height: "70px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-5 p-3 text-black">
              <div className="element-card">
                <header>
                  <p
                    style={{
                      fontFamily: "revert",
                      color: "rgb(0, 0, 50)",
                      fontSize: "17px",
                    }}
                  >
                    " Explore the power of 'Drag and Drop' in this Selenium
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
                      fontSize: "17px",
                    }}
                  >
                    <li>findElement()</li>
                    <li>Action()</li>
                    <li>dragAndDrop(from,to)</li>
                    <li>perform()</li>
                    <li>getText()</li>
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

export default Draganddrop;
const styles = {
  one: {
    padding: "5px",
  },
};
