import { useState } from "react";
import Item from "./Item";

const Food_Items = ({ items }) => {
  // let FoodItems = [
  //   "Fruits",
  //   "Green Vegetables",
  //   "Pulses",
  //   "Chapati",
  //   "Salad",
  //   "Milk",
  //   "Ghee",
  // ];

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          FoodItems={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}

          // handleBuyButton={() => console.log(`${item} bought.`)}
        ></Item>
      ))}
    </ul>
  );
};

export default Food_Items;
