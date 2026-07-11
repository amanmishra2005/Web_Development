import Food_Items from "./Components/Food_Items";
import ErrorMessage from "./Components/Error_message";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container";
import "./App.css";

function App() {
  // let FoodItems = [];

  let FoodItems = [
    "Fruits",
    "Green Vegetables",
    "Pulses",
    "Chapati",
    "Salad",
    "Milk",
    "Ghee",
  ];

  // if(FoodItems.length === 0){
  //   return <h3>I am still hungry.</h3>;
  // }

  // let emptyMessage = FoodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

  return (
    <>
      <Container>
      <h1 className="heading">Healthy Foods</h1>

      {/* {emptyMessage} */}

      {/* {FoodItems.length === 0 ? <h3>I am still hungry.</h3> : null} */}

      {/* {FoodItems.length === 0 && <h3>I am still hungry.</h3>} */}

      <ErrorMessage items={FoodItems}></ErrorMessage>

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
