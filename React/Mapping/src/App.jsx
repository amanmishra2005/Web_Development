import Food_Items from "./Components/Food_Items";
import ErrorMessage from "./Components/Error_message";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import "./App.css";
import { useState } from "react";

function App() {
  // let FoodItems = [];

  // let FoodItems = [
  //   "Fruits",
  //   "Green Vegetables",
  //   "Pulses",
  //   "Chapati",
  //   "Salad",
  //   "Milk",
  //   "Ghee",
  // ];

  let [textToShow, setTextState] = useState();
  let [foodItem, setfoodItem] = useState([
    "Fruits",
    "Green Vegetables",
    "Pulses",
  ]);
  // if(FoodItems.length === 0){
  //   return <h3>I am still hungry.</h3>;
  // }

  // let emptyMessage = FoodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

  // let textStateArr = useState("Food Intem Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState("Food Item Entered by user");

  // console.log(`Current value of textState: ${textToShow}`);

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Foods</h1>

        {/* {emptyMessage} */}
        {/* {FoodItems.length === 0 ? <h3>I am still hungry.</h3> : null} */}
        {/* {FoodItems.length === 0 && <h3>I am still hungry.</h3>} */}

        <ErrorMessage items={FoodItems}></ErrorMessage>

        <FoodInput handleOnChange={handleOnChange}></FoodInput>

        {/* <p>{textToShow}</p> */}

        <Food_Items items={FoodItems}></Food_Items>

        {/* <ul className="list-group">
        {FoodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul> */}
      </Container>

      <Container>
        <p>Above is the list of healthy foods that are good for your Health.</p>
      </Container>
    </>
  );
}

export default App;
