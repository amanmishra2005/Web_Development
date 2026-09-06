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

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          FoodItems={item}
          handleBuyButton={() => console.log(`${item} bought.`)}
        ></Item>
      ))}
    </ul>
  );
};

export default Food_Items;
