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

  // let [textToShow, setTextState] = useState();
  let [FoodItems, setfoodItems] = useState([]);
  // if(FoodItems.length === 0){
  //   return <h3>I am still hungry.</h3>;
  // }

  // let emptyMessage = FoodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

  // let textStateArr = useState("Food Intem Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState("Food Item Entered by user");

  // console.log(`Current value of textState: ${textToShow}`);

  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  //   setTextState(event.target.value);
  // };

  const onKeyDown = (event) => {
    if (event.key == "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...FoodItems, newFoodItem];
      setfoodItems(newItems);
      // console.log('Food value entered is '+newFoodItem);
    }
    // console.log(event);
    // setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Foods</h1>

        {/* {emptyMessage} */}
        {/* {FoodItems.length === 0 ? <h3>I am still hungry.</h3> : null} */}
        {/* {FoodItems.length === 0 && <h3>I am still hungry.</h3>} */}

        {/* <FoodInput handleOnChange={handleOnChange}></FoodInput> */}

        <FoodInput handleKeydown={onKeyDown}></FoodInput>

      <ErrorMessage items={FoodItems}></ErrorMessage>

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
